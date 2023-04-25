import { For, useContext } from "solid-js";
import Card from "../components/Card";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { items } = useContext(CartContext);
  return (
    <div class="max-w-md my-8 mx-auto">
      <Card rounded={true}>
        <h2>You shopping cart.</h2>
        <For each={items}>
          {(item) => (
            <p>
              {item.title} price $ {item.price}
            </p>
          )}
        </For>
      </Card>
    </div>
  );
};

export default Cart;
