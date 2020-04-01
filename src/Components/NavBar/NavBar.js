import React from 'react';
import './NavBar.css';
import logo from './Logo.png';

const NavBar = () => {
	return (
		<div className='bg-mid-gray shadow-5' id='navbar'>
				<img src={logo} height="40px" width="60px"
				 	id="logo" alt="LOGO"/>
				<nav id="nav1">
					<p className="dim white b
						link pointer">Sell</p>
					<p className="dim white b
						link pointer">Buy</p>
					<p className="dim white b
						link pointer">Login</p>
					<p className="dim white b
						link pointer">Sign Up</p>
					<p className="dim white b
						link pointer">Customer Care</p>
				</nav>
			</div>

		);
}

export default NavBar;