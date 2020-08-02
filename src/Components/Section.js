import React from "react";
import '../App.css';

function Section(props){
    function changeStyle(e) {
        //e.target.style.background = 'grey';
    }
    function changeBack(e) {
        //e.target.style.background = 'deepskyblue';
    }
    let id = props.value.replace(/ /g,'');
    return(
        <div id = {id} className="section"  onMouseEnter={changeStyle} onMouseLeave={changeBack} onClick={props.onClick}>
            {props.value}
        </div>
    );
}

export default Section;