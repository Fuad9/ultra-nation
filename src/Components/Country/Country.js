import React from "react";
import "./Country.css";
import {Button} from "@material-ui/core";

const Country = (props) => {
  // console.log(props);
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
    <div className="country-info mb-5">
      <img src={flag} alt="" />
      <h3>Country Name: {name}</h3>
      <h3>Capital Name: {capital}</h3>
      <h3>Population: {population}</h3>
      <h3>Region: {region}</h3>
      {currencies.map((currency, idx) => (
        <h3 key={idx}>Currency: {currency.name}</h3>
      ))}
      {languages.map((language) => (
        <h3>language: {language.name}</h3>
      ))}
      <Button
        vaiant="contained"
        color="primary"
        onClick={() => {
          props.handleAddCountry(props.country);
        }}
      >
        Add Country
      </Button>
      <Button
        vairant="primary"
        onClick={() => props.handleDeleteCountry(props.country)}
      >
        Remove Country
      </Button>
    </div>
  );
};

export default Country;
