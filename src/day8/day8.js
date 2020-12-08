const parseInstructions = (instr) => instr.split('\n')
  .map(l => l.split(' '))
  .map(([cmd, val]) => [cmd, parseInt(val)]);

const run = (instructions, state) => {
  const { exec } = state;
  const pointer = exec[exec.length - 1];
  const [cmd, val] = instructions[pointer];
  const lastjmp = cmd === 'jmp' ? pointer : state.lastjmp;
  const next = pointer + (cmd === 'jmp' ? val : 1);
  const acc = state.acc + (cmd === 'acc' ? val : 0);
  return next >= instructions.length ? { ...state, result: 'term', acc }
  : exec.indexOf(next) > -1 ? {...state, result: 'loop', acc }
  : run(instructions, { ...state, acc, exec: exec.concat([next]), lastjmp });
};

const runUntilLoop = (instructions) => run(instructions, { exec: [0], acc: 0 });

const modify = (instructions, flip) => instructions.map(([cmd, val], index) => [index === flip ? 'nop' : cmd, val]);

const runUntilTerm = (instructions) => {
  const output = run(instructions, { exec: [0], acc: 0 });
  return output.result === 'term' ? output : runUntilTerm(modify(instructions, output.lastjmp));
};

module.exports = { parseInstructions, runUntilLoop, runUntilTerm };
