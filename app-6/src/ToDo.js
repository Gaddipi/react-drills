import React, {Component} from 'react'

export default class ToDo extends Component {
    render() {
        // console.log(this.props)
        return(
            <p>{this.props.task}</p>
        )
    }
}