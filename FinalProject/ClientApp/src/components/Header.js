import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchArea from './SearchArea';
export default function Header(props) {
    return (
        <div>

            <nav className="navbar  navbar-expand-sm d-flex flex-row justify-content-between">
                <a className="navbar-brand" >
                    {/* <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png" width="30" height="30" alt="logo" /> */}
    <h3 id="BrandName"> NOJOOM</h3>
  </a>
           {props.ShowSreachBar? <SearchArea handleSearch={props.handleSearch} handleData={props.handleData} />:null} 
            </nav>
        </div>
    )
}
