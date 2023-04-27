import { For, useContext } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { items } = useCartContext();
  return (
    <div class="max-w-md my-8 mx-auto">
      <Card rounded={true}>
        <h2>You shopping cart.</h2>
        <For each={items}>
          {(item) => (
            <p>
              {item.name} price $ {item.price} quantity: {item.quantity}
            </p>
          )}
        </For>
      </Card>
    </div>
  );
};

export default Cart;
