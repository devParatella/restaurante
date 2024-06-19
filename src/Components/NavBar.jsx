import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
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
        <nav>
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




        // <nav>
        //     <button onClick={() => setMenuOpen(!menuOpen)}>
        //         {menuOpen ? 'Fechar Menu' : 'Abrir Menu'}
        //     </button>
        //     {menuOpen && (
        //         <ul>
        //             <li onClick={handleMenuItemClick}>Início</li>
        //             <li onClick={handleMenuItemClick}>Contato</li>
        //             <li onClick={handleMenuItemClick}>Serviços</li>
        //         </ul>
        //     )}
        // </nav>
    );
}
