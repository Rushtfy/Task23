import React from 'react'
import styles from './ItemStructure.module.scss'
import Card from '../card/Card';

const ItemStructure = ({productList, title}) => {

    const product = productList;

    return (
        <div className={styles.sectionTwo}>
            <div className={styles.containerProducts}>
                <h1>{title}</h1>
                <div className={styles.items}>
                    {product && product.map(item => <Card item={item}/>)}
                </div>
            </div>
        </div>
    )
}

export default ItemStructure