import React, {Component} from 'react'
import styles from './contr.module.scss'

class VideoControls extends Component {
    render () {
        return (
            <nav className={styles.__shape}>
                <button onClick={this.props.sinopsis} className={styles.__shape_i}>
                    <small>
                        <strong>{this.props.label}</strong>
                    </small>
                </button>
                <section className={styles.__cont}>
                    <button onClick={this.props.play} className={styles.__but}>
                        <i className={styles.i_play}></i>
                    </button>
                    <button onClick={this.props.pause} className={styles.__but}>
                        <i className={styles.i_pause}></i>
                    </button>
                </section>
            </nav>
        )
    }
}

export default VideoControls;