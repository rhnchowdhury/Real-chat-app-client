import React from 'react';
import { Outlet } from 'react-router-dom';
import Hero from '../Pages/Hero';
import NavBar from '../Pages/NavBar/NavBar';
import SideBar from '../Pages/SideBar/SideBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;