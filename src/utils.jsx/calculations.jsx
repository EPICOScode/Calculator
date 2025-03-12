const Calculations = ({ state }) => {
  const expression = state;
  console.log(expression);

  const regex = expression.match(/(\d+|\D)/g);

  const operators = regex.findIndex((op) => op === "*" || op === "/");
  if (operators !== -1) {
    const result = Number(regex[operators - 1]) * Number(regex[operators + 1]);
    regex.splice(operators - 1, 3, result.toString());
  }

  return result;
};

export default Calculations;
