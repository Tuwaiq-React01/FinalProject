import React, { useEffect, useState} from 'react'
import axios from 'axios';
import Home from './pages/Home';

export default function App() {
const [meme, setMeme] = useState('');
  useEffect(() => {
 
  }, [])
  const callApi = () => {
    axios.get('https://firestore.googleapis.com/v1/projects/memes-46946/databases/(default)/documents/memes')
    .then(res => {
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })

  }
  return (
    <div>
      
      <Home/>
    </div>
  )
}