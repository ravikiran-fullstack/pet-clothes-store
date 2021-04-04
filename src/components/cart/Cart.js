import React from "react";
import { Link } from "react-router-dom";

import CartItem from "./cartItem/CartItem";

import { Container, Grid, Typography, Button } from "@material-ui/core";

import useStyles from "./styles";

const Cart = ({
  cart,
  onCartItemQuantityUpdate,
  onCartItemRemove,
  onCartEmpty,
}) => {
  const classes = useStyles();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,{" "}
      <Button
        component={Link}
        to="/"
        aria-label="Start adding products"
        color="inherit"
        variant="contained"
        color="secondary"
        size="small"
      >
        Start Adding Products
      </Button>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((cartItem) => (
          <Grid item xs={12} sm={4} key={cartItem.id}>
            <CartItem
              cartItem={cartItem}
              onCartItemQuantityUpdate={onCartItemQuantityUpdate}
              onCartItemRemove={onCartItemRemove}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
        <Typography variant="h4">
          Subtotal : {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            type="button"
            size="large"
            variant="contained"
            color="secondary"
            onClick={onCartEmpty}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            type="button"
            size="large"
            variant="contained"
            color="primary"
            component={Link}
            to="/checkout"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  if (!cart.line_items) return <p>Loading...</p>;

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography variant="h3" className={classes.title} gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
