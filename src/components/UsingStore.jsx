import { render } from "solid-js/web";
import { createEffect, createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";

function UsingStore() {
  const [person, setPerson] = createStore({
    name: {
      first: "Steven",
      lastName: "Zuluaga Cortes",
    },
    age: 27,
  });

  const changeName = () => {
    setPerson("name", "first", "Mario");
  };

  const [products, setProducts] = createStore([
    { id: 1, title: "ninja", price: 10 },
    { id: 2, title: "ninja toy", price: 20 },
  ]);

  const changeProduct = (id) => {
    // setProducts(1, "price", 25);
    setProducts((p) => p.id === id, "price", 50);
  };

  createEffect(()=>{
    console.log(person.name.first)
  })

  return (
    <div>
      <p>The First name is: {person.name.first}</p>
      <p>The Last name is: {person.name.lastName}</p>
      <button onClick={changeName}>Change name</button>

      <For each={products}>
        {(product) => (
          <p>
            {product.title}= $ {product.price}
          </p>
        )}
      </For>
      <button onClick={() => changeProduct(2)}>Change a product </button>
    </div>
  );
}

// render(() => <UsingStore />, document.getElementById("app")!);
export default UsingStore