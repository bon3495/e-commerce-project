import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AccountCircle, ShoppingCartOutlined } from '@material-ui/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useSnackbar } from 'notistack';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MiniCart } from '..';
import { auth } from '../../firebase/firebase';
import { handleUserProfile, logOut } from '../../firebase/firebase-func';
import { selectCartNumber, userSelector } from '../../store/selectors';
import { cartActions } from '../../store/slices/cartSlice';
import { checkUSerSignIn, userActions } from '../../store/slices/userSlice';
import useStyles from './styles';

const Navbar = () => {
  const [openSearchMobile, setOpenSearchMobile] = useState(false);
  const dispatch = useDispatch();
  const curUser = useSelector(userSelector);
  const [anchorEl, setAnchorEl] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const totalNumber = useSelector(selectCartNumber);
  // const [searchValue, setSearchValue] = useState('');
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const classes = useStyles({ openSearchMobile, showNavbar });
  const location = useLocation();

  const scrollNavbar = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollTop(scrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener('scroll', scrollNavbar);

    return () => {
      window.removeEventListener('scroll', scrollNavbar);
    };
  }, [scrollNavbar]);

  useEffect(() => {
    if (curUser) return;
    const unsub = onAuthStateChanged(auth, async curUser => {
      try {
        if (!curUser) {
          dispatch(userActions.setIsLogin(false));
          return;
        }

        const userRef = await handleUserProfile(curUser);
        onSnapshot(userRef, async user => {
          const resultAction = await dispatch(
            checkUSerSignIn({
              id: user.id,
              ...user.data(),
            })
          );

          unwrapResult(resultAction);
          dispatch(userActions.setIsLogin(true));
        });
      } catch (error) {
        console.log(error);
        enqueueSnackbar(error.message, { variant: 'error' });
      }
    });
    return unsub;
  }, [dispatch, enqueueSnackbar, curUser]);

  // const handleOpenSearchMobile = () => {
  //   setOpenSearchMobile(true);
  // };

  // const handleCloseSearchMobile = () => {
  //   setOpenSearchMobile(false);
  // };

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickLogout = async () => {
    try {
      dispatch(cartActions.clearAllProducts());
      dispatch(userActions.logOutUser());
      await logOut();
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
    setAnchorEl(null);
  };

  const handleShowMiniCart = () => {
    dispatch(cartActions.toggleMiniCart(true));
  };

  // const handleSearchChange = e => {
  //   setSearchValue(e.target.value);
  // };

  // const handleSubmitSearch = e => {
  //   e.preventDefault();
  //   console.log(searchValue);

  //   setSearchValue('');
  // };

  const handleClickSignIn = () => {
    navigate('/login', { state: { from: location }, replace: true });
  };

  const handleClickRegister = () => {
    navigate('/register', { state: { from: location }, replace: true });
  };

  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.navbarLogo}>
            {/* <IconButton color="inherit" className={classes.logoSm}>
              <MenuOutlined />
            </IconButton> */}
            <Typography
              variant="h6"
              className={classes.logoHome}
              component={Link}
              to="/"
            >
              Ecommerce
            </Typography>
          </div>

          {/* <form className={classes.search} onSubmit={handleSubmitSearch}>
            <IconButton type="submit" color="inherit" variant="contained">
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search..."
              className={classes.searchInput}
              onChange={handleSearchChange}
              value={searchValue}
            />
            <IconButton
              onClick={handleCloseSearchMobile}
              className={classes.searchCloseButton}
            >
              <Close />
            </IconButton>
          </form>
          {!openSearchMobile && (
            <div className={classes.iconsMobile}>
              <IconButton color="inherit" onClick={handleOpenSearchMobile}>
                <SearchOutlined />
              </IconButton>
            </div>
          )} */}

          <Box className={classes.menuList}>
            {curUser && (
              <IconButton
                color="inherit"
                className={classes.cartButton}
                size="small"
                // component={Link}
                // to="/cart"
                onClick={handleShowMiniCart}
              >
                <Badge badgeContent={totalNumber} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            )}
            {!curUser && (
              <>
                <Typography
                  // component={Link}
                  // to="/register"
                  className={classes.menuItem}
                  onClick={handleClickRegister}
                >
                  Register
                </Typography>
                <Typography
                  // component={Link}
                  // to="/login"
                  className={classes.menuItem}
                  onClick={handleClickSignIn}
                >
                  Sign In
                </Typography>
              </>
            )}

            {curUser && (
              <IconButton
                size="small"
                onClick={handleClickMenu}
                className={classes.menuItem}
              >
                <AccountCircle />
              </IconButton>
            )}
            {curUser && (
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                getContentAnchorEl={null}
              >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {/* <div className={classes.offset}></div> */}
      <MiniCart />
    </>
  );
};

export default Navbar;
