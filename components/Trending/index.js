import React from "react";
import TrendingItem from "../TrendingItem";
import styles from './styles.module.scss';

const Trending = ({title, data}) => {
    return <React.Fragment>

        <div className={styles.trendingTitle}>{title}</div>
        <div className={styles.trendingContainer}>
            {data.map(item => (
                <TrendingItem  {...item}/>
            ))}
        </div>
    </React.Fragment>

}

export default Trending;