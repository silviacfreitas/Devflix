/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logoTripFlix.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Devflix Logo" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
