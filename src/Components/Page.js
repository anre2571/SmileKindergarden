import React from "react";
import Section from "./Section";
import '../App.css';


class Page extends React.Component{
    renderSection(i){
        return (<Section
            value={i}
        />);
    }
    render(){
        return(
            <div className="page">

                <div className="left_column">
                    {this.renderSection("News")}
                    {this.renderSection("Announcement")}
                    {this.renderSection("Photo Albums")}
                    {this.renderSection("Parent-Child Interaction")}
                </div>
                <div className="middle_column">
                    {this.renderSection("Content")}

                </div>
                <div className="right_column">
                    {this.renderSection("Schedule")}
                    {this.renderSection("Restaurant Menu")}
                    {this.renderSection("Courses")}
                    {this.renderSection("Events")}
                    {this.renderSection("Counselling")}
                    {this.renderSection("Contact")}
                </div>
            </div>

        );
    }
}

export default Page;