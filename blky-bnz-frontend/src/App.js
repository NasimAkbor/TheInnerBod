import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Organ from "./organ";
import TestSubject from "./TestSubject";
import Food from "./food";
import Machine from "./machine.js";

function App() {
  const [data, setData] = useState([]);

  const [food, setFood] = useState("none");

  const handleClick = (e) => {
    setFood(e.target.dataset.organ);
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <nav></nav>
        <div className="bodyContainer">
          <TestSubject />
        </div>

        <div className="anatomy">
          {data.map((data) => (
            <Organ name={data.name} click={handleClick} />
          ))}
        </div>
        <div className="foodContainer">
          <div className="foodTop">
            <div className="connector"></div>
            <Machine />
          </div>
          {data.map((data) => data.name.includes(food) && <Food name={data} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
