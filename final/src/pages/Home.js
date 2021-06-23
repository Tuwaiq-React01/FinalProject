import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import axios from 'axios';

export default function Home() {
    const [memes, setMemes] = useState([])

    useEffect(() => {
        axios.get('https://firestore.googleapis.com/v1/projects/memes-46946/databases/(default)/documents/memes')
            .then(res => {
                console.log(res.data.documents);
                setMemes(res.data.documents)
            }).catch(err => {
                console.log(err);
            })
    }, [])
    const cards = memes.map((item, i) => (
        <div key={i} className="m-4 h-auto rounded-md overflow-hidden shadow-sm pb-1 md:w-3/4 md:m-auto">

            <img className="w-full" src={`https://apimeme.com/meme?meme=${item.fields.name.stringValue}&top=${item.fields.topText.stringValue}&bottom=${item.fields.bottomText.stringValue}`} />
            <div>
                <div className="flex justify-between w-11/12 m-auto mt-2">
                    <div className="text-sm text-gray-500">{item.createTime.substring(0, 10)}</div>
                    <div className="px-2">
                        <Link className="flex hover:text-pink-500 duration-300 ease-in-out uppercase font-semibold" to={{
                            pathname: "/details",
                            state: {
                                id: item.fields.id.stringValue
                            }
                        }}>
                            More
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    ))
    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className="sm:ml-32 mt-2 ml-2 text-gray-700">
                <div className="m-4 p-2 rounded-md shadow-sm border border-gray-100">
                    <h1 className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-1">
                        Created Memes
                    </h1>
                    <hr className="mb-3" />
                    <div className="grid gap-4">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    )
}
