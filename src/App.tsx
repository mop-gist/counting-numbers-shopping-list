import React from 'react';
import ProductCard from '@/components/productCard/productCard';
import CartCard from '@/components/cartCard/cartCard';
import { useShoppingList } from '@/context/shoppingListContext';
import { productList } from '@/const/product';

const App = () => {
  const { cartItems } = useShoppingList();

  return (
    <>
      {productList.map((product, index) => (
        <ProductCard name={product.name} price={product.price} key={index} />
      ))}
      <h3>Cart</h3>
      {cartItems?.map((item, index) => (
        <CartCard key={index} name={item.name} />
      ))}
    </>
  );
};

export default App;
