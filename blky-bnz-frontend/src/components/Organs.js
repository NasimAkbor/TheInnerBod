import React from 'react';
import Pin from './Pin.js';
import { useState } from 'react';

function Organs(props) {

  let { setDetail } = props;
  function organChange(e) {
    console.log(e.target.dataset.key);
    const part = e.target.dataset.key;
    setDetail(e.target.dataset.key);
  }


  return (
    <div class="pins">
      {props.value.map(
        (data) =>
          data.system.includes(props.type) && (
            <Pin
              class={data.name}
              name={data.name}
              click={organChange}
            />
          ),
      )}
    </div>
  );
}

export default Organs;