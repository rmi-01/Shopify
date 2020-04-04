import React from 'react';
import './App.css';
import Navigation from '../Components/Navigation/Navigation';
import SignUp from '../Components/SignUp/SignUp';
import Login from '../Components/Login/Login';

const Nav_links = ['Sell', 'Buy', 'Login', 'Sign Up', 'Customer Care', 'Home'];

class App extends React.Component{

	constructor(){
		super();
		this.state = {
			route: 'Home'
		}
	}

	onrouteChange = (route) => {
		console.log(route);
		this.setState({route: route});
	}

	render(){
		const {route} = this.state;
		return (
		   	<div>
		   	<Navigation Nav_links={Nav_links} 
		   	onrouteChange={this.onrouteChange}
		   	route={this.state.route}/>
		   	{
		   		route==='Sign Up'
		   		?
		   		<SignUp/>
		   		:
		   		route==='Login'
		   		?
		   		<Login/>
		   		:
		   		<h1>Hello</h1>

		   	}


		    </div>
		);
	}
}

export default App;
