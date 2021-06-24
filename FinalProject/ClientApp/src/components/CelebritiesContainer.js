import React, {useState,useEffect } from 'react'
import axios from 'axios'
import SearchArea from './SearchArea'
import CelebritiesList from './CelebritiesList'
import Header from './Header'
export default function CelebritiesContainer(props) {

    const [Celebrities, setCelebrities] = useState([])
    const [searchFiled, setSearchFiled] = useState('')


    useEffect(() => {
        axios({
            method: "get",
            url: "https://localhost:5001/api/Celebrities" 
        }).then((response) => {
            setCelebrities([...response.data])
           // this.setState({ books: [...response.data.items] })
            //console.log("res", [...response.data][0]);
        }).catch((e) => {
            console.log("error", e);
        })
    }, [])

    const  handleData = (e) => {
        if(searchFiled ==""){
        URL="https://localhost:5001/api/Celebrities" 
        }
        else{
        URL="https://localhost:5001/api/Celebrities/" + searchFiled
        }
        console.log(searchFiled);
         e.preventDefault();
        axios({
            method: "get",
            url: URL
        }).then((response) => {
           // setCelebrities([...response.data])
           if(searchFiled ==""){
            setCelebrities([...response.data])
            }
            else{
                setCelebrities([response.data])
            }
            console.log("responsecc", [response.data]);
            
        }).catch((e) => {
            console.log("error", e);
        })

    }

    const handleSearch = (e) => {
        console.log(e.target.value);
        setSearchFiled(e.target.value)
    }

    return (
        <div>
             
             <Header ShowSreachBar={true}  handleSearch={handleSearch} handleData={handleData}  />
             <center>
              <div style={{width:"80%"}}>
                
              <CelebritiesList Celebrities={Celebrities}/>
             
              </div>
              </center>
        </div>
    )
}
