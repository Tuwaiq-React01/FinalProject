import React from 'react'


export default function Contact() {
  return (
    <div className="body" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)`}}>
    <h3  style={{ marginBottom: "20px", padding: "40px" }}>
            Contact Us
            </h3>
        <div className="form" style={{marginBottom:"-100px", paddingBottom:"40px"}}>
        <form >

          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name.." />

          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Your email.." />
          <label for="role">Role</label><br />
          <select id="role" name="role">
            <option value="artist">Artist</option>
            <option value="interested">Interested</option>

          </select>
          <br />
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

          <input type="submit" value="Submit" />

        </form>
      </div>

    </div>

  )
}
