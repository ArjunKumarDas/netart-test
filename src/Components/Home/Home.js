import React from 'react';
import './Home.css';
import { Row, Col } from 'react-bootstrap';
import logo from '../../../src/images/logo.png';
import madel from '../../../src/images/madel.png';
import honour from '../../../src/images/honour.png';
import poster from '../../../src/images/poster.png';
import call from '../../../src/images/call.png';
import fb from '../../../src/images/fb.png';
import google from '../../../src/images/google.png';


const Home = () => {
    return (
        <div className="full-body">
                <Row className="text-center pt-5 bg-1">
                    <Col><img className="w-25" src={logo}/></Col>
                </Row>
                <Row className="pl-5 pr-5 pt-5 bg-2">
                    <Col md={4}>
                       <img className="w-100 m-img" src={madel} alt="" />
                    </Col>
                    <Col md={8}>
                       <h6 className=""><b>C.R.I.PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></h6>
                       <p className="pl-3 content1"><span className="dot pr-1">.</span>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.<br/>
                       <span className="dot pr-1">.</span>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
                       </p>
                       <p><img className="w-100" src={honour} alt=""/></p>
                       <p className="content">Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State. </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center p-3 bg-4">
                       <p className="content3">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
                    </Col>
                </Row>
              <>
                 <Row className="pt-5 pr-5 pl-5 bg-5">
                     <p><img className="w-100" src={poster} alt="" /></p>
                     <p className="text-center pb-3">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
                </Row>
              </>
               <Row className="border-top"></Row>
                <Row className="bg-5"> 
                   <div className="text-center pl-5 pr-5">
                        <h4 className="pt-4">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                    <p className="pt-4">
                           CHEMICALS & PROCESS <span className="text-danger">|</span> POWER <span className="text-danger">|</span> WATER & WASTE WATER <span className="text-danger">|</span> OILS & GAS <span className="text-danger">|</span> PHARMA <span className="text-danger">|</span> SUGARS & DISTILLERIES <span className="text-danger">|</span> PAPER & PULP <span className="text-danger">|</span> MARINE & DEFENCE <span className="text-danger">|</span> METAL & MINING <span className="text-danger">|</span> FOOD & BEVERAGE <span className="text-danger">|</span> PETROCHEMICAL & REFINERIES <span className="text-danger">|</span> SOLAR <span className="text-danger">|</span> BUILDING <span className="text-danger">|</span> HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</p>
                   </div>
                </Row>
                <Row className="footer p-5">
                       <Col  className="text-light text-center ">
                         <span className="icon">
                           <img  className="w-25" src={call} alt=""/>
                          </span>Toll free 18002001234
                        </Col>
                       <Col  className="text-light text-center ">
                           <span className="icon">
                          <img  className="w-25" src={fb} alt=""/>
                          </span>www.facebook/criumps
                        </Col>
                      <Col  className="text-light text-center ">
                           <span className="icon">
                          <img  className="w-25" src={google} alt=""/>
                          </span>www.crigroups.com
                     </Col> 
                </Row>
           
        </div>
    );
};

export default Home;