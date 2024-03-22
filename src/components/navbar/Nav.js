import React from 'react';
import { Link } from "react-router-dom";

import "./navstyles.css";

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                        <Link to="/member1" className="link">Member #1</Link>
                    </li>
                    <li>
                        <Link to="/member2" className="link">Member #2</Link>
                    </li>
                    <li>
                        <Link to="/member3" className="link">Member #3</Link>
                    </li>
                    <li>
                        <Link to="/member4" className="link">Member #4</Link>
                    </li>
                    <li>
                        <Link to="/member5" className="link">Member #5</Link>
                    </li>
                    <li>
                        <Link to="/member6" className="link">Member #6</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav