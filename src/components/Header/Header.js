import '../App/App.css';
import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsClock, BsTelephone } from 'react-icons/bs';
import { GrFacebookOption, GrTwitter, GrInstagram, GrDribbble } from 'react-icons/gr';
import './Header.css';

class Header extends Component{
    render(){
        return<div className='header-wrapper'>
            <Container>
                <Row className="nav-bar">
                    <Col lg={5} className="d-flex logo">
                    <a className="title-logo" href="index.html">Academia</a>
                    <a>
                        <span>Online Education &amp; Learning</span>
                    </a>
                    </Col>
                    <Col className="d-flex clock">
                        <BsClock className="bs-clock" /> 
                        <div className="clock-text">
                            <span>Monday - Friday</span><br />
                            <strong>8:00AM-8:00PM</strong>
                        </div>    
                    </Col>
                    <Col className="d-flex telephone">
                        <BsTelephone className="bs-telephone" />
                        <div className="telephone-text">
                            <span>Call Us</span><br />
                            <strong>+2 392 3929 210</strong>
                        </div>
                    </Col>
                    <Col className="d-flex">
                        <div className="social facebook-icon">
                            <GrFacebookOption />
                        </div>
                        <div className="social twitter-icon">
                            <GrTwitter />
                        </div>
                        <div className="social instagram-icon">
                            <GrInstagram />
                        </div>
                        <div className="social dribble-icon">
                            <GrDribbble />
                        </div>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    }
}

export default Header;