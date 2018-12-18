import React, {Component} from 'react'
import styles from './share.module.scss'
import utils from './../../utils.module.scss'

class Share extends Component {
    render() {
        return (
            <section className={styles.__cont}>
                <p className={utils.c100}>
                    <strong>Síguenos</strong>
                </p>
                <span className={styles.__line}></span>
                <a 
                    href="https://www.facebook.com/CasArtM/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.__sha}>
                    <i className={styles.i_facebook}></i>
                </a>

                <a 
                    href="https://www.instagram.com/casartm/" 
                    className={styles.__sha}
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className={styles.i_instagram}></i>
                </a>

                <a 
                    href="https://vimeo.com/casadelasartesaniasmich" 
                    className={styles.__sha}
                    target="_blank" 
                    rel="noopener noreferrer">
                    <i className={styles.i_vimeo}></i>
                </a>
            </section>
        )
    }
}

export default Share;