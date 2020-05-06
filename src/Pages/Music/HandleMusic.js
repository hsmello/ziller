import React from 'react';
import MusicArray from './MusicArray'
import MyMusicCard from './MyMusicCard';

class HandleMusic extends React.Component {
    state = {
        play: false,
    }
    audio = new Audio(MusicArray[1].url)

    componentDidMount() {
        this.audio.addEventListener('ended', () => this.setState({ play: false }));
    }

    componentWillMount() {
        this.audio.removeEventListener('ended', () => this.setState({ play: false }));

    }

    togglePlay = () => {
        this.setState({ play: !this.state.play }, () => {
            this.state.play ? this.audio.play() : this.audio.pause();
        });
    }

    render() {
        return (
            <div>
                <iframe width="50%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/784137529&color=%23444c4c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                <div
                    style={{ fontSize: "10px", color: "#cccccc", lineBreak: "anywhere", wordBreak: "normal", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", fontFamily: " Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", fontWeight: "100" }}
                >
                    <a href="https://soundcloud.com/rafael-ziller" title="Ziller" target="_blank" tyle={{ color: "#cccccc", textDecoration: "none" }}>
                        Ziller
                        </a> ·
                        <a href="https://soundcloud.com/rafael-ziller/quarantine-set-30" title="Quarantine Set 3.0" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>Quarantine Set 3.0</a>
                </div>

                <MyMusicCard
                    onPlayCLick={this.togglePlay}
                >
                    {this.state.play ? 'Pause' : 'Play'}
                </MyMusicCard>
                <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}
                </button>
            </div>
        )
    }
}

export default HandleMusic

