const fs = require('fs');

const char2Binary = char => ({ F: '0', B: '1', L: '0', R: '1' })[char];
const parseBinary = input => parseInt([...input].map(char2Binary).join(''), 2);
const ascending = (a, b) => a > b ? 1 : a < b ? -1 : 0;
const notEmpty = str => str.trim() !== '';
const takenSeats = fs.readFileSync('input_day5.txt', 'UTF-8').split('\n').filter(notEmpty).map(parseBinary).sort(ascending);
const seatTaken = str => takenSeats.indexOf(str) > -1;
const allSeatIds = [...Array(1024).keys()];
const emptySeats = allSeatIds.filter(n => !seatTaken(n)).filter(n => seatTaken(n + 1) && seatTaken(n - 1));

module.exports = { parseBinary, takenSeats, emptySeats };
