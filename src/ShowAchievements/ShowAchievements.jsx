import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowAchievements = (props) => {
    console.log(props.Achievement);
    let {strHonour, strSeason, strTeam}= props.Achievement;

    let navigation= useNavigate();

    let goBack = ()=> navigation(-1)

    return (
        <div>
            <div className='border m-5 p-3'>
            <h1 className='text-xl p-2'>{strHonour} </h1>
            <h1 className='text-xl p-2'> {strSeason} </h1>
            <h1 className='text-xl p-2'>{strTeam} </h1>
            </div>
           

           
        </div>
    );
};

export default ShowAchievements;