import React from 'react';
import styles from './styles.module.scss';
const RButton = ({type,title}) =>{
    return <a href="#" className={styles[type]}>
        {title}
    </a>
}

export default RButton;