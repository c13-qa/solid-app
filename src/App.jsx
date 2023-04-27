import { createSignal } from "solid-js";
import banner from "./assets/bannerSonBata.jpg";
import Card from "./components/Card";

import { Routes, Route, A } from "@solidjs/router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import UsingStore from "./components/UsingStore";
import { useCartContext } from "./context/CartContext";

const App = () => {
  const [darkTheme, setDarkTheme] = createSignal(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme());
  };
  const {items}= useCartContext()
   const quantity=()=>{
    return items.reduce((acc,current)=>{
      return acc + current.quantity
    },0)
   }
  return (
    <div class="container m-auto">
    {/* <UsingStore/> */}
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{ "bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onclick={toggleTheme}
        >
          Light Mode
        </span>
        <h1>Código C13</h1>
        <A href="/">Home</A>
        <A href="/cart">Cart ({quantity()})</A>
        {/* <A href="/product">Products</A> */}
      </header>
      <img class="rounded-md" src={banner} alt="site banner" />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Routes>
    </div>
  );
};

export default App;
