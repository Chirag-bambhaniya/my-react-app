import { Component } from "react";

export default class UpdateComponent extends Component {

    componentWillUnmount() {

        console.log('Update component unmounted');

    }

    render() {

        return(

            <div>UpdateComponent: {this.props.count}</div>

        )

    }

}