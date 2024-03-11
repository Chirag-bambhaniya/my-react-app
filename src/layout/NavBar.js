import React from "react";
import PropTypes from 'prop-types' ;

function NavBar(props){

    return(

        <h1>This Is Navbar. Company code is {props.CompanyCode} </h1>

    );

}

NavBar.defaultProps = {
    CompanyCode : 'Google'
}

NavBar.propTypes = {
    CompanyCode : PropTypes.number
}

export default NavBar;