import useStore from "../store/store.js";

function FirstChild() {
  const { count, incrementCount, decrementCount, removeCount, setCount, setSelectedButton } = useStore((state) => state);

  const onChangeInput = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) && e.target.value === "") {
      setCount("");
    } else {
      setCount(value);
    }
  };

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div>
      <h2>FirstChild</h2>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() => handleClick("o")}>o</button>
        <button onClick={() => handleClick("x")}>x</button>
      </div>
      <div>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={removeCount}>Remove</button>
      </div>
      <input type="number" value={count} onChange={onChangeInput} />
    </div>
  );
}

export default FirstChild;
