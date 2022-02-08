import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Category from "./components/Category";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroo-backendd.herokuapp.com/"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div>
      <Hero restaurant={data.restaurant} />
      {/* Liste de catégories */}
      {data.categories.map((category, index) => {
        return (
          category.meals.length > 0 && (
            <Category key={index} category={category} />
          )
        );
      })}
    </div>
  );
}

export default App;
