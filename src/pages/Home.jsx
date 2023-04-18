import { For, Show, createResource } from "solid-js";
import Card from "../components/Card";

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
              <img src={product.image} alt="product image" />
              <h2 class="my-3 font-bold">{product.name}</h2>
              <p class="font-semibold text-justify">{product.description}</p>
              <span>${product.price}</span>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
};

export default Home;
