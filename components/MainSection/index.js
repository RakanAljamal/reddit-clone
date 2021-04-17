import React from 'react';
import styles from './styles.module.scss';
import FilterContainer from "../FilterContainer";
import PostSection from "../PostSection";

const MainSection = ({filterTitle}) => {

    return <div className={styles.mainSectionContainer}>
        <FilterContainer title={filterTitle}/>
        <PostSection/>
    </div>
}

export default MainSection;