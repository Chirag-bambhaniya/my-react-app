import React, {useState} from "react";

function Practice1(){

    let [color1 , color2]= useState();

    let onmouseover = () => {

        color2(document.getElementById('hover').style.color = 'blue');
        
    }

    let mouseleave = () => {

        color1 = document.getElementById('hover').style.color = 'black';

    }


    console.log('component rendered');

    let conditionalRending = true ;

    return(

        <div onMouseOverCapture={onmouseover}
            onMouseLeave={mouseleave}>

            {conditionalRending ? <h1 id="hover">Hover Botton</h1> : '' }
  

        </div>

    );

}

export default Practice1;