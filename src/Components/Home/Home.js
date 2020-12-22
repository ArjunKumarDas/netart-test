import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
import logo from '../../../src/images/logo.png';
import madel from '../../../src/images/madel.png';
import honour from '../../../src/images/honour.png';
import poster from '../../../src/images/poster.png';
const Home = () => {
    return (
        <dv className="full-body">
            <Container>
                <Row className="logo-center mt-5"><img className="w-25" src={logo}/></Row>
                <Row className="">
                    <Col>
                       <img className="w-50" src={madel} alt="" />
                    </Col>
                    <Col>
                       <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                       <p>. C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</p>
                       <p>.C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </p>
                       <p><img className="w-100" src={honour} alt=""/></p>
                       <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State. </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                       <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                    </Col>
                </Row>
                <Row className="border-bottom">
                    <p><img className="w-100" src={poster} alt="" /></p>
                    <p className="text-center">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                </Row>
                <Row>
                    <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                    <p>
                      CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
                </Row>
                <Row className="footer">
                   <Col>Toll free 1800 200 12 34</Col>
                   <Col>www.facebook/criumps</Col>
                   <Col>www.crigroups.com</Col> 
                </Row>
            </Container>
        </dv>
    );
};

export default Home;