import React, {useContext, useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import {firebasedb} from "./Firebase"
import {AuthContext} from "./Auth";


function SingForm(props) {
    const [form, setForm] = useState({
        search: "",
        gender: "Female",
        language: "English",
        number: ""
    });
    const [myOptions, setMyOptions] = useState([])
    const [myList, setMyList] = useState([])
    const [showLyrics, setshowLyrics] = useState(false)
    const [lyrics, setLyrics] = useState("")


    const getDataFromAPI = (event) => {
        // console.log(event.target.value)
        setForm((prevform) => ({
            ...prevform,
            search: event.target.value
        }))
    }
    useEffect(() => {
        // console.log(form.search)
        setMyOptions([])

        if (form.search.length > 3) {
            axios({
                method: "get",
                url: `/ws/1.1/track.search?q_track=${form.search}&page_size=6&page=1&s_track_rating=desc&apikey=08919339d389be51cfc7dc09f8b2e9bb`
            }).then((response) => {
                for (var i = 0; i < response.data.message.body.track_list.length; i++) {
                    // console.log(response.data.message.body.track_list[i].track.track_name)
                    myOptions.push("Song: " + response.data.message.body.track_list[i].track.track_name + " Artist: " + response.data.message.body.track_list[i].track.artist_name)
                    myList.push({
                        text: "Song: " + response.data.message.body.track_list[i].track.track_name + " Artist: " + response.data.message.body.track_list[i].track.artist_name,
                        id: response.data.message.body.track_list[i].track.track_id
                    })
                }
                setMyOptions(myOptions)
                setMyList(myList)
            })
        }
    }, [form])


    function getLyrics(event, value) {
        let id = myList.find(element => element.text == value).id
        // console.log(id)
        axios({
            method: "get",
            url: `/ws/1.1/track.lyrics.get?track_id=${id}&apikey=08919339d389be51cfc7dc09f8b2e9bb`
        }).then((response) => {
            // console.log(response.data.message.body.lyrics.lyrics_body)
            setLyrics(response.data.message.body.lyrics.lyrics_body)
            setshowLyrics(true)
        })
    }


    function handleChange(evt) {
        const value = evt.target.value;
        setForm({
            ...form,
            [evt.target.name]: value
        });
    }

    const {currentUser} = useContext(AuthContext);

    function handelSubmit(event) {
        // console.log(currentUser)
        event.preventDefault();
        firebasedb.child("Calls").push({...form, uid: currentUser.uid}, (err) => {
            if (err) console.log(err)
        })
        const headers = {
            'Content-Type': 'application/json',
        }
        axios.post('http://localhost:4000/call',
            {...form, lyrics: lyrics},
            {
                headers: headers
            }
        ).then(r => {
           props.reset()
        })

    }
    return (
        <div className={"img myresult"} style={{width: "20%"}}>
            <Autocomplete
                style={{width: 510}}
                freeSolo
                autoComplete
                autoHighlight
                options={myOptions}
                onChange={getLyrics}
                renderInput={(params) => (
                    <TextField {...params}
                               onChange={getDataFromAPI}
                               variant="outlined"
                               label="Search Song"
                    />
                )}
            />


            {showLyrics ? <div>
                <h2>Lyrics:</h2>
                <p>{lyrics}</p>
            </div> : null}

            <form onSubmit={handelSubmit}>
                <fieldset className="form-group">
                    <legend className="mt-4">Robot Sound ?</legend>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" onChange={handleChange} className="form-check-input" name="gender"
                                   id="optionsRadios1" value="Female"/>
                            Female
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="radio" onChange={handleChange} className="form-check-input" name="gender"
                                   id="optionsRadios2" value="Male"/>
                            Male
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Phone Number:</label>
                        <input name={"number"} onChange={handleChange} className="form-control"
                               id="exampleInputEmail1"
                               aria-describedby="emailHelp" placeholder="ex: 966..."/>
                    </div>

                </fieldset>
                <button style={{marginTop: "10px"}} type="submit"
                        className="btn btn-primary animate__animated animate__infinite animate__headShake">Call
                </button>
            </form>
        </div>
    );
}

export default SingForm;