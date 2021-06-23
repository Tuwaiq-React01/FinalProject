import React from 'react';
import AnimeDetails from '../components/AnimeDetails';
import { Redirect } from 'react-router';

export default function AnimeView(props) {
    if(!props.location.state || !props.location.state.anime) {
        return <Redirect to="/" />;
    }

    const anime = props.location.state.anime;
    return (
        <div>
            <AnimeDetails anime={anime} />
        </div>
    )
}
