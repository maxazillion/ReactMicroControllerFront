import logo from "./logo.svg";
import "./App.css";
import { postLightActivate } from "./requests";
import { useState } from "react";

function App() {
  const port = "80";
  const ip = ""; //get from micro controller log
  const [text, setText] = useState("");
  const [lightArray, setLightArray] = useState([]);
  const buttons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];

  const handleActiveLight = async () => {
    postLightActivate(ip + ":" + port, lightArray);
    setLightArray([]);
  };

  const addLightToArray = (number) => {
    setLightArray((prev) => {
      return [...prev, number];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>raspberry pi pico stuff</p>
        <p>text = {text}</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {buttons.slice(0, 5).map((item) => (
            <button
              style={{ margin: ".25rem" }}
              onClick={() => addLightToArray(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {lightArray.map((item) => (
            <button style={{ margin: ".25rem" }}>{item}</button>
          ))}
        </div>
        <button onClick={handleActiveLight}>anything button</button>
      </header>
    </div>
  );
}

export default App;
