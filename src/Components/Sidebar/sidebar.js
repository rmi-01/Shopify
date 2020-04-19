import React from 'react';
import Submenu from './submenu/submenu';
import Mainmenu from './mainmenu/mainmenu';

const Electronics = [
    'Smart Phones',
    'Featured Phones',
    'Tablets',
    'Laptops',
    'Desktops',
    'Action/Video Cameras',
    'Security Cameras'
];
const Fashion = [
    'Unstiched Fabrics',
    'Kurtas and Shalwar',
    'Traditional Clothing',
    'Tops',
    'Winter Clothing',
    'Shoes',
    'Shirts',
    'Pants',
    'Inner Garments'
]
const Computer = [
    'Monitor',
    'Keyboards',
    'Mice',
    'Adapters and Cables',
    'Graphics Accessories',
    'Headphones',
    'Gaming gears',
    
]

const Lifestyle = [
    'Bath',
    'Bedding',
    'Decor',
    'Furniture',
    'Kitchen and Dining',
    'Lighting',
    'Media music and Books'

]
const Groceries = [
    'Fresh produce',
    'Beverages',
    'Breakfast, Choco and Snacks',
    'Food Staples',
    'Dairy and Chilled',
    'Laundry and households',
    'Animals feed'
]
const Sports = [
    'Excercise and Fitness',
    'Supplements and sports nutrition',
    'Shoes ',
    'Team sports',
    'Fitness gadgets',
    'Racket sports',
    'Clothing'

]
const Automotive = [
    'Services and intallations',
    'Auto Oils and Fluids',
    'Auto tires and wheels',
    'Auto care',
    'Motorcycle',
    'Cars',
    'Moto parts and Accessories'
]

const mainItems = [
    'Electronics items',
    'Fashion and Clothes',
    'Computer Accessories',
    'Home and Lifestyle',
    'Groceries and Pets',
    'Sports and Outdoor',
    'Automotive and Bikes'

];

const sideroutes = [
    'Electronics',
    'Fashion',
    'Computer',
    'Lifestyle',
    'Groceries',
    'Sports',
    'Automotive'
]

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: "Categories"
        };
        this.onrouteChange = this.onrouteChange.bind(this);
    }

    onrouteChange(data) {
        this.setState({ route: data });
    }
    render() {
        const { route } = this.state;
        if (this.state.route === "Categories") {
            return (
                <Mainmenu onrouteChange={this.onrouteChange}
                    mainItems={mainItems}
                    sideroutes={sideroutes} />
            );
        }
        else {
            return (
                <div className="Navbar">
                    <Mainmenu onrouteChange={this.onrouteChange}
                        mainItems={mainItems}
                        sideroutes={sideroutes} />
                    <Submenu onrouteChange={this.onrouteChange}
                        route={route}
                        sideRoute={this.props.sideRoute}
                        onsideRouteChange={this.props.onsideRouteChange}
                        items={
                            route === "Electronics" ?
                                Electronics
                                :
                                route === "Fashion"?
                                Fashion
                                :
                                route ==="Computer"?
                                Computer
                                :
                                route ==="Lifestyle"?
                                Lifestyle
                                :
                                route === "Groceries"?
                                Groceries
                                :
                                route === "Sports"?
                                Sports
                                :
                                route ==="Automotive"?
                                Automotive
                                :
                                []
                            

                        }
                    />
                </div>
            );
        }


    }

}
export default Sidebar;