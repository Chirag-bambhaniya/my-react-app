import React from "react";
import './style.css';
import Style from './style.module.css'

export default function StyleComponent() {

    return (

        <div>

            <h1 style={{color : "white" , backgroundColor : "black"}}> Hello Word! </h1>

            <h2 className="example" > Hello Word! </h2>

            <h2 className={Style.example}> Hello Word! </h2>

        </div>

    )

}