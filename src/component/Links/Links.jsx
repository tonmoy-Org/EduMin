import React from 'react';
import { Link } from 'react-router-dom';

const Links = ({ route, onClick }) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <li className='pt-1 pb-3 font-semibold hover:text-red-400 duration-150'>
            <Link to={route.path} onClick={handleClick}>
                {route.name}
            </Link>
        </li>
    );
};

export default Links;
