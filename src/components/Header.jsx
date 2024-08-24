// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>News Website</Link>
      </div>
      <nav style={styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.navLink}>Home</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/world" style={styles.navLink}>World</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/politics" style={styles.navLink}>Politics</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/sports" style={styles.navLink}>Sports</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/technology" style={styles.navLink}>Technology</Link>
          </li>
        </ul>
      </nav>
      <div style={styles.searchBar}>
        <input type="text" placeholder="Search..." style={styles.searchInput} />
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  logoLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  nav: {
    flexGrow: 1,
    textAlign: 'center',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
  },
  searchBar: {
    marginLeft: 'auto',
  },
  searchInput: {
    padding: '5px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

export default Header;
