'use client';

import { CartContextProvider } from '@/app/hook/useCart';

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  return (
    <div>
      <CartContextProvider>{children}</CartContextProvider>
    </div>
  );
};

export default CartProvider;
