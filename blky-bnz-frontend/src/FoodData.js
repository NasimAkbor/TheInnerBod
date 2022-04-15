function FoodData(prop) {
  console.log(prop.food);
  return (
    <div className="foodDetails">
      <img src={prop.img} />
      <p>
        <span>Beneficial foods:</span> {prop.food}
        <br />
        <form>
          <span> Add food: </span>
          <input type="string"></input>
          <button submit="">Submit</button>
        </form>
      </p>
    </div>
  );
}

export default FoodData;
