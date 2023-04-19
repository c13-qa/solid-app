import { For, Show, createResource } from "solid-js";
import Card from "../components/Card";
import { A } from "@solidjs/router";

const fetchProducts = async () => {
  const res = await fetch("http://localhost:4000/Products");

  return res.json();
};

const Home = () => {
  const [products] = createResource(fetchProducts);

  // console.log(products())
  return (
    <Show when={products()} fallback={<p>Loading ...</p>}>
      <div class="grid grid-cols-4 my-4 gap-10">
        <For each={products()}>
          {(product) => (
            <Card flat={true} rounded={true}>
              <img class="h-64 w-96 object-cover" src={product.image} alt="product image" />
              <h2 class="my-3 font-bold">{product.name}</h2>
              <A href={`/product/${product.id}`} class="btn">View Product</A>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
};

export default Home;
