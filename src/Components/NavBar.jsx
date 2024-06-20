import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };
    const [modal, setModal] = useState(false);
    if (modal) {
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }
    const toogleModal = () => {
        setModal(!modal);
    }

    const handleFormSubmit = () => {
        setModal(false);
    };
    return (
        <>
            <nav>
                <input className='logo-btn' type="button" id='click' checked={menuOpen} onChange={setMenuOpen} />
                <label htmlFor="click" className='menu-btn'>
                    <i className='fa fa-bars'></i>
                    <div className='logo'>
                        <Link to='/' className='navbar-brand'><h1>Restaurante</h1>
                        </Link>
                    </div>
                </label>
                <ul>
                    <li><NavLink activeclassname='active' to='/' onClick={handleMenuItemClick}>Início</NavLink></li>
                    <li><NavLink to='/about' onClick={handleMenuItemClick}>Sobre</NavLink></li>
                    <li><NavLink to='/services' onClick={handleMenuItemClick}>Serviços</NavLink></li>
                    <li><NavLink to='/price' onClick={handleMenuItemClick}>Preços</NavLink></li>
                    <li><NavLink to='/team' onClick={handleMenuItemClick}>Equipe</NavLink></li>
                    <li><NavLink to='/contact' onClick={handleMenuItemClick}>Contato</NavLink></li>
                </ul>
                <div>
                    <button onClick={toogleModal} className='btn btn-signup hide'>Assinar</button>
                </div>
            </nav>
            <div className='modal'>
                <div className='overlay'></div>
                <div className='modal-content'>
                    <h2 className='h1-1'>Restaurante Boca Aberta</h2>
                    <p className='p-1-1'>Restaurante</p>
                    <h2>Assine nossa newsletter</h2>
                    <p>Assinatura Gratuíta, assine e ganhe 20% OFF no primeiro consumo</p>
                    <form onSubmit={handleFormSubmit}>
                        <input className='' type="email" required placeholder='Seu Email' />
                        <span>
                            <p>
                                <input type="checkbox" id='same' required />
                                <label htmlFor="same">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorem ratione fugit quis deleniti voluptates ipsum est porro commodi, assumenda, at nostrum velit accusantium deserunt omnis! Laudantium in cum ad.20</label>
                            </p>
                        </span>
                        <button className='btn-pr' type='submit'>Assine</button>
                    </form>
                    <button className='close-modal' onClick={toogleModal}>Close</button>
                </div>
            </div>
        </>

    );
}
export default NavBar;