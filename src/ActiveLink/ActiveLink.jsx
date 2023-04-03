import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive }) =>isActive? "font-extrabold bg-red-400 p-2 rounded-lg" : ""
                    }
                    
                  >
                    {children}
                    {/* other code */}
                  </NavLink>
    );
};

export default ActiveLink;