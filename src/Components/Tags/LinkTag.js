import React from 'react';

const LinkTag = ({link, onrouteChange, icon}) => {
	return (
		<p className="dim gray b
			link pointer align-center"
			onClick={() => onrouteChange(link)}
			>
			<span><img src={icon} 
			width="25px" 
			height="25px"  
			style={{marginBottom: '-5px'}}/>
			</span> {link}
			</p>
		);
}

export default LinkTag;