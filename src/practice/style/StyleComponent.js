import React from "react";
import './style.css';
import Style from './style.module.css'
import { useSelector } from "react-redux";

export default function StyleComponent() {

    const user = useSelector((state) => state.users.value);

    return (

        <div>

            <h1 className="text-white bg-dark">Your Name Is: {user}</h1>

            <h1 style={{color : "white" , backgroundColor : "black"}} className='text-danger bg-primary'> Hello Word! </h1>

            <h2 className="example text-primary bg-warning" > Hello Word! </h2>

            <h2 className={Style.example + ' text-light bg-danger' }> Hello Word! </h2>

        </div>

    )

}