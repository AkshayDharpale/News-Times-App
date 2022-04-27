import React, {useState, useEffect}  from 'react'
import { 
    Link
  } from "react-router-dom";
import INDIA from "./india.png";
import AMERICA from "./america.png";
import FRANCE from "./france.png";
import GERMANY from "./german.png";
import JAPAN from "./japan.png";
import KOREA from "./korea.png";

  export default function Navbar(props) {

    const icons = {INDIA, AMERICA, FRANCE, GERMANY, JAPAN, KOREA }
   
    let a = window.location.href;
    let b = a.substring(21);

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">

            <div className="container-fluid ">
                <a className="navbar-brand text-white" style={{marginTop: "-9px"}} href="/">News-Times</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item ">
                    <Link className="nav-link active "   style={ { color: b === "/"? "red": "white"}} to="/">General</Link>
                    </li>
                    <li className="nav-item ">
                    <Link className="nav-link active "  style={{color: b === "/entertainment" ? "red": "white"}}  to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item ">
                    <Link className="nav-link active "  style={{color: b === "/business"? "red":"white"}}  to="/business">Business</Link>
                    </li>
                    <li className="nav-item ">
                    <Link className="nav-link active " style={{color: b === "/health"? "red":"white"}}  to="/health">Health</Link>
                    </li>
                    <li className="nav-item ">
                    <Link className="nav-link active " style={{color: b === "/science"? "red":"white"}}  to="/science">Science</Link>
                    </li>
                    <li className="nav-item ">
                    <Link className="nav-link active " style={{color: b === "/sports"? "red":"white"}}  to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item ">
                    <Link className="nav-link active " style={{color: b === "/technology"? "red":"white"}}  to="/technology">Technology</Link>
                    </li>  
                    <li className="nav-item dropdown" style={{marginLeft:"85px"}}>
                      <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Country
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><button className="dropdown-item" onClick={ ()=>{props.toggleMode("in")}} >India-in</button></li>
                        <li><button className="dropdown-item" onClick={ ()=>{props.toggleMode("us")}} >America-us</button></li>
                        <li><button className="dropdown-item" onClick={ ()=>{props.toggleMode("jp")}}>Japan-jp</button></li>
                        <li><button className="dropdown-item" onClick={ ()=>{props.toggleMode("fr")}}>France-fr</button></li>
                        <li><button className="dropdown-item" onClick={ ()=>{props.toggleMode("de")}}>Germany-de</button></li>
                        <li><button className="dropdown-item" onClick={ ()=>{props.toggleMode("kr")}}>korea-Kr</button></li>
                      </ul>
                    </li>
                    <li className="nav-item ">
                    <h6 className="nav-link active text-white " style={{marginTop: "2px"}}  >{props.countryName}</h6>
                    </li>
                    <li className="nav-item ">
                    <img  className="nav-link active text-white " style={{marginTop: "2px", marginLeft:"-8px", width:"15mm", height:"11mm"}} src={icons[props.countryName]} alt="flag" />
                    {/* <h6 className="nav-link active text-white " style={{marginTop: "2px", marginLeft:"-8px"}}  >FLAG</h6> */}
                    </li>
                </ul>
                
                

                </div>
            </div>
            
        </nav>
 </div>
    )
}
  
