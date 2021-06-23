import React from 'react'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid justify-content-between">
                <div>
                    <h1 className="navbar-brand">Bloggy</h1>
                </div>

                {props.token ? 
                <div>
                    <img className="rounded" src={props.picture} alt="" />
                    <button onClick={props.logout} className="btn btn-dark">Logout</button>
                </div> : null}

            </div>


        </nav>
    )
}
export default Navbar