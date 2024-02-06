import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './image/slider/slider1.jpg';
import img2 from './image/slider/slider2.jpg';
import img3 from './image/slider/slider3.jpg';
import img4 from './image/slider/slider4.jpg';
import img5 from './image/slider/slider5.jpg';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function CarouselPage() {
    const [index, setIndex] = useState(0);
    const handselect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const handleDragStart = (e) => e.preventDefault();
    return (
        <div className='Carouselslider'>
            <Carousel 
                activeIndex={index} 
                onSelect={handselect} 
                touch={true} 
                interval={3000}
                enableSwipe={true}
                indicators={false} 
                nextIcon={<IoIosArrowForward className='nextIcon'/>} 
                prevIcon={<IoIosArrowBack className='prevIcon'/>}>
                    {dataImage.map((image) => (
                        <Carousel.Item>
                            <img style={{height:'100vh'}}
                                className="d-block w-100"
                                src={image.img}
                                alt="First slide"
                                onDragStart={handleDragStart}
                                />
                        </Carousel.Item>
                    ))}
            </Carousel>
        </div>
    )
}

const dataImage = [
    {img: img1},
    {img: img2},
    {img: img3},
    {img: img4},
    {img: img5},
]

export default CarouselPage