import { Component, createRef } from "react";

export default class Form extends Component {

    inputRef = createRef();

    handleClick = () => {

        this.inputRef.current.focus();

        this.inputRef.current.value = 'Hello Word!';

        this.inputRef.current.style.backgroundColor = 'black';
        
        this.inputRef.current.style.color = 'white' ;

    }

    render () {

        return (

            <>

                <input ref={this.inputRef} />

                <button onClick = { this.handleClick } > Focus the input </button>

            </>

        )

    }

}