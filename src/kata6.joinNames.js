const joinNames = namesObj => {
  const result = namesObj.map(value => value.toString());
  result.pop();
  const lastName = namesObj.pop();
  return result.join(', ') + ' & ' + lastName;
};
module.exports = joinNames;
