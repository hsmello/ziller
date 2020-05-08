import React from 'react';
import './SideDrawer.css';
import ScrollDownListener from '../ScrollDownListener';

function SideDrawer(props) {
    


    let drawerClasses = 'side_Drawer';
    if (props.show) {
        drawerClasses = 'side_Drawer open';
    }

    return (
    <nav className={drawerClasses} >
        <h2 className="menu_title">MENU</h2>
        <ul> 
            <li><a href="/music">MUSIC</a></li>
            <li><a href="/shop">SHOP</a></li>
            <li><a href="/contact">CONTACT</a></li>
        </ul>
    </nav>
    );
};

export default SideDrawer;