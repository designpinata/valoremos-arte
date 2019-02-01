import React, {Component} from 'react'
import styles from './video.module.scss'

class VimeoPlayer extends Component {
    render() {
        return (
            <section className={styles.__slide}>
                <iframe 
                allow="autoplay"
                id={this.props.videoId}
                title={this.props.videoTitle} 
                src={this.props.videoURL}
                frameBorder="0" 
                webkitallowfullscreen="true" 
                mozallowfullscreen="true" 
                allowFullScreen 
                data-ready="true"
                className={styles.__fs}></iframe>
            </section>
        )
    }
}

export default VimeoPlayer