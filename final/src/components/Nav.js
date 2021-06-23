import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Nav extends Component {

    render() {
        return (
            <div className="static uppercase font-semibold">
                <div className="bg-gray-200 rounded-lg flex md:flex-col md:ml-1 shadow-lg border-gray-600 justify-around md:h-screen md:w-16 fixed w-screen bottom-0">
                    <div className="md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 hover:-rotate-12">
                        <Link style={{ textDecoration: 'none' }} to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </Link>
                    </div>
                    <div className="md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 hover:rotate-12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                    </div>

                    <div className="hover:shadow-md p-3 rounded-full duration-1000 ease-in-out transform hover:scale-125 delay-200 hover:rotate-180 text-3xl font-bold text-center bg-gradient-to-br from-purple-400 to-pink-300 md:p-5 ">
                        <Link style={{ textDecoration: 'none' }} to="/create">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </Link>
                    </div>
                    <div className="md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 hover:-rotate-12">
                        <Link style={{ textDecoration: 'none' }} to="/profile">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="md:p-5 p-3 delay-75 duration-500 ease-in-out transform hover:scale-125 hover:rotate-45">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>

                </div>
            </div>
        )
    }
}
