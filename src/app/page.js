"use client";
import { useState } from "react";

export default function Home() {
  const [hand, setHand] = useState([
    { card: "A", suit: "Spades" },
    { card: "A", suit: "Spades" },
  ]);

  async function handleCards() {
    try {
      const response = await fetch("/api/cards");
      const data = await response.json();
      setHand(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <main>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCards}
      >
        Deal a Hand
      </button>
      <div id="hand">
        {hand.map((card, index) => (
          <div className="card" key={index}>
            <p>{card.card}</p>
            <p>{card.suit}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
