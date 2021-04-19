import React, {useContext, useEffect, useState} from "react";
import TrendingItem from "../TrendingItem";
import styles from './styles.module.scss';
import {DarkModeContext} from "../DarkModeProvider";

const Trending = ({title, data}) => {
    const {dark} = useContext(DarkModeContext);
    const [isMount,setIsMount] = useState(false);
    useEffect(()=>{
        setIsMount(true);
    },[])

    console.log(dark);
    return isMount && <React.Fragment>

        <div className={dark ? styles.darkTrendingTitle : styles.trendingTitle}>{title}</div>
        <div className={styles.trendingContainer}>
            {data.map(item => (
                <TrendingItem  {...item}/>
            ))}
        </div>
    </React.Fragment>

}

export default Trending;