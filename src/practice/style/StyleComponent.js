import React from "react";
import './style.css';
import Style from './style.module.css'

export default function StyleComponent() {

    return (

        <div>

            <h1 style={{color : "white" , backgroundColor : "black"}} className='text-danger bg-primary'> Hello Word! </h1>

            <h2 className="example text-primary bg-warning" > Hello Word! </h2>

            <h2 className={Style.example + ' text-light bg-danger' }> Hello Word! </h2>

        </div>

    )

}