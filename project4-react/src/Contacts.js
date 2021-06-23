import React from 'react'
import './App.css'
import './Contact.css';
export default function Contacts() {
    return (
        <div>
         
<div class="container">
  <div class="row header">
    <h1 id="con1">CONTACT US &nbsp;</h1>
    <h3>Fill out the form below to learn more!</h3>
  </div>
  <div class="row body">
    <form action="#">
      <ul>
        
        <li>
          <p class="left">
            <label for="first_name">First Name</label>
            <input type="text" name="first_name" placeholder="First Name" />
          </p>
          <p class="pull-right">
            <label for="last_name">Last Name</label>
            <input type="text" name="last_name" placeholder="Last Name" />      
          </p>
        </li>
        
        <li>
          <p>
            <label for="email">Email <span class="req">*</span></label>
            <input type="email" name="email" placeholder="example@mail.com" />
          </p>
        </li>        
        <li><div class="divider"></div></li>
        <li>
          <label for="comments">comments</label>
          <textarea cols="46" rows="3" name="comments"></textarea>
        </li>
        
        <li>
            <center>
          <input class="btn btn-submit" type="submit" value="Submit" />
        
          </center>
        </li>
        
      </ul>
    </form>  
  </div>
</div>
        </div>
    )
}
