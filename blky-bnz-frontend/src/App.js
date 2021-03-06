import "./App.css";
import { Fragment, useEffect, useState } from "react";
import TestSubject from "./TestSubject";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.js";
import System from "./components/System.js";
import Organs from "./components/Organs.js";
import FoodContainer from "./components/FoodContainer";
import Home from "./components/Home";

function App() {
  const [food, setFood] = useState([]);
  const [organ, setOrgan] = useState([]);
  const [detail, setDetail] = useState("none");
  const clearData = () => {
    setDetail("none");
  };

  useEffect(() => {
    fetch("https://organ-api.herokuapp.com/organ-api/organs")
      .then((res) => res.json())
      .then((data) => setOrgan(data));
  }, []);

  useEffect(() => {
    fetch("https://organ-api.herokuapp.com/organ-api/foods")
      .then((res) => res.json())
      .then((deeta) => setFood(deeta));
  }, []);

  return (
    <div className="App">
      <div className="mainContainer">
        <Nav click={clearData} />
        <div className="bigContainer">
          <div className="anatomy">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/sensory" element={
                <Fragment>
                  <TestSubject />
                  <System type={"sensory"} />
                  <Organs type={"sensory"} value={organ} setDetail={setDetail} />
                </Fragment>
              }
              ></Route>
              <Route path="/skeletal" element={
                <Fragment>
                  <TestSubject />
                  <System type={"skeletal"} />
                  <Organs type={"skeletal"} value={organ} setDetail={setDetail} />
                </Fragment>
              }
              ></Route>
              <Route path="/digestive" element={
                <Fragment>
                  <TestSubject />
                  <System type={"digestive"} />
                  <Organs type={"digestive"} value={organ} setDetail={setDetail} />
                </Fragment>
              }
              ></Route>
              <Route path="/respiratory" element={
                <Fragment>
                  <TestSubject />
                  <System type={"respiratory"} />
                  <Organs type={"respiratory"} value={organ} setDetail={setDetail} />
                </Fragment>
              }
              ></Route>
              <Route path="/cardiovascular" element={
                <Fragment>
                  <TestSubject />
                  <System type={"cardiovascular"} />
                  <Organs type={"cardiovascular"} value={organ} setDetail={setDetail} />
                </Fragment>
              }
              ></Route>
              <Route path="/nervous" element={
                <Fragment>
                  <TestSubject />
                  <System type={"nervous"} />
                  <Organs type={"nervous"} value={organ} setDetail={setDetail} />
                </Fragment>
              }
              ></Route>
            </Routes>
          </div>
          <FoodContainer
            value={organ}
            otherValue={food}
            detail={detail}
            setOrgan={setOrgan}
            setFood={setFood}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
