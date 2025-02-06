import { Link } from 'react-router-dom';

import style from './style.module.scss';

export default function NotFound() {
    return (
        <section className={style.notFound}>
            <h1>Page not found</h1>
            <Link to='/' className={style.homeLink}>
                Home
            </Link>
        </section>
    );
}
