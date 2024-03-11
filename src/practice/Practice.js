// import React from "react";
import React, { useState } from "react";

function Practice(){

    let [msg1, msg2] = useState(2);

    let clickEvent = () => {

        msg2(msg1 + 2);
        console.log(msg1);

    }

    let clickCapture = () => {

    }

    console.log('component rendered');

    let conditionalRending = true;

    return(

        <div onClickCapture={clickCapture}>

            {conditionalRending ? <h4>Doble Click Button.</h4> : '' }

            <div>{msg1}</div>
        
            <button onDoubleClickCapture={clickEvent}>Doble Click Event</button>

        </div>

    );

}

export default Practice;
