import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("all the time");
  useEffect(() => {
    console.log("call the api");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
