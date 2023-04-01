import '../App/App.css';
import React from 'react';
import { Component } from 'react';
import './SectionOneBody.css';
import Background  from '../../imgs/xbg_1.jpg.pagespeed.ic.Qvddt6BzWR.webp';
import Header from '../Header/Header';

class SectionOneBody extends Component{
    render(){
        const myStyle={
            backgroundImage: "url(" + Background + ")",
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundposition: 'center'};

        return <div className="homepage-backgroundimage" style={myStyle}>
            <Header />
        </div>
    }
}

export default SectionOneBody;