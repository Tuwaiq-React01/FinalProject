import React from 'react'
import { Link, useHistory } from 'react-router-dom';

export default function Header(props) {
    const goHome = useHistory()
    const logout = () => {
        localStorage.clear();
        goHome.push("/");
        window.location.reload()

    }

    return (
        <div>
            <header id="header" className="fixed-top">

                <ul className="navbar-nav mr-auto  ">
                    <div className="container">
                        <div className="row" >
                            <div className="col-8 d-flex flex-row">
                                <li className="nav-item mx-5">
                                    <h1 className="logo me-auto"><Link to="/"> CRM </Link></h1>
                                </li>
                                <li className="nav-item mx-5">
                                    <Link to="/comment"><h5 className="aHead">Comments</h5></Link>
                                </li>


                                <li className="nav-item mx-5">
                                    <Link to="/about" ><h5 className="aHead">About us</h5></Link>
                                </li>
                            </div>
                            <div className="col-4 d-flex flex-row">
                                <li>
                                    <h5 className="mx-2"> Hello, {props.name}! </h5>
                                </li>
                                <li>
                                    <img src={props.pic} alt={props.name} />
                                </li>
                                <li>
                                    <input type="button" className="get-started-btn" onClick={logout} value="Log out" />
                                </li>
                            </div>
                        </div>
                    </div>
                </ul>



            </header>
            <div className="separaterPage" style={{ margin: "8rem" }} />
        </div >
    )
}
