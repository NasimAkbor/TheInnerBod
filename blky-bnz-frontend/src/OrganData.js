import { useState } from "react";
import { updateOrgan } from "./services/reqfunctions.js";

function OrganData(prop) {

  const [diag, setDiag] = useState('');
  const [newInfo, setnewInfo] = useState(' ' + '');
  const [name, setName] = useState('');

  const handleSubmit = async (event) => {
    let id = prop._id
    let info = diag;
    event.preventDefault();
    await updateOrgan(id, info)
    setnewInfo(diag);
    setDiag('');

  }

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
        <span>Diagnoses:</span> {prop.symptom + newInfo}
        <br />
        <form onSubmit={handleSubmit}>
          <span> New Diagnoses: </span>
          <input type="string"
            value={diag}
            onChange={(e) => setDiag(e.target.value)}></input>
          <button submit="">Submit</button>
        </form>
      </p>
    </div>
  );
}

export default OrganData;
