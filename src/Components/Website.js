import React from "react";
import Page from "./Page";
import '../App.css';

class Website extends React.Component{
    render(){
        return(
            <div className="website">
                <div>
                    <Page />
                </div>
            </div>
        );
    }
}

export default Website;