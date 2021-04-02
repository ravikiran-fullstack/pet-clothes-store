import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from  './styles';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6">
            <span>&#8377;</span>
            {product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{__html:product.description}} variant="body2" color="primary"/>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton area-lable="Add to Cart" onClick={()=>onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
