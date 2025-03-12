import "./buttons.css";

const NumButtons = ({ setState }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const handleClick = (eventNum) => (
    setState((prevState) =>
      prevState === 0
        ? eventNum.toString()
        : String(prevState) + String(eventNum)
    )
  );

  return (
    <div>
      {numbers.map((num) => (
        <button key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}
    </div>
  );
};

export default NumButtons;
