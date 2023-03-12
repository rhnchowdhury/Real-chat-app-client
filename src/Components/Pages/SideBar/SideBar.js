import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div>
            <ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box">
                <li><Link>Home</Link></li>
                <li><Link>Categories</Link></li>
                <li><Link>Library</Link></li>
                <li><Link>Saved</Link></li>
                <li><Link>Discover Weekly</Link></li>
                <li><Link>Made for you</Link></li>
                <li><Link>Daily Mix</Link></li>
            </ul>
        </div>
    );
};

export default SideBar;