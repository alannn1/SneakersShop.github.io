import React, { useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap"; 
import {FaHome} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import sandal1 from '../component/image/sandal/sandal1.jpg';
import sandal2 from '../component/image/sandal/sandal2.jpg';
import sandal3 from '../component/image/sandal/sandal3.jpg';
import sandal4 from '../component/image/sandal/sandal4.jpg';
import sandal5 from '../component/image/sandal/sandal5.jpg';
import sandal6 from '../component/image/sandal/sandal6.jpg';
import sandal7 from '../component/image/sandal/sandal7.jpg';
import sandal8 from '../component/image/sandal/sandal8.jpg';
import sandal9 from '../component/image/sandal/sandal9.jpg';

const Sandal = () => {
    const [selectedBrand, setSelectedBrand] = useState("all");
    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };
    const sandal = selectedBrand === "all" ? dataSandal : dataSandal.filter(item=>item.brand.toLowerCase() === selectedBrand.toLowerCase());
    
    const navigate = useNavigate();
    const handleClick = (page) => {
        navigate(page);
    };


    return(
        <div className="contentSandal">
            <div>
            <FaHome onClick={() => navigate('/')} style={{position: 'relative', bottom: '80px', right: '10px', fontSize: '2rem', cursor: 'pointer'}}/>
            </div>
            <div className="asideFilter">
                <aside>
                    <Form.Group controlId="formBrand" className="filterBrand">
                        <Form.Label className="mb-3 fw-bold fs-6">Brand</Form.Label>
                        <Form.Check type="checkbox" className="checkbox" label="Semua" id="Semua" value="all" checked={selectedBrand === "all"} onChange={handleBrandChange}/>
                        <Form.Check type="checkbox" className="checkbox" label="Nike" id="Nike" value="nike" checked={selectedBrand === "nike"} onChange={handleBrandChange}/>
                        <Form.Check type="checkbox" className="checkbox" label="Jordan" id="Jordan" value="jordan" checked={selectedBrand === "jordan"} onChange={handleBrandChange}/>
                        <Form.Check type="checkbox" className="checkbox" label="Adidas" id="Adidas" value="adidas" checked={selectedBrand === "adidas"} onChange={handleBrandChange}/>
                        <Form.Check type="checkbox" className="checkbox" label="Crocs" id="Crocs" value="crocs" checked={selectedBrand === "crocs"} onChange={handleBrandChange}/>
                    </Form.Group>
                </aside>
            </div>
            <Row>
                <hr/>
                {sandal.map((sandal) => (
                <Col md={3} className="mt-3 mb-4" key={sandal.id}>
                    <Card id={sandal.id} key={sandal.id} className="cardSandal" style={{cursor: 'pointer'}} onClick={() => handleClick(sandal.page)}>
                    <Card.Img variant="top" src={sandal.img} className="imageSandal"/>
                        <Card.Body>
                        <Card.Title>{sandal.name}</Card.Title>
                        <Card.Text>
                            Rp. {sandal.price}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    )
}

export default Sandal;

const dataSandal = [
    {
        id: 1, name: "Nike Calm Slide", brand: "Nike", price: "650.000", img: sandal1, page: '/'
    },
    {
        id: 2, name: "Jordan Post Slide", brand: "Jordan", price: "700.000", img: sandal2, page: '#' 
    },
    {
        id: 3, name: "Adidas Adilette 22", brand: "Adidas", price: "800.000", img: sandal3, page: '#' 
    },
    {
        id: 4, name: "Nike AirMAx 1 Slide", brand: "Nike", price: "700.000", img: sandal4, page: '#' 
    },
    {
        id: 5, name: "Adidas Adilette 22", brand: "Adidas", price: "600.000", img: sandal5, page: '#' 
    },
    {
        id: 6, name: "Crocs Mellow", brand: "Crocs", price: "650.000", img: sandal6, page: '#' 
    },
    {
        id: 7, name: "Adidas Adilette 22", brand: "Adidas", price: "600.000", img: sandal7, page: '#' 
    },
    {
        id: 8, name: "Adidas Comfort", brand: "Adidas", price: "500.000", img: sandal8, page: '#' 
    },
    {
        id: 9, name: "Adidas Adilette Junior", brand: "Adidas", price: "400.000", img: sandal9, page: '#' 
    },
]