import React from 'react';
import { useShoppingList } from '@/context/shoppingListContext';

export type Product = {
  name: string;
  price: number;
};

export interface ProductCardProps {
  name: string;
  price: number;
}

const ProductCard = ({ name, price }: ProductCardProps) => {
  const { increaseItemQuantity } = useShoppingList();

  return (
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
        {name}, ${price}
      </div>
      <button
        type='button'
        onClick={() => increaseItemQuantity(name)}
        value={name}
      >
        add
      </button>
    </div>
  );
};

export default ProductCard;
