// http://127.0.0.1:3000/api/cards

export default async function getCards() {
  try {
    const res = await fetch(
      "https://www.deckofcardsapi.com/api/deck/new/draw/?count=2",
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data.cards);
    return data.cards;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
