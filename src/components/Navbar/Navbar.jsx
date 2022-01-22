import {
  AppBar,
  Backdrop,
  Badge,
  Box,
  CircularProgress,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  AccountCircle,
  Close,
  MenuOutlined,
  Search,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import { unwrapResult } from '@reduxjs/toolkit';
import { onAuthStateChanged } from 'firebase/auth';
import { onSnapshot } from 'firebase/firestore';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Filters, MiniCart } from '..';
import { auth } from '../../firebase/firebase';
import { handleUserProfile, logOut } from '../../firebase/firebase-func';
import {
  selectCartNumber,
  userIsLoadingSelector,
  userSelector,
} from '../../store/selectors';
import { cartActions } from '../../store/slices/cartSlice';
import { checkUSerSignIn, userActions } from '../../store/slices/userSlice';
import useStyles from './styles';

const Navbar = () => {
  const [openSearchMobile, setOpenSearchMobile] = useState(false);
  const classes = useStyles({ openSearchMobile });
  const dispatch = useDispatch();
  const curUser = useSelector(userSelector);
  const isLoading = useSelector(userIsLoadingSelector);
  const [anchorEl, setAnchorEl] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const totalNumber = useSelector(selectCartNumber);

  useEffect(() => {
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
    // dispatch(checkUSerSignIn());
  }, [dispatch, enqueueSnackbar]);

  // useEffect(() => {
  //   if (curUser) {
  // navigate('/home');

  //   }
  // }, [curUser, navigate]);

  const handleOpenSearchMobile = () => {
    setOpenSearchMobile(true);
  };

  const handleCloseSearchMobile = () => {
    setOpenSearchMobile(false);
  };

  const handleClickMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickLogout = async () => {
    try {
      await logOut();
      dispatch(userActions.logOutUser());
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
    setAnchorEl(null);
  };

  const handleShowMiniCart = () => {
    dispatch(cartActions.toggleMiniCart(true));
  };

  return (
    <>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.navbarLogo}>
            <IconButton color="inherit" className={classes.logoSm}>
              <MenuOutlined />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.logoHome}
              component={Link}
              to="/"
            >
              Ecommerce
            </Typography>
          </div>

          <div className={classes.search}>
            <IconButton color="inherit" variant="contained">
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search..."
              className={classes.searchInput}
            />
            <IconButton
              onClick={handleCloseSearchMobile}
              className={classes.searchCloseButton}
            >
              <Close />
            </IconButton>
          </div>
          {!openSearchMobile && (
            <div className={classes.iconsMobile}>
              <IconButton color="inherit" onClick={handleOpenSearchMobile}>
                <SearchOutlined />
              </IconButton>
            </div>
          )}

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
                  component={Link}
                  to="/register"
                  className={classes.menuItem}
                >
                  Register
                </Typography>
                <Typography
                  component={Link}
                  to="/login"
                  className={classes.menuItem}
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

        <Backdrop className={classes.backdrop} open={isLoading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </AppBar>
      <div className={classes.offset}></div>
      <MiniCart />
    </>
  );
};

export default Navbar;
