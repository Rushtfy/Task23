import React from 'react'
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const navigation = useNavigate();

    function goCart() {
        navigation('/cart');
    }
    function goHome() {
        navigation('/');
    }
    function goWishlist() {
        navigation('/wishlist');
    }

  return (
    <>
        <div className={styles.container}>
            <FontAwesomeIcon icon={faBars} className={styles.burger}/>
            <a href="" className={styles.logo} onClick={goHome}>haute</a>
            <div className={styles.navAndIcons}>
                <ul>
                    <li><a href="" onClick={goHome}>Home</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className={styles.icons}>
                    <FontAwesomeIcon icon={faUser}/>
                    <FontAwesomeIcon icon={faHeart} onClick={goWishlist}/>
                    <FontAwesomeIcon icon={faCartShopping} onClick={goCart}/>
                    <span className={styles.counter}>0</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header