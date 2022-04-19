import { useEffect, useState } from "react";
import { updateFood } from "../services/reqfunctions.js";

function FoodData(prop) {
  const [diag, setDiag] = useState("");
  const [food, setFood] = useState(prop.name);

  const handleSubmit = async (event) => {
    let info = { food: `${diag}` };
    event.preventDefault();
    await updateFood(food, info);
    setDiag("");
  };

  useEffect(() => {
    fetch("https://organ-api.herokuapp.com/organ-api/foods")
      .then((res) => res.json())
      .then((deeta) => prop.setFood(deeta));
  }, [diag]);

  return (
    <div className="foodDetails">
      <img src={prop.img} />
      <div>
        <span>Beneficial foods:</span> {prop.food}
        <br />
        <form onSubmit={handleSubmit}>
          <span> Add food: </span>
          <input
            type="string"
            name="food"
            value={diag}
            onChange={(e) => setDiag(e.target.value)}
          ></input>
          <button submit="">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default FoodData;
