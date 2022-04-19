import { useEffect, useState } from "react";
import { updateOrgan } from "../services/reqfunctions.js";

function OrganData(props) {
  const [diag, setDiag] = useState("");
  const [organ, setOrgan] = useState(props.name);

  const handleSubmit = async (event) => {
    let info = { symptom: `${diag}` };
    event.preventDefault();
    await updateOrgan(organ, info);
    setDiag("");
  };

  useEffect(() => {
    fetch("https://organ-api.herokuapp.com/organ-api/organs")
      .then((res) => res.json())
      .then((data) => props.setOrgan(data));
  }, [diag]);

  return (
    <div className="organDetails">
      <img src={props.images} />
      <div>
        <span>Name:</span> {props.name}
        <br />
        <span>System:</span> {props.system}
        <br />
        <span>Description:</span> {props.description}
        <br />
        <span>Diagnoses:</span> {props.symptom}
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
      </div>
    </div>
  );
}

export default OrganData;
