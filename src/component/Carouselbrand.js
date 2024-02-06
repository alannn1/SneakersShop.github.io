import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import img1 from './image/carouselbrand/nike.jpg'
import img2 from './image/carouselbrand/adidas.jpg'
import img3 from './image/carouselbrand/newbalance.jpg'
import img4 from './image/carouselbrand/reebok.jpg'
import img5 from './image/carouselbrand/converse.jpg'
import img6 from './image/carouselbrand/vans.jpg'
import { useNavigate } from "react-router-dom";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

function Carouselbrand() {
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
};
  const items = [
    {id: 1, img: img1, page: '/Nike', name: 'Nike'},
    {id: 2, img: img2, page: '/Adidas', name: 'Adidas'},
    {id: 3, img: img3, page: '/Nb', name: 'New Balance'},
    {id: 4, img: img4, page: '/#', name: 'Reebok'},
    {id: 5, img: img5, page: '/#', name: 'Converse'},
    {id: 6, img: img6, page: '/#', name: 'Vans'},
  ];
  const navigate = useNavigate()
  const handleClick = (page) => {
    navigate(page)
  }

  function scrollTo() {
    window.scrollTo({
      top: 0, behavior: "instant" })
  }

  return(
    <div className="container-slider">
      <h3 style={{margin:'0vh 0vh 2.5vh 7vh'}}>The Brands You Love</h3>
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          controlsStrategy="alternate"
          paddingLeft={26}
          disableDotsControls
          renderNextButton={() => {
            return <IoIosArrowDroprightCircle className="next-btn"/>
          }}
          renderPrevButton={() => {
            return <IoIosArrowDropleftCircle className="prev-btn"/>
          }}
          items={items.map((image) => (
                  <div>
                    <img src={image.img} alt="" key={image.id} id={image.id} className="image-carousel" onDragStartCapture={handleDragStart} onClick={() => {scrollTo(); handleClick(image.page);}} />
                    <p style={{marginTop:'15px',fontWeight:'bold',fontSize:'18px',fontFamily:'Arial, Helvetica, sans-serif',cursor:'pointer'}}>{image.name}</p>
                  </div>
                  ))
                }
        />
    </div>
  )
}



export default Carouselbrand