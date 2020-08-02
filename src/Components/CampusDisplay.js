import React from "react";
import '../App.css';

function CampusDisplay(props){

    let items = props.value.map((name, index) =>
        <div key={name} id={name} className={"campus_names " + (index===0?'selected':'')} onClick={addActiveClass}>{name}</div>
    );
    function addActiveClass(e) {
        let campuses = document.getElementsByClassName("campus_names");
        campuses =  [...campuses]; //converting collection to array

        campuses.map((campus, index)=> campus.classList.remove("selected"));
        let selectedCampus = document.getElementById(e.currentTarget.id);
        selectedCampus.classList.add('selected');

    }

    return(
        <div id="campus_display">
           <div id="campus_title">CAMPUS</div>
            {items}
        </div>
    );
}

export default CampusDisplay;