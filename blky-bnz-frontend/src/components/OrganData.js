import { useState } from "react";
import { updateOrgan } from "../services/reqfunctions.js";

function OrganData(prop) {
  const [diag, setDiag] = useState("");
  const [id, setId] = useState(prop.id);

  const handleSubmit = async (event) => {
    let info = { symptom: `${diag}` };
    console.log(id);
    event.preventDefault();
    await updateOrgan(id, info);
    setDiag("");
  };

  return (
    <div className="organDetails">
      <img src={prop.images} />
      <p>
        <span>Name:</span> {prop.name}
        <br />
        <span>System:</span> {prop.system}
        <br />
        <span>Description:</span> {prop.description}
        <br />
        <span>Diagnoses:</span> {prop.symptom}
        <br />
        <form onSubmit={handleSubmit}>
          <span> New Diagnoses: </span>
          <input
            type="string"
            name="organ"
            value={diag}
            onChange={(e) => setDiag(e.target.value)}
          ></input>
          <button submit="">Submit</button>
        </form>
      </p>
    </div>
  );
}

export default OrganData;
