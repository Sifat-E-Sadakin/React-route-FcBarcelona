import React from 'react';

const ShowAchievements = (props) => {
    console.log(props.Achievement);
    let {strHonour, strSeason, strTeam}= props.Achievement;

    return (
        <div>
            <h1>{strHonour} {strSeason} {strTeam} </h1>
        </div>
    );
};

export default ShowAchievements;