import React, { useEffect, useState } from 'react'
import styles from './Home.module.scss'
import slideText from './assets/text-slide.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast, faPhone, faCreditCard, faBox } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import ItemStructure from '../../components/itemStructure/ItemStructure'
import collectionOne from './assets/collection-1.jpg'
import collectionTwo from './assets/collection-2.jpg'
import collectionThree from './assets/collection-3.jpg'
import Layout from '../../components/layout/Layout'

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => {
        setProducts(res.data.products);
      });
  }, []);

  return (
    <Layout>
      <div className={styles.sectionOne}>
        <div className={styles.containerOne}>
          <div className={styles.textsOne}>
            <img src={slideText} alt="slide text image" />
            <h2>Enhancing your <br />inner beauty</h2>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
      <div className={styles.services}>
        <div className={styles.containerServices}>
          <div className={styles.halfes}>
            <div className={styles.serviceItem}>
              <FontAwesomeIcon icon={faTruckFast} />
              <h3>Flat-rate Delivery</h3>
            </div>
            <div className={styles.serviceItem}>
              <FontAwesomeIcon icon={faPhone} />
              <h3>Support 24/7</h3>
            </div>
          </div>
          <div className={styles.halfes}>
            <div className={styles.serviceItem}>
              <FontAwesomeIcon icon={faCreditCard} />
              <h3>Secure Payment</h3>
            </div>
            <div className={styles.serviceItem}>
              <FontAwesomeIcon icon={faBox} />
              <h3>Free Return</h3>
            </div>
          </div>
        </div>
      </div>
      <ItemStructure productList={products} title="New Arrival"/>
      <div className={styles.sectionThree}>
        <div className={styles.containerThree}>
          <h2>KEEP <br />CALM & <br />STAY <br />CLASSY</h2>
        </div>
      </div>
      <div className={styles.sectionFour}>
        <div className={styles.containerFour}>
          <div className={styles.itemCategory}>
            <img src={collectionOne} alt="collections" />
            <h2>Trending Eyewear</h2>
            <p>Largest collection of genuine quality prescription glasses frames</p>
            <span>View Collection</span>
          </div>
          <div className={styles.itemCategory}>
            <img src={collectionTwo} alt="collections" />
            <h2>Trending Eyewear</h2>
            <p>Largest collection of genuine quality prescription glasses frames</p>
            <span>View Collection</span>
          </div>
          <div className={styles.itemCategory}>
            <img src={collectionThree} alt="collections" />
            <h2>Trending Eyewear</h2>
            <p>Largest collection of genuine quality prescription glasses frames</p>
            <span>View Collection</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home