import React, { createContext, useContext } from 'react';

export type CartItem = {
  name: string;
  quantity: number;
};

type ShoppingListContextType = {
  // eslint-disable-next-line no-unused-vars
  getItemQuantity: (name: string) => number;
  // eslint-disable-next-line no-unused-vars
  increaseItemQuantity: (name: string) => void;
  // eslint-disable-next-line no-unused-vars
  decreaseItemQuantity: (name: string) => void;
  cartItems: CartItem[];
};

const ShoppingListContext = createContext({} as ShoppingListContextType);

export function useShoppingList() {
  return useContext(ShoppingListContext);
}

interface ShoppingListProviderProps {
  children: React.ReactNode;
}
export function ShoppingListProvider({ children }: ShoppingListProviderProps) {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);

  function getItemQuantity(name: string) {
    return cartItems.find((item) => item.name === name)?.quantity || 0;
  }

  function increaseItemQuantity(name: string) {
    setCartItems((prev) => {
      if (prev.find((item) => item.name === name) == null) {
        return [...prev, { name, quantity: 1 }];
      } else {
        return prev.map((item) => {
          if (item.name === name) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemQuantity(name: string) {
    setCartItems((prev) => {
      if (prev.find((item) => item.name === name)?.quantity === 1) {
        return prev.filter((item) => item.name !== name);
      } else {
        return prev.map((item) => {
          if (item.name === name) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <ShoppingListContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        cartItems,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
}
