import React from "react";
import PropTypes from 'prop-types';

function Footer(props){
    console.log(props);
    return (

    <h1>This Is Footer. Company Name Is {props.companyName}  </h1>
    
    );

}

Footer.defaultProps = {
    companyName : 22
}

Footer.propTypes = {
    companyName : PropTypes.string
}

export default Footer;