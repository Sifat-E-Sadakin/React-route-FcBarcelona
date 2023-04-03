import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import './info.css'

const Info = () => {
    let info= useLoaderData();
    console.log(info.players[0]);
    let {strPlayer, strCutout,strSigning,strWeight, strNationality, strPosition, idPlayer, strFanart2, strRender}= info.players[0];

    let navigate = useNavigate();

    let goBack= ()=>{
        navigate(-1);
    }

    return (
        <div>
            <h2 className='text-3xl m-5'>Players Info</h2>
            <div style={{display:'flex', justifyContent:'center'}}>
              <img src={strFanart2? strFanart2 : strRender} alt="" className='img rounded' />
            </div>
            
            <h2 className='text-xl p-2'>Name: {strPlayer}</h2>
            <h2 className='text-xl p-2'>Nationality: {strNationality}</h2>
            <h2 className='text-xl p-2'>Position: {strPosition}</h2>
            <h2 className='text-xl p-2'>Weight: {strWeight}</h2>
            <h2 className='text-xl p-2'>Singing Value: {strSigning}</h2>
            <button className='btn bg-blue-200' onClick={goBack}>Go Back</button>
        </div>
    );
};

export default Info;