import { createContext, useContext, useState } from "react"; // 저장소 만들기

const cartContext = createContext(); // 저장소를 변수에 담기

export function CartProvider({ children }) {
  // app이랑 연결 시키기 위해 인자에 children
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((el) => el.id !== id));
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
      {/* // 자식 컴포넌트로 만들어질 수 있게 */}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
