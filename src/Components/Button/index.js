import React, {Component} from 'react'
import styles from './button.module.scss'
import { Link } from 'react-router-dom'

class Button extends Component {
    render() {
        switch (this.props.type) {
            case 'link': 
                return (
                    <section className={styles.__bound}>
                        <Link to={this.props.url} className={styles.__shape}>
                            <p >
                                <strong>{this.props.label}</strong>
                            </p>
                        </Link>
                    </section>
                )
            default: 
                return (
                    <section className={styles.__bound}>
                        <button className={styles.__shape}>
                            <p >
                                <strong>{this.props.label}</strong>
                            </p>
                        </button>
                    </section>
                )
        }
    }
}

export default Button;