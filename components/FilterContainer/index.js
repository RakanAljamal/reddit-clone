import React from "react";
import styles from './style.module.scss';
import FilterButton from "../FilterButton";

const FilterContainer = ({title}) => {
    return <div className={styles.filterBackgroundContainer}>
        <h2 className={styles.filterTitle}>{title}</h2>
        <div className={styles.filterContainer}>
            <FilterButton title='Hot' icon='Hot'/>
            <FilterButton title='Everywhere' noHover showArrow/>
            <FilterButton title='Top' icon='Top' hideBackground/>
            <FilterButton title='New' icon='New' hideBackground/>
            <FilterButton icon='Triple-Dots' hideBackground lightHover/>
            <FilterButton icon='Layout-Switch' hideBackground showArrow lightHover/>
        </div>
    </div>
}

export default FilterContainer;