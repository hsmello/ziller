import React from 'react';
import './SideDrawer.css';
// import ScrollDownListener from '../ScrollDownListener';
import { Link } from 'react-router-dom';

function SideDrawer(props) {



    let drawerClasses = 'side_Drawer';
    if (props.show) {
        drawerClasses = 'side_Drawer open';
    }

    return (
        <nav className={drawerClasses} >
            <h2 className="menu_title">MENU</h2>
            <ul>
                <li><Link to='/music'>MUSIC</Link></li>
                <li><Link to="/shop">SHOP</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;