import React, {Component} from 'react'
import styles from './video.module.scss'

class VimeoPlayer extends Component {
    // Detect if data saver is enabled
    componentWillMount() {
		if ('connection' in navigator) {
			// Detect if save data is enabled
			if (navigator.connection.saveData === true) {
				alert(`Your save data mode is enabled, please disable for a better experience`)
			}
		}
	}
    render() {
        return (
            <section className={styles.__slide}>
                <iframe 
                // allow="autoplay"
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