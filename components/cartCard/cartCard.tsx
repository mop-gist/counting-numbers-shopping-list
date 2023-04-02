import React from 'react';

export type CartItem = {
  name: string;
  count: number;
  totalPrice: number;
};

export interface CartCardProps {
  name: string;
  count: number;
  totalPrice: number;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
}

const CartCard = ({ name, totalPrice, count, handleDelete }: CartCardProps) => (
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
      {name}, {count}개, ${totalPrice}
    </div>
    <button type='button' onClick={handleDelete} value={name}>
      delete
    </button>
  </div>
);

export default CartCard;
