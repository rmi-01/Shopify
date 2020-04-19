import React from 'react';
import './FAQ.css';

const angle_down = "fas fa-angle-down";
const angle_up = "fas fa-angle-up";

const ProductQA = [
	{
		ques: "Are there any hidden charges if I order from Shopify?",
		ans: "There are no hidden charges when you order from Shopify. All cost are 100% visible on the checkout page which includes Product Price + Shipment Charges.",
		clicked: false
	},
	{
		ques: "Are the prices on Shopify negotiable?",
		ans: "Prices on Shopify are not negotiable. Shopify has thousands of sellers which offer you the best prices and deals.",
		clicked: false
	},
	{
		ques: "Why do I see different prices for the same product?",
		ans: "Some of our products are offered by different sellers which allows you to chose a vendor and price according to your requirements.",
		clicked: false
	},
	{
		ques: "Are all products on Shopify original and genuine?",
		ans: "Yes, we are committed to offering our customers only 100% genuine and original products. We also take all necessary actions to ensure this: any seller found to be selling non-genuine products will immediately be delisted from Shopify",
		clicked: false
	},
	{
		ques: "Are all products on Shopify new and unused?",
		ans: "Yes, Shopify only offers 100% new and unused products",
		clicked: false
	},
	{
		ques: "How do I know if a product comes with free installation?",
		ans: "Unfortunately, we are not providing the Free Installation Services for now.",
		clicked: false
	},
	{
		ques: "Where should I go for my warranty claim?",
		ans: "To claim your warranty, please refer to the manufacturer and service center details given on the warranty card included with your product (if applicable).",
		clicked: false
	},
	{
		ques: "I lost my warranty card. How can I claim warranty?",
		ans: "Lost your warranty card? Don't worry! Feel free to contact us through email example@*****.com.pk or UAN (021) 1111-1111, for further help.",
		clicked: false
	}
];

const OrderQA = [
	{
		ques: "How can I track my order?",
		ans: "We will send you regular updates about the status of your order via emails.",
		clicked: false
	},
	{
		ques: "How quickly can i get my order?",
		ans: "We do our best to get your orders delivered by the date listed on the product page.",
		clicked: false
	},
	{
		ques: "How do I remove an item from my shopping cart?",
		ans: "You can remove the item from your cart by clicking Delete button.",
		clicked: false
	},
	{
		ques: "Does Shopify have a mobile app?",
		ans: "Unfortunately! Not at the moment.",
		clicked: false
	},
	{
		ques: "Do I need an account to shop on Shopify?",
		ans: "Yes, having an account helps us to make your shopping experience fast, secure and convenient.",
		clicked: false
	},
	{
		ques: "How do I cancel my order?",
		ans: "If your order is already on its way to you or if you have already received your order, you will not be able to cancel the order but you may be able to return your product.",
		clicked: false
	},
	{
		ques: "What are shipping charges?",
		ans: "Shipping charges are calculated based on the weight of the products, the location where the item is picked from and the destination to where it is delivered.",
		clicked: false
	}

];

const PaymentQA = [
	{
		ques: "Can I pay using the Goto mobile website?",
		ans: "The Goto mobile website offers all the payment options that our regular Goto website version offers. You can pay without any worries with your preferred option.",
		clicked: false
	},
	{
		ques: "Do I need to pre-pay for my product when I order it?",
		ans: "Pre-payment is 100% safe and easy. However, Goto also offers you the possibility to pay through Cash On Delivery (COD). With COD, you can pay in cash to the delivery agent upon receipt/ airway bill of your order.",
		clicked: false
	},
	{
		ques: "Are there any hidden charges when I make a purchase on Goto?",
		ans: "There are no hidden charges when you make a purchase on GotoThe order amount is inclusive of all taxes and shipping fees.",
		clicked: false
	},
	{
		ques: "How do I use a giftcard or a voucher?",
		ans: "It’s simple! When you get to the payment stage while checking out simply enter the Gift Card code in the voucher box.",
		clicked: false
	},
	{
		ques: "Can I reuse my Refund Voucher?",
		ans: "Any Voucher discount code can only be applied once. The leftover amount will not be refunded or used for next purchase even if the value of order is smaller than voucher value.",
		clicked: false
	},
	{
		ques: "If my order is cancelled, will I get my voucher back with my refund?",
		ans: "Yes, if you place a order using a collectible voucher and the order is returned or cancelled, the voucher will be returned to your wallet.",
		clicked: false
	}
];

const DeliveryQA = [
	{
		ques: "What is the expected delivery time?",
		ans: "Once we have called your registered mobile number and confirmed the order with you, we expect delivery to happen within 5 to 7 working days.",
		clicked: false
	},
	{
		ques: "How do I check the delivery lead time of a product?",
		ans: "Please get in touch with a Customer Service Representative via email.",
		clicked: false
	},
	{
		ques: "Can I pick up my item instead of having it delivered?",
		ans: "Unfortunately Self Collection of order items is not available. Rest be assured that your order will be delivered to your address, safe & sound!",
		clicked: false
	},
	{
		ques: "How long does it take to receive my product?",
		ans: "We will call you to confirm the order, including the item and total price. Once you have confirmed the order with our Customer Service rep over the phone, it will be delivered to you in 5 to 7 working days. We do our best to get your orders delivered by the date listed on the product page.",
		clicked: false
	},
	{
		ques: "Will somebody contact me before delivering the package to my location?",
		ans: "Our delivery person may contact you to confirm your exact location and confirm time of delivery.",
		clicked: false
	}
];

export default class FAQ extends React.Component {

	onDivClick = (data) => {
		data.clicked = !data.clicked;
		this.setState({clicked: data.clicked});
	}

	render() {
		return (
			<div id="FAQ-main-div">
				<h3>Products & Prices</h3>
				{
					ProductQA.map((entry,index) => {
						return(
							<div className="single-div-comp mt3 mb1" key={index}>
								<div className="flex items-center justify-between pointer"
									onClick={() => this.onDivClick(entry)}>
								<p className="b">{entry.ques}</p>
								<i className={entry.clicked?angle_up:angle_down}></i>
								</div>
								{
									entry.clicked
									?
									<div className="opening-class mt3">
										<p>{entry.ans}</p>
									</div>
									:
									<div className="closing-class"></div>
								}
							</div>
						);
					})
				}
				<br/>
				<h3>Order</h3>
				{
					OrderQA.map((entry,index) => {
						return(
							<div className="single-div-comp mt3 mb1" key={index}>
								<div className="flex items-center justify-between pointer"
									onClick={() => this.onDivClick(entry)}>
								<p className="b">{entry.ques}</p>
								<i className={entry.clicked?angle_up:angle_down}></i>
								</div>
								{
									entry.clicked
									?
									<div className="opening-class mt3">
										<p>{entry.ans}</p>
									</div>
									:
									<div className="closing-class"></div>
								}
							</div>
						);
					})
				}
				<br/>
				<h3>Payment</h3>
				{
					PaymentQA.map((entry,index) => {
						return(
							<div className="single-div-comp mt3 mb1" key={index}>
								<div className="flex items-center justify-between pointer"
									onClick={() => this.onDivClick(entry)}>
								<p className="b">{entry.ques}</p>
								<i className={entry.clicked?angle_up:angle_down}></i>
								</div>
								{
									entry.clicked
									?
									<div className="opening-class mt3">
										<p>{entry.ans}</p>
									</div>
									:
									<div className="closing-class"></div>
								}
							</div>
						);
					})
				}
				<br/>
				<h3>Delivery</h3>
								{
					DeliveryQA.map((entry,index) => {
						return(
							<div className="single-div-comp mt3 mb1" key={index}>
								<div className="flex items-center justify-between pointer"
									onClick={() => this.onDivClick(entry)}>
								<p className="b">{entry.ques}</p>
								<i className={entry.clicked?angle_up:angle_down}></i>
								</div>
								{
									entry.clicked
									?
									<div className="opening-class mt3">
										<p>{entry.ans}</p>
									</div>
									:
									<div className="closing-class"></div>
								}
							</div>
						);
					})
				}
			</div>
		)
	}
}