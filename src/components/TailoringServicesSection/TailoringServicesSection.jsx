import React, {Component} from 'react';
import TailoringServices from '../TailoringServices/TailoringServices';
import './TailoringServicesSection.css';
import {GiSewingMachine, GiSewingNeedle, GiClothes} from 'react-icons/gi';
import {TbNeedleThread} from 'react-icons/tb';
import { IconContext } from 'react-icons';

export default class TailoringServicesSection extends Component{
    render(){
        return <section className='tailoring-services-section-wrapper'>
                    <div className='tailoring-services-section-title'>
                        <h1>
                            Why use our service?
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                        </p>
                    </div>
        <           section className='tailoring-services-cards-section-wrapper'>
                        <IconContext.Provider value={{ color: "#be9278", size:"5rem", className: "tailoring-services-icon" }}>
                            <TailoringServices TailoringServiceIcon={<GiSewingMachine />} TailoringServiceTitle="Tailor Sweing" TailoringServiceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>
                            <TailoringServices TailoringServiceIcon={<GiSewingNeedle />} TailoringServiceTitle="Tailor Sweing" TailoringServiceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>
                            <TailoringServices TailoringServiceIcon={<GiClothes />} TailoringServiceTitle="Tailor Sweing" TailoringServiceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>
                            {<TailoringServices TailoringServiceIcon={<TbNeedleThread />} TailoringServiceTitle="Tailor Sweing" TailoringServiceText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>}
                        </IconContext.Provider>
                    </section>
                </section>
    }
}