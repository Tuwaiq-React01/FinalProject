import React from 'react'

export default function ContactUs() {
    return (
        <div style={{ position: "absolute", left: "30%", top: "25%"  }}>
        <div className=" box-shadow bg-white pl-4 pr-4 pt-2 pb-2 container">
          <div className="m-5">
            <div className="mb-3">
              <h2>Contact us</h2>
              <hr></hr>
           
        <form className="m-5">
          <div className="mb-3">
            <label className="form-label">Email: </label>
            <input type="email" className="form-control" id="email" />
            <label className="form-label">Message: </label>
            <textArea className="form-control" id="message" />
          </div>
          <button type="submit" className="btn btn-dark">submit</button>
        </form>






          </div>
          </div>
          </div>
          </div>
    )
}
