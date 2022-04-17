import React from "react";
import { Link } from "react-router-dom";

function Nav(prop) {
  return (
    <nav>
      <div class="navTab">
        <Link class="individualTab" onClick={prop.click} to="/">
          Home
        </Link>
      </div>
      <div class="navTab">
        <Link class="individualTab" onClick={prop.click} to="/sensory">
          sensory
        </Link>
      </div>
      <div class="navTab">
        <Link class="individualTab" onClick={prop.click} to="/skeletal">
          skeletal
        </Link>
      </div>
      <div class="navTab">
        <Link class="individualTab" onClick={prop.click} to="/digestive">
          digestive
        </Link>
      </div>
      <div class="navTab">
        <Link class="individualTab" onClick={prop.click} to="/respiratory">
          respiratory
        </Link>
      </div>
      <div class="navTab">
        <Link class="individualTab" onClick={prop.click} to="/cardiovascular">
          cardiovascular
        </Link>
      </div>
      <div class="navTab">
        <Link class="individualTab" onClick={prop.click} to="/nervous">
          nervous
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
