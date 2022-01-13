import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  LinearProgress,
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
import { onAuthStateChanged } from 'firebase/auth';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { userSelector } from '../../store/selectors';
import { logOutUser, userActions } from '../../store/slices/userSlice';
import useStyles from './styles';

const Navbar = () => {
  const [openSearchMobile, setOpenSearchMobile] = useState(false);
  const classes = useStyles({ openSearchMobile });
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [isLoading, setIsLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async user => {
      try {
        if (!user) {
          setIsLoading(false);
          return;
        }
        const token = await user.getIdToken();
        dispatch(
          userActions.setActiveUser({
            name: user.displayName,
            email: user.email,
            id: user.uid,
            token: token,
          })
        );
        dispatch(userActions.setIsLogin());
      } catch (error) {
        console.log(error);
        enqueueSnackbar(error.message, { variant: 'error' });
      }
      setIsLoading(false);
    });
    return unsub;
  }, [dispatch, enqueueSnackbar]);

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
      await dispatch(logOutUser());
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.navbarLogo}>
            <IconButton color="inherit" className={classes.logoSm}>
              <MenuOutlined />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.logoHome}
              component={Link}
              to="/home"
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
            <IconButton
              color="inherit"
              className={classes.cartButton}
              size="small"
              component={Link}
              to="/cart"
            >
              <Badge badgeContent={3} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
            {!user && (
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

            {user && (
              <IconButton
                size="small"
                onClick={handleClickMenu}
                className={classes.menuItem}
              >
                <AccountCircle />
              </IconButton>
            )}
            {user && (
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
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleClickLogout}>Logout</MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>

        {isLoading && <LinearProgress />}
      </AppBar>
    </>
  );
};

export default Navbar;
