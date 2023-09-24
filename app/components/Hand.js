import React from "react";
import getCards from "../lib/getCards.js";

export default async function Hand() {
  let hand;

  try {
    hand = await getCards();
  } catch (error) {
    console.log("Error: ", error);
  }

  return (
    <div id="hand">
      {hand.map((card, index) => (
        <div className="card" key={index}>
          <p>{card.value}</p>
          <p>{card.suit}</p>
        </div>
      ))}
    </div>
  );
}
