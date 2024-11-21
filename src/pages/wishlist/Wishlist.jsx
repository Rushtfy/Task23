import React, { useEffect, useState } from 'react'
import styles from './Wishlist.module.scss'
import Header from '../../components/header/Header';
import ItemStructure from '../../components/itemStructure/ItemStructure';
import Footer from '../../components/footer/Footer';
import axios from 'axios';

const Wishlist = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/wishlist")
            .then(res => {
                setProduct(res.data);
            });
    }, []);

    return (
        <div>
            <Header/>
            <ItemStructure productList={product} title="Wishlist"/>
            <Footer/>
        </div>
    )
}

export default Wishlist