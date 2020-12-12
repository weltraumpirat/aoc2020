const proximityOccupied = (input, x, y) => x >= 0 && y >= 0 && y < input.length && x < input[y].length && input[y][x] === '#';
const sightOccupied = (input, x, y, dx, dy) => {
  if( x < 0 || y < 0 || y >= input.length || x >= input[y].length) return false;
  else if(input[y][x] === 'L') return false;
  else if(input[y][x] === '#') return true;
  else return sightOccupied(input, x+dx, y+dy,dx, dy);
}

const countOccupied = (input, x, y, occupied = proximityOccupied) => {
  const adders = [...Array(3).keys()].map(n => n - 1);
  return adders
    .flatMap(dy => adders.flatMap(dx => dx !== 0 || dy !== 0 ? occupied(input, x + dx, y + dy, dx, dy) : false))
    .filter(r => r === true).length;
};

const proximity = (seat, count) => seat === 'L' && count === 0 ? '#' : seat === '#' && count >= 4 ? 'L' : seat;
const sight = (seat, count) => seat === 'L' && count === 0 ? '#' : seat === '#' && count >= 5 ? 'L' : seat;

const evolve = (input, rules = proximity, occupied) => {
  const y = [...Array(input.length).keys()];
  const x = [...Array(input[0].length).keys()];
  return y.flatMap(dy => x.map(dx => rules(input[dy][dx], countOccupied(input, dx, dy, occupied))).join(''));
};

const equalArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

const finalOccupied = (input, rules, occupied) => {
  const evolveUntilStable = (current) => {
    const next = evolve(current, rules, occupied);
    return equalArrays(next, current) ? next : evolveUntilStable(next);
  };
  return evolveUntilStable(input)
    .map(l => [...l].reduce((count,seat )=> seat === '#' ? count +1 : count, 0))
    .reduce((sum, count) => sum+count, 0);
};

module.exports = { evolve, finalOccupied, sight, sightOccupied };
