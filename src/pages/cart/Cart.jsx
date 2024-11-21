import React, { useEffect, useState } from 'react'
import styles from './Cart.module.scss'
import Layout from '../../components/layout/Layout'
import ItemStructure from '../../components/itemStructure/ItemStructure'
import axios from 'axios'

const Cart = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/basket")
            .then(res => {
                setProduct(res.data);
            });
    }, []);

  return (
    <Layout>
        <ItemStructure productList={product} title="Shopping Cart"/>
    </Layout>
  )
}

export default Cart