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
        <Card rounded={true} flat={true}>
          <h2>Gorra C13</h2>
          <p>Nulla est sunt quis adipisicing eiusmod minim.</p>
          <button class="btn">Click me!</button>
        </Card>
        <Card rounded={true} flat={false}>
          <h2>Camisa C13</h2>
          <p>Nulla est sunt quis adipisicing eiusmod minim.</p>
          <button class="btn">Click me!</button>
        </Card>
        <Card rounded={false} flat={false}>
          <h2>Mouse C13</h2>
          <p>Nulla est sunt quis adipisicing eiusmod minim.</p>
          <button class="btn">Click me!</button>
        </Card>
      </div>
    </div>
  );
};

export default App;
