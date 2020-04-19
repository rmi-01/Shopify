import React from 'react';
import './LinkTag.css';

const LinkTag = ({link, onmainRouteChange, icon, mainRoute}) => {
	return (
		<p className={mainRoute===link?
			"dim link pointer align-center onClicktag":
			"dim  black link pointer align-center"}
			onClick={() => onmainRouteChange(link)}
			>
			<i className={icon+" black"}></i> {link}
		</p>
		);
}

export default LinkTag;