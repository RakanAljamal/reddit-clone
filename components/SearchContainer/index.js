import React from 'react';
import styles from './styles.module.scss';

const SearchContainer = () => {
    return <div className={styles.searchContainer}>
        <label className={styles.searchLogoContainer} htmlFor="searchContainer">
            <svg className={styles.searchLogo} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"/>
            </svg>
        </label>

        <input type="text" placeholder="Search" id="searchContainer"/>
    </div>
}

export default SearchContainer;