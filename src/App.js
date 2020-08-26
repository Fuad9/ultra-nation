import React, { useEffect, useState } from "react";
import "./App.css";
import Country from "./Components/Country/Country";
import Cart from "./Components/Cart/Cart";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddCountry = (country) => {
    const newCountry = [...cart, country];
    setCart(newCountry);
  };

  return (
    <div className="App">
      <h1>Countries Info</h1>
      <Cart cart={cart}></Cart>
      <header className="App-header">
        {countries.map((country) => (
          <Country
            country={country}
            key={country.numericCode}
            handleAddCountry={handleAddCountry}
          ></Country>
        ))}
      </header>
    </div>
  );
}

export default App;
