import React from 'react';
import { Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import GameDetails from './GameDetails'




const CardList = (props) => {

    const allCards = props.games.map((game) => {
        return (
            <GameDetails
                filter={props.filter}
                game={game}
                key={game.id}
                onFaveToggle={() => props.onFaveToggle(game)}
                faves={props.faves}
                games={props.games}
            ></GameDetails>)
    })



    const search = props.search.map((game) => {
        return (
            <GameDetails
                filter={props.filter}
                game={game}
                key={game.id}
                onFaveToggle={() => props.onFaveToggle(game)}
                faves={props.faves}
                games={props.games}
            ></GameDetails>
        )
    })

    const fav = props.faves.map((game) => {
        return (
            <GameDetails 
                filter={props.filter}
                game={game}
                key={game.id}
                onFaveToggle={() => props.onFaveToggle(game)}
                faves={props.faves}
                games={props.games}
            ></GameDetails>
        )
    })
    return (
        <div>
            <Row>
                {props.filter === 'all' && search.length === 0 ? allCards
                    : search.length > 0 ? search
                        : props.filter === 'fav' ? fav
                            : null}
            </Row>
            {props.filter === 'fav' && props.faves.length > 0 ? <Button onClick={props.setFave()} variant="outline-danger">Remove all</Button> : ""}
        </div>
    );
}

export default CardList;