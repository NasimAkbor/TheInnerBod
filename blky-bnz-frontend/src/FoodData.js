import { useEffect, useState } from "react";
import { updateFood } from "./services/reqfunctions.js";

function FoodData(prop) {

  const [diag, setDiag] = useState('');
  const [newInfo, setnewInfo] = useState(' ' + '');
  const [organ, setOrgan] = useState(prop.name);

  const handleSubmit = async (event) => {
    let info = { "food": `${diag}` };
    event.preventDefault();
    await updateFood(organ, info)
    setnewInfo(diag);
    setDiag('');
  }

  return (
    <div className="foodDetails">
      <img src={prop.img} />
      <p>
        <span>Beneficial foods:</span> {prop.food}
        <br />
        <form onSubmit={handleSubmit}>
          <span> Add food: </span>
          <input type="string"
            name="food"
            value={diag}
            onChange={(e) => setDiag(e.target.value)}></input>
          <button submit="">Submit</button>
        </form>
      </p>
    </div>
  );
}

export default FoodData;
