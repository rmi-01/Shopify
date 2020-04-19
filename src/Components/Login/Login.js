import React from 'react';
import '../SignUp/SignUp.css';

const Login = () => {
	return(
		<div>
			<div className="backPic"></div>
			<div className="mainForm" style={{top: "175px"}}>
				<h1 id="mainTitle" className="tc f2">Login</h1>

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
				<input type="submit" className="mt3 mb1 w-30 pa2 b--black pointer br4 grow" value="Sign in"/>
				<p id="lastLine" className="mt1 pointer w-40 underline-hover">Create an account</p>				
			</div>
		</div>
		);
}

export default Login;