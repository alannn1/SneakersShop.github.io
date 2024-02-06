import { Card, Row, Col}  from "react-bootstrap";
import React, { useState } from "react";
import adidas1 from "../component/image/adidas/adidas1.jpg";
import adidas2 from "../component/image/adidas/adidas2.jpg";
import adidas3 from "../component/image/adidas/adidas3.jpg";
import adidas4 from "../component/image/adidas/adidas4.jpg";
import adidas5 from "../component/image/adidas/adidas5.jpg";
import adidas6 from "../component/image/adidas/adidas6.jpg";
import adidas7 from "../component/image/adidas/adidas7.jpg";
import adidas8 from "../component/image/adidas/adidas8.jpg";
import adidas9 from "../component/image/adidas/adidas9.jpg";
import adidas10 from "../component/image/adidas/adidas10.jpg";
import slider1 from "../component/image/slider/sliderAdidas1.jpg"
import slider2 from "../component/image/slider/sliderAdidas2.jpg"
import {useNavigate} from 'react-router-dom';
import Navigasi from "../component/Navigation";
import Footer from "../component/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LiaShippingFastSolid, LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BsPatchCheck } from "react-icons/bs";


const Adidas = () => {
  const navigate = useNavigate();  
  const handleClick = (page) => {
    navigate(page);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "70px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2700,
    pauseOnHover: true,
    arrows: false
  };

  const [selectedTab, setSelectedTab] = useState('one')
  const handleTabChange = (tabId) => {
    setSelectedTab(tabId)
  }
  const renderTabChange = (tabId) => {
    switch (tabId) {
      case 'one':
        return (
          <div>
            <Row>
              {dataAdidas.map((adidas) => (
                <Col md={3} className="mt-3" >
                <Card id={adidas.id} key={adidas.id} className="card-brand" onClick={() => handleClick(adidas.page)} style={{cursor: 'pointer'}}>
                  <Card.Img variant="top" src={adidas.img} className="image-card-brand"/>
                    <Card.Body>
                      <Card.Title>{adidas.nama}</Card.Title>
                      <Card.Text>
                        Rp. {adidas.price} 
                      </Card.Text>
                    </Card.Body>
                </Card>
              </Col>
              ))}
            </Row>
          </div>
        );
      case 'two':
        return(
          <div><p>Kontent Kedua</p></div>
        )
      case 'three':
        return(
          <div><p>Kontent Ketifa</p></div>
        )
      default:
        return null;
    }
  }

    return (
      <div className="container-content-brand">
        <div>
          <Navigasi />
          <main className='Container'>
                <section className='animation'>
                    <div className='first'><div>FREE SHIPPING NATIONWIDE <LiaShippingFastSolid/></div></div>
                    <div className='second'><div>LEGIT <BsPatchCheck/></div></div>
                    <div className='third'><div>CASH ON DELIVERY <LiaMoneyBillWaveSolid/></div></div>
                </section>
            </main>
        </div>
        <div className="content-slider-brand">
          <Slider {...settings}>
            {dataSlider.map((slider) => (
              <img src={slider.img} alt="" className="img-slider-brand" />
            ))}
          </Slider>
        </div>
        <div className="tabs-brand">
          <input type="radio" id="one" name="tabs-example" className="tabs-radio-brand" checked={selectedTab === 'one'} onChange={() => handleTabChange('one')} />
          <label for="one" className="tabs-label-brand"><img src={adidas1} alt="" className="tabs-img-brand"/></label>

          <input type="radio" id="two" name="tabs-example" className="tabs-radio-brand" checked={selectedTab === 'two'} onChange={() => handleTabChange('two')} />
          <label for="two" className="tabs-label-brand"><img src={adidas2} alt="" className="tabs-img-brand"/></label>

          <input type="radio" id="three" name="tabs-example" className="tabs-radio-brand" checked={selectedTab === 'three'} onChange={() => handleTabChange('three')} />
          <label for="three" className="tabs-label-brand"><img src={adidas3} alt="" className="tabs-img-brand"/></label>
        </div>
        <div className="tabs-content-brand">
          {renderTabChange(selectedTab)}
        </div>
        <footer style={{marginTop:'auto'}}>
          <Footer />
        </footer>
      </div>
    );
  }
  
  const dataAdidas = [
    {
        id: 1, nama: "Adidas Black White", type: "Adidas", price: "2.550.000", img: adidas1, page: '#'
    },
    {
        id: 2, nama: "Adidas Zoom Fly 5", type: "Adidas", price: "1.550.000", img: adidas2, page: '#'
    },
    {
        id: 3, nama: "Adidas Elevate 3", type: "Adidas", price: "2.750.000", img: adidas3, page: '#'
    },
    {
        id: 4, nama: "Adidas Elevate 3", type: "Adidas", price: "1.550.000", img: adidas4, page: '#'
    },
    {
        id: 5, nama: "Adidas Elevate 3", type: "Adidas", price: "2.550.000", img: adidas5, page: '#'
    },
    {
        id: 6, nama: "Adidas Elevate 3", type: "Adidas", price: "2.550.000", img: adidas6, page: '#'
    },
    {
        id: 7, nama: "Adidas Elevate 3", type: "Adidas", price: "2.750.000", img: adidas7, page: '#'
    },
    {
        id: 8, nama: "Adidas Elevate 3", type: "Adidas", price: "2.000.000", img: adidas8, page: '#'
    },
    {
        id: 9, nama: "Adidas Elevate 3", type: "Adidas", price: "2.000.000", img: adidas9, page: '#'
    },
    {
        id: 10, nama: "Adidas Elevate 3", type: "Adidas", price: "2.000.000", img: adidas10, page: '#'
    },
]
  const dataSlider = [
    {img: slider1},
    {img: slider2},
  ]

  export default Adidas;