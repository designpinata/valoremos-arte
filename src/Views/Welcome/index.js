import React, {Component} from 'react'
import styles from './welco.module.scss'
import grid from './../../grid.module.scss'

// Assets
import brand from './../../Assets/Brand/logo-white.svg'

// Components
import Button from '../../Components/Button';
import Share from '../../Components/Share';
import Loader from '../../Components/Loader';
import Orientation from '../../Components/Orientation';


import ReactGA from 'react-ga';
ReactGA.set({ page: window.location.pathname })
ReactGA.pageview(window.location.pathname)



class Introduction extends Component {
    render () {
        return (
            <section className={styles.__page}>
                <Orientation />
                <Loader />
                <section className={grid.container}>
                    <section className={[grid.row, grid.center_xs].join(' ')}>
                        <figure className={styles.__brand}>
                            <img src={brand} alt="Valoremos el trabajo artesanal"/>
                            <figcaption>
                                <Button 
                                    type="link"
                                    url="/home"
                                    label="Disfruta los documentales"
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