import "./App.css";
import Data from "./components/Data";
import Usecontext from "./components/context/Usecontext";
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
      <Data />
    </div>
  );
}

export default App;
