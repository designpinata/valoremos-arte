import React, {Component} from 'react'
import styles from './load.module.scss'
import grid from './../../grid.module.scss'
import utils from './../../utils.module.scss'

// Icons
import icon from './../../Assets/Icons/ripple.gif'

class Loader extends Component {
    componentWillMount() {
        setTimeout(
            ()=> {
                const ACTIVE = styles._is_on
                const LOAD_COMP = document.querySelector('#ar_load')
                LOAD_COMP.classList.remove(ACTIVE)
            }
            ,5000)
    }
    render () {
        return (
            <section id="ar_load" className={[styles.__page, styles._is_on].join(' ')}>
                <section className={grid.container}>
                    <section className={[grid.row, grid.center_xs].join(' ')}>
                        <section className={[grid.col_xs_9, utils.m_b_16].join(' ')}>
                            <h2 className={[utils.c300_light, utils.center].join(' ')}>
                                <strong>Bienvenidos</strong>
                            </h2>
                        </section>
                        <section className={[grid.col_xs_9, utils.m_b_16].join(' ')}>
                            <h3 className={[utils.c300_light, utils.center].join(' ')}>¿Estás listo para conocer la historia de los artesanos michoacanos?</h3>
                        </section>
                        <section className={[grid.col_xs_4, utils.m_b_16].join(' ')}>
                            <p className={[utils.c300, utils.center, utils.m_b_16].join(' ')}>Ponte los audifonos, sube el volumen  y "Valoremos el trabajo artesanal" </p>
                            <i className={[styles.i_headphones].join(' ')}>
                                <img className={styles.__sound} src={icon} alt="Bubble animation"/>
                            </i>
                        </section>
                    </section>
                </section>
            </section>
        )
    }
}

export default Loader