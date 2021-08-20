import React, {useContext} from "react";
import TrendingItem from "../TrendingItem";
import styles from './styles.module.scss';
import {DarkModeContext} from "../DarkModeProvider";
import {useQuery} from "@apollo/client";
import {GET_TRENDING} from "../../graphql/Query";

const Trending = ({title}) => {
    const {data, loading, error} = useQuery(GET_TRENDING);
    const {dark} = useContext(DarkModeContext);

    return !loading && <React.Fragment>

        <div className={dark ? styles.darkTrendingTitle : styles.trendingTitle}>{title}</div>
        <div className={styles.trendingContainer}>
            {data.trending.map(item => (
                <TrendingItem  {...item}/>
            ))}
        </div>
    </React.Fragment>

}

export default Trending;
