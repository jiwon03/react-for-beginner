import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("call the api");
  }, []);
  useEffect(() => {
    console.log("run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("run when 'counter' changes");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
