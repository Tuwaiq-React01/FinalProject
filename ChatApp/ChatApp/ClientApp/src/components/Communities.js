//Communities
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import authService from './api-authorization/AuthorizeService'
import Community from './Community';
import '../custom.css'

export default function Communities() {
    const [allCommunities, setAllCommunities] = useState([])
useEffect(() => {
    callApi()
}, []);

const callApi=async()=>{
    const token = await authService.getAccessToken();
    axios({
        method: 'get',
        url: '/api/Communities',
        headers:{ 'Authorization': `Bearer ${token}` }
      }).then(res=>{
          console.log(res.data);
          setAllCommunities(res.data)
      }).catch(err=>{
          console.log("err:", err);
      });
}

const  CreateCommunity=async()=>{
    const token =  await authService.getAccessToken();
    console.log(token);
    var Name="First";
     var Descreption="Is it going to happen?";
    axios({
        method: 'post',
        url: `https://localhost:5001/api/Communities/Create?Name=${Name}&Descreption=${Descreption}`,
        // url: `https://localhost:5001/api/Communities/Create`,
        // url: `/api/Communities/Create`,
        headers:{ 'Authorization': `Bearer ${token}` }
      }).then(res=>{
          console.log(res);
      }).catch(err=>{
          console.log("err:", err);
      });
};

const  EditCommunity=async(id)=>{
    const token =  await authService.getAccessToken();
    var Name="updated";
    var Descreption="Is it going to happen?";
    console.log(token);
    axios({
        method: 'put',
        url: `https://localhost:5001/api/Communities/Edit?cummon_id=${id}&Name=${Name}&Descreption=${Descreption}`,
        headers:{ 'Authorization': `Bearer ${token}` }
      }).then(res=>{
          console.log(res);
      }).catch(err=>{
          console.log("err:", err);
      });
};


const  DeleteCommunity=async(id)=>{
    const token =  await authService.getAccessToken();
    axios({
        method: 'delete',
        url: `https://localhost:5001/api/Communities/Delete?cummon_id=${id}`,
        headers:{ 'Authorization': `Bearer ${token}` }
      }).then(res=>{
          console.log(res);
      }).catch(err=>{
          console.log("err:", err);
      });
};

    const userCommunities = allCommunities.map((element, indx)=>{
        return <Community element ={element} key={indx} EditCommunity={()=>EditCommunity(element.id)} deleteCommunity={()=>DeleteCommunity(element.id)}/>
    }); 
    return (
    <>
    <div className="container center" style={{maxWidth:"600px", color:"white"}}>
            <li id="headerColor" className="list-group-item d-flex justify-content-between align-items-center" >
            <h2>Communities</h2>
            <a className="logoCreate" onClick={()=>CreateCommunity()} type="submit">
            <img 
            src= "https://res.cloudinary.com/riodan/image/upload/v1624491813/samples/logo_g2mesp.png"
            height="70"
            width="70"
            ></img>

            </a>
            </li>
            </div>

            <div>

            {userCommunities}
            </div>
        </>
    )
}
