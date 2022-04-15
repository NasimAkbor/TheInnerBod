import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <div class="navTab">
        <Link class="individualTab" to="/">
          Home
        </Link>
      </div>
      <div class="navTab">
        <Link class="individualTab" to="/skeletal">
          skeletal
        </Link>
      </div>
      <div class="navTab">
        <Link class="individualTab" to="/digestive">
          digestive
        </Link>
      </div>
      <div class="navTab">
        <Link class="individualTab" to="/respiratory">
          respiratory
        </Link>
      </div>
      <div class="navTab">
        <Link class="individualTab" to="/cardiovascular">
          cardiovascular
        </Link>
      </div>
      <div class="navTab">
        <Link class="individualTab" to="/nervous">
          nervous
        </Link>
      </div>
    </nav>
  )
}

export default Nav