import { useRef, useState, useEffect } from "react";
import UserCounter from "./UseCounter";

export default function UseRefComponent(){

    // let [count, setCount] = useState(0);
    let inputRef = useRef(null);
    const [count, setCount] = UserCounter();

    let changeInput = () => {

        inputRef.current.value = 'Hello Word!';
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'black';
        inputRef.current.style.color = 'white';
        // inputRef.current.style.width = '50%';
        // console.log(inputRef.current.clientWidth);

        setCount();

    }

    useEffect(() => {

        console.log('Component rendered..');

    })

    return (

        <>

            <p>{count}</p>

            <input type="text" ref={inputRef} />

            <button onClick={ changeInput }> Click </button>

        </>

    )

}