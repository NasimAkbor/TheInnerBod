import React from "react";
import { Link } from "react-router-dom";

function Nav(prop) {
  function refreshPage() {
    window.location.href = "/";
  }

  return (
    <nav>
      <div className="navTab">
        <Link className="individualTab" onClick={refreshPage} to="/">
          home
        </Link>
      </div>
      <div className="navTab">
        <Link className="individualTab" onClick={prop.click} to="/sensory">
          sensory
        </Link>
      </div>
      <div className="navTab">
        <Link className="individualTab" onClick={prop.click} to="/skeletal">
          skeletal
        </Link>
      </div>
      <div className="navTab">
        <Link className="individualTab" onClick={prop.click} to="/digestive">
          digestive
        </Link>
      </div>
      <div className="navTab">
        <Link className="individualTab" onClick={prop.click} to="/respiratory">
          respiratory
        </Link>
      </div>
      <div className="navTab">
        <Link
          className="individualTab"
          onClick={prop.click}
          to="/cardiovascular"
        >
          cardiovascular
        </Link>
      </div>
      <div className="navTab">
        <Link className="individualTab" onClick={prop.click} to="/nervous">
          nervous
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
