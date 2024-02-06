import React, { useState } from 'react';
import { Card, Row, Col }  from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import women1 from '../component/image/women/women1.jpg'
import women2 from '../component/image/women/women2.jpg'
import women3 from '../component/image/women/women3.jpg'
import women4 from '../component/image/women/women4.jpg'
import men1 from '../component/image/men/men1.jpg'
import men2 from '../component/image/men/men2.jpg'
import men3 from '../component/image/men/men3.jpg'
import men4 from '../component/image/men/men4.jpg'

function Tabcontent() {
    const navigate = useNavigate();
    const handleClick = (page) => {
        navigate(page)
    }

    const [selectedTab, setSelectedTab] = useState('one')
    const handleTabChange = (tabId) =>{
        setSelectedTab(tabId)
    }
    const renderTabChange = (tabId) =>{
        switch(tabId) {
            case 'one': {
                return(
                    <div>
                        <Row>
                        {dataMen.map((img) => (
                        <Col md={3}>
                            <Card className='tabs-card'>
                                <Card.Img src={img.img} className='tabs-img' onClick={() => handleClick(img.page)}/>
                                <Card.Body className='tabs-desc'>
                                    <Card.Title>{img.nama}</Card.Title>
                                    <Card.Text>{img.price}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                    </div>
                )
            }
            case 'two': {
                return(
                    <div>
                        <Row>
                        {dataWomen.map((img) => (
                            <Col md={3}>
                                <Card className='tabs-card'>
                                    <Card.Img src={img.img} className='tabs-img' onClick={() => handleClick(img.page)}/>
                                    <Card.Body className='tabs-desc'>
                                        <Card.Title>{img.nama}</Card.Title>
                                        <Card.Text>{img.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    </div>
                )
            }
            default:
                return null
        }
    }
    return (
        <div className='container-tabcontent'>
            <div><h3 style={{left:'7vh',position:'relative',top:'11.5vh'}}>Our Top Pick's</h3></div>
            <div className='tabs'>
                <div className='tabs-toppick'>    
                    <input type='radio' className='tabs-radio' id='one' name='tabs-example' checked={selectedTab === 'one'} onChange={() => handleTabChange('one')}/>
                    <label for='one' className='tabs-label'>Shop Mens</label>

                    <input type='radio' className='tabs-radio' id='two' name='tabs-example' checked={selectedTab === 'two'} onChange={() => handleTabChange('two')} />
                    <label for='two' className='tabs-label'>Shop Womens</label>
                </div>
                <div>
                    {renderTabChange(selectedTab)}
                </div>
            </div>
        </div>
    );
}


const dataMen = [
    {id: 1, img: men1, nama: "Hodrics Short", price: "Rp. 759.000", page: '/#'},
    {id: 2, img: men2, nama: "Adidas Poly Tshirt", price: "Rp. 900.000", page: '/#'},
    {id: 3, img: men3, nama: "Jordan Air 1 Low", price: "Rp. 1.729.000", page: '/#'},
    {id: 4, img: men4, nama: "Jordan Air 1 High", price: "Rp. 1.939.000", page: '/#'},
]
const dataWomen = [
    {id: 1, img: women1, nama: "On Cloudrift Womens", price: "Rp. 2.500.000", page: '/#'},
    {id: 2, img: women2, nama: "Jordan Tshirts Womens", price: "Rp. 2.500.000", page: '/#'},
    {id: 3, img: women3, nama: "Nike Sportwear Shorts", price: "Rp. 2.500.000", page: '/#'},
    {id: 4, img: women4, nama: "Nb 610 Womens", price: "Rp. 2.500.000", page: '/#'},
]


export default Tabcontent;