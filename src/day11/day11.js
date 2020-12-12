const occupied = (input, x, y) => x >= 0 && y >= 0 && y < input.length && x < input[y].length && input[y][x] === '#';
const applyRules = (input, x, y) => {
  const adders = [...Array(3).keys()].map(n => n - 1);
  const count = adders
    .flatMap(dy => adders.flatMap(dx => dx !== 0 || dy !== 0 ? occupied(input, x + dx, y + dy) : false))
    .filter(r => r === true).length;
  const seat = input[y][x];
  return seat === 'L' && count === 0 ? '#'
    : seat === '#' && count >= 4 ? 'L'
      : input[y][x];
};


const evolve = (input) => {
  const y = [...Array(input.length).keys()];
  const x = [...Array(input[0].length).keys()];
  return y.flatMap(dy => x.map(dx => applyRules(input, dx, dy)).join(''));
};

const countOccupied = (input) => {
  const evolveUntilStable = (current) => {
    const next = evolve(current);
    if (JSON.stringify(next) === JSON.stringify(current)) return next;
    else return evolveUntilStable(next);
  };
  return evolveUntilStable(input).map(l => [...l].reduce((count,seat )=> seat === '#' ? count +1 : count, 0)).reduce((sum, count) => sum+count, 0);
};

const sightOccupied = (input, x, y, dx, dy) => {
  if( x < 0 || y < 0 || y >= input.length || x >= input[y].length) return false;
  else if(input[y][x] === 'L') return false;
  else if(input[y][x] === '#') return true;
  else return sightOccupied(input, x+dx, y+dy,dx, dy);
}

const applyRules2 = (input, x, y) => {
  const adders = [...Array(3).keys()].map(n => n - 1);
  const count = adders
    .flatMap(dy => adders.flatMap(dx => dx !== 0 || dy !== 0 ? sightOccupied(input, x+dx, y+dy, dx, dy) : false))
    .filter(r => r === true).length;
  const seat = input[y][x];
  return seat === 'L' && count === 0 ? '#'
    : seat === '#' && count >= 5 ? 'L'
      : input[y][x];
};

const evolve2 = (input) => {
  const y = [...Array(input.length).keys()];
  const x = [...Array(input[0].length).keys()];
  return y.flatMap(dy => x.map(dx => applyRules2(input, dx, dy)).join(''));
};

const countOccupied2 = (input) => {
  const evolveUntilStable = (current) => {
    const next = evolve2(current);
    if (JSON.stringify(next) === JSON.stringify(current)) return next;
    else return evolveUntilStable(next);
  };
  const stable = evolveUntilStable(input);
  return stable.map(l => [...l].reduce((count,seat )=> seat === '#' ? count +1 : count, 0)).reduce((sum, count) => sum+count, 0);
};

module.exports = { evolve, countOccupied, countOccupied2 };
