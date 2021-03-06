// Returns the heighest card with 
// no duplicate
function Cards(inputs) {
  let i = 0;
  let newA = [].concat(...inputs);

  // returns duplicate cards
  const rmdup = newA.filter((item, index) => newA.indexOf(item) == index);

  if (rmdup.length > 0) {
    // returns cards with no duplicate & maximum card
    const highestCard = newA
      .filter((e) => !rmdup.includes(e))
      .reduce((a, b) => Math.max(a, b));

    // returns the Maximum card or -1
    return highestCard ? highestCard : -1;
  }

  // Should return -1 if error
  return -1;
}

// Gaming Cards
const highestCard = Cards([
  [4, 5, 1, 1, 3, 3, 13, 5, 4],
  [13, 27, 27, 18, 18, 26, 1000, 1000],
  [40, 50, 70, 12],
  [80],
]);

console.log(highestCard); // should return the highest card with no duplicate
