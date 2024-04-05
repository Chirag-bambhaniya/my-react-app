import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StringSlice, { saveUser } from './StringSlice';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import saveUser from './StringSlice';

export default function Name() {
    const name = useSelector((state) => state.user.value)
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    let [userName, setUserName] = useState({firstName : ''});

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(name)
        // dispatch(saveUser('Chirag @'))
    };

    // const handleChangeName = (firstName) => {
        // setUserName(userName = firstName);
        // console.log(firstName.value)
        
    // };
    // console.log(name)
    return (
        <>
            <h1>Your Name Is : {name}</h1>

            <form onSubmit={handleSubmitForm}>

                <input type="text" name='firstName'  placeholder='Enter Your Name' /> <br /> <br />

                <button onClick={() => dispatch(saveUser('Chirag @'))}>Submit</button>

            </form>

        </>
    )
}
