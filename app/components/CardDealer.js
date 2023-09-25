"use client";
import { useState } from "react";

export default function Hand() {
  const [hand, setHand] = useState([
    {
      image: "https://deckofcardsapi.com/static/img/0H.png",
    },
    {
      image: "https://deckofcardsapi.com/static/img/JH.png",
    },
    {
      image: "https://deckofcardsapi.com/static/img/QH.png",
    },
    {
      image: "https://deckofcardsapi.com/static/img/KH.png",
    },
    {
      image: "https://deckofcardsapi.com/static/img/AH.png",
    },
  ]);

  const [count, setCount] = useState(5);

  const getCards = async function () {
    const queryCards = await fetch(`api/cards?count=${count}`);
    const data = await queryCards.json();
    console.log(data.data.cards);
    setHand(data.data.cards);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Drawing new cards`);
    getCards();
  };

  const handleInputChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="count">How many cards would you like to draw?</label>
        <input
          type="number"
          value={count}
          min="1"
          max="52"
          onChange={handleInputChange}
        />
        <br />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          Deal Cards
        </button>
      </form>

      <div id="hand">
        {hand.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} />
          </div>
        ))}
      </div>
    </>
  );
}
