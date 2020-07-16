import React from "react";
import '../App.css';

function Section(props){
    function changeStyle(e) {
        e.target.style.background = 'grey';
    }
    function changeBack(e) {
        e.target.style.background = 'deepskyblue';
    }
    return(
        <div className="section"  onMouseEnter={changeStyle} onMouseLeave={changeBack}>
            {props.value}
        </div>
    );
}

export default Section;