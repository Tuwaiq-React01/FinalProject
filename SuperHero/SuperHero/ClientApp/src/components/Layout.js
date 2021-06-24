import React, { Component } from 'react';
import { Container } from 'reactstrap';
import  NavMenu  from './NavMenu';

 const Layout = (props) =>{

    return (
      <div>
        <NavMenu fight={props.fight} />
        <Container>
          {props.children}
        </Container>
      </div>
    )
}
export default Layout
