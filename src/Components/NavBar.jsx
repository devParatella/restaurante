import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
    const handleFormSubmit = () => {
        setModal(false);
    };
    return (
        <><nav>
            <input type="button" id='click' checked={menuOpen} onChange={setMenuOpen} />
            <label htmlFor="click" className='manu-btn'>
                <i className='fa fa-bars'></i>
                <div id='logo'>
                </div>
                <Link to='/' className='navbar-brand'><h1>Restaurante</h1>
                </Link>
            </label>
            <ul>
                <li><NavLink activeclassname='active' to='/' onClick={handleMenuItemClick}>Início</NavLink></li>
                <li><NavLink to='/about' onClick={handleMenuItemClick}>Sobre</NavLink></li>
                <li><NavLink to='/services' onClick={handleMenuItemClick}>Serviços</NavLink></li>
                <li><NavLink to='/price' onClick={handleMenuItemClick}>Preços</NavLink></li>
                <li><NavLink to='/team' onClick={handleMenuItemClick}>Equipe</NavLink></li>
                <li><NavLink to='/contact' onClick={handleMenuItemClick}>Contato</NavLink></li>
            </ul>
        </nav>
            <div className=''>
                <div className=''></div>
                <h2 className=''>Restaurante Boa Aberta</h2>
                <p className=''>Restaurante</p>
                <h2>Assine nossa newsletter</h2>
                <p>Assinatura Gratuíta, assine e ganhe 20% OFF no primeiro consumo</p>

                <form onSubmit={handleFormSubmit}>
                    <input className='' type="email" required placeholder='Seu Email'/>
                    <label htmlFor=""></label>
                </form>
            </div>
        </>

    );
}
export default NavBar;