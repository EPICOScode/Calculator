const MathSymbols = ({ setState }) => {
  const symbols = ["+", "-", "*", "/", ",", "%", "AC", "="];

  const handleClick = (val) => {
    setState((prevState) =>
      val === "AC"
        ? 0
        : symbols.includes(prevState[prevState.length - 1])
        ? prevState.slice(0, -1) + val
        : prevState + val
    );
  };

  return (
    <div>
      {symbols.map((sym) => (
        <button key={sym} onClick={() => handleClick(sym)}>
          {sym}
        </button>
      ))}
    </div>
  );
};

export default MathSymbols;
