import React, { useState } from "react";
import {Row, Col, Card, Form} from 'react-bootstrap';
import {FaHome} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import sepatu1 from '../component/image/nike/nike8.png';
import sepatu2 from '../component/image/nb/nb10.jpg';
import sepatu3 from '../component/image/adidas/adidas10.jpg';
import sepatu4 from '../component/image/nb/nb8.jpg';
import sepatu5 from '../component/image/nike/nike3.png';
import sepatu6 from '../component/image/adidas/adidas8.jpg';
import sepatu7 from '../component/image/nike/nike4.png';
import sepatu8 from '../component/image/nb/nb6.jpg';
import sepatu9 from '../component/image/adidas/adidas4.jpg';
import sepatu10 from '../component/image/nb/nb10.jpg';
import sepatu11 from '../component/image/nike/nike2.png';
import sepatu12 from '../component/image/nike/nike9.jpg';
import sepatu13 from '../component/image/adidas/adidas9.jpg';
import sepatu14 from '../component/image/nb/nb1.jpg';
import sepatu15 from '../component/image/adidas/adidas3.jpg';
import sepatu16 from '../component/image/nike/nike5.png';
import sepatu17 from '../component/image/nb/nb8.jpg';



const Sepatu = () => {
    const [selectedBrand, setselectedBrand] = useState("all");
    const handleBrandChange = (event) => {
        setselectedBrand(event.target.value);
    };
    const sepatu = selectedBrand === "all" ? dataSepatu : dataSepatu.filter(item=>item.brand.toLowerCase() === selectedBrand.toLowerCase());
    const navigate = useNavigate();
    const handleClick = (page) => {
        navigate(page);
    };


    return(
        <div className="contentSepatu">
            <div>
                <FaHome onClick={() => navigate('/')} style={{position: 'relative', bottom: '80px', right: '10px', fontSize: '2rem', cursor: 'pointer'}}/>
            </div>
            <div className="asideFilter">
                <aside>
                    <Form.Group controlId="formBrand" className="filterBrand">
                        <Form.Label className="mb-4 fw-bold fs-6">Brand</Form.Label>
                        <Form.Check type="checkbox" className="checkbox" label="Semua" id="Semua" value="all" checked={selectedBrand === "all"} onChange={handleBrandChange}/>
                        <Form.Check type="checkbox" className="checkbox" label="Nike" id="Nike" value="nike" checked={selectedBrand === "nike"} onChange={handleBrandChange}/>
                        <Form.Check type="checkbox" className="checkbox" label="Nb" id="Nb" value="nb" checked={selectedBrand === "nb"} onChange={handleBrandChange}/>
                        <Form.Check type="checkbox" className="checkbox" label="Adidas" id="Adidas" value="adidas" checked={selectedBrand === "adidas"} onChange={handleBrandChange}/>
                    </Form.Group>
                </aside>
            </div>
            <Row className="content-card-sepatu">
                {sepatu.map((sepatu) => (
                    <Col md={3} className="mt-3 mb-4">
                    <Card className="cardSepatu" id={sepatu.id} key={sepatu.id} style={{cursor: 'pointer'}} onClick={() => handleClick(sepatu.page)}>
                    <Card.Img variant="top" src={sepatu.img} className="imageSepatu"/>
                        <Card.Body>
                        <Card.Title>{sepatu.nama}</Card.Title>
                        <Card.Text>
                            Rp. {sepatu.price} 
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    )
}

const dataSepatu = [
    {id: 1, nama: "Nike", brand: "Nike", price: "1.900.000", img: sepatu1, page: '/'},
    {id: 2, nama: "New Balance", brand: "Nb", price: "2.350.000", img: sepatu2, page: '#'},
    {id: 3, nama: "Adidas", brand: "Adidas", price: "1.800.000", img: sepatu3, page: '#'},
    {id: 4, nama: "New Balance", brand: "Nb", price: "1.800.000", img: sepatu4, page: '#'},
    {id: 5, nama: "Nike", brand: "Nike", price: "850.000", img: sepatu5, page: '#'},
    {id: 6, nama: "Adidas", brand: "Adidas", price: "999.000", img: sepatu6, page: '#'},
    {id: 7, nama: "Nike", brand: "Nike", price: "1.500.000", img: sepatu7, page: '#'},
    {id: 8, nama: "New Balance", brand: "Nb", price: "2.700.000", img: sepatu8, page: '#'},
    {id: 9, nama: "Adidas", brand: "Adidas", price: "1.000.000", img: sepatu9, page: '#'},
    {id: 10, nama: "New Balance", brand: "Nb", price: "2.000.000", img: sepatu10, page: '#'},
    {id: 11, nama: "Nike", brand: "Nike", price: "1.100.000", img: sepatu11, page: '#'},
    {id: 12, nama: "Nike", brand: "Nike", price: "1.700.000", img: sepatu12, page: '#'},
    {id: 13, nama: "Adidas", brand: "Adidas", price: "1.500.000", img: sepatu13, page: '#'},
    {id: 14, nama: "Nb 534 White Black", brand: "Nb", price: "2.200.000", img: sepatu14, page: '/PayNb534wb'},
    {id: 15, nama: "Adidas", brand: "Adidas", price: "700.000", img: sepatu15, page: '#'},
    {id: 16, nama: "Nike", brand: "Nike", price: "1.200.000", img: sepatu16, page: '#'},
    {id: 17, nama: "New Balance", brand: "Nb", price: "1.500.000", img: sepatu17, page: '#'},
]

export default Sepatu;

