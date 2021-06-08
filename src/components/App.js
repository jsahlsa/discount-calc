import React from 'react';



import { useState } from "react";


const pickup = {
  env: 2,
  ten: 10,
  twenty: 15,
  thirty: 20,
  forty: 25,
  fifty: 25,
  sixty: 35,
  oneFifty: 35,
  pallet: 150
};

const delivery = {
  env: 5,
  ten: 15,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 50,
  oneFifty: 70,
  pallet: 150
};

export default function App() {
  const [avg, setAvg] = useState(0);
  const [percent, setPercent] = useState(0.7);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  function handleChange(e) {
    setAvg(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (avg > 40) {
      setPercent(0.5);
    } else if (avg > 20) {
      setPercent(0.6);
    } else {
      setPercent(0.7);
    }
  }

  return (
    <div className="App">
      <h2>Rates based on daily quantity</h2>
      <h5>Less than 20 packages per day gets a 30% discount</h5>
      <h5>21 - 40 packages per day gets a 40% discount</h5>
      <h5>More than 40 packages per day receives a 50% discount</h5>
      <form onSubmit={handleSubmit}>
        <label for="avg-packages">
          Enter daily packages
          <input
            id="avg-packages"
            className="avg"
            type="text"
            value={avg}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="calculate" />
      </form>
      <p className="percent-discount">Percent discount: <strong>{Math.round((1 - percent) * 100)}%</strong></p>
      <div className="price-wrapper">
        <div className="pickup-prices">
          <h3>Pickup / Drop off prices:</h3>
          <p className="env">
            Less than 1lb: {formatter.format(percent * pickup.env)}
          </p>
          <p className="ten">
            1lb - 10lbs: {formatter.format(percent * pickup.ten)}
          </p>
          <p className="ten">
            10lbs - 20lbs: {formatter.format(percent * pickup.twenty)}
          </p>
          <p className="ten">
            20lbs - 30lbs: {formatter.format(percent * pickup.thirty)}
          </p>
          <p className="ten">
            30lbs - 40lbs: {formatter.format(percent * pickup.forty)}
          </p>
          <p className="ten">
            40lbs - 50lbs: {formatter.format(percent * pickup.fifty)}
          </p>
          <p className="ten">
            50lbs - 60lbs: {formatter.format(percent * pickup.sixty)}
          </p>
          <p className="ten">
            60+ lbs: {formatter.format(percent * pickup.oneFifty)}
          </p>
          <p className="ten">
            Pallet: {formatter.format(percent * pickup.pallet)}
          </p>
        </div>
        <div className="delivery-prices">
          <h3>Pickup / Drop off prices:</h3>
          <p className="env">
            Less than 1lb: {formatter.format(percent * delivery.env)}
          </p>
          <p className="ten">
            1lb - 10lbs: {formatter.format(percent * delivery.ten)}
          </p>
          <p className="ten">
            10lbs - 20lbs: {formatter.format(percent * delivery.twenty)}
          </p>
          <p className="ten">
            20lbs - 30lbs: {formatter.format(percent * delivery.thirty)}
          </p>
          <p className="ten">
            30lbs - 40lbs: {formatter.format(percent * delivery.forty)}
          </p>
          <p className="ten">
            40lbs - 50lbs: {formatter.format(percent * delivery.fifty)}
          </p>
          <p className="ten">
            50lbs - 60lbs: {formatter.format(percent * delivery.sixty)}
          </p>
          <p className="ten">
            60+ lbs: {formatter.format(percent * delivery.oneFifty)}
          </p>
          <p className="ten">
            Pallet: {formatter.format(percent * delivery.pallet)}
          </p>
        </div>
      </div>
    </div>
  );
}
