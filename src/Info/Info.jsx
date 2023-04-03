import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const Info = () => {
    let info= useLoaderData();
    console.log(info.players[0]);
    let {strPlayer, strCutout,strSigning,strWeight, strNationality, strPosition, idPlayer }= info.players[0];

    let navigate = useNavigate();

    let goBack= ()=>{
        navigate(-1);
    }

    return (
        <div>
            <h2>Players Info</h2>
            <h2>{strPlayer}</h2>
            <h2>{strNationality}</h2>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default Info;