import React from "react";
import PropTypes from 'prop-types' ;

let Sidebar = (props) => {
    console.log(props);
    return(
        
        <h1>This Is Sidebar, {props.menu.name} {props.menu.price}</h1>
    
    );

}

export default Sidebar;

Sidebar.propTypes = {
    menu: PropTypes.array
}
