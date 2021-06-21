import React , {useState,useEffect}from 'react'
import FacebookLogin from 'react-facebook-login'
 
export default function Login() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [token,setToken] = useState("");

  const responseFacebook = (response) => {
      setName(response.name)
      setEmail(response.email)
      setToken(response.accessToken)
  }
    return (
      <div className="ui main">
      <h1>log in</h1>
        <div class="ui placeholder segment">
          <div class="ui stackable very relaxed two column grid">
            <div class="column"><form class="ui form">
              <div class="field">
                <label>Username</label>
              <div class="ui left icon input"><input type="text" placeholder="Username"/>
              <i aria-hidden="true" class="user icon"></i></div></div><div class="field">
                <label>Password</label><div class="ui left icon input"><input type="password"/>
                <i aria-hidden="true" class="lock icon">
                  </i></div></div>
                  <button class=" btn btn-outline-primary">Login</button>
                  </form></div><div class="middle aligned column">
         <br/>
         
         <FacebookLogin
          appId="494079185257480"
          autoLoad={false}
          fields="name,email"
          callback={responseFacebook} />
        {token ?
          <div>
            <h2>Welcome {name}</h2>
            <h2>The email {email} is authorized</h2>
          </div> : null  }
           </div></div>           
         <div class="ui vertical divider">Or</div></div>
         </div>
      
   )
  }