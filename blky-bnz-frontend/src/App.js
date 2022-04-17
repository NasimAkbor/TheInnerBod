import logo from "./logo.svg";
import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Organ from "./organ.js";
import TestSubject from "./TestSubject";
import SystemType from "./systemType.js";
import { Routes, Switch, Route, Link } from "react-router-dom";
import OrganData from "./components/OrganData.js";
import FoodData from "./components/FoodData.js";
import Pin from "./components/Pin.js";
import Nav from "./components/Nav.js";
import api from "./services/apiConfig.js";
import System from "./components/System.js";
import Organs from "./components/Organs.js";
import FoodContainer from "./components/FoodContainer";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState([]);
  const [food, setFood] = useState([]);
  const [system, setSystem] = useState("skin");
  const [organ, setOrgan] = useState([]);
  const [detail, setDetail] = useState("none");

  const clearData = () => {
    setDetail("none");
  };

  useEffect(() => {
    fetch("https://organ-api.herokuapp.com/organ-api/organs")
      .then((response) => response.json())
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
        {/* <div className="bodyContainer">
          <TestSubject />
        </div> */}
        <div className="bigContainer">
          <div className="anatomy">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/sensory"
                element={
                  <Fragment>
                    <div className="bodyContainer">
                      <TestSubject />
                    </div>
                    <System type={"sensory"} />
                    <Organs
                      type={"sensory"}
                      value={organ}
                      setDetail={setDetail}
                    />
                  </Fragment>
                }
              ></Route>

              <Route
                path="/skeletal"
                element={
                  <Fragment>
                    <div className="bodyContainer">
                      <TestSubject />
                    </div>
                    <System type={"skeletal"} />
                    <Organs
                      type={"skeletal"}
                      value={organ}
                      setDetail={setDetail}
                    />
                  </Fragment>
                }
              ></Route>

              <Route
                path="/digestive"
                element={
                  <Fragment>
                    <div className="bodyContainer">
                      <TestSubject />
                    </div>
                    <System type={"digestive"} />
                    <Organs
                      type={"digestive"}
                      value={organ}
                      setDetail={setDetail}
                    />
                  </Fragment>
                }
              ></Route>

              <Route
                path="/respiratory"
                element={
                  <Fragment>
                    <div className="bodyContainer">
                      <TestSubject />
                    </div>
                    <System type={"respiratory"} />
                    <Organs
                      type={"respiratory"}
                      value={organ}
                      setDetail={setDetail}
                    />
                  </Fragment>
                }
              ></Route>
              <Route
                path="/cardiovascular"
                element={
                  <Fragment>
                    <div className="bodyContainer">
                      <TestSubject />
                    </div>
                    <System type={"cardiovascular"} />
                    <Organs
                      type={"cardiovascular"}
                      value={organ}
                      setDetail={setDetail}
                    />
                  </Fragment>
                }
              ></Route>

              <Route
                path="/nervous"
                element={
                  <Fragment>
                    <div className="bodyContainer">
                      <TestSubject />
                    </div>
                    <System type={"nervous"} />
                    <Organs
                      type={"nervous"}
                      value={organ}
                      setDetail={setDetail}
                    />
                  </Fragment>
                }
              ></Route>
            </Routes>
          </div>
          <FoodContainer value={organ} otherValue={food} detail={detail} />
        </div>
      </div>
    </div>
  );
}

export default App;
