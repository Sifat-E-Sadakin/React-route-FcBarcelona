import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ShowAchievements from '../ShowAchievements/ShowAchievements';

const Achievements = () => {
    let ach = useLoaderData();
    let Achievements =ach.honours;

    let navigate = useNavigate();

    let goBack = ()=> navigate(-1);
    
    return (
        <div>
            <h1 className='text-3xl m-5'>Total achievements {Achievements.length}</h1>
            <div className='grid md:grid-cols-3'>
            {
                Achievements.map(Achievement => <ShowAchievements Achievement={Achievement}></ShowAchievements> )
            }
            </div>
           
             <button className='btn bg-blue-200' onClick={goBack}>Go Back</button>
        </div>
    );
};

export default Achievements;