// import React from "react";
import React, { useState } from "react";

function Practice(){

    let [msg1, msg2] = useState(1);

    let clickEvent = () => {

        msg2(msg1 + 2);

    }

    let clickCapture = () => {

    }

    console.log('component rendered');

    let conditionalRending = true;

    return(

        <div onClickCapture={clickCapture}>

            {conditionalRending ? <h4>Click Button.</h4> : '' }

            <div>{msg1}</div>

            <button onClick={clickEvent}>Click Event</button>

        </div>

    );

}

export default Practice;
