import React, { useState } from "react";
import styles from "./styles.scss";
import Button from "./Components/Buttons";
import ProductList from "./Components/ProductList/ProductList";
import tgWebApp from '../src/Hooks/useTelegram.js'



const onClickEvent = (e) => {
  e.preventDefault();
  tgWebApp.close();
};


const countPrice = (newArr) => {
    return newArr.reduce((acc, item) => {
            return acc +=item.price;
    }, 0)
}

const products = [
  {
    id: 1,
    h2: "Товар 1",
    descr: "Описание товара 1",
    price: 1254,
    currency: "грн",
  },
  {
    id: 2,
    h2: "Товар 2",
    descr: "Описание товара 2",
    price: 1000,
    currency: "грн",
  },
  {
    id: 3,
    h2: "Товар 3",
    descr: "Описание товара 3",
    price: 350,
    currency: "грн",
  },
  {
    id: 4,
    h2: "Товар 4",
    descr: "Описание товара 4",
    price: 500,
    currency: "грн",
  },
  {
    id: 5,
    h2: "Товар 5",
    descr: "Описание товара 5",
    price: 260,
    currency: "грн",
  },
  {
    id: 6,
    h2: "Товар 6",
    descr: "Описание товара 6",
    price: 7500,
    currency: "грн",
  },
];

const App = () => {
  const [cartItem, setCartItem] = useState([]);
  const onAddToCart = (product) => {
    let newArr = [];
    newArr = [...cartItem, product];
    setCartItem(newArr);
  };
  return (
    <div className={styles.content}>
      <div className={styles.label}>Create React App Without CRA😊</div>
      <ProductList onAddToCart={onAddToCart} products={products} />
      <button className={styles.btn} onClick={onClickEvent}>
        Click Me 😎{countPrice(cartItem)}
      </button>
      <Button />
    </div>
  );
};

export default App;
