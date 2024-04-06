import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <Link to="/"> Home </Link>
        </div>
    )
}

export default Navbar;