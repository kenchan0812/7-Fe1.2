import React from 'react'
import { Link } from "react-router-dom";

import "./navstyles.css"

function Nav() {
  return (
    <div>
      
        <nav className="nav">

            <div className="left">
                <ul>
                    <li>
                        <Link to="/member1" className="link">Member #1</Link>
                    </li>
                </ul>
            </div>

        </nav>

    </div>
  )
}

export default Nav