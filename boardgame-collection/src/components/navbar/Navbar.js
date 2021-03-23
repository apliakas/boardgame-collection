import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

import styles from './Navbar.module.scss';

const Navbar = (props) => {
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
        <a onClick={props.signOut} className={styles.navbar_right_item}>Sign out</a> 
      </div>
    </nav>
  )
};

const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);