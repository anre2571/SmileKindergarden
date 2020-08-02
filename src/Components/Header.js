import React from "react";
import '../App.css';
import CampusDisplay from "./CampusDisplay";

function Header(props){
    //console.log(props.value);
    function changeStyle(e) {
       //e.target.style.background = 'grey';
    }
    function changeBack(e) {
       // e.target.style.background = 'deepskyblue';
    }
    return(
        <div className="header">
            <div id="logo" className="headerItem" onMouseEnter={changeStyle} onMouseLeave={changeBack}>{props.value[0]}</div>
            <div id="homepage_title" className="headerItem" onMouseEnter={changeStyle} onMouseLeave={changeBack}><CampusDisplay value={props.value[1]}/></div>
            <div id="login_title" className="headerItem" onMouseEnter={changeStyle} onMouseLeave={changeBack}>{props.value[2]}</div>
        </div>
    );
}

export default Header;