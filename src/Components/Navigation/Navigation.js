import React from 'react';
import './Navigation.css';
import logo from './Logo.png';
import LinkTag from '../Tags/LinkTag';
import Home_icon from './Home_icon.png';
import Buy_icon from './Buy_icon.png';
import Contactus_icon from './Contactus_icon.png';
import Sell_icon from './Sell_icon.png';
import Login_icon from './Login_icon.png';
import Signup_icon from './Signup_icon.png';

const Nav_links_icons = [Sell_icon, 
						Buy_icon, 
						Login_icon,
						Signup_icon,
						Contactus_icon,
						Home_icon];

const Navigation = ({Nav_links, onrouteChange, route}) => {
	if(route==='Home')
	return (		
		<div className='shadow-5' id='navbar'>
			<img src={logo} height="40px" width="60px"
				 id="logo" alt="LOGO"/>
			<nav id="nav1">
				<LinkTag link={Nav_links[0]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[0]}/>
				<LinkTag link={Nav_links[1]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[1]}/>
				<LinkTag link={Nav_links[2]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[2]}/>
				<LinkTag link={Nav_links[3]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[3]}/>
				<LinkTag link={Nav_links[4]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[4]}/>	
			</nav>
		</div>
		);
	else if(route==='Sell')
		return (		
		<div className='shadow-5' id='navbar'>
			<img src={logo} height="40px" width="60px"
				 id="logo" alt="LOGO"/>
			<nav id="nav1">
				<LinkTag link={Nav_links[5]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[5]}/>
				<LinkTag link={Nav_links[1]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[1]}/>
				<LinkTag link={Nav_links[2]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[2]}/>
				<LinkTag link={Nav_links[3]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[3]}/>
				<LinkTag link={Nav_links[4]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[4]}/>			
			</nav>
		</div>
		);

	else if(route==='Buy')
		return (		
		<div className='shadow-5' id='navbar'>
			<img src={logo} height="40px" width="60px"
				 id="logo" alt="LOGO"/>
			<nav id="nav1">
				<LinkTag link={Nav_links[5]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[5]}/>
				<LinkTag link={Nav_links[0]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[0]}/>
				<LinkTag link={Nav_links[2]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[2]}/>
				<LinkTag link={Nav_links[3]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[3]}/>
				<LinkTag link={Nav_links[4]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[4]}/>			
			</nav>
		</div>
		);

	else if(route==='Login')
		return (		
		<div className='shadow-5' id='navbar'>
			<img src={logo} height="40px" width="60px"
				 id="logo" alt="LOGO"/>
			<nav id="nav1">
				<LinkTag link={Nav_links[5]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[5]}/>
				<LinkTag link={Nav_links[0]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[0]}/>
				<LinkTag link={Nav_links[1]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[1]}/>
				<LinkTag link={Nav_links[3]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[3]}/>
				<LinkTag link={Nav_links[4]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[4]}/>			
			</nav>
		</div>
		);

	else if(route==='Sign Up')
		return (		
		<div className='shadow-5' id='navbar'>
			<img src={logo} height="40px" width="60px"
				 id="logo" alt="LOGO"/>
			<nav id="nav1">
				<LinkTag link={Nav_links[5]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[5]}/>
				<LinkTag link={Nav_links[0]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[0]}/>
				<LinkTag link={Nav_links[1]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[1]}/>
				<LinkTag link={Nav_links[2]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[2]}/>
				<LinkTag link={Nav_links[4]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[4]}/>			
			</nav>
		</div>
		);

	else if(route==='Customer Care')
		return (	
		<div className='shadow-5' id='navbar'>
			<img src={logo} height="40px" width="60px"
				 id="logo" alt="LOGO"/>
			<nav id="nav1">
				<LinkTag link={Nav_links[5]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[5]}/>
				<LinkTag link={Nav_links[0]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[0]}/>
				<LinkTag link={Nav_links[1]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[1]}/>
				<LinkTag link={Nav_links[2]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[2]}/>
				<LinkTag link={Nav_links[3]}
				onrouteChange={onrouteChange}
				icon={Nav_links_icons[3]}/>			
			</nav>
		</div>
		);
}

export default Navigation;