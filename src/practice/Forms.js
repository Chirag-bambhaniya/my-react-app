import React, { useState } from "react";

export default function Forms() {

    let [name, setName] = useState('');

    let [dropdown, setDropdown] = useState('');

    let [isValid , setValid] = useState (false);

    const hadleSubmit = (event) => {

        event.preventDefault();

        if (name === '') {
            alert('Please enter name');
        }
        else {
            console.log('Form Submitted');
        }

    }

    let inputName = (e) => {

        setName(e.target.value)
    }

    return (
        <div>

            <form>

                <input type="text" value={name} onChange={inputName} placeholder="User Name" />

                <select value={dropdown} onChange={(e) => setDropdown(e.target.value)}>

                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>

                </select>

                <input type="submit" value="Submit" />

            </form>

        </div>

    )

}