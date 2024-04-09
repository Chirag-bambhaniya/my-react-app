import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StringSlice, { saveUser } from './StringSlice';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import saveUser from './StringSlice';

export default function Name() {
    const name = useSelector((state) => state.users.value)
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    let [userName, setUserName] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch(saveUser(userName))
    };

    const handleChangeName = (firstName) => {
        // setUserName(userName = firstName);
        setUserName(firstName.target.value)
        
    };
    // console.log(name)
    return (
        <>
            <h1>Your Name Is : {name}</h1>

            <form onSubmit={handleSubmitForm}>

                <input type="text" name='firstName' onChange={handleChangeName}  placeholder='Enter Your Name' /> <br /> <br />

                <button>Submit</button>

            </form>

        </>
    )
}
