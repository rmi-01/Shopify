import React from 'react';
import Card from './Card/Card';
import './CardList.css';
import Product from '../Product/Product';

const cardDetails = [
	{
		src: "https://static-01.daraz.pk/p/71a41f1a2beefff7087bfa9782f98ea2.jpg",
		title: "SM-N975 Galaxy Note 10 - Plus",
		des: " - 12GB RAM - 256GB ROM - PTA ",
		price: "13000"
	},
	{
		src: "https://static-01.daraz.pk/p/a445dc3d963d646b4fff8e904791ec36.jpg",
		title: "Redmi Note 8 ",
		des: "- 4GB/64GB- 4000 mAh - 48MP Main, Quad Camera",
		price: "18000"
	},
	{
		src: "https://static-01.daraz.pk/p/afdb03d9a2584930e069ee98cdc43fde.png",
		title: "Tecno Camon 15 ",
		des: "4GB RAM - 64GB ROM - Quad Camera",
		price: "17500"
	},
	{
		src: "https://static-01.daraz.pk/p/dee3b669c698da99d1db218853153888.png",
		title: "HUAWEI Y9s ",
		des: "48 MP Triple AI Camera 6.59 FHD+ Display 6 GB + 128 GB ROM",
		price: "21000"
	},
	{
		src: "https://static-01.daraz.pk/p/f2e8bfc8c75cc11551d3bd4afb035c4f.jpg",
		title: "Tecno SPARK 4 ",
		des: "- 3GB - 32GB - 6.6 Inch Dot Notch Display",
		price: "10999"
	},
	{
		src: "https://static-01.daraz.pk/p/fb61deb7ef3b95e96680b8788c4c1bfa.jpg",
		title: "Samsung Galaxy A10 Mobile Phone",
		des: " - Display 6.2 - Camera 13MP-5MP - RAM 2GB - ROM 32 GB",
		price: "21,499"
	},
	{
		src: "https://static-01.daraz.pk/p/a5187857d82f48fad84e4b8347654448.jpg",
		title: "Samsung A51 -",
		des: " 6GB RAM - 128 GB ROM - 48MP Camera - Punch Hole",
		price: "53,999"
	},
	{
		src: "https://www.nestle.com/sites/default/files/styles/brand_image/public/asset-library/publishingimages/brands/drinks/milo-detail-test.jpg?itok=JNZbRBo-",
		title: "Milo",
		des: "1kg box",
		price: "300"
	},
	{
		src: "https://static-01.daraz.pk/p/cf80e42ca894f18985f706df0ad9c8be.jpg",
		title: "Lifeboy Hand Sanitizer",
		des: "Total 65ML",
		price: "150"
	},
	{
		src: "https://static-01.daraz.pk/p/ad82d903f4a04d69fe04fe406a33ce13.jpg",
		title: "Surf Excel(320 gm)",
		des: "Pack of 5",
		price: "346"
	},
	{
		src: "https://static-01.daraz.pk/p/e4661e0dbb5175215ea062eb7c912ed2.jpg",
		title: "Sufi Banaspati ghee",
		des: "1 Ltrx5 polybags",
		price: "1240"
	},
	{
		src: "https://static-01.daraz.pk/p/9659ec346da50339cd9d032edfe836ad.jpg_200x200q80-product.jpg_.webp",
		title: "Nestle Nido",
		des: "1+40gm Tin",
		price: "799"
	},
	{
		src: "https://static-01.daraz.pk/original/e9dccd788c5c76f0708c8f65db582872.jpg",
		title: "Tm-010-Studio  Portable Headphone ",
		des: "Wireless Bluetooth",
		price: "2150"
	},
	{
		src: "https://static-01.daraz.pk/p/e9c588b304a325e818191af2fd3d106f.jpg_200x200q80.jpg_.webp",
		title: "Road Prince Motorcycle",
		des: "Wego 150cc ",
		price: "215,000"
	},
	{
		src: "https://static-01.daraz.pk/p/048eab5155f5c6581e704189e0bfd207.jpg",
		title: "Comelle",
		des: "Condensed Milk - 1kg Tin",
		price: "370"
	},
	{
		src: "https://static-01.daraz.pk/original/76d09c410006aedfe2587e0c92bc8f01.jpg",
		title: "Nestle Cerelac 3",
		des: "Fruits 350G",
		price: "380"
	},
	{
		src: "https://static-01.daraz.pk/p/05ca736398f8f28e6dbe5d99da7e970f.jpg",
		title: "Tapal Danedar",
		des: " 950g Tea",
		price: "910"
	},
	{
		src: "https://static-01.daraz.pk/p/702d8e963a82eb01b9c6398fbea730aa.jpg",
		title: "Hemani Hand sanitizer",
		des: "Anti-Bacterial 250Ml",
		price: "295"
	},
	
	{
		src: "https://static-01.daraz.pk/p/c0769399fb5c7af44043f8f39d1d6a68.jpg",
		title: "Shield-Pack of 4 Diaper",
		des: "Pack Small (70-Diapers, 03-06Kg)",
		price: "3097"
	},
	{
		src: "https://static-01.daraz.pk/p/71a41f1a2beefff7087bfa9782f98ea2.jpg",
		title: "SM-N975 Galaxy Note 10 - Plus",
		des: " - 12GB RAM - 256GB ROM - PTA ",
		price: "13000"
	},
	{
		src: "https://static-01.daraz.pk/p/a445dc3d963d646b4fff8e904791ec36.jpg",
		title: "Redmi Note 8 ",
		des: "- 4GB/64GB- 4000 mAh - 48MP Main, Quad Camera",
		price: "18000"
	},
	{
		src: "https://static-01.daraz.pk/p/16b36db1e99ed41b747f15caedaf87a9.jpg",
		title: "Nokia 106 2018 ",
		des: "1.8 inch - Dual Sim - Dark Grey",
		price: "3000"
	},
	{
		src: "https://static-01.daraz.pk/original/aabdffeafb64a18fc9f31a51b0d2168b.jpg",
		title: "G Pad 8.0 - ",
		des: "V480 (8GB ROM, WiFi, 1GB RAM ) - White",
		price: "7999"
	},
	{
		src: "https://cdn.goto.com.pk/uploads/products/2019/6/190x190/5d0cd80521a83.webp",
		title: "Honor 10 Lite ",
		des: " Dual Sim | 3 GB RAM | 64 ...",
		price: "26,382"
	},
	{
		src: "https://cdn.goto.com.pk/uploads/products/2019/6/190x190/5d0cd80521a83.webp",
		title: "Realme 3 Pro ",
		des: " 6 GB RAM | 128 GB ROM ",
		price: " 39,999"
	},
	{
		src: "https://hamariweb.com/images/MobilePhones/Apple%20iPhone%2011%20Pro%20Max-256GB.jpg",
		title: "Apple iPhone 11 ",
		des: "Pro Max 256GB",
		price: "276999"
	},
	{
		src: "https://static-01.daraz.pk/p/0f5f4f22909c45154712a1572bcc8fab.jpg",
		title: "IPad mini ",
		des: "1 16GB",
		price: "12,750"
	},
	{
		src: "https://static-01.daraz.pk/p/9c8a5c39e0fc2a16ebb4e0979410accc.jpg",
		title: "Sony Xperia Z ",
		des: "Tablet 10.1 2gb 32gb Data sim Wi-Fi",
		price: "13,000"
	},
	{
		src: "https://static-01.daraz.pk/p/c25cf73d7fd780e6bd57b5bba2eefa7e.jpg",
		title: "",
		des: "",
		price: ""
	},
	{
		src: "https://static-01.daraz.pk/p/ae769f818ff2e3f98bc87becbed0d9a6.png",
		title: "Samsung Galaxy Tab ",
		des: "E lite Wi-Fi",
		price: "7750"
	},
	{
		src: "https://static-01.daraz.pk/p/7f4e234ed301482c6d71c57bae0d4b3f.jpg",
		title: "Sony Xperia Z4 Tablet ",
		des: "- 10.1 QHD Display - 3GB RAM - 32GB ROM - ",
		price: "19900"
	},
	{
		src: "https://static-01.daraz.pk/p/679f38a64e93d4c6b6d8c63575140932.jpg",
		title: "Huawei Tab",
		des: "D01j FingerPrint Data sim",
		price: "16375"
	},
	{
		src: "https://static-01.daraz.pk/p/ee849270e791156c0b25948fd357525c.jpg",
		title: "Huawei Tab M5 ",
		des: "8 inch 4GB 32GB FingerPrint Data sim",
		price: "27,750"
	},
	{
		src: "http://www.mega.pk/items_images/ts_19822.png",
		title: "HP 250 G7 Core i3 7th",
		des: "Intel Core i3 7th Generation|2.3 GHz|1TB|4GB",
		price: "53,999"
	},
	{
		src: "http://www.mega.pk/items_images/ts_16749.png",
		title: "Razer Blade RZ09-0195",
		des: " Intel Core i7|2.8 GHz|16GB|14.0 Inches",
		price: "304,999"
	},
	{
		src: "http://www.mega.pk/items_images/ts_19821.png",
		title: "HP 245G7 RYZEN AMD R3",
		des: "Intel Core i3|2.8 GHz|16GB|14.0 Inches",
		price: "58,000"
	},
	{
		src: "http://www.mega.pk/items_images/ts_19806.png",
		title: "HP 14 DQ1040wm Core i5 10th",
		des: "Intel Core i5|1.8 GHz|16GB|13.0 Inches",
		price: "77,999 "
	},
	{
		src: "http://www.mega.pk/items_images/ts_19808.png",
		title: "HP Elite x2 1013 G3 Core i5 8th",
		des: "Intel Core i5 8th Generation|1.6 GHz|8GB|13",
		price: "80,999"
	},
	{
		src: "http://www.mega.pk/items_images/ts_19829.png",
		title: "Lenovo IdeaPad S340 Core i5",
		des: "Intel Core i5 10th Generation|2.6 GHz|16GB|13",
		price: "79,499"
	},
	{
		src: "http://www.mega.pk/items_images/ts_19728.png",
		title: "HP 15-DA1075TU Core i5 8th",
		des: "",
		price: "92,999"
	}
]


class CardList extends React.Component{
	constructor(){
		super();
		this.state = {
			route: 'Card List',
			index: 0
		}
	}

	onrouteChange = (data, index) => {
		this.setState({route: data,
						index: index});
	}

	render(){
		const {route, index} = this.state;
		return(
			<div>
			<div>
				{
					!this.props.sideRoute
					?
					<h2 id="productHeading">Products</h2>
					:
					<h2 id="productHeading">{this.props.sideRoute}</h2>
				}

				<div id="cardContainer">
				{
					!this.props.sideRoute
					?
					cardDetails.map((data,index) => {
						return(
								<Card
								src={data.src}
								title={data.title}
								des={data.des}
								price={data.price}
								key={index}
								onrouteChange={this.onrouteChange}
								number={index}/>
							);
						})
					:
					this.props.displayItems.map((data,index) => {
						return(
								<Card
								src={data.src}
								title={data.title}
								des={data.des}
								price={data.price}
								key={index}
								onrouteChange={this.onrouteChange}
								number={index}/>
							);
						})
				}
				</div>
			</div>
			{
			route==='Product Page' && !this.props.sideRoute
			?
			<Product 
			src={cardDetails[index].src}
			title={cardDetails[index].title}
			des={cardDetails[index].des}
			price={cardDetails[index].price}
			onrouteChange={this.onrouteChange}/>
			:
			route==='Product Page' && this.props.sideRoute
			?
			<Product 
			src={this.props.displayItems[index].src}
			title={this.props.displayItems[index].title}
			des={this.props.displayItems[index].des}
			price={this.props.displayItems[index].price}
			onrouteChange={this.onrouteChange}/>
			:
			""
			}

			</div>
	);
	}


}



export default CardList;