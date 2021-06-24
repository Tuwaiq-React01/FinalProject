import React, {useEffect, useState} from 'react';
import License from "./License";
import UserInfo from "./UserInfo";
import axios from "axios";
import authService from "./api-authorization/AuthorizeService";

function Profile(props) {
    const [user, setUser] = useState({});
    
    async function getUser() {
        const token = await authService.getAccessToken();
        await axios.get('api/Profile', {
            headers:  !token ? {} : { 'Authorization': `Bearer ${token}` }
        })
            .then((res) => {
                console.log(res.data)
                setUser(res.data);
            })
            .catch((error) => console.error(`Error:  ${error}`))
    }

    useEffect(() => {
        getUser();
        console.log(user);
    }, []);
    
    return (
        <div className="container">
            <div className="main-body">
                <div className="row">
                    <License account={user} />
                    <UserInfo account={user}/>
                </div>
                <br/>
            </div>
               
        </div>
    );
}

export default Profile;