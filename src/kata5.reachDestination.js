const reachDestination = (distance, speed) => {
  const time = ((distance / speed) * 2).toFixed() / 2;
  return `I should be there in ${time} hours.`;
};
module.exports = reachDestination;
