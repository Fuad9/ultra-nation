import React from "react";

const Cart = (props) => {
  console.log(props.cart);
  const GrossPopulation = props.cart;
  let totalPopulation = 0;
  totalPopulation = GrossPopulation.reduce(
    (acc, current) => acc + current.population,
    0
  );

  return (
    <div>
      <h3>Country Added: {GrossPopulation.length}</h3>
      <h3>Total Population: {totalPopulation}</h3>
    </div>
  );
};

export default Cart;
