import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.module.scss'
import utils from './../../utils.module.scss'

class Navigation extends Component {
    render () {
        return (
            <section className={styles.__shape}>
                <button className={styles.__trig}>
                    <i className={styles.i_menu}></i>
                </button>

                <nav className={styles.__li}>
                    <Link className={styles.__au} to="/">
                        <p>
                            <strong>Acerca de</strong>
                        </p>
                    </Link>

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
            </section>
        )
    }
}

export default Navigation;