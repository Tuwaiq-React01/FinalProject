import React, { Component } from 'react'

export default class Car extends React {
    constructor() {
      super();
      this.state = {color: "red"};
    }
    componentDidMount() {
        console.log("in did mount");
      }
    render() {
      return <h2>I am a Car!</h2>;
    }
  }