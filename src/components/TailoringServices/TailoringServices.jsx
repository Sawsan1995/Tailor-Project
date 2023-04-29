import { Component } from "react";
import './TailoringServices.css';

export default class TailoringServices extends Component{
    render(){
        return <div className="tailoring-services-card-wrapper">
            <div>{this.props.TailoringServiceIcon}</div>
            <h1>{this.props.TailoringServiceTitle}</h1>
            <p>{this.props.TailoringServiceText}</p>
        </div>
    }
}