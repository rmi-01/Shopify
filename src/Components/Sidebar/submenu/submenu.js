import React from 'react';
import './submenu.css';
// import './mainmenu.css';
class Submenu extends React.Component {
    render() {
        return (

            <div id="nav-sub-menu" onMouseEnter={() => this.props.onrouteChange(this.props.route)}
                onMouseLeave={() => this.props.onrouteChange("Categories")}>
                    <ul>
                        {
                            this.props.items.map((data, index) => {
                                return (
                                    <li className="nav-sub-ul-li"
                                        onClick={() => this.props.onsideRouteChange(data)}
                                        key={index}>
                                        <a href="#top" className="no-underline black">
                                        <p id="submenu-field">
                                        {data}
                                        </p>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
        );
    }
}
export default Submenu;