import React from "react";
import styles from './styles.module.scss';

const TrendingItem = ({image, title, description}) => {

    const overlayImageStyle = {backgroundImage: `linear-gradient(0deg, #000, rgba(0, 0, 0, .8) 25%, rgba(0, 0, 0, .6) 50%,rgba(0, 0, 0, .4) 75%, rgba(0, 0, 0, .2)),url(${image})`};

    return <div className={styles.trendingItemContainer} style={overlayImageStyle}>
        <div className={styles.trendingItemDetails}>
            <h2>{title}</h2>
            <div>{description}</div>
        </div>
    </div>
}

export default TrendingItem;