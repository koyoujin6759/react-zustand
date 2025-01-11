import useStore from "../store/store.js";

function SecondChild() {
  const { count, selectedButton } = useStore((state) => state);

  return (
    <div>
      <h1>SecondChild</h1>
      <p>Count: {count}</p>
      <p>SelectedButton: {selectedButton}</p>
    </div>
  );
}

export default SecondChild;
