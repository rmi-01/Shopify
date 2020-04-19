import React from 'react';
import './Policy.css';

export default class Policy extends React.Component {
	render() {
		return (
			<div id="policy-main-div">
				<h3 id="warranty-policy">Warranty Policy</h3>
				<br/>
				<div>
					<p className="policy-font">
					As a general rule, Shopify does not offer any product warranties 
					as these are provided by the manufacturers or brands of products. 
					However, our Customer Service will assist you in any way possible 
					to figure out how to claim your warranty from the company, or 
					warranty provider.
					<br/>
					<br/>
					<br/>
					<b>How do I know if my product has a warranty?</b>
					<br/>

					Different products are covered under different warranty policies. 
					To confirm the warranty type of a particular item, please note the 
					following steps
					<br/>
					On the Product Page, under the product description, you will see 
					details for warranty.
					<br/>
					If the product has a warranty coverage, 
					this field will identify the duration of the warranty and how the 
					warranty is covered.
					<br/>
					<br/>
					<br/>
					<b>How can I claim warranty?</b>
					<br/>

					Warranty claims are subject to the warranty coverage of the item 
					you have purchased, if the product has a warranty from the brand, 
					a warranty card will be included in the packaging. Please follow 
					the following steps to initiate a warranty claim.
					<br/>
					<br/>
					If your product is non-functional or broken on arrival, you can 
					call the helpline at (021) 1111-1111 within 1 day 
					of delivery to initiate an exchange or return of the product.
					If your product produces a fault post the initial 7 days of 
					delivery but is within warranty timeline, you can call the
					helpline at (021) 1111-1111 and provide the following 
					information from your receipt and warranty card to initiate a 
					warranty claim
					<br/>
					Order Number <br/>
					Order Date <br/>
					Item Details <br/>
					Warranty Period (on warranty card) <br/>
					Nature of fault <br/>
					To claim warranty directly from the brand, please contact the 
					authorized service center using the details stated on the warranty 
					card provided with the item. <br/>
					<br/>
					<b>Note: We urge you to save the invoice and warranty card together 
					to ease warranty claim process.</b>
					<br/>
					<br/>



					If you have any questions, you can contact us at any time by either 
					a call (021) 1111-1111 or email example@*****.com.pk
				</p>
				</div>
				<br/>
				<hr className="hr-tags"/>
				<br/>
				<h3 id="return-policy">Return Policy</h3>
				<br/>
				<div>
					<p className="policy-font">
						<b>How to Request a Return?</b>

						<br/>
						You can request to initiate a return by contacting our helpline at 
						(021) 1111-1111 or example@*****.com.pk to confirm that your 
						product is eligible for return. We will explain to you the return 
						procedure, and either arrange for our courier partners to pick-up 
						the product, or confirm the nearest service provider location where 
						you can drop-off the product. 						
						<br/>
						<br/>
						Please be prepared to give the following pieces of information: 
						<br/>
						Your order number.<br/>
						The reason for the return.<br/>
						The method of refund that you would like and the necessary information 
							associated (bank account number, etc.)<br/>
						Where and when the product should be picked-up<br/>
						<br/>
						<b>Note: For pick-ups, we will make 3 attempts to pick-up the product. 
						Please make sure to be available for a scheduled pickup to make things 
						easier for you.</b>
						<br/>
						<br/>
						<br/>
						<b>Can I request a replacement rather than a refund?</b>

						<br/>
						If you prefer to replace your product, just let our
						 Customer Service executive know your choice and 
						we will call you as soon as your initial product has been 
						received, and we have looked into availability of the replacement 
						product. If you choose a refund voucher, you can use it to buy a 
						product or a different product on goto.pk yourself using the amount 
						originally paid for the returned item. 
						<br/>
						<br/>
						<br/>
						<b>If my returned product is not validated for return, how am I informed?</b>

						<br/>
						If your return does not meet the Quality Check criteria, 
						then we will call you to explain the issue and send the item(s) 
						back to you. We will arrange the delivery of the item. 
						<br/>
						<br/>


						<b>Note: We will make 3 attempts to return the product to you. 
						Please make sure to be available for a scheduled delivery.</b>
						</p>
				</div>
				<br/>
				<hr className="hr-tags"/>
				<br/>
				<h3 id="refund-policy">Refund Policy</h3>
				<br/>
					<table className="w-100 policy-font refund-table tc">
						<tr>
							<th><b>Refund Type</b></th>
							<th><b>Time Frame</b></th>
						</tr>
						<br/>
						<tr>
							<td>Refund Voucher</td>
							<td>24 hours</td>
						</tr>
						<tr>
							<td>Bank Account Refund</td>
							<td>5-7 Days</td>
						</tr>
						<tr>
							<td>Credit Card Reversal</td>
							<td>10-15 Days</td>
						</tr>																	
					</table>
					
				<br/>
			</div>
		)
	}
}