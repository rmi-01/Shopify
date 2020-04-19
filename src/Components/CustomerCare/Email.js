import React from 'react';
import './Email.css';

export default class Email extends React.Component {
	render() {
		return (
			<div id="email-main-div">
				<br/>
				<div className="w-90" id="email-div">
					<br/>
					<span className="flex items-center mb4">
						<p className="pa2 sub-span"><b>Subject</b>: </p>
						<input type="text" className="w-80 pa2 sub-input"/>
					</span>
					<span className="flex items-start mt3 mb4">
						<p className="pa2 des-span"><b>Description</b>: </p>
						<textarea type="text" className="w-80 pa2 des-input"></textarea>
					</span>
					<button className="sub-button dim grow pointer"><b>Submit</b></button>				
					<br/>
				</div>
			</div>
		)
	}
}