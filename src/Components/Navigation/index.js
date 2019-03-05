import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.module.scss'
import grid from './../../grid.module.scss'
import utils from './../../utils.module.scss'

// Assets
import cobre from './../../Assets/Thumbs/cobre.jpg'
import cantera from './../../Assets/Thumbs/cantera.jpg'
import alfareria from './../../Assets/Thumbs/alfareria.jpg'
import mascara from './../../Assets/Thumbs/mascara.jpg'
import rebozos from './../../Assets/Thumbs/rebozos.jpg'
import figuras from './../../Assets/Thumbs/figuras.jpg'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.episodesOn = this.episodesOn.bind(this)
    }

    episodesOn () {
        const NAVBAR = document.querySelector('#nav')
        const MENU_ACTIVE = styles.__menu_on
        NAVBAR.classList.toggle(MENU_ACTIVE);
    }
    
    render () {
        return (
            <section id="nav" className={[styles.__shape].join(' ')}>
                <button onClick={this.episodesOn} className={styles.__trig}>
                    <i className={styles.i_menu}></i>
                </button>

                <nav className={styles.__li}>
                    <button onClick={this.props.about} className={styles.__au} to="/">
                        <p>
                            <strong>Acerca de</strong>
                        </p>
                    </button>

                    <section className={styles.__rs}>
                        <a 
                            href="https://www.facebook.com/CasArtM/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={styles.__rsl}>
                            <i className={styles.i_facebook}></i>
                        </a>

                        <a 
                            href="https://www.instagram.com/casartm/" 
                            className={styles.__rsl}
                            target="_blank" 
                            rel="noopener noreferrer">
                            <i className={styles.i_instagram}></i>
                        </a>

                        <a 
                            href="https://vimeo.com/casadelasartesaniasmich" 
                            className={styles.__rsl}
                            target="_blank" 
                            rel="noopener noreferrer">
                            <i className={styles.i_vimeo}></i>
                        </a>
                    </section>
                </nav>
                <section className={[styles.__videos].join(' ')}>
                    <section className={grid.container_fluid}>
                    <section className={grid.row}>
                        <h3 className={[utils.c300_light, grid.col_xs_12].join(' ')}>
                            <strong>Documentales</strong>
                        </h3>
                    </section>
                    <section className={[grid.row, styles.__vi_li].join(' ')}>
                    <Link to="/figuras" className={[styles.__ep, grid.col_xs_4].join(' ')}>
                            <figure className={styles.__thumb}>
                            <figcaption className={styles.__badge}>
                                    <small className={grid.col_xs_12}>ESTRENO</small>
                                </figcaption>
                                <img src={figuras} alt="Valoremos el trabajo artesanal - Máscaras de diablo de Tócuaro Michoacán"/>
                            </figure>
                            <figcaption className={[grid.row, grid.top_xs].join(' ')}>
                                <p className={grid.col_xs_12}><strong>Mario Agustín</strong></p>
                                <section className={grid.col_xs_12}>
                                    <span className={styles.__div}></span>
                                </section>
                                <small className={grid.col_xs_12}>El artesano Mario Agustín y su familia trabajan 3 técnicas artesanales de gran herencia histórica para la cultura Purépecha.</small>
                            </figcaption>
                        </Link>
                        <Link to="/cara-diablo" className={[styles.__ep, grid.col_xs_4].join(' ')}>
                            <figure className={styles.__thumb}>
                                <img src={mascara} alt="Valoremos el trabajo artesanal - Máscaras de diablo de Tócuaro Michoacán"/>
                            </figure>
                            <figcaption className={[grid.row, grid.top_xs].join(' ')}>
                                <p className={grid.col_xs_12}><strong>Cara de Diablo</strong></p>
                                <section className={grid.col_xs_12}>
                                    <span className={styles.__div}></span>
                                </section>
                                <small className={grid.col_xs_12}>Desde la conquista hasta la revolución, la lucha interminable del bien contra el mal ha estado representada en las tradiciones dancísticas de México.</small>
                            </figcaption>
                        </Link>
                        <Link to="/rebozos" className={[styles.__ep, grid.col_xs_4].join(' ')}>
                            <figure className={styles.__thumb}>
                                <img src={rebozos} alt="Valoremos el trabajo artesanal - Rebozos de pluma de ave"/>
                            </figure>
                            <figcaption className={[grid.row, grid.top_xs].join(' ')}>
                                <p className={grid.col_xs_12}><strong>Rebozos con Plumas de Aves</strong></p>
                                <section className={grid.col_xs_12}>
                                    <span className={styles.__div}></span>
                                </section>
                                <small className={grid.col_xs_12}>K’uaníndikua” es el documental en el que se narra la historia de Albertina Bautista y su familia.</small>
                            </figcaption>
                        </Link>
                        <Link to="/cobre" className={[styles.__ep, grid.col_xs_4].join(' ')}>
                            <figure className={styles.__thumb}>
                                <img src={cobre} alt="Valoremos el trabajo artesanal - Cobre"/>
                            </figure>
                            <figcaption className={[grid.row, grid.top_xs].join(' ')}>
                                <p className={grid.col_xs_12}><strong>Cobre</strong></p>
                                <section className={grid.col_xs_12}>
                                    <span className={styles.__div}></span>
                                </section>
                                <small className={grid.col_xs_12}>Pionero en la evolución del cazo de cobre martillado a la escultura de cobre o plata martillado.</small>
                            </figcaption>
                        </Link>
                        <Link to="/canteria" className={[styles.__ep, grid.col_xs_4].join(' ')}>
                            <figure className={styles.__thumb}>
                                <img src={cantera} alt="Valoremos el trabajo artesanal - cantera"/>
                            </figure>
                            <figcaption className={[grid.row, grid.top_xs].join(' ')}>
                                <p className={grid.col_xs_12}><strong>Cantería</strong></p>
                                <section className={grid.col_xs_12}>
                                    <span className={styles.__div}></span>
                                </section>
                                <small className={grid.col_xs_12}>La conversión de la piedra es un arte que las antiguas culturas mesoamericanas practicaban afanosamente.</small>
                            </figcaption>
                        </Link> 
                        <Link to="/alfareria" className={[styles.__ep, grid.col_xs_4].join(' ')}>
                            <figure className={styles.__thumb}>
                                <img src={alfareria} alt="Valoremos el trabajo artesanal - alfarería"/>
                            </figure>
                            <figcaption className={[grid.row, grid.top_xs].join(' ')}>
                                <p className={grid.col_xs_12}><strong>Alfarería</strong></p>
                                <section className={grid.col_xs_12}>
                                    <span className={styles.__div}></span>
                                </section>
                                <small className={grid.col_xs_12}>Es una de las piezas más tradicionales de la región, conocidas como “piñas”, derivado del pastillaje tipo pellizco que van formando una superficie especial y ondulada.</small>
                            </figcaption>
                        </Link>
                    </section>
                    </section>
                </section>
            </section>
        )
    }
}

export default Navigation;