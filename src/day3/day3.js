const fs = require('fs');
const FIELD = fs.readFileSync('input_day3.txt', 'UTF-8').split('\n').filter(l => l.trim() !== '');

const checkPosition = (x, y) => FIELD[y][x % FIELD[0].length] !== '.';

const checkPositions = (dx, dy) => {
  const next = (result, x,y) => y >= FIELD.length
    ? result
    : next(result.concat([checkPosition(x, y)]), x + dx, y + dy);
  return next([], 0,0);
}

const treesEncountered = (...slopes) => {
  if(typeof slopes[0] === "number")
    slopes = [[slopes[0], slopes[1]]];
  return slopes.map(([dx,dy]) => checkPositions(dx,dy).filter(r => r === true).length);
}

module.exports = { checkPosition, checkPositions, treesEncountered };
