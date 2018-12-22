import React, {Component} from 'react'
import styles from './home.module.scss'
import Player from '@vimeo/player'
import { MobileView } from "react-device-detect";

// Components
import sino from './../../Components/Sinopsis/sino.module.scss'
import abo from './../../Components/AboutUs/abo.module.scss'
import VimeoPlayer from '../../Components/VimeoPlayer'
import Navigation from '../../Components/Navigation'
import VideoControls from '../../Components/VideoControls';
import Sinopsis from '../../Components/Sinopsis';
import AboutUs from '../../Components/AboutUs';
import Orientation from '../../Components/Orientation';

import ReactGA from 'react-ga';
ReactGA.set({ page: window.location.pathname })
ReactGA.pageview(window.location.pathname)



class Cobre extends Component {
    constructor(props) {
        super(props);

        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
        this.sinopsis = this.sinopsis.bind(this)
        this.hideSinopsis = this.hideSinopsis.bind(this)
        this.AboutUs = this.AboutUs.bind(this)
        this.toggleFullscreen = this.toggleFullscreen.bind(this)
    }

    toggleFullscreen() {
        console.log('FS')
        var fullscreenChange = null;
            // other vars …
    
        // Check for fullscreen support
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
    
            // If there's currently an element fullscreen, exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
    
            // Do stuff when the video exits fullscreen mode
            // …
        } else {
            const IFRAME = document.querySelector('#mascaras');
            // Otherwise, enter fullscreen
            // `videoWrapper` is just a `div` element wrapping the video
            if (IFRAME.requestFullscreen) {
                IFRAME.requestFullscreen();
            } else if (IFRAME.mozRequestFullScreen) {
                IFRAME.mozRequestFullScreen();
            } else if (IFRAME.webkitRequestFullscreen) {
                IFRAME.webkitRequestFullscreen();
            } else if (IFRAME.msRequestFullscreen) {
                IFRAME.msRequestFullscreen();
            }
    
            // Do stuff when the video enters fullscreen mode
            // …
        }
    
        fullscreenChange = function() {
    
            // Do something on fullscreen change event
            // …
        };
    
        document.onfullscreenchange = function() {
            if (!document.fullscreenElement) {
                fullscreenChange();
            }
        };
        document.onwebkitfullscreenchange = function() {
            if (!document.webkitFullscreenElement) {
                fullscreenChange();
            }
        };
        document.onmozfullscreenchange = function() {
            if (!document.mozFullScreenElement) {
                fullscreenChange();
            }
        };
        document.onmsfullscreenchange = function() {
            if (!document.msFullscreenElement) {
                fullscreenChange();
            }
        };
    };

    AboutUs() {
        const ABOUT = document.querySelector('#about')
        const IS_ON = abo.__is_on
        const IFRAME = document.querySelector('#mascaras');
        const PLAYER = new Player(IFRAME);
        ABOUT.classList.add(IS_ON)
        PLAYER.pause();
    }
    pause() {
        const IFRAME = document.querySelector('#mascaras');
        const PLAYER = new Player(IFRAME);
        PLAYER.pause();
    }

    play() {
        const IFRAME = document.querySelector('#mascaras');
        const PLAYER = new Player(IFRAME);
        PLAYER.play();
    }

    playMob() {
        const HELPER = document.querySelector('.mob_helper')
        const HIDE = styles.__is_playing
        const IFRAME = document.querySelector('#mascaras')
        const PLAYER = new Player(IFRAME)
        HELPER.classList.add(HIDE)
        PLAYER.play()
    }

    sinopsis() {
        const SINOPSIS = document.querySelector('#sinopsis')
        const IS_ON = sino.__is_on
        const IFRAME = document.querySelector('#mascaras');
        const PLAYER = new Player(IFRAME);
        SINOPSIS.classList.add(IS_ON)
        PLAYER.pause();
    }

    hideSinopsis() {
        const SINOPSIS = document.querySelector('#sinopsis')
        const IS_ON = sino.__is_on
        const IFRAME = document.querySelector('#mascaras');
        const PLAYER = new Player(IFRAME);
        SINOPSIS.classList.remove(IS_ON)
        PLAYER.play();
    }

    hideAbout() {
        const SINOPSIS = document.querySelector('#about')
        const IS_ON = abo.__is_on
        const IFRAME = document.querySelector('#mascaras');
        const PLAYER = new Player(IFRAME);
        SINOPSIS.classList.remove(IS_ON)
        PLAYER.play();
    }


    render () {
        return (
            <section className={styles.__page}>
                <Orientation/>
                {/* Autoplaying is not working on mobile */}
                <MobileView viewClassName={[styles.__mobhelp, `mob_helper`].join(' ')}>
                    <button onClick={this.playMob} className={styles.__play_m}>
                        <i className={styles.i_play}></i>
                    </button>
                </MobileView>
                <Navigation about={this.AboutUs}/>
                <AboutUs 
                    buttonClick={this.hideAbout}/>
                <VideoControls 
                    label="Sinopsis de documental"
                    play={this.play}
                    pause={this.pause}
                    sinopsis={this.sinopsis}
                    fscreen={this.toggleFullscreen}
                    />
                <Sinopsis
                    title="Cobre"
                    sinopsis="Originario de Santa Clara del cobre Michoacán, el 17 de septiembre de 1955.
                    Inició su trabajo artesanal muy joven, a los 13 años ganó su primer concurso.
                    Ha obtenido 22 galardones nacionales en el trabajo del cobre y la plata. Y muchos primeros
                    lugares y premios especiales en diferentes concursos a nivel nacional.
                    Ha expuesto su obra en diferentes países como Estados Unidos de América, Chile y Perú.
                    Además algunas de sus piezas son colecciones particulares y otras se encuentran en museos y galerías de prestigio a nivel nacional e internacional.
                    Pionero en la evolución del cazo de cobre martillado a la escultura de cobre o plata martillado."
                    buttonClick={this.hideSinopsis}/>
                <VimeoPlayer 
                    videoId= 'mascaras'
                    videoTitle= 'Valoremos el trabajo artesanal - Alfarería (piñas vidriadas)'
                    videoURL= 'https://player.vimeo.com/video/306219439?background=1&autoplay=1&loop=0&byline=0&title=0&muted=0'
                    muted= '1'/>
            </section>
        )
    }
}

export default Cobre

// Y si usamos botones para hacer que los usuarios reproduzcan el video