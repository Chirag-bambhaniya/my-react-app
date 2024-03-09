import React from "react";
import PrposTypes from 'prop-types' ;

let Sidebar = (props) => {
    console.log(props);
    return(
        
        <h1>This Is Sidebar, {props.menu[0]}</h1>
    
    );

}

export default Sidebar;

export let FirstMenu = 'Dashboard';

let SecondMenu = 'Users';
export {SecondMenu};

Sidebar.prototype = {
    menu: PrposTypes.array.isRequired
}

Sidebar.defaultProps = {
    menu: [FirstMenu]
}