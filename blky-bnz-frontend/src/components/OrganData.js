import { useEffect, useState } from "react";
import { updateOrgan } from "../services/reqfunctions.js";

function OrganData(props) {
  let { setOrgan } = props;

  const [diag, setDiag] = useState("");
  const [id, setId] = useState(props.id);

  const handleSubmit = async (event) => {
    let info = { symptom: `${diag}` };
    console.log(id);

    event.preventDefault();
    await updateOrgan(id, info);
    setDiag("");
  };

  useEffect(() => {
    fetch("https://organ-api.herokuapp.com/organ-api/organs")
      .then((response) => response.json())
      .then((data) => setOrgan(data));
  }, [handleSubmit]);

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
