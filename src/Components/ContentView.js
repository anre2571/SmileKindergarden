import React from "react";
import '../App.css';

function ContentView(props){

    return(
        <div className="content_view">
            <div id="close_btn"
                 onClick={props.handleClick}></div>
            <div id="content_text">{props.value}</div>
        </div>
    );
}

export default ContentView;