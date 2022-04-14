function OrganData(prop) {
  return (
    <div className="organDetails">
      <p>
        Name: {prop.name}
        <br />
        System: {prop.system}
        <br />
        Description: {prop.discription}
        <br />
        Symptoms: {prop.symptom}
        <br />
        <form>
          New Symptoms:
          <input type="string"></input>
          <button submit=""></button>
        </form>
      </p>
    </div>
  );
}

export default OrganData;
