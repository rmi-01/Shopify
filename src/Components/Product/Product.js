import React from 'react';
import './Product.css';

const starArray = [1, 2, 3, 4, 5];

class Product extends React.Component{
	constructor(props){
		super(props);
		this.state={
			quantity: 1,
			stars: 0,
			starsHover: 0,
			heartFilled: "none"

		}
	}

	quantityClaculator = (data) => {
		if(!this.state.quantity){
			if(data==="add"){
				return this.setState({quantity: this.state.quantity + 1});
			}
		}
		else if(this.state.quantity){
			if(data==="add"){
				return this.setState({quantity: this.state.quantity + 1});
			}
			return this.setState({quantity: this.state.quantity - 1});
		}
		
	}

	onRatingClick = (data) => {
		this.setState({stars: data})
	}

	onRatingHover = (data) => {
		
		this.setState({starsHover: data})
	}

	changeheartFilled = (data) => {
		this.setState({heartFilled: data});
		console.log(data);
	}

	render(){
		return(
			<div id="pop-background">
				<div id="main-prod-div">
					<i className="fas fa-times pointer dim" id="cancel-icon"
						onClick={() => this.props.onrouteChange('Card List')}></i>
					<div className="flex">
							<img src={this.props.src}
							width="380px" height="350px" alt="Pic"/>
							<div className="w-100 ml3 mt2">
								<h3 className="mb3">{this.props.title}</h3>
								<p className="mt1 mb3">{this.props.des}</p>
								<div className="flex items-center justify-between mt1 mb3">
									<span className="flex items-center">
										<p className="mr2">Ratings:</p>
										{
											starArray.map((data,index) => {
												return(
													<i className={this.state.starsHover>=data?"fas fa-star starHoverclass mr1 pointer": "fas fa-star mr1 pointer"} 
													id={this.state.stars>=data?"starHover":""} 
													onClick={() => this.onRatingClick(data)}
													onMouseEnter={() => this.onRatingHover(data)}
													onMouseLeave={() => this.onRatingHover(0)}></i>
													);
											})
										}
									</span>
									<span className="f3">
										<i className="fas fa-share-alt mr2 pointer"></i>
										<i className={this.state.heartFilled==="click"||this.state.heartFilled==="hover"?"fas fa-heart heartHover ml2 pointer":"fas fa-heart ml2 pointer"}
										onClick={() => {
											if(this.state.heartFilled==="click")
												return this.changeheartFilled("none");
											return this.changeheartFilled("click"); 
										}}
										onMouseEnter={() => {
											if(this.state.heartFilled==="click")
												return this.changeheartFilled("click");
											return this.changeheartFilled("hover");
										}}
										onMouseLeave={() => {
											if(this.state.heartFilled==="click")
												return this.changeheartFilled("click");
											return this.changeheartFilled("leaving");
										}}></i>
									</span>

								</div>
								<p className="green b f3">{`Rs. ${this.props.price}`}</p>
								<span className="flex items-center mt3 mb3">
									<p className="mr2">Quantity</p>
									
									<i className="fas fa-minus mr1 pointer" onClick={() => this.quantityClaculator("subtract")}></i>						
									<input type="text" className="tc pa1 w-20 ml1 mr1 b--black" value={this.state.quantity}/>
									<i className="fas fa-plus ml1 pointer" onClick={() => this.quantityClaculator("add")}></i>
								</span>
								<div className="mt4 mb1">
									<button className="w-40 mr2 pa3 pointer b--black br3 grow"><i className="fas fa-shopping-bag"></i> Buy Now</button>
									<button className="w-40 ml2 pa3 pointer b--black br3 grow"><i className="fas fa-shopping-cart"></i> Add to Cart</button>
								</div>
							</div>
					</div>
					</div>
			</div>
		);
	}
}

export default Product;