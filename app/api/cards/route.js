const cards = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const suits = ["Spades", "Diamonds", "Clubs", "Hearts"];

export async function GET(request) {
  const card1 = cards[Math.floor(Math.random() * cards.length)];
  const card2 = cards[Math.floor(Math.random() * cards.length)];
  const suit1 = suits[Math.floor(Math.random() * suits.length)];
  const suit2 = suits[Math.floor(Math.random() * suits.length)];

  const result = [
    { card: card1, suit: suit1 },
    { card: card2, suit: suit2 },
  ];

  return new Response(JSON.stringify(result));
}
