import React from 'react'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className={styles.sectionFooter}>
        <div className={styles.containerFooter}>
            <div className={styles.footerList}>
                <h2>Navigations</h2>
                <ul>
                    <li><a href="">Sell online</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Shopping cart</a></li>
                    <li><a href="">Store builder</a></li>
                </ul>
            </div>
            <div className={styles.footerList}>
                <ul>
                    <li><a href="">Mobile commerce</a></li>
                    <li><a href="">Dropshipping</a></li>
                    <li><a href="">Website development</a></li>
                </ul>
            </div>
            <div className={styles.footerList}>
                <ul>
                    <li><a href="">Point of sale</a></li>
                    <li><a href="">Hardware</a></li>
                    <li><a href="">Software</a></li>
                </ul>
            </div>
            <div className={styles.footerList}>
                <h2>Promo</h2>
                <ul>
                    <li><a href="" className={styles.colored}>Finding Your Perfect Shoes</a></li>
                    <li><a href="">Promo from nuary 15 — 25, 2019</a></li>
                </ul>
            </div>
            <div className={styles.footerList}>
                <h2>Contact Info</h2>
                <ul>
                    <li><FontAwesomeIcon icon={faLocationDot} /><a href="">203 Fake St. Mountain View, San <br />Francisco, California, USA</a></li>
                    <li><FontAwesomeIcon icon={faPhone} /><a href="">+2 392 3929 210</a></li>
                    <li><FontAwesomeIcon icon={faEnvelope} /><a href="">emailaddress@domain.com</a></li>
                </ul>
                <div className={styles.inputWithButton}>
                    <input type="text" placeholder='Email'/>
                    <button>SEND</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer