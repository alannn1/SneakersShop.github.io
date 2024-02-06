import { Card, Row, Col}  from "react-bootstrap";
import React, { useState } from "react";
import jordan from "../component/image/nike/jordan.jpg";
import jordan1HRetroOG from "../component/image/nike/jordan1RetroOG.png";
import jordan1LSailblack from "../component/image/nike/jordan1-low-sailblack.png";
import jordan5H from "../component/image/nike/jordan5_1.jpg";
import jordan1LSe from "../component/image/nike/jordan1LSe.png";
import airforce from "../component/image/nike/airforce.jpg";
import airforce1 from "../component/image/nike/nike8.png";
import airforce2 from "../component/image/nike/airforce-1-wb.png";
import airforce3 from "../component/image/nike/airforce-1-white.png";
import af1Pink from "../component/image/nike/af-pink.png";
import af1Xoffwhite from "../component/image/nike/af1Xoffwhite-wy.png";
import af1black from "../component/image/nike/af1-black.png";
import airmax from "../component/image/nike/airmax.jpg";
import airmax1 from "../component/image/nike/nike10.jpg";
import airmaxExcee from "../component/image/nike/airmaxExcee.png";
import airmaxSc from "../component/image/nike/airmaxSc.png";
import airmaxPulse from "../component/image/nike/airmaxPulse.png";
import airmaxSystm from "../component/image/nike/airmaxSystm.png";
import blazer from "../component/image/nike/blazer.jpg";
import blazerMidCreamblack from "../component/image/nike/blazerMid-creamblack.png";
import blazerMidWb from "../component/image/nike/blazerMid-wb.png";
import blazerMidWgreen from "../component/image/nike/blazerMid-wgreen.png";
import blazerMidSe from "../component/image/nike/blazerMidSe.png";
import slider1 from "../component/image/slider/sliderNike1.jpg";
import slider2 from "../component/image/slider/sliderNike2.jpg";
import slider3 from "../component/image/slider/sliderNike3.jpg";
import slider4 from "../component/image/slider/sliderNike4.jpg";
import slider5 from "../component/image/slider/sliderNike5.png";
import {useNavigate} from 'react-router-dom';
import Navigasi from "../component/Navigation";
import Footer from "../component/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LiaShippingFastSolid, LiaMoneyBillWaveSolid } from "react-icons/lia";
import { BsPatchCheck } from "react-icons/bs";

const Nike = () => {
  const navigate = useNavigate(); 
  const handleClick = (page) => {
    navigate(page)
  }

  const settings = {
      centerMode: true,
      infinite: true,
      centerPadding: "80px",
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2700,
      pauseOnHover: false,
      arrows: false
  };

  const [selectedTab, setSelectedTab] = useState('')
  const handleTabChange = (tabId) => {
    setSelectedTab(tabId)
  }
  const renderTabChange = (tabId) => {
    switch(tabId) {
      case 'one':
        return(
          <div>
            <Row>
                {dataJordan.map((jordan) => (
                  <Col md={3} className="mt-3 mb-4">
                  <Card key={jordan.id} id={jordan.id} className="card-brand" style={{cursor: 'pointer'}} onClick={() => handleClick(jordan.page)}>
                    <Card.Img variant="top" src={jordan.img} className="image-card-brand"/>
                      <Card.Body>
                        <Card.Title>{jordan.nama}</Card.Title>
                        <Card.Text>
                          Rp. {jordan.price}
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
          <div>
            <Row>
                {dataAirforce.map((af) => (
                  <Col md={3} className="mt-3 mb-4">
                  <Card key={af.id} id={af.id} className="card-brand" style={{cursor: 'pointer'}} onClick={() => handleClick(af.page)}>
                    <Card.Img variant="top" src={af.img} className="image-card-brand"/>
                      <Card.Body>
                        <Card.Title>{af.nama}</Card.Title>
                        <Card.Text>
                          Rp. {af.price}
                        </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                ))}
              </Row>
          </div>
        )
      case 'three':
        return(
          <div>
            <Row>
              {dataAirmax.map((airmax) => (
                <Col md={3} className="mt-3 mb-4">
                <Card key={airmax.id} id={airmax.id} className="card-brand" style={{cursor: 'pointer'}} onClick={() => handleClick(airmax.page)}>
                  <Card.Img variant="top" src={airmax.img} className="image-card-brand"/>
                    <Card.Body>
                      <Card.Title>{airmax.nama}</Card.Title>
                      <Card.Text>
                        Rp. {airmax.price}
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              ))}
            </Row>
          </div>
        )
      case 'four':
        return(
          <div>
            <Row>
              {dataBlazer.map((blazer) => (
                <Col md={3} className="mt-3 mb-4">
                <Card key={blazer.id} id={blazer.id} className="card-brand" style={{cursor: 'pointer'}} onClick={() => handleClick(blazer.page)}>
                  <Card.Img variant="top" src={blazer.img} className="image-card-brand"/>
                    <Card.Body>
                      <Card.Title>{blazer.nama}</Card.Title>
                      <Card.Text>
                        Rp. {blazer.price}
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              ))}
            </Row>
          </div>
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
        <h3 style={{position:'relative',top:'35px',left:'50px',width:'fit-content'}}>Choose Your Style</h3>
        <div className="tabs-brand">  
          <input type="radio" className="tabs-radio-brand" id="one" name="tabs-example" checked={selectedTab === 'one'} onChange={() => handleTabChange('one')} />
          <label for="one" className="tabs-label-brand"><img src={jordan} alt="" className="tabs-img-brand"/></label>

          <input type="radio" className="tabs-radio-brand" id="two" name="tabs-example" checked={selectedTab === 'two'} onChange={() => handleTabChange('two')} />
          <label for="two" className="tabs-label-brand"><img src={airforce} alt="" className="tabs-img-brand"/></label>

          <input type="radio" className="tabs-radio-brand" id="three" name="tabs-example" checked={selectedTab === 'three'} onChange={() => handleTabChange('three')} />
          <label for="three" className="tabs-label-brand"><img src={airmax} alt="" className="tabs-img-brand"/></label>

          <input type="radio" className="tabs-radio-brand" id="four" name="tabs-example" checked={selectedTab === 'four'} onChange={() => handleTabChange('four')} />
          <label for="four" className="tabs-label-brand"><img src={blazer} alt="" className="tabs-img-brand"/></label>
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
  
const dataJordan = [
  {id: 1, nama: "Air Jordan 1 SE", type: "Jordan", price: "1.550.000", img: jordan1LSe, page: '/#'},
  {id: 1, nama: "Air Jordan 1 Sail Black", type: "Jordan", price: "1.550.000", img: jordan1LSailblack, page: '/#'},
  {id: 1, nama: "Air Jordan 1 Retro OG", type: "Jordan", price: "1.550.000", img: jordan1HRetroOG, page: '/#'},
  {id: 1, nama: "Air Jordan 5", type: "Jordan", price: "1.550.000", img: jordan5H, page: '/#'},
];
const dataAirforce = [
  {id: 1, nama: "Air Force 1'07 ", type: "Airforce", price: "1.550.000", img: airforce1, page: '/#'},
  {id: 2, nama: "Air Force 1'07 ", type: "Airforce", price: "1.550.000", img: airforce2, page: '/#'},
  {id: 3, nama: "Air Force 1'07 Black ", type: "Airforce", price: "1.550.000", img: airforce3, page: '/#'},
  {id: 4, nama: "Air Force 1'07 Pink", type: "Airforce", price: "3.040.000", img: af1Pink, page: '/#'},
  {id: 5, nama: "Air Force 1'07 X Off White ", type: "Airforce", price: "1.550.000", img: af1Xoffwhite, page: '/#'},
  {id: 6, nama: "Air Force 1'07 Black ", type: "Airforce", price: "1.540.000", img: af1black, page: '/#'},
];
const dataAirmax = [
  {id: 1, nama: "Air Max White", type: "Airmax", price: "1.550.000", img: airmax1, page: '/#'},
  {id: 1, nama: "Air Max SC", type: "Airmax", price: "1.190.000", img: airmaxSc, page: '/#'},
  {id: 1, nama: "Air Max Pulse", type: "Airmax", price: "2.739.000", img: airmaxPulse, page: '/#'},
  {id: 1, nama: "Air Max Excee", type: "Airmax", price: "1.549.000", img: airmaxExcee, page: '/#'},
  {id: 1, nama: "Air Max SYSTM", type: "Airmax", price: "1.450.000", img: airmaxSystm, page: '/#'},
]
const dataBlazer = [
  {id: 1, nama: "Blazer Mid '77", type: "Blazer", price: "1.229.000", img: blazerMidCreamblack, page: '/#'},
  {id: 2, nama: "Blazer Mid '77", type: "Blazer", price: "1.429.000", img: blazerMidWb, page: '/#'},
  {id: 3, nama: "Blazer Mid '77 Vintage", type: "Blazer", price: "1.429.000", img: blazerMidWgreen, page: '/#'},
  {id: 3, nama: "Blazer Mid '77 SE", type: "Blazer", price: "1.249.000", img: blazerMidSe, page: '/#'},
]
const dataSlider = [
  {img: slider1},
  {img: slider2},
  {img: slider3},
  {img: slider4},
  {img: slider5},
]
export default Nike;


  