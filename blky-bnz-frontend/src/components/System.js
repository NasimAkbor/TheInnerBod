import React from "react";
import SystemType from "../systemType.js";
import Organ from "../organ.js";

function System(props) {
  return (
    <div className="system">
      {SystemType.map(
        (data, i) =>
          data.system.includes(props.type) && (
            <Organ key={i} image={data.img} name={data.system} />
          )
      )}
    </div>
  );
}

export default System;
