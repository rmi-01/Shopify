import React from 'react';
import './Navigation.css';
import LinkTag from './LinkTag/LinkTag';
import SidebarButton from '../Sidebar/sidebar-button';
import Logo from './main-logo.png';

const Nav_links_icons = [
						"fas fa-home",
						"fas fa-tags", 
						"fas fa-sign-in-alt",
						"fas fa-user-plus",
						"fas fa-phone-alt"
						];

const Navigation = ({Nav_links, onmainRouteChange, mainRoute, sideRoute, onsideRouteChange}) => {

	return(

		<div id="navbar">
			<div id="navbar-upper">
				<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
				<div className="flex items-center">
				<p id="Logo-Head" className="pointer">Shopify</p>
				<img src={Logo} alt="Logo" width="50px" height="45px" className="pointer"/>

				</div>
			
				<div className="wrap">
			    <div className="search">
      				<input type="text" className="searchTerm" 
      				placeholder="What are you looking for?"/>
      				<button type="submit" className="searchButton">
        			<i className="fa fa-search"> Search</i>
     				</button>
   				</div>
   				</div>
			<i className="fas fa-shopping-cart f3 pointer"></i>
			</div>
			<div className='shadow-5' id='navbar-lower'>
				<SidebarButton 
				sideRoute={sideRoute}
				onsideRouteChange={onsideRouteChange}/>
				<nav id="nav1">
				{	 
					Nav_links.map((data,index) => {
						return(
							<LinkTag link={data}
								onmainRouteChange={onmainRouteChange}
								icon={Nav_links_icons[index]}
								mainRoute={mainRoute}
								key={index}/>
							);
					})
				}
				</nav>
			</div>
		</div>
	);
}

export default Navigation;
