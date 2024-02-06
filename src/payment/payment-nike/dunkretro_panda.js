import React, {useState} from 'react'
import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Navigasi from '../../component/Navigation'
import imgPay1 from '../../component/image/nike/dunkpanda_1.png'
import imgPay2 from '../../component/image/nike/dunkpanda_1.1.png'
import imgPay3 from '../../component/image/nike/dunkpanda_1.2.png'
import imgPay4 from '../../component/image/nike/dunkpanda_1.3.png'
import imgPay5 from '../../component/image/nike/dunkpanda_1.4.png'
import imgrekom1 from '../../component/image/nike/airforce-1-white.png'
import imgrekom2 from '../../component/image/nike/dunk-low-retro-jungle.png'
import imgrekom3 from '../../component/image/nike/dunk-low-retro-red.png'
import imgrekom4 from '../../component/image/nike/dunk-low-twist.png'
import imgrekom5 from '../../component/image/nike/jordan1-low-sailblack.png'
import imgrekom6 from '../../component/image/nike/airforce-1-wb.png'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Footer from '../../component/Footer';

function Dunkretropanda() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    };
    
    const [isActive, setIsActive] = useState(false);
    const handleButton = (buttonId) => {
        setIsActive(buttonId);
    };
    
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };

    return (
        <div>
            <Navigasi />
            <div>
                <aside className='asidePayment'>
                    <Carousel 
                        slide={false}
                        indicators={false}
                        onSelect={handleSelect}
                        activeIndex={index}
                        interval={null}
                        className='carouselPay'
                        >
                        {dataImage.map((img) => (
                            <Carousel.Item>
                                <img src={img.img} alt="" className='imagePayment' />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <div className='thumbnail-container'>
                        {[imgPay1, imgPay2, imgPay3, imgPay4, imgPay5].map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                className={`thumbnail ${index === idx ? 'activePay' : ''}`}
                                onClick={() => setIndex(idx)}
                            />
                        ))}
                    </div>
                </aside>
            </div>
            <div className='contentPaymentNb'>
                <hr />
                <div className='Judul'>
                    <p className='text-danger'>Nike</p>
                    <p style={{fontSize:'35px'}}>Dunk Low Retro Panda</p>
                    <p style={{fontSize:'18px', marginTop:'-20px'}}>Men's</p>
                    <p style={{fontSize:'18px'}}>Rp. 1.550.000</p>
                </div>
                    
                <div className='Size'>
                    <p style={{position:'relative', bottom:'20vh', left:'3.5vh', fontSize:'17px'}}>Select Size</p>
                    <Button variant='outline-dark' className={`btnSize ${isActive === 1 ? 'activebtn' : ''}`} onClick={() => handleButton(1)}>EU 38</Button>
                    <Button variant='outline-dark' className={`btnSize ${isActive === 2 ? 'activebtn' : ''}`} onClick={() => handleButton(2)}>EU 39</Button>
                    <Button variant='outline-dark' className={`btnSize ${isActive === 3 ? 'activebtn' : ''}`} onClick={() => handleButton(3)}>EU 40</Button>
                    <Button variant='outline-dark' className={`btnSize ${isActive === 4 ? 'activebtn' : ''}`} onClick={() => handleButton(4)}>EU 41</Button>
                    <Button variant='outline-dark' className={`btnSize ${isActive === 5 ? 'activebtn' : ''}`} onClick={() => handleButton(5)}>EU 42</Button>
                    <Button variant='outline-dark' className={`btnSize ${isActive === 6 ? 'activebtn' : ''}`} onClick={() => handleButton(6)}>EU 43</Button>
                    <Button variant='outline-dark' className={`btnSize ${isActive === 7 ? 'activebtn' : ''}`} onClick={() => handleButton(7)}>EU 44</Button>
                    <Button variant='outline-dark' className={`btnSize ${isActive === 8 ? 'activebtn' : ''}`} onClick={() => handleButton(8)}>EU 45</Button>
                    <Button variant='outline-dark' className={`btnSize ${isActive === 9 ? 'activebtn' : ''}`} onClick={() => handleButton(9)}>EU 46</Button>
                    <Button variant='outline-dark' className={`btnSize ${isActive === 10 ? 'activebtn' : ''}`} disabled>EU 47</Button>
                </div>
            </div>
            <section className='container-rekomend'>
                <div className='container-slickslider'>
                    <h3 style={{margin:'0px 0px 30px 45px',fontSize:'1.5rem',fontWeight:'lighter'}}>You Might Also Like</h3>
                    <AliceCarousel
                        responsive={responsive}
                        disableDotsControls
                        paddingLeft={40}
                        controlsStrategy='alternate'
                        renderNextButton={() => {
                            return <IoIosArrowDropright style={{fontSize:'3.2rem',position:'relative',bottom:'75vh',left:'98.5vh',cursor:'pointer'}}/>
                        }}
                        renderPrevButton={() => {
                            return <IoIosArrowDropleft style={{fontSize:'3.2rem',position:'relative',bottom:'75vh',left:'98.5vh',cursor:'pointer'}}/>
                        }}
                        items={datarekomend.map((image) => (
                            <div className='card'>
                                <img src={image.img} alt='' className='image-rekomend' />
                                <div className='text-card'>
                                    <h5>{image.name}</h5>
                                    <p>{image.price}</p>
                                </div>
                            </div>
                        ))}
                    >
                    </AliceCarousel>
                </div>
            </section>
            <footer className='footer-payment'>
                <Footer />
            </footer>
        </div>            
    );
}

const dataImage = [
    {img: imgPay1},
    {img: imgPay2},
    {img: imgPay3},
    {img: imgPay4},
    {img: imgPay5},
]
const datarekomend = [
    {img: imgrekom1, name: 'Air Force 1', price: '1.250.000'},
    {img: imgrekom2, name: 'Dunk Retro Jungle', price: '1.800.000'},
    {img: imgrekom3, name: 'Dunk Retro Red', price: '1.800.000'},
    {img: imgrekom4, name: 'Dunk Twist', price: '2.700.00'},
    {img: imgrekom5, name: 'Air Force 1', price: '2.700.00'},
    {img: imgrekom6, name: 'Dunk Twist', price: '2.700.00'},
]
export default Dunkretropanda;