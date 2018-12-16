import React, {Component} from 'react'
import styles from './home.module.scss'
import sino from './../../Components/Sinopsis/sino.module.scss'
import Player from '@vimeo/player'

// Components
import VimeoPlayer from '../../Components/VimeoPlayer'
import Navigation from '../../Components/Navigation'
import VideoControls from '../../Components/VideoControls';
import Sinopsis from '../../Components/Sinopsis';



class Home extends Component {
    constructor(props) {
        super(props);

        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
        this.sinopsis = this.sinopsis.bind(this)
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

    sinopsis() {
        const SINOPSIS = document.querySelector('#sinopsis')
        const IS_ON = sino.__is_on
        SINOPSIS.classList.add(IS_ON)
    }


    render () {
        return (
            <section className={styles.__page}>
            <Navigation />
            <VideoControls 
                label="Sinopsis de documental"
                play={this.play}
                pause={this.pause}
                sinopsis={this.sinopsis}
                />
            <Sinopsis
                title="Máscaras de diablo"
                sinopsis="Felipe Horta es un artesano originario de Tócuaro, Michoacán, dedicado a la elaboración de máscaras talladas en madera ya sea copal, copalillo o aguacate. Actualmente es uno de los artesanos más destacados en el estado debido a que pertenece a la 2da. generación de mascareros y es promotor de la danza de los Enguangonchados. Sus máscaras son muestra tanto de la tradición como de la imaginación del artesano."/>
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