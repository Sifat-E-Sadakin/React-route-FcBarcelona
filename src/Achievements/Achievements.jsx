import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowAchievements from '../ShowAchievements/ShowAchievements';

const Achievements = () => {
    let ach = useLoaderData();
    let Achievements =ach.honours;
    
    return (
        <div>
            <h1>Total achievements {Achievements.length}</h1>
            {
                Achievements.map(Achievement => <ShowAchievements Achievement={Achievement}></ShowAchievements> )
            }
        </div>
    );
};

export default Achievements;