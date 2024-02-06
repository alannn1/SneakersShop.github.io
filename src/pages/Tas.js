import React, { useState } from "react";
import {Card, Col, Row, Form} from 'react-bootstrap';
import {FaHome} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import tas1 from '../component/image/tas/tas1.jpg';
import tas2 from '../component/image/tas/tas2.jpg';
import tas3 from '../component/image/tas/tas3.jpg';
import tas4 from '../component/image/tas/tas4.jpg';
import tas5 from '../component/image/tas/tas5.jpg';
import tas6 from '../component/image/tas/tas6.jpg';
import tas7 from '../component/image/tas/tas7.jpg';
import tas8 from '../component/image/tas/tas8.jpg';
import tas9 from '../component/image/tas/tas9.jpg';
import tas10 from '../component/image/tas/tas10.jpg';
import tas11 from '../component/image/tas/tas11.jpg';
import tas12 from '../component/image/tas/tas12.jpg';

const Tas = () => {
    const [selectedBrand, setSelectedBrand] = useState("all");
    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };
    const tas = selectedBrand === "all" ? dataTas : dataTas.filter(item => item.brand.toLowerCase() === selectedBrand.toLowerCase());
    const navigate = useNavigate();
    const handleClick = (page) => {
        navigate(page);
    };

    
    return(
    <div className="contentTas">
        <div className="asideFilter">
            <div>
            <FaHome onClick={() => navigate('/')} style={{position: 'relative', bottom: '80px', right: '10px', fontSize: '2rem', cursor: 'pointer'}}/>
            </div>
            <aside>
                <Form.Group controlId="formBrand" className="filterBrand">
                    <Form.Label className="mb-3 fw-bold fs-6">Brand</Form.Label>
                    <Form.Check type="checkbox" className="checkbox" label="Semua" id="Semua" value="all" checked={selectedBrand === "all"} onChange={handleBrandChange}/>
                    <Form.Check type="checkbox" className="checkbox" label="Nike" id="Nike" value="nike" checked={selectedBrand === "nike"} onChange={handleBrandChange}/>
                    <Form.Check type="checkbox" className="checkbox" label="Adidas" id="Adidas" value="adidas" checked={selectedBrand === "adidas"} onChange={handleBrandChange}/>
                </Form.Group>
            </aside>
        </div>
        <Row>
            <hr/>
            {tas.map((tas) => (
            <Col md={3} className="mt-3 mb-4" >
                <Card className="cardTas" id={tas.id} key={tas.id} style={{cursor: 'pointer'}} onClick={() => handleClick(tas.page)}>
                <Card.Img variant="top" src={tas.img} className="imageTas"/>
                    <Card.Body>
                    <Card.Title>{tas.name}</Card.Title>
                    <Card.Text>
                        Rp. {tas.price}
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    </div>
    )
}

export default Tas;

const dataTas = [
    {
        id: 1, name: "Tas Nike Black", brand: "Nike", price: "550.000", img: tas1, page: '/'
    },
    {
        id: 2, name: "Tas Nike Brown", brand: "Nike", price: "400.000", img: tas2, page: '#'
    },
    {
        id: 3, name: "Tas Nike", brand: "Nike", price: "500.000", img: tas3, page: '#'
    },
    {
        id: 4, name: "Tas Nike", brand: "Nike", price: "400.000", img: tas4, page: '#'
    },
    {
        id: 5, name: "Tas Nike", brand: "Nike", price: "550.000", img: tas5, page: '#'
    },
    {
        id: 6, name: "Tas Nike", brand: "Nike", price: "500.000", img: tas6, page: '#'
    },
    {
        id: 7, name: "Tas Nike", brand: "Nike", price: "400.000", img: tas7, page: '#'
    },
    {
        id: 8, name: "Tas Nike", brand: "Nike", price: "350.000", img: tas8, page: '#'
    },
    {
        id: 9, name: "Tas Adidas Green", brand: "Adidas", price: "500.000", img: tas9, page: '#'
    },
    {
        id: 10, name: "Tas Adidas", brand: "Adidas", price: "300.000", img: tas10, page: '#'
    },
    {
        id: 11, name: "Tas Adidas", brand: "Adidas", price: "500.000", img: tas11, page: '#'
    },
    {
        id: 12, name: "Tas Nike Jordan", brand: "Nike", price: "500.000", img: tas12, page: '#'
    },
]