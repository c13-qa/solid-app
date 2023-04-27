import { For, useContext } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const { items } = useCartContext();

  const total = () => {
    return items.reduce((acc, p) => {
      return acc + p.quantity * p.price;
    }, 0);
  };
  return (
    <div class="max-w-md my-8 mx-auto">
      <Card rounded={true}>
        <h2>You shopping cart.</h2>
        <For each={items}>
          {(item) => (
            <p>
              {item.name} price $ {item.price} quantity: X {item.quantity}
            </p>
          )}
        </For>
        <p class="mt-8 border-t-2 font-bold pt-4">Total cart price ${total()}</p>
      </Card>
    </div>
  );
};

export default Cart;
