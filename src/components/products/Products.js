import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './product/Product';

import useStyles from './styles';

// const products = [
//     {id: 1, name: 'Shoes', description: 'running shoes', price: '300',image: 'https://cdn.shopify.com/s/files/1/1199/8502/files/category-clothes-mob.jpg'},
//     {id: 2, name: 'Ball', description: 'Dog play item', price: '200',image: 'https://cdn.shopify.com/s/files/1/1199/8502/files/category-clothes-mob.jpg'},
//     {id: 3, name: 'Shirt', description: 'Mowglis shirt', price: '600',image: 'https://cdn.shopify.com/s/files/1/1199/8502/files/category-clothes-mob.jpg'},
//     {id: 4, name: 'Bowl', description: 'Mowglis water bowl', price: '150',image: 'https://cdn.shopify.com/s/files/1/1199/8502/files/category-clothes-mob.jpg'}

// ]

const Products = ({products, onAddToCart}) => {
    // console.log('products',products);
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map(product => {
                    return <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                })}
            </Grid>
        </main>
    )
}

export default Products
