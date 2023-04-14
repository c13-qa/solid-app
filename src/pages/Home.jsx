import { createResource } from "solid-js"
import Card from "../components/Card"

const fetchProducts=async()=>{
  const res= await fetch("http://localhost:4000/Products")

  return res.json()
}

const Home=()=>{
  const [products]=createResource(fetchProducts)

  console.log(products())
    return(
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
        <p>{console.log(products(),products.loading)}</p>
      </div>
    )
}

export default Home