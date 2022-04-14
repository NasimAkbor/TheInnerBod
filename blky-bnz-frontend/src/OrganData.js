function OrganData(prop) {
  return (
    <div className="organDetails">
      <img src={prop.img} />
      <p>
        <span>Name:</span> {prop.name}
        <br />
        <span>System:</span> {prop.system}
        <br />
        <span>Description:</span> {prop.description}
        <br />
        <span>Symptoms:</span> {prop.symptom}
        <br />
        <form>
          <span> New Symptoms:</span>
          <input type="string"></input>
          <button submit="">Submit</button>
        </form>
      </p>
    </div>
  );
}

export default OrganData;
