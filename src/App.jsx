import { useEffect, useState } from "react";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const result = await res.json();
      setProducts(result);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <Product />
      {JSON.stringify(products)}
    </>
  );
}

export default App;
