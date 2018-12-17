import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.module.scss'
import grid from './../../grid.module.scss'
import utils from './../../utils.module.scss'

class Navigation extends Component {
    constructor(props) {
        super(props)
        this.aboutUs = this.aboutUs.bind(this)
    }

    aboutUs () {

    }
    
    render () {
        return (
            <section className={styles.__shape}>
                <button className={styles.__trig}>
                    <i className={styles.i_lock}></i>
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
                {/* <section className={styles.__videos}>
                    <section className={grid.container}>
                    <section className={grid.row}>
                        <h3 className={[utils.c300_light, grid.col_xs_12].join(' ')}>
                            <strong>Documentales</strong>
                        </h3>
                    </section>
                    <section className={grid.row}>
                        <Link to="/" className={styles.__ep}>
                            <figure className={styles.__thumb}>
                                <img src='https://via.placeholder.com/400x200'/>
                            </figure>
                            <figcaption className={grid.row}>
                                <p className={grid.col_xs_12}><strong>Valoremos el Trabajo Artesanal</strong></p>
                                <section className={grid.col_xs_12}>
                                    <span className={styles.__div}></span>
                                </section>
                                <small className={grid.col_xs_12}>"Valoremos el Trabajo Artesanal" busca concientizar a las personas generando un mayor...</small>
                            </figcaption>
                        </Link>
                        <Link to="/" className={styles.__ep}>
                            <figure className={styles.__thumb}>
                                <img src='https://via.placeholder.com/400x200'/>
                            </figure>
                            <figcaption className={grid.row}>
                                <p className={grid.col_xs_12}><strong>Valoremos el Trabajo Artesanal</strong></p>
                                <section className={grid.col_xs_12}>
                                    <span className={styles.__div}></span>
                                </section>
                                <small className={grid.col_xs_12}>"Valoremos el Trabajo Artesanal" busca concientizar a las personas generando un mayor...</small>
                            </figcaption>
                        </Link>
                        <Link to="/" className={styles.__ep}>
                            <figure className={styles.__thumb}>
                                <img src='https://via.placeholder.com/400x200'/>
                            </figure>
                            <figcaption className={grid.row}>
                                <p className={grid.col_xs_12}><strong>Valoremos el Trabajo Artesanal</strong></p>
                                <section className={grid.col_xs_12}>
                                    <span className={styles.__div}></span>
                                </section>
                                <small className={grid.col_xs_12}>"Valoremos el Trabajo Artesanal" busca concientizar a las personas generando un mayor...</small>
                            </figcaption>
                        </Link> 
                    </section>
                    </section>
                </section> */}
            </section>
        )
    }
}

export default Navigation;