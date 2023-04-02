import React from 'react';

export type Product = {
  name: string;
  price: number;
};

export interface ProductCardProps {
  name: string;
  price: number;
  handleAdd: React.MouseEventHandler<HTMLButtonElement>;
}

const ProductCard = ({ name, price, handleAdd }: ProductCardProps) => (
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
    <button type='button' onClick={handleAdd} value={name}>
      add
    </button>
  </div>
);

export default ProductCard;
