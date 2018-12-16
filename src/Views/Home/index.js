import React, {Component} from 'react'
import styles from './home.module.scss'
import Player from '@vimeo/player'

// Components
import VimeoPlayer from '../../Components/VimeoPlayer'
import Navigation from '../../Components/Navigation'
import VideoControls from '../../Components/VideoControls';



class Home extends Component {
    constructor(props) {
        super(props);

        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
    }

    pause() {
        var iframe = document.querySelector('#mascaras');
        var player = new Player(iframe);
        player.pause();
    }

    play() {
        var iframe = document.querySelector('#mascaras');
        var player = new Player(iframe);
        player.play();
    }


    render () {
        return (
            <section className={styles.__page}>
            <Navigation />
            <VideoControls 
                label="Sinopsis de documental"
                play={this.play}
                pause={this.pause}
                />
            <VimeoPlayer 
                videoId= 'mascaras'
                videoTitle= 'Máscaras de diablo'
                videoURL= 'https://player.vimeo.com/video/249749574?background=1&autoplay=1&loop=0&byline=0&title=0&muted=0'
                muted= '1'/>
            </section>
        )
    }
}

export default Home

// Y si usamos botones para hacer que los usuarios reproduzcan el video