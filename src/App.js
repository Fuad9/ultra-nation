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

  // Adding Item
  const handleAddCountry = (country) => {
    const newCountry = [...cart, country];
    setCart(newCountry);
    cart.find((item) =>
      item.numericCode === country.numericCode
        ? window.alert("You have already added this country")
        : setCart(newCountry)
    );
  };

  // // Stop Adding Duplicate Item
  // const handleDuplicateCountry = (country) => {
  //   const newCountry = cart.filter((item) =>
  //     item.numericCode === country.numericCode
  //       ? window.alert("You have already added this country")
  //       : setCart(newCountry)
  //   );
  // };

  // Removing Item
  const handleDeleteCountry = (country) => {
    const newCountry = cart.filter((item) => {
      return item.numericCode !== country.numericCode;
    });
    setCart(newCountry);
  };

  return (
    <div className="App">
      <header className="App-header d-flex">
        <div className="countries">
          <h1>Countries Info</h1>

          {countries.map((country) => (
            <Country
              country={country}
              key={country.numericCode}
              handleAddCountry={handleAddCountry}
              handleDeleteCountry={handleDeleteCountry}
            ></Country>
          ))}
        </div>
        <div className="cart">
          <h1>Population</h1>
          <Cart cart={cart}></Cart>
        </div>
      </header>
    </div>
  );
}

export default App;
