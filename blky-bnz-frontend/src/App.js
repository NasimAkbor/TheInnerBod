import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Organ from "./organ";
import TestSubject from "./TestSubject";
import Food from "./food";
import Machine from "./machine.js";
import SystemType from "./systemType.js";
import Button from "./button";

function App() {
  const [data, setData] = useState([]);
  const [food, setFood] = useState("none");
  const [system, setSystem] = useState("skin");
  const systemChange = (e) => {
    console.log(e.target.innerText);
    setSystem(e.target.innerText);
  };

  return (
    <div className="App">
      <div className="mainContainer">
        <nav>
          {/* <div className="tabBox"> */}
          {SystemType.map((data) => (
            <Button click={systemChange} system={data.system} />
          ))}
          {/* </div> */}
        </nav>
        <div className="bodyContainer">
          <TestSubject />
        </div>
        <div className="bigContainer">
          <div className="anatomy">
            {SystemType.map(
              (data) =>
                data.system.includes(system) && (
                  <Organ image={data.img} name={data.system} />
                )
            )}
          </div>
          <div className="foodContainer">
            <div className="foodTop">{/* <Machine /> */}</div>
            {data.map(
              (data) => data.name.includes(food) && <Food name={data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
