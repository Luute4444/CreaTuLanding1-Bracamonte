// src/components/NavBar.jsx
import React from 'react';
import CartWidget from '../componets/cartwidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MiTienda</h2>
      <ul style={styles.navLinks}>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    background: '#f1f1f1',
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
  },
};

export default NavBar;
