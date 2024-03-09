import React, {useState} from "react";

function Practice1(){

    let [color1, color2] = useState('Red');

    let onmouseover = () => {

        color2(color1 + ' '  + 'Blue')

    }

    let overCapture = () =>{


    }

    console.log('component rendered');

    let conditionalRending = true ;

    return(

        <div onoverCapture={overCapture}>

            {conditionalRending ? <h4>Over Botton</h4> : '' }

            <div>{color1}</div>

            <button onMouseOverCapture={onmouseover}>Over Me</button>

        </div>

    );

}

export default Practice1;