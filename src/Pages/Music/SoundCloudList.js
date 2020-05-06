import React from 'react';

function SoundCloudMusic(props) {
    return (
        <div>
            <iframe width={props.width} height="166" scrolling="no" frameBorder="no" allow="autoplay" src={props.apiLink}></iframe>
            <div
                style={{ paddingBottom: "30px", fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100" }}
            >
                <a href="https://soundcloud.com/rafael-ziller" title="Ziller" target="_blank" tyle={{ color: "#cccccc", textDecoration: "none" }}>
                    Ziller
                </a> · 
                <a href={props.redirectTrackLink} title={props.trackTitle} target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>{props.trackTitle}</a>
            </div>
        </div>
    );
};

export default SoundCloudMusic;