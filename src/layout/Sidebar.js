import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink as Link,
} from "react-router-dom";
import StyleComponent from '../practice/style/StyleComponent';
// import PropTypes from 'prop-types' ;

let Sidebar = () => {
    // console.log(props);
    return (

        // <h1>This Is Sidebar, {props.menu.name} {props.menu.price}</h1>

        <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
            <div className="position-sticky">
                <div className="list-group list-group-flush mx-3 mt-4">
                    <div>
                        <Link to='/'>
                        <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/style">
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Style</span>
                        </Link>
                    </div> 
                    {/* <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init>
                        <i className="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-globe fa-fw me-3"></i><span>International</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-building fa-fw me-3"></i><span>Partners</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-users fa-fw me-3"></i><span>Users</span></a>
                    <a href="#" className="list-group-item list-group-item-action py-2" data-mdb-ripple-init><i
                        className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a> */}
                </div>
            </div>
        </nav>

    );

}

export default Sidebar;

// Sidebar.propTypes = {
//     menu: PropTypes.array
// }
