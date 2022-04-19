import { useState, useEffect } from "react";
import Login from "./Login.js";

function Home() {
  const text = ["Hello ", "goodBye ", "take care "];
  const [word, setWord] = useState("");

  useEffect(() => {
    return setWord(text[1]);
  }, []);

  return (
    <div className="home">
      {/* <img NameName="homeCover" src={portrait}></img> */}
      {/* <Login /> */}
      <div className="titleWrap">
        <div className="title">
          <h1>
            <span>Health</span> is a state of body. <span>Wellness</span> is a
            state of being.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
