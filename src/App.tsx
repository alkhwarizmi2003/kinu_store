import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Select from "./components/Select";
import Button from "./components/Button";
import TopBar from "./components/TopBar";
import TopMenuBar from "./components/TopMenuBar";


function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="app">
        <TopBar></TopBar>
        <TopMenuBar></TopMenuBar>
        <div>
          <Button text={"asdf"} primary={true} disabled={false}></Button>
        </div>

        <div>
          <Select
            options={["a", "b"]}
            selectedValue="a"
            onChange={() => {}}
          ></Select>
        </div>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
  );
}

export default App;
