import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { commerce } from "./lib/commerce";

import NavBar from "./components/navBar/NavBar";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";

// import {Products, NavBar} from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  //componentDidMount
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  return (
    <BrowserRouter>
      <div>
        <NavBar totalItems={cart.total_items} />
        <Switch>
            <Route path="/" exact>
                <Products products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route path="/cart">
                <Cart cart={cart}></Cart>
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
