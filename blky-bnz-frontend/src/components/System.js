import React from 'react';
import SystemType from "../systemType.js";
import Organ from "../organ.js";

function System(props) {
  return (
    <div class="system">
      {SystemType.map(
        (data) =>
          data.system.includes(props.type) && (
            <Organ image={data.img} name={data.system} />
          )
      )}
    </div>
  );
}

export default System;