import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super()
        this.state={
            imageIndex:0,
        }
    }
    render(){

        const {imageIndex} = this.state
        const currentImage = images[imageIndex]
        
        let prevImage = ()=>{
            this.setState((prev)=>(
                {imageIndex:(prev.imageIndex-1+images.length)%images.length}
                ))
        }
        let nextImage = ()=>{
            this.setState((prev)=>(
                {
                    imageIndex:(prev.imageIndex+1)%images.length
                }
            ))
        }

        return <>
        <div className="main-container">
            <div className="prevbutt">
                <ArrowBackIosIcon onClick={prevImage}/>
            </div>
            <div className="image_container">
            <div className="title_box">
                <h1>{currentImage.title}</h1>
            </div>
            <div className="image_box">
                <img src={currentImage.img}/>
            </div>
            <div className="subtitle_box">
                <p>{currentImage.subtitle}</p>
            </div>
            </div>
        <div className="nxtbutt">
            <ArrowForwardIosIcon onClick={nextImage}/>
        </div>
        </div>
        </>
    }
  
}


export default Carousel;