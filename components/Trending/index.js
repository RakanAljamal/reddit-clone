import React, {useContext} from "react";
import TrendingItem from "../TrendingItem";
import styles from './styles.module.scss';
import {DarkModeContext} from "../DarkModeProvider";

const Trending = ({title, data}) => {
    const {dark} = useContext(DarkModeContext);
    console.log(dark);
    return <React.Fragment>

        <div className={dark ? styles.darkTrendingTitle : styles.trendingTitle}>{title}</div>
        <div className={styles.trendingContainer}>
            {data.map(item => (
                <TrendingItem  {...item}/>
            ))}
        </div>
    </React.Fragment>

}

export default Trending;