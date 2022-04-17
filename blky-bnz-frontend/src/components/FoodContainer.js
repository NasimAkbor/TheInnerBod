import React from 'react';
import OrganData from './OrganData';
import FoodData from './FoodData.js';

function FoodContainer(props) {
  return (
    <div className="foodContainer">
      {props.value.map(
        (data) =>
          data.name.includes(props.detail) && (
            <OrganData
              //images={data.images}
              id={data._id}
              name={data.name}
              system={data.system}
              symptom={data.symptom}
              description={data.description}
            />
          )
      )}
      {props.otherValue.map(
        (data) =>
          data.name.includes(props.detail) && (
            <FoodData name={data.name} food={data.food.join(", ")} />
          )
      )}
    </div>
  );
}

export default FoodContainer;