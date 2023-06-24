import './NotFound.css'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const NotFound = () => {
    return (
        <section>
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <NavLink to='/' className='nav-link'>
                <Button className='button' variant='outline-light'>Go back in initial page, is better.</Button>
            </NavLink>
        </section>
    );
};

export default NotFound