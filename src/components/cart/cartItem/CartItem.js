import React from "react";

import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({ cartItem, onCartItemQuantityUpdate, onCartItemRemove }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={cartItem.media.source}
        alt={cartItem.name}
        title={cartItem.name}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{cartItem.name}</Typography>
        <Typography variant="h5">
          {cartItem.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={()=> onCartItemQuantityUpdate(cartItem.id, cartItem.quantity - 1)}>
            -
          </Button>
          <Typography>{cartItem.quantity}</Typography>
          <Button type="button" size="small" onClick={()=> onCartItemQuantityUpdate(cartItem.id, cartItem.quantity + 1)}>
            +
          </Button>
        </div>
        <Button variant="contained" color="secondary" type="button" onClick={()=> onCartItemRemove(cartItem.id)}>
          Remove Item
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
