import React from "react";
import OrganData from "./OrganData";
import FoodData from "./FoodData.js";

function FoodContainer(props) {
  let { setOrgan } = props;
  let { setFood } = props;

  return (
    <div className="foodContainer">
      {props.value.map(
        (data, i) =>
          data.name.includes(props.detail) && (
            <OrganData
              key={i}
              //images={data.images}
              id={data._id}
              name={data.name}
              system={data.system}
              symptom={data.symptom.join(", ")}
              description={data.description}
              setOrgan={setOrgan}
            />
          )
      )}
      {props.otherValue.map(
        (data, i) =>
          data.name.includes(props.detail) && (
            <FoodData
              key={i}
              name={data.name}
              food={data.food.join(", ")}
              setFood={setFood}
            />
          )
      )}
    </div>
  );
}

export default FoodContainer;
