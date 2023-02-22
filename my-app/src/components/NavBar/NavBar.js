import React, {useState, useEffect} from 'react';
import { NavLink} from 'react-router-dom';
import {Button} from '../button/Button';
import './NavBar.css';
 

function NavBar() {
    const [click, setClick] = useState(false); 
    const [button, setButton] = useState(true);

    const handelClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    },[])

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className='navbar-container'>
            <NavLink to="/" className='navbar-logo' onClick={closeMobileMenu}>
                <h1 className='nine'>В</h1>
                <h2 >Пролёте</h2>
            </NavLink>
            <div className='menu-icon'  onClick={handelClick}>
                <i  className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                    <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                        На главную
                    </NavLink>
                </li> 
                <li className='nav-item'>
                    <NavLink to='/music' className='nav-links' onClick={closeMobileMenu}>
                        Музыка
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/cat' className='nav-links' onClick={closeMobileMenu}>
                        Котики И Песики
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/photo' className='nav-links' onClick={closeMobileMenu}>
                        Фото
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/video' className='nav-links' onClick={closeMobileMenu}>
                        Видео
                    </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/science' className='nav-links' onClick={closeMobileMenu}>
                        Наука
                    </NavLink>
                </li>
            </ul>
            {button && <Button buttonSize='btn--outline'> Профиль </Button>}
        </div>
      </nav>
    </>
  )
}

export default NavBar;

