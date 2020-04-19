import React from 'react';
import './SignUp.css';


const SignUp = () => {
	return(
		<div>
			<div className="backPic"></div>
			<div className="mainForm">
				<h1 id="mainTitle" className="tc f2">Sign up</h1>

				<label className="mt3 mb1 f5 b" htmlFor="name">Name</label>
				<br/>
				<input type="text" className="mt1 mb3 w-80 pa2 b--black inputTags" 
				name="name" placeholder="Enter name"/>

				<br/>

				<label className="mt3 mb1 f5 b" htmlFor="contact-number">Contact Number</label>
				<br/>
				<input type="text" className="mt1 mb3 w-80 pa2 b--black inputTags" 
				name="contact-number" placeholder="Enter contact number"/>
				
				<br/>

				<label className="mt3 mb1 f5 b" htmlFor="password">Password</label>
				<br/>
				<input type="password" className="mt1 mb3 w-80 pa2 b--black inputTags" 
				name="password" placeholder="Enter password"/>

				<br/>
				<input type="submit" className="mt3 mb1 w-30 pa2 b--black pointer br4 grow" value="Sign up"/>
				<p id="lastLine" className="mt1 pointer w-40 underline-hover">Already have an account?</p>				
			</div>
		</div>
		);	
}


export default SignUp;