// import { SearchRounded, ShoppingCartOutlined } from '@material-ui/icons';
// import React from 'react';
// import styled from 'styled-components';
// import { Badge, IconButton } from '@material-ui/core';
// import { NAV_HEIGHT } from '../../constants';
// import { Link } from 'react-router-dom';

// const Container = styled.div`
//   height: ${NAV_HEIGHT}px;
//   box-shadow: rgba(149, 157, 165, 0.2) 0px 5px 10px;
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;

// const SearchContainer = styled.div`
//   border: 1px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
//   border-radius: 5px;
// `;

// const Input = styled.input`
//   border: none;
//   outline: none;
//   font-size: 14px;
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const Logo = styled(Link)`
//   font-weight: bold;
//   text-align: center;
//   font-size: 32px;
// `;

// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const MenuItem = styled(Link)`
//   font-size: 16px;
//   cursor: pointer;
//   margin-right: 25px;
//   &:hover {
//     color: #3f51b5;
//   }
//   transition: all 0.3s linear;
// `;

// const Navbar = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Left>
//           <Language>EN</Language>
//           <SearchContainer>
//             <Input />
//             <SearchRounded style={{ fontSize: 16, color: 'gray' }} />
//           </SearchContainer>
//         </Left>
//         <Center>
//           <Logo to="/home">E-Commerce</Logo>
//         </Center>
//         <Right>
//           <MenuItem to="/register">Register</MenuItem>
//           <MenuItem to="/login">Sign In</MenuItem>
//           <IconButton size="small" component={Link} to="/cart">
//             <Badge badgeContent={4} color="primary">
//               <ShoppingCartOutlined />
//             </Badge>
//           </IconButton>
//         </Right>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Navbar;

import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  Close,
  MenuOutlined,
  Search,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Navbar = () => {
  const [openSearchMobile, setOpenSearchMobile] = useState(false);
  const classes = useStyles({ openSearchMobile });

  const handleOpenSearchMobile = () => {
    setOpenSearchMobile(true);
  };

  const handleCloseSearchMobile = () => {
    setOpenSearchMobile(false);
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
            {/* <UserMenu /> */}
          </Box>
        </Toolbar>
      </AppBar>
      {/* <div className={classes.offset}></div> */}
    </>
  );
};

export default Navbar;
