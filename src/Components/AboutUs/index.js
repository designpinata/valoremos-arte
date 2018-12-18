import React, {Component} from 'react'
import styles from './abo.module.scss'
import grid from './../../grid.module.scss'
import utils from './../../utils.module.scss'

// Assets
import brand from './../../Assets/Brand/logo-black.svg'
import s1 from './../../Assets/Sponsors/1.png'
import s2 from './../../Assets/Sponsors/2.png'
import s3 from './../../Assets/Sponsors/3.png'
import s4 from './../../Assets/Sponsors/4.png'
import s5 from './../../Assets/Sponsors/5.png'
import s6 from './../../Assets/Sponsors/6.png'

class AboutUs extends Component {
    render() {
        return (
            <section id="about" className={[styles.__shape].join(' ')}>
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
                        <h3 className={[utils.c300_light, utils.center, grid.col_xs_10].join(' ')}>Patrocinadores</h3>
                    </section>
                    <section className={[grid.row, grid.center_xs, utils.m_b_16].join(' ')}>
                        <span className={[styles.__li].join(' ')}></span>
                    </section>
                    <section className={[styles.__sp_gr, grid.row, grid.center_xs, utils.m_b_16].join(' ')}>
                        <figure className={[grid.col_xs_4, styles.__sp].join(' ')}>
                            <img src={s1} alt="Fundación Cinépolis"></img>
                        </figure>
                        <figure className={[grid.col_xs_4, styles.__sp].join(' ')}>
                            <img src={s2} alt="Fundación Cinépolis"></img>
                        </figure>
                        <figure className={[grid.col_xs_4, styles.__sp].join(' ')}>
                            <img src={s3} alt="Fundación Cinépolis"></img>
                        </figure>
                        <figure className={[grid.col_xs_4, styles.__sp].join(' ')}>
                            <img src={s4} alt="Fundación Cinépolis"></img>
                        </figure>
                        <figure className={[grid.col_xs_4, styles.__sp].join(' ')}>
                            <img src={s5} alt="Fundación Cinépolis"></img>
                        </figure>
                        <figure className={[grid.col_xs_4, styles.__sp].join(' ')}>
                            <img src={s6} alt="Fundación Cinépolis"></img>
                        </figure>
                    </section>
                </section>
            </section>
        )
    }
}

export default AboutUs