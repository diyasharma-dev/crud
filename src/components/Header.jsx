import React from "react"
import { NavLink } from "react-router-dom";
export default function Header()
{
    return(
        <React.Fragment>
          <nav className="navbar navbar-expand-lg bg-dark fs-3">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold fs-2 text-light" href="#">Khushboo sharma</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-light ms-5" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-light" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-light" to="/about">About</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link active text-light" to="/gallery">Gallery</NavLink>
        </li>
               <li className="nav-item">
          <NavLink className="nav-link active text-light" to="/showtable">Showtable</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-light" to="/notfound">Notfound</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
        </React.Fragment>
    )
}