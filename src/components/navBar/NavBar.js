import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Button
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";
import brandLogo from "../../assets/brand.jpg";

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
          >
            <img
              src={brandLogo}
              alt="pet store"
              height="25px"
              className={classes.brand}
            />
            Pet Clothes Store
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.menuButton}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
          {location.pathname === "/cart" && (
            <div className={classes.menuButton}>
              <Button
                component={Link}
                to="/"
                aria-label="Products"
                color="inherit"
                variant="contained"
                color="primary"
                size="small"
              >
                Products
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
