import { createSignal } from "solid-js";
import banner from "./assets/bannerSonBata.jpg";
import Card from "./components/Card";

import { Routes, Route, A } from "@solidjs/router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  const [darkTheme, setDarkTheme] = createSignal(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme());
  };
  return (
    <div class="container m-auto">
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
        <A href="/cart">Cart</A>
      </header>
      <img class="rounded-md" src={banner} alt="site banner" />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Routes>
    </div>
  );
};

export default App;
