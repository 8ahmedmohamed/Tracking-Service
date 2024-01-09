import React, { useState } from 'react';

// React Router
import { Outlet } from 'react-router-dom';

import Navbar from '../Components/Navbar/Navbar';

const Container = () => {
    const [direction, setDirection] = useState('left');

    return (
        <React.Fragment>
            <Navbar direction={direction} setDirection={setDirection}/>
            <Outlet />
        </React.Fragment>
    )
}

export default Container;
