import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div>
            <h2>Fc Barcelona Best XI !!!</h2>
            <nav>
                <ActiveLink className='btn m-1' to='/players'>Players</ActiveLink>
                <ActiveLink className='btn' to='/info'>Players Details</ActiveLink>

            </nav>
        </div>
    );
};

export default Header;