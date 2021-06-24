import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <label type={this.props.type}></label>
            </div>
        )
    }
}
