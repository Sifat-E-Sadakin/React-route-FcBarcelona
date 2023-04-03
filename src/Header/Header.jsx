import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold'>Fc Barcelona Best XI !!!</h2>
            <nav>
                <button className='btn btn-sm bg-blue-500 text-red-200 m-1'><ActiveLink className='btn ' to='/players'>Players</ActiveLink></button>
                <button className='btn btn-sm bg-blue-500 text-red-200 m-1'><ActiveLink className='btn ' to='/info'>Players Details</ActiveLink></button>
                <button className='btn btn-sm bg-blue-500 text-red-200 m-1'><ActiveLink className='btn ' to='/achievements'>Achievements</ActiveLink></button>
                
               

            </nav>
        </div>
    );
};

export default Header;