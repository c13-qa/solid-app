import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [items, setItems] = createStore([
    { title: "title product", quantity: 2, id: 1, price: 15 },
  ]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
