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




class Home extends Component {
    constructor(props) {
        super(props);

        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
        this.sinopsis = this.sinopsis.bind(this)
        this.hideSinopsis = this.hideSinopsis.bind(this)
        this.AboutUs = this.AboutUs.bind(this)
        this.hideAbout = this.hideAbout.bind(this)
    }

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
                    label="¿Qué es esta campaña?"
                    play={this.play}
                    pause={this.pause}
                    sinopsis={this.sinopsis}
                    />
                <Sinopsis
                    title="Valoremos el trabajo artesanal"
                    sinopsis="Valoremos el Trabajo Artesanal busca concientizar a las personas generando un mayor aprecio por las artesanías, mostrando el valor inmaterial y cultural de cada una de ellas, a través de las manos de sus creadores se documentan los diferentes procesos por los que una pieza artesanal pasa antes de llegar a esos resultados finales majestuosos dignos de admirarse, de ser reconocidos y exhibidos a nivel internacional."
                    buttonClick={this.hideSinopsis}/>
                <VimeoPlayer 
                    videoId= 'mascaras'
                    videoTitle= 'Máscaras de diablo'
                    videoURL= 'https://player.vimeo.com/video/305599586?background=1&autoplay=1&loop=0&byline=0&title=0&muted=0'
                    muted= '1'/>
            </section>
        )
    }
}

export default Home