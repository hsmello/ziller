import React from 'react';
import './DrawerButton.css'
import ScrollDownListener from '../ScrollDownListener'

function DrawerButton(props) {
    
    const [toolbarCSS, toolbarItemsCSS, buttonCSS, buttonLineCSS] = ScrollDownListener([]); 

    return (
        <button className={buttonCSS} onClick={props.onClick}>
            <div className={buttonLineCSS}/>
            <div className={buttonLineCSS}/>
            <div className={buttonLineCSS}/>
        </button>
    );
};

export default DrawerButton;