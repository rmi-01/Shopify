import React from 'react';
import Sliderimage from './sliderimage';
import './imageslider.css';


const imageLinks = [
    "https://laz-img-cdn.alicdn.com/images/ims-web/TB1GLblARr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp",
    "https://laz-img-cdn.alicdn.com/images/ims-web/TB1HAMvBBr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp",
    "https://laz-img-cdn.alicdn.com/images/ims-web/TB1Loa_ABr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp",
    "https://laz-img-cdn.alicdn.com/images/ims-web/TB1CMspBET1gK0jSZFhXXaAtVXa.jpg_1200x1200Q100.jpg_.webp",
    "https://laz-img-cdn.alicdn.com/images/ims-web/TB1qoIuBBr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp"
];

class Slider extends React.Component {
    constructor(props) {
        super();
        this.state = {
            image: imageLinks[0]
        }
    }
    imageSelector = (index) => {
        this.setState({
            image: imageLinks[index]

        });
    }

    render() {
        return (
            <div id="slider">
                <div>
                    <div id="buttons">
                        <i className="fas fa-circle"  id={this.state.image === imageLinks[0] ? "white" : "slider-button"} onMouseEnter={() => this.imageSelector(0)} ></i>
                        <i className="fas fa-circle" id={this.state.image === imageLinks[1] ? "white" : "slider-button"} onMouseEnter={() => this.imageSelector(1)} ></i>
                        <i className="fas fa-circle" id={this.state.image === imageLinks[2] ? "white" : "slider-button"} onMouseEnter={() => this.imageSelector(2)}></i>
                        <i className="fas fa-circle" id={this.state.image === imageLinks[3] ? "white" : "slider-button"} onMouseEnter={() => this.imageSelector(3)}></i>
                        <i className="fas fa-circle" id={this.state.image === imageLinks[4] ? "white" : "slider-button"} onMouseEnter={() => this.imageSelector(4)}></i>
                    </div>
                    <Sliderimage link={this.state.image} />
                </div>

            </div>
        );
    }
}
export default Slider;