import React, { useState } from 'react';

import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';


function ResponsiveMenu() {
    
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    function handleDrawerClick() {
        setSideDrawerOpen(true)
    }

    function handleBackdropClick() {
        setSideDrawerOpen(false)
    }

    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={handleBackdropClick}/>;
    }

    return (

        <div>
            <Toolbar clickHandler={handleDrawerClick} />
            <SideDrawer show={sideDrawerOpen}/>
            {backdrop}

        </div>
    );
};

export default ResponsiveMenu;