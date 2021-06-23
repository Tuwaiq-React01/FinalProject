import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import useSound from 'use-sound';
const soundUrl = '../../BOTW_Soundtrack.mp3';
const MyNavBar = () => {
    const [login, setLogin] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [profileObj, setProfileObj] = useState({});
    const [selectedTap, setSelectedTap] = useState('home');
    const [play, { stop }] = useSound(
        soundUrl,
        { volume: 1.0 }
    );

    const handlePlay = (e) => {
        e.preventDefault();
        if(!playing){
            play();
        }
        else{
            stop();
        }
        setPlaying(!playing);
    }
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
            `Logged in successfully welcome ${res.profileObj.givenName} 😍.`
        );
        setProfileObj(res.profileObj)
        setLogin(true)
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Failed to login. 😢`
        );
    };

    const onSuccessLogout = () => {
        console.log('Logout made successfully');
        alert('Logout made successfully ✌');
        setLogin(false)
    };

    return (
        <div className="ui inverted segment" style={{
            "position": "fixed",
            "top": "0",
            "width": "100%",
            "marginBottom": "40px",
            "zIndex": "99999"
        }}>
            <div className="ui inverted secondary menu">
                <div className="item">
                    <img alt="logo" src="data:image/png;base64,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" />
                </div>
                {selectedTap === "home" ?
                    (<Link to="/" className="item active red ">
                        Home
                    </Link>)
                    :
                    (<Link to="/" className="item " onClick={(e) => { setSelectedTap('home') }}>
                        Home
                    </Link>)
                }

                {selectedTap === "recipes" ?
                    (<Link to="/recipes" className="item active red">
                        Recipes
                    </Link>)
                    :
                    (<Link to="/recipes" className="item " onClick={(e) => { setSelectedTap('recipes') }}>
                        Recipes
                    </Link>)
                }

                {selectedTap === "gallary" ?
                    (<Link to="/gallary" className="item active red">
                        Gallary
                    </Link>)
                    :
                    (<Link to="/gallary" className="item " onClick={(e) => { setSelectedTap('gallary') }}>
                        Gallary
                    </Link>)
                }
                {playing ?
                    (<div className="item">
                        <button class="ui labeled icon button" onClick={(e)=>handlePlay(e)}>
                            <i class="pause icon"></i>
                            Pause
                        </button>
                    </div>)
                    :
                    (<div className="item">
                        <button class="ui labeled icon button" onClick={(e)=>handlePlay(e)}>
                            <i class="play icon"></i>
                            Play
                        </button>
                    </div>)

                }

                <div className="right menu">
                    {!login ? (<GoogleLogin
                        clientId="527075466581-u0krqedrqk3kpvg89569p832g7gi7per.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        style={{ marginTop: '100px' }}
                        isSignedIn={true}
                    />) :
                        (<>

                            <div className="item">
                                <span style={{ "marginRight": "15px" }}> <strong>Welcome </strong> {profileObj.givenName}</span>
                                <img src={profileObj.imageUrl} alt="google_image"/>
                            </div>
                            <a className="item"><GoogleLogout
                                clientId="527075466581-u0krqedrqk3kpvg89569p832g7gi7per.apps.googleusercontent.com"
                                buttonText="Logout"
                                onLogoutSuccess={onSuccessLogout}
                            ></GoogleLogout>
                            </a>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
}

export default MyNavBar;


