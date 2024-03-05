function ChildComponent({ handleClick }) {
  console.log("rerendering");
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default ChildComponent;
