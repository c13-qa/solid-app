import banner from "./assets/bannerSonBata.jpg";
import Card from "./components/Card";

const App = () => {
  return (
    <div class="container m-auto">
      <header>
        <h1>Código C13 Merch</h1>
      </header>
      <img class="rounded-md" src={banner} alt="site banner" />
      <div class="grid grid-cols-4 my-4 gap-10">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default App;
