import React from 'react';
import './Card.css';

class Card extends React.Component{



	render(){
		const {src, title, des, price} = this.props;
		return(
			<div className="tc" id="basicCard"
			onClick={() => this.props.onrouteChange('Product Page',this.props.number)}>
				<img src={src}
				width="130px" height="150px" id="image"
				alt={title}/>
				<p id="title">{title}</p>
				<p id="des">{des}</p>
				<p id="price">{`Rs ${price}`}</p>
			</div>
	
	
		);
	}
}


export default Card;