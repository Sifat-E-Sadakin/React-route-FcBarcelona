import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowPlayers from '../ShowPlayers/ShowPlayers';

const Players = () => {

    let players= useLoaderData();
    

    return (
        <div className=''>
            <h2>List of players</h2>
            <div className='grid md:grid-cols-3 gap-5'>
            {
                players.map(player=> <ShowPlayers player={player} key={player.idPlayer}></ShowPlayers> )
            }
            </div>
            
        </div>
    );
};

export default Players;