import React from "react";
import { Container } from "react-bootstrap";
import FireStoreData from './FireStoreData'

export default function Home1() {
    const mystyle = {
      backgroundColor: "#e7eff6",
      padding: "10px",
      fontFamily: "Arial",
      height:'100%'
      };
  return (
      
    <div >
      <Container style={mystyle}>
          <FireStoreData/>
      </Container>
    </div>
  );
}
