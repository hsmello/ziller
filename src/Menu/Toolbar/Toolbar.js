import React, { useState } from 'react';
import './Toolbar.css';
import DrawerButton from '../SideDrawer/DrawerButton';
import ScrollDownListener from '../ScrollDownListener.js';

function Toolbar(props) {

    const [toolbarCSS, toolbarItemsCSS, buttonCSS, buttonLineCS] = ScrollDownListener([]);
    
    return (
        <header className={toolbarCSS}>
            <nav className='toolbar_nav'>
                <div className='toolbar_button'>
                    <DrawerButton onClick={props.clickHandler}></DrawerButton>
                </div>

                <div className='toolbar_logo'>
                    <a href="/">
                        {toolbarCSS === "toolbar" ? 
                        <img src={require("../../Images/logo_z_white_nullbackground.png")} className="logo" alt=""></img> :
                        <img src={require("../../Images/logo_z_black_nullbackground.png")} className="logo" alt=""></img>}                    
                    </a>
                </div>
                <div className='topMenuSpace' />
                <div className={toolbarItemsCSS}>
                    <ul>
                        <li><a href="/music">MUSIC</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Toolbar