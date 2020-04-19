import React from 'react';
import './App.css';
import Navigation from '../Components/Navigation/Navigation';
import SignUp from '../Components/SignUp/SignUp';
import Login from '../Components/Login/Login';
import CardList from '../Components/Card/CardList';
import Slider from '../Components/Slider/slider';
import MainPage from '../Components/MainPage/MainPage';
import CustomerCare from '../Components/CustomerCare/CustomerCare';
import Footer from '../Components/Footer/footer';

const Nav_links = ['Home', 'Sell', 'Login', 'Sign Up', 'Customer Care'];

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			mainRoute: 'Home',
			ccRoute: 'FAQ',
			auRoute: null,
			sideRoute: null
		}
		
	}

	onmainRouteChange = (route) => {
		this.setState({mainRoute: route,
						sideRoute: null});
	}

	onccRouteChange = (route) => {
		this.setState({ccRoute: route});
	}

	onauRouteChange = (route) => {
		this.setState({auRoute: route})
	}

	onsideRouteChange = (route) => {
		this.setState({sideRoute: route,
						mainRoute: null})
		console.log(route);
	}

	render(){
		const {mainRoute, ccRoute, sideRoute} = this.state;
		return (
			
		   	<div>
		   	<Navigation Nav_links={Nav_links} 
		   			onmainRouteChange={this.onmainRouteChange}
		   			mainRoute={mainRoute}
		   			sideRoute={sideRoute}
		   			onsideRouteChange={this.onsideRouteChange}/>
		   		{
		   			mainRoute==="Login" && sideRoute===null
		   			?
		   			<Login/>
		   			:
		   			mainRoute==="Sign Up" && sideRoute===null
		   			?
		   			<SignUp/>
		   			:
		   			mainRoute==="Home" && sideRoute===null
		   			?
		   			<div>
		   				<div id="main-slider">
		   					<Slider/>
		   				</div>
		   				<div id="cardList">
		   					<CardList/>
		   				</div>

		   			</div>
		   			:
		   			mainRoute==="Customer Care" && sideRoute===null
		   			?
		   			<CustomerCare ccRoute={ccRoute}
		   			onccRouteChange={this.onccRouteChange}/>
		   			:
		   			mainRoute==="Sell" && sideRoute===null
		   			?
		   			""
		   			:
		   			sideRoute!==null
		   			?
		   			<MainPage sideRoute={sideRoute}/>
		   			:
		   			""
		   		}
					
		   	<Footer onmainRouteChange={this.onmainRouteChange}
		   	onccRouteChange={this.onccRouteChange}
		   	auRoute={this.state.auRoute}
		   	onauRouteChange={this.onauRouteChange}/>

		   	</div>
		   	
		);
	}
}

export default App;
