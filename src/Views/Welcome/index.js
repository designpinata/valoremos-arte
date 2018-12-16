import React, {Component} from 'react'
import styles from './welco.module.scss'
import grid from './../../grid.module.scss'

// Assets
import brand from './../../Assets/Brand/logo-white.svg'

// Components
import Button from '../../Components/Button';
import Share from '../../Components/Share';
import Loader from '../../Components/Loader';


class Introduction extends Component {
    render () {
        return (
            <section className={styles.__page}>
                <Loader />
                <section className={grid.container}>
                    <section className={[grid.row, grid.center_xs].join(' ')}>
                        <figure className={styles.__brand}>
                            <img src={brand} alt="Valoremos el trabajo artesanal"/>
                            <figcaption>
                                <Button 
                                    type="link"
                                    url="/home"
                                    label="Conocer Experiencia"
                                    />
                            </figcaption>
                        </figure>
                    </section>
                </section>
                <Share/>
            </section>
        )
    }
}

export default Introduction;