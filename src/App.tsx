import React from 'react';
import ProductCard, { Product } from '@/components/productCard/productCard';
import CartCard, { CartItem } from '@/components/cartCard/cartCard';

const App = () => {
  const productList: Product[] = [
    { name: 'pencil', price: 1 },
    { name: 'eraser', price: 0.5 },
  ];

  const [cartList, setCartList] = React.useState<Array<CartItem>>([]);

  const fee: number = 0;

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const currentProduct = productList.find((p) => (p.name = target.value));
    if (currentProduct != undefined) {
      setCartList((prev) => [
        ...prev,
        {
          name: currentProduct.name,
          totalPrice: currentProduct.price,
          count: 1,
        },
      ]);
    } else {
      alert(`product ${target.value} does not exist!`);
    }
  };

  return (
    <>
      {productList.map((product) => (
        <ProductCard
          name={product.name}
          price={product.price}
          key={product.name}
          handleAdd={handleAdd}
        />
      ))}
      <h3>Cart</h3>
      {cartList.map((item) => (
        <CartCard
          key={item.name}
          name={item.name}
          count={item.count}
          totalPrice={item.totalPrice}
        />
      ))}
      <h4>Total: {fee}</h4>
    </>
  );
};

export default App;
