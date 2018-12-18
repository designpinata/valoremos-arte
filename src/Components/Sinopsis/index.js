import React, {Component} from 'react'
import styles from './sino.module.scss'
import grid from './../../grid.module.scss'
import utils from './../../utils.module.scss'

// Assets
import brand from './../../Assets/Brand/logo-black.svg'

class Sinopsis extends Component {
    render() {
        return (
            <section id="sinopsis" className={styles.__shape}>
                <button onClick={this.props.buttonClick} className={styles.__close}>
                    <i className={styles.i_close}></i>
                </button>
                <section className={grid.container}>
                    <section className={[grid.row, grid.center_xs].join(' ')}>
                        <figure className={[grid.col_xs_8, styles.__br].join(' ')}>
                            <img src={brand} alt="Valoremos el trabajo artesanal"/>
                        </figure>
                    </section>
                    <section className={[grid.row, grid.center_xs].join(' ')}>
                        <h3 className={[utils.c300_light, utils.center, grid.col_xs_10].join(' ')}>{this.props.title}</h3>
                    </section>
                    <section className={[grid.row, grid.center_xs, utils.m_b_16].join(' ')}>
                        <span className={[styles.__li].join(' ')}></span>
                    </section>
                    <section className={[grid.row, grid.center_xs, utils.m_b_16].join(' ')}>
                        <p className={[utils.c300_light, utils.center, grid.col_xs_10].join(' ')}>{this.props.sinopsis}</p>
                    </section>
                </section>
            </section>
        )
    }
}

export default Sinopsis