import React from 'react';
import './imageslider.css';

class Sliderimage extends React.Component {
    render() {
        return (
            <div >
                <img id="slider-image" src={this.props.link} alt="Img"/>
            </div>
        );
    }
}
export default Sliderimage;