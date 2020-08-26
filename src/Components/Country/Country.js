import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props);
  const {
    name,
    capital,
    population,
    region,
    currencies,
    flag,
    languages,
  } = props.country;

  return (
    <div className="country-info">
      <img src={flag} alt="" />
      <h3>Country Name: {name}</h3>
      <h3>Capital Name: {capital}</h3>
      <h3>Population: {population}</h3>
      <h3>Region: {region}</h3>
      {currencies.map((currency) => (
        <h3>Currency: {currency.name}</h3>
      ))}
      {languages.map((language) => (
        <h3>language: {language.name}</h3>
      ))}
      <button onClick={() => props.handleAddCountry(props.country)}>
        Add Country
      </button>
    </div>
  );
};

export default Country;
