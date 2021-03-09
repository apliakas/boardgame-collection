import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_left}>
        <Link to='/' className={styles.navbar_left_logo}>LOGO</Link>
      </div>
      <div className={styles.navbar_right}>
        <Link to='/' className={styles.navbar_right_item}>Search</Link>
        <Link to='/signin' className={styles.navbar_right_item}>Sign In</Link>
        <Link to='/signup' className={styles.navbar_right_item}>Sign Up</Link>
      </div>
      <div className={styles.navbar_right}>
        <Link to='/' className={styles.navbar_right_item}>Search</Link>
        <Link to='/' className={styles.navbar_right_item}>My Collection</Link>
        <Link to='/' className={styles.navbar_right_item}>Discover</Link>
        <Link to='/' className={styles.navbar_right_item}>Sign out</Link> 
      </div>
    </nav>
  )
};

export default Navbar;