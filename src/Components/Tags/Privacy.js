import React from 'react';
import './style.css';

export default class Privacy extends React.Component {
	render() {
		return (
			<div id="pop-background-footer">
				<div id="popup-div">
					<i className="fas fa-times pointer dim" id="cancel-icon-footer"
						onClick={() => this.props.onauRouteChange(null)}></i>
					<h2 className="tc">Privacy Agreement</h2>
					<br/>
					We welcome you to Shopify (the “Site). 
					Your privacy and data security is our primary concern, 
					and we intend to keep your personal information safe and secure. 
					To know more about how the Site collects, uses and discloses 
					your personal information (under certain circumstances), 
					please read this Privacy Policy.
					<br/><br/>
					The Privacy Policy of this Site also explains 
					the measures we employ to protect your data and personal 
					information that you provide us. In addition to that, 
					this Privacy Policy also details the options regarding 
					collection, analysis, utilization and disclosure of your 
					personal information. If you continue to use this Site, 
					then it means you accept our Privacy Policy and our right 
					to change, modify, update, add or remove portions of the 
					Privacy Policy as and when necessary. You are advised to 
					regularly check our Privacy Policy for any updates, changes, 
					modifications, additions or removal of portions. The changes 
					will be considered effective from the moment it is posted on 
					the Site. 

				</div>
			</div>
		)
	}
}