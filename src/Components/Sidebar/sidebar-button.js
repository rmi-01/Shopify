import React from 'react';
import Sidebar from './sidebar';
import './sidebar-button.css';

export default class SidebarButton extends React.Component {

	constructor(){
		super();
		this.state = {
			route: 'Home',
			open: 'close'
		}
	}


	isOpen=(data)=>{
		if(this.state.open==="close")
		{
			this.setState({open:data})
		}
		else if(this.state.open==="open")
		{
			this.setState({open:'close'})
		}
	}

	render() {
		return (
			<div>
				<div> 
					<i className="fas fa-list-ul f3" id="list-icon" onClick={()=>this.isOpen("open")} ></i>
				</div>
				<div id={this.state.open==='open'?"sidebar-open":"sidebar-close"}> 
					<Sidebar
					sideRoute={this.props.sideRoute}
					onsideRouteChange={this.props.onsideRouteChange}/>
				</div>
			</div>

		);
	}
}