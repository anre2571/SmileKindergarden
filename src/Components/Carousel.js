
import React from "react";
import '../App.css';
import carousel1 from '../Images/carousel1.png';
import carousel2 from '../Images/carousel2.png';
import carousel3 from '../Images/carousel3.png';
import carousel4 from '../Images/carousel4.png';
import carousel5 from '../Images/carousel5.png';
import carousel6 from '../Images/carousel6.png';
import carousel7 from '../Images/carousel7.png';





//npm install react-elastic-carousel
//import Carousel from 'react-elastic-carousel'
function CarouselContainer(props){

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides() {
        showSlides(slideIndex += 1);
    }
    function minusSlides() {
        showSlides(slideIndex += -1);
    }

    function showSlides(n) {

        let i;
        let slides = document.getElementsByClassName("my_Slides");
        slides = [...slides];
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    if(slides.length > 0)
        slides[slideIndex-1].style.display = "block";

    }

    return(
        <div>
        <div className="slideshow-container">
            <div className="my_Slides fade shown">
                <img  className="carousel_images" src={carousel1} width="100%" height="100%"/>

            </div>

            <div className="my_Slides fade">
                <img className="carousel_images" src={carousel2}  width="100%" height="100%"/>

            </div>

            <div className="my_Slides fade">
                <img className="carousel_images" src={carousel3} width="100%" height="100%"/>
            </div>

            <div className="my_Slides fade">
                <img className="carousel_images" src={carousel4} width="100%" height="100%"/>
            </div>

            <div className="my_Slides fade">
                <img className="carousel_images" src={carousel5} width="100%" height="100%"/>
            </div>

            <div className="my_Slides fade">
                <img className="carousel_images" src={carousel6} width="100%" height="100%"/>
            </div>

            <div className="my_Slides fade">
                <img className="carousel_images" src={carousel7} width="100%" height="100%"/>
            </div>





            <a className="prev" onClick={plusSlides}>&#10094;</a>
            <a className="next" onClick={minusSlides}>&#10095;</a>

        </div>


        </div>




    );
}

export default CarouselContainer;