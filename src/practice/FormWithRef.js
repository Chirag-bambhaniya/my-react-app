import React, { useRef } from "react";

export default function FormWithRef () {

    let firstName = useRef();
    let secondName = useRef();
    let lastName = useRef();
    let address = useRef();
    let email = useRef();
    let Password = useRef();

    let submitForm = (e) => {

        e.preventDefault();

        console.log(firstName.current.value);
        console.log(secondName.current.value);
        console.log(lastName.current.value);
        console.log(address.current.value);
        console.log(email.current.value);
        console.log(Password.value);

    }

    return (

            <div>

                <form onSubmit={submitForm}>

                    <input type="text" ref={firstName} placeholder="Enter First Name" /> <br /> <br />

                    <input type="text" ref={secondName} placeholder="Enter Second Name" /> <br /> <br />
                    
                    <input type="text" ref={lastName} placeholder="Enter Last Name" /> <br /> <br />
                    
                    <input type="text" ref={address} placeholder="Enter Address" /> <br /> <br />
                    
                    <input type="email" ref={email} placeholder="Enter E-mail" /> <br /> <br />
                    
                    <input type="password" ref={Password} placeholder="Enter Password" /> <br /> <br />

                    <input type="submit" value="Submit" />


                </form>

            </div>



    )

}