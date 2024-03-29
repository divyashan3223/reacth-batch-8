import "./App.css";
import Parent from "./components/usecallback/Parent";

function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   // console.log("working");
  //   setCount((prev) => prev + 1);
  //   return { name: "div" };
  // }, []);

  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;
