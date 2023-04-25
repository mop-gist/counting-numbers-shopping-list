import React from 'react';
import ProductCard, { Product } from '@/components/productCard/productCard';
import CartCard from '@/components/cartCard/cartCard';
import { CartItem } from '@/context/shoppingListContext';

const App = () => {
  const productList: Product[] = [
    { name: 'pencil', price: 1 },
    { name: 'eraser', price: 5 },
  ];

  const [cartList, setCartList] = React.useState<Array<CartItem>>([]);

  const [fee, setFee] = React.useState<number>(0);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const currentProduct = productList.find((p) => p.name == target.value);
    if (currentProduct != undefined) {
      if (cartList.find((p) => p.name == currentProduct.name) == undefined) {
        setCartList((prev) => [
          ...prev,
          {
            name: currentProduct.name,
            totalPrice: currentProduct.price,
            quantity: 1,
          },
        ]);
      } else {
        setCartList((prev) => {
          const cartItem = prev.find((p) => p.name == currentProduct.name);
          const addIndex = prev.indexOf(cartItem!);

          prev = [...prev];

          prev[addIndex].quantity += 1;

          return prev;
        });
      }
      setFee((prev) => prev + currentProduct.price);
    } else {
      alert(`product ${target.value} does not exist!`);
    }
  };

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    const product = productList.find((p) => p.name == target.value);
    const cartItem = cartList.find((p) => p.name == target.value);

    if (cartItem != undefined) {
      setCartList((prev) => {
        const deleteIndex = prev.indexOf(cartItem);
        prev = [...prev];
        if (prev[deleteIndex].quantity == 1) {
          prev.splice(deleteIndex, 1);
        } else {
          prev[deleteIndex].quantity -= 1;
        }

        return prev;
      });
      setFee((prev) => prev - product!.price);
    }
  };

  return (
    <>
      {productList.map((product, index) => (
        <ProductCard
          name={product.name}
          price={product.price}
          key={index}
          handleAdd={handleAdd}
        />
      ))}
      <h3>Cart</h3>
      {cartList.map((item, index) => (
        <CartCard
          key={index}
          name={item.name}
          count={item.quantity}
          handleDelete={handleDelete}
        />
      ))}
      <h4>Total: {fee}</h4>
    </>
  );
};

export default App;
