import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive }) =>isActive? "bg-red-400" : ""
                    }
                    
                  >
                    {children}
                    {/* other code */}
                  </NavLink>
    );
};

export default ActiveLink;