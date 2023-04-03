import React from 'react';
import { Link } from 'react-router-dom';

const ShowPlayers = (props) => {
   
    let {strPlayer, strCutout,strSigning,strWeight, strNationality, strPosition, idPlayer}= props.player;
    

    return (
        <div className='border bg-blue-900 '>
            <img src={strCutout} alt="" />
            <h2 className='p-3 text-2xl font-semibold' >{strPlayer}</h2>
            <button className='btn-sm btn m-1' ><Link to={`/info/${idPlayer}`}>See Details</Link></button>
            <button className='btn-sm btn m-1' ><Link to={`/Achievements/${idPlayer}`}>See Achievements</Link></button>
        </div>
    );
};

export default ShowPlayers;