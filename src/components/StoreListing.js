import React from "react";
import '../App.css'

import { 
    Container,
    Row,
    Col,
    Image 
} from "react-bootstrap";

import Aldi from '../aldi-logo-no-background.png'
import Sprouts from '../sprouts-logo-jpg-cmyk.png'
import Kroger from '../kroger-logo-912161.png'

export default function StoreListing(){
    return(
        <Container style={{ marginTop: "40px", textAlign: "center"}}>
            <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                <Col>
                    <Col xs=".5" >
                        <Image className="circles" src={Aldi} roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Col>
                <Col sm="1"></Col>
                <Col >
                    <Col xs=".5">
                        <Image className="circles" src={Sprouts} roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Col>
                <Col sm="1"></Col>
                <Col >
                    <Col xs=".5" >
                        <Image className="circles" src={Kroger} roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                        <p>Delivery</p>
                    </Col>
                </Col>
            </Row>
        </Container>
    )
}