import React from "react";
import styles from './style.module.scss';

const FilterContainer = ({title}) => {
    return <div className={styles.filterBackgroundContainer}>
        <h2 className={styles.filterTitle}>{title}</h2>
        <div className={styles.filterContainer}>

        </div>
    </div>
}

export default FilterContainer;