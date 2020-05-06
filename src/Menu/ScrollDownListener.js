import React, { useState, useEffect } from 'react';

function ScrollDownListener() {

    const [toolbarCSS, setToolbarCSS] = useState("toolbar")
    const [toolbarItemsCSS, setToolbarItemsCSS] = useState("toolbar_items")
    const [buttonCSS, setButtonCSS] = useState('button')
    const [buttonLineCSS, setButtonLineCSS] = useState("button_line")
    const [sideDrawer, setSideDrawer] = useState("")

    const handleScroll = () => {
         var scrolled = window.scrollY;
            if (scrolled > 100) {
                setToolbarCSS("toolbar_scrolled")
                setToolbarItemsCSS("toolbar_items_scrolled")
                setButtonCSS("button_scrolled")
                setButtonLineCSS('button_line_scrolled')
            } else {
                setToolbarCSS("toolbar")
                setToolbarItemsCSS("toolbar_items")
                setButtonCSS('button')
                setButtonLineCSS('button_line')
            }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [1])

    return [toolbarCSS, toolbarItemsCSS, buttonCSS, buttonLineCSS];
};

export default ScrollDownListener;