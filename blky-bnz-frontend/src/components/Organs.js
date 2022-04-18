import React from "react";
import Pin from "./Pin.js";

function Organs(props) {
  let { setDetail } = props;

  function organChange(e) {
    console.log(e.target.dataset.key);
    setDetail(e.target.dataset.key);
  }

  return (
    <div className="pins">
      {props.value.map(
        (data, i) =>
          data.system.includes(props.type) && (
            <Pin
              key={i}
              class={data.name}
              name={data.name}
              click={organChange}
            />
          )
      )}
    </div>
  );
}

export default Organs;
