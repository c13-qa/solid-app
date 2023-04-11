import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function SayName() {
  const [name, setName] = createSignal("Steven");
  const [bool, setBool] = createSignal(true);
  const [age, setAge] = createSignal(27);
  // const increment = () => setCount(count() + 1);

  setTimeout(() => setName("Juan"), 2000);
  setTimeout(() => setBool(!bool()), 2000);
  setInterval(() => {
    setAge(age() + 1);
  }, 1000);

  return (
    <div>
      <p>
        The Name is: {name()} and his age is: {age()}
      </p>
      <p>The bool is: {bool().toString()}</p>
    </div>
  );
}
export default SayName

// render(() => <SayName />, document.getElementById("app")!);
