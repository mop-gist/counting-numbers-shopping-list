import React from 'react';
import { useShoppingList } from '@/context/shoppingListContext';
import { productList } from '@/const/product';

export interface CartCardProps {
  name: string;
}

const CartCard = ({ name }: CartCardProps) => {
  const { getItemQuantity, decreaseItemQuantity } = useShoppingList();
  const quantity = getItemQuantity(name);

  const getTotalPrice = () => {
    const price = productList.find((item) => item.name === name)!.price;
    return price * quantity;
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: 150,
          border: '1px solid black',
          marginTop: 10,
        }}
      >
        <div>
          {name}, {quantity}개, ${getTotalPrice()}
        </div>
        <button
          type='button'
          onClick={() => decreaseItemQuantity(name)}
          value={name}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default CartCard;
