import { Card, Row, Col}  from "react-bootstrap";
import React, { useState } from "react";
import nb1 from "../component/image/nb/nb1.jpg";
import nb3 from "../component/image/nb/nb2.jpg";
import nb4 from "../component/image/nb/nb3.jpg";
import nb5 from "../component/image/nb/nb4.jpg";
import nb6 from "../component/image/nb/nb5.jpg";
import nb2 from "../component/image/nb/nb6.jpg";
import nb7 from "../component/image/nb/nb7.jpg";
import nb8 from "../component/image/nb/nb8.jpg";
import slider1 from "../component/image/slider/sliderNb1.jpg"
import slider2 from "../component/image/slider/sliderNb2.jpg"
import slider3 from "../component/image/slider/sliderNb3.jpg"
import {useNavigate} from 'react-router-dom';
import Navigasi from "../component/Navigation";
import '../style/paymentpage.css'
import Footer from "../component/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LiaShippingFastSolid, LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BsPatchCheck } from "react-icons/bs";

const Newbalance = () => {
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
    switch(tabId) {
      case 'one':
        return(
          <div>
            <Row>
              {dataNb.map((nb) => (
                <Col md={3} className="mt-3 mb-4">
                <Card key={nb.id} id={nb.id} className="card-brand" style={{cursor: 'pointer'}} onClick={() => handleClick(nb.page)}>
                  <Card.Img variant="top" src={nb.img} className="image-card-brand"/>
                    <Card.Body>
                      <Card.Title>{nb.nama}</Card.Title>
                      <Card.Text>
                        Rp. {nb.price} 
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              ))}
            </Row>
          </div>
        )
      case 'two':
        return(
          <div><p>Konten Kedua</p></div>
        )
      case 'three':
        return(
          <div><p>Konten Ketiga</p></div>
        )
      case 'four':
        return(
          <div><p>Konten Keempat</p></div>
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
          <input type="radio" className="tabs-radio-brand" name="tabs-example" id="one" checked={selectedTab === 'one'} onChange={() => handleTabChange('one')} />
          <label for="one" className="tabs-label-brand"><img src={nb1} alt="" className="tabs-img-brand" /></label>

          <input type="radio" className="tabs-radio-brand" name="tabs-example" id="two" checked={selectedTab === 'two'} onChange={() => handleTabChange('two')} />
          <label for="two" className="tabs-label-brand"><img src={nb2} alt="" className="tabs-img-brand" /></label>

          <input type="radio" className="tabs-radio-brand" name="tabs-example" id="three" checked={selectedTab === 'three'} onChange={() => handleTabChange('three')} />
          <label for="three" className="tabs-label-brand"><img src={nb3} alt="" className="tabs-img-brand" /></label>

          <input type="radio" className="tabs-radio-brand" name="tabs-example" id="four" checked={selectedTab === 'four'} onChange={() => handleTabChange('four')} />
          <label for="four" className="tabs-label-brand"><img src={nb4} alt="" className="tabs-img-brand" /></label>
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

  const dataNb = [
    {
        id: 1, nama: "Nb 550 White Black", type: "Nb", price: "2.550.000", img: nb1, page: '/Nb550wb'
    },
    {
        id: 2, nama: "Nb 2002r Grey", type: "Nb", price: "1.550.000", img: nb2, page: '/Nb2002rgrey'
    },
    {
        id: 3, nama: "Nb 530 Moonbeam", type: "Nb", price: "2.750.000", img: nb3, page: '#'
    },
    {
        id: 4, nama: "Neb 2002r Army", type: "Nb", price: "1.550.000", img: nb4, page: '#'
    },
    {
        id: 5, nama: "Nb 327 Brown", type: "Nb", price: "2.550.000", img: nb5, page: '#'
    },
    {
        id: 6, nama: "Nb 650 White", type: "Nb", price: "2.550.000", img: nb6, page: '#'
    },
    {
        id: 7, nama: "Nb 530 Sliver", type: "Nb", price: "2.750.000", img: nb7, page: '#'
    },
    {
        id: 8, nama: "Nb 530 white", type: "Nb", price: "2.000.000", img: nb8, page: '#'
    },
]
  const dataSlider = [
    {img: slider1},
    {img: slider2},
    {img: slider3},
  ]

export default Newbalance;