import React from 'react' // rfca

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

const Roome = () => {
    return <Hero hero="roomsHero">
        <Banner title="Outros Quartos">
        <Link to='/' className="btn-primary">Voltar</Link>
        </Banner>
    </Hero>;
}

export default Roome
