import React, { useEffect, useState } from 'react'
import FacebookLogin from 'react-facebook-login';

export default function FacebookLogin1() {
    const [data, setData] = useState({})

    const responseFacebook = (response) => {
      setData({ name: response.name, email: response.email, picture: response.picture.data.url, token: response.accessToken })
    }
    useEffect(() => {
      if (data.token) 
      {
        localStorage.setItem("token", data.token)
        localStorage.setItem("name", data.name)
        localStorage.setItem("email", data.email)
        localStorage.setItem("picture", data.picture)
      }
    },[data])
    return (
        <div>
            <FacebookLogin
              appId="485706339362929"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook} buttonStyle={{backgroundColor:"#9e1f44", fontFamily:"Times New Roman", borderStyle:"none",fontSize:16}} />
        </div>
    )
}