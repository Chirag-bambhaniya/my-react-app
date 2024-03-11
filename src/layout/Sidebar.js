import React from "react";
import PrposTypes from 'prop-types' ;

let Sidebar = (props) => {
    console.log(props);
    return(
        
        <h1>This Is Sidebar, {props.menu.name} {props.menu.price}</h1>
    
    );

}

export default Sidebar;

export let FirstMenu ={name :'i Phone 15' , price : 1500000};

let SecondMenu = 'Users';
export {SecondMenu};

Sidebar.prototype = {
    menu: PrposTypes.object.isRequired
}

Sidebar.defaultProps = {
    menu: [FirstMenu]
}