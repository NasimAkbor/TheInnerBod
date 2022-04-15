import logo from "./logo.svg";
import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Organ from "./organ.js";
import TestSubject from "./TestSubject";
import SystemType from "./systemType.js";
import { Routes, Switch, Route, Link } from "react-router-dom";
import OrganData from "./OrganData.js";
import FoodData from "./FoodData.js"
import Pin from "./Pin";
import Nav from "./components/Nav.js"
import api from "./apiConfig";

function App() {
  const [data, setData] = useState([]);
  const [food, setFood] = useState([]);
  const [system, setSystem] = useState("skin");
  const [organ, setOrgan] = useState([]);
  const [detail, setDetail] = useState("Liver");

  const organChange = (e) => {
    console.log(e.target.dataset.key);
    setDetail(e.target.dataset.key);
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
        <Nav />
        <div className="bodyContainer">
          <TestSubject />
        </div>
        <div className="bigContainer">
          <div className="anatomy">
            <Routes>
              <Route
                path="/"
                element={
                  <Fragment>
                    <div class="system">
                      {SystemType.map(
                        (data) =>
                          data.system.includes("skin") && (
                            <Organ image={data.img} name={data.system} />
                          )
                      )}{" "}
                    </div>
                    <div class="pins">
                      {organ.map(
                        (data) =>
                          data.system.includes("skin") && (
                            <Pin
                              class={data.name}
                              name={data.name}
                              click={organChange}
                            />
                          )
                      )}
                    </div>
                  </Fragment>
                }
              ></Route>

              <Route
                path="/skeletal"
                element={
                  <Fragment>
                    <div class="system">
                      {SystemType.map(
                        (data) =>
                          data.system.includes("skeletal") && (
                            <Organ image={data.img} name={data.system} />
                          )
                      )}{" "}
                    </div>
                    <div class="pins">
                      {organ.map(
                        (data) =>
                          data.system.includes("skeletal") && (
                            <Pin
                              class={data.name}
                              name={data.name}
                              click={organChange}
                            />
                          )
                      )}
                    </div>
                  </Fragment>
                }
              ></Route>

              <Route
                path="/digestive"
                element={
                  <Fragment>
                    <div class="system">
                      {SystemType.map(
                        (data) =>
                          data.system.includes("digestive") && (
                            <Organ image={data.img} name={data.system} />
                          )
                      )}{" "}
                    </div>
                    <div class="pins">
                      {organ.map(
                        (data) =>
                          data.system.includes("digestive") && (
                            <Pin
                              class={data.name}
                              name={data.name}
                              click={organChange}
                            />
                          )
                      )}
                    </div>
                  </Fragment>
                }
              ></Route>

              <Route
                path="/respiratory"
                element={
                  <Fragment>
                    <div class="system">
                      {SystemType.map(
                        (data) =>
                          data.system.includes("respiratory") && (
                            <Organ image={data.img} name={data.system} />
                          )
                      )}
                    </div>
                    <div class="pins">
                      {organ.map(
                        (data) =>
                          data.system.includes("respiratory") && (
                            <Pin
                              class={data.name}
                              name={data.name}
                              click={organChange}
                            />
                          )
                      )}
                    </div>
                  </Fragment>
                }
              ></Route>
              <Route
                path="/cardiovascular"
                element={
                  <Fragment>
                    <div class="system">
                      {SystemType.map(
                        (data) =>
                          data.system.includes("cardiovascular") && (
                            <Organ image={data.img} name={data.system} />
                          )
                      )}{" "}
                    </div>
                    <div class="pins">
                      {organ.map(
                        (data) =>
                          data.system.includes("cardiovascular") && (
                            <Pin
                              class={data.name}
                              name={data.name}
                              click={organChange}
                            />
                          )
                      )}
                    </div>
                  </Fragment>
                }
              ></Route>

              <Route
                path="/nervous"
                element={
                  <Fragment>
                    <div class="system">
                      {SystemType.map(
                        (data) =>
                          data.system.includes("nervous") && (
                            <Organ image={data.img} name={data.system} />
                          )
                      )}{" "}
                    </div>
                    <div class="pins">
                      {organ.map(
                        (data) =>
                          data.system.includes("nervous") && (
                            <Pin
                              class={data.name}
                              name={data.name}
                              click={organChange}
                            />
                          )
                      )}
                    </div>
                  </Fragment>
                }
              ></Route>
            </Routes>
          </div>
          <div className="foodContainer">
            {organ.map(
              (data) =>
                data.name.includes(detail) && (
                  <OrganData
                    name={data.name}
                    system={data.system}
                    symptom={data.symptom}
                    description={data.description}
                  />
                )
            )}
            {food.map(
              (data) =>
                data.name.includes(detail) && (
                  <FoodData
                    food={data.food.join(', ')}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
