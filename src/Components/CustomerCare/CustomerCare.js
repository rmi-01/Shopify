import React from 'react';
import './CustomerCare.css';
import Policy from './Policy';
import Email from './Email';
import FAQ from './FAQ';

const classes_of_tags = "pointer dim padding-br-tags";
const main_tags = ['FAQ', 'Email', 'Chat', 'Policy'];

export default class CustomerCare extends React.Component {

	render() {
		return (
			<div>
				<div className="flex bg-white items-end" id="CC-main-div">
					{
						main_tags.map((data,index) => {
							return(
								<p className={this.props.ccRoute===data?classes_of_tags+" border-color-tag":classes_of_tags}
									onClick={() => this.props.onccRouteChange(data)}
									key={index}>{data}</p>
								);
						})
					}
				</div>
				{
					this.props.ccRoute==="Policy"
					?
					<Policy/>
					:
					this.props.ccRoute==="Email"
					?
					<Email/>
					:
					this.props.ccRoute==="FAQ"
					?
					<FAQ/>
					:
					""
				}
				
				
			</div>
		)
	}
}