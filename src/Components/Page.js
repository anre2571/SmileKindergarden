import React from "react";
import Section from "./Section";
import Header from "./Header";
import '../App.css';
import ContentView from "./ContentView";
import CarouselContainer from "./Carousel";


class Page extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            contentView: false,
            contentText:'',
        }
        this.showContentView = this.showContentView.bind(this);
    }
    showContentView(text) {
        this.setState({ contentView: true });
        this.setState({ contentText: text });

    }
    closeContentView(){
        this.setState({ contentView: false });
    }


    renderSection(sectionName){
        return (<Section
            value={sectionName}  onClick={()=>this.showContentView(sectionName)}
        />);
    }

    renderHeader(logo, homepageTitle, loginTitle){
        let fields = [];
        fields.push(logo);
        fields.push(homepageTitle);
        fields.push(loginTitle);

        return (<Header
            value={fields}
        />);
    }

    renderContentView(contentText){

        return (<ContentView
            value={contentText} handleClick={()=>this.closeContentView()}
        />);
    }

    render(){
        return(
            <div className="page">
                <div >
                    {this.renderHeader("",["ABC", "DEF", "GHI", "JKL","MNO"],"Login")}


                </div>
                <div className="pageBody">
                    <div className="left_column">
                        <div className="inner_sub_row">
                            {this.renderSection("News")}
                            {this.renderSection("Announcements")}
                        </div>

                        {this.renderSection("Photo Albums")}
                        {this.renderSection("Parent-Child Interaction")}
                    </div>


                    { this.state.contentView ? <div className="middle_column">
                       {/* <div id="close_btn"
                            onClick={()=>this.closeContentView()}></div>*/}

                        {this.renderContentView(this.state.contentText)}
                    </div>: null }



                    <div className="right_column">
                        <div id="carousel_container">
                            <CarouselContainer />
                        </div>
                        <div className="sub_row">
                            {this.renderSection("Events")}
                            <div className="sub_column">
                                <div className="inner_sub_row">
                                {this.renderSection("Schedule")}
                                {this.renderSection("Restaurant Menu")}
                                {this.renderSection("Courses")}
                                </div>
                                <div className="inner_sub_row">
                                {this.renderSection("Counselling")}
                                {this.renderSection("Contact")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Page;