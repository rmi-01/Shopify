import React from 'react';
import './mainmenu.css';

class Mainmenu extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div>
                    <ul className="main-nav-ul">
                        <h2 className="ma2">Categories</h2>
                        {
                            this.props.mainItems.map((data, index) => {
                                return (
                                    <li className="main-nav-ul-li" key={index}>
                                        <p 
                                        onMouseEnter={() => this.props.onrouteChange(this.props.sideroutes[index])}
                                        onMouseLeave={() => this.props.onrouteChange("Categories")}
                                        id="mainmenu-field">{data}
                                        </p>
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
            </div>


        );
    }
}
export default Mainmenu;