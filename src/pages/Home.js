import React from 'react' //rfc
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Home() {
    return <Hero>
        <Banner title="Quartos de Luxo"
                subtitle="Quartos de luxo a 400kz">
         <Link to='/rooms' className="btn-primary">
             Outros Quartos
             </Link>               
        </Banner>
    </Hero>;
}
