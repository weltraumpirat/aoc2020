const extractPolicy = policyAndPassword => {
  const policyStr = policyAndPassword.substr(0, policyAndPassword.indexOf(':'));
  const [low, high] = policyStr.substr(0, policyStr.indexOf(' ')).split('-').map(n => parseInt(n));
  const letter = policyStr.substr(policyStr.indexOf(' ') + 1);
  return { low, high, letter };
};

const extractPassword = policyAndPassword => policyAndPassword.substr(policyAndPassword.indexOf(': ') + 2);

const findLetterMatches = (searchString, letter) => [...searchString.matchAll(new RegExp(letter, 'g'))].map(m => m.index + 1);

const hasMatchesWithinPositionRange = ({length:count = 0 }, policy) => count > 0 && count >= policy.low && count <= policy.high;

const hasExactlyOneMatchingPosition = (matches, policy) => matches?.length > 0 &&
  matches.reduce((count, match) => match === policy.low || match === policy.high ? count + 1 : count, 0) === 1;

const isValidPassword = (policyAndPassword, satisfiesRule) => {
  const password = extractPassword(policyAndPassword);
  const policy = extractPolicy(policyAndPassword);
  const matches = findLetterMatches(password, policy.letter);
  return satisfiesRule(matches, policy);
};

module.exports = {isValidPassword, hasExactlyOneMatchingPosition, hasMatchesWithinPositionRange }
