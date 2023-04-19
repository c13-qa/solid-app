import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";

const fetchProduct = async (id) => {
  const res = await fetch(`http://localhost:4000/products/${id}`);

  return res.json();
};

const Product = () => {
  const { id } = useParams();

  const [product] = createResource(id, fetchProduct);
  return (
    <div class="my-7">
      <Show when={product()} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-5 gap-7">
          <div class="col-span-2 flex-1">
            <img class="w-96 p-3 h-auto object-cover" src={product().image} alt="image" />
          </div>
          <div class="col-span-3">
            <h2 class="font-bold mb-7 text-3xl text-center">{product().name}</h2>
            <p>{product().description}</p>
            <p class="my-7 text-2xl">
                Only $ {product().price}
            </p>
          </div>
        </div>
      </Show>
    </div>
  );
};

export default Product;
