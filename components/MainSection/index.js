import React from 'react';
import styles from './styles.module.scss';
import FilterContainer from "../FilterContainer";
import PostSection from "../PostSection";

const MainSection = ({filterTitle, posts}) => {

    return <div className={styles.mainSectionContainer}>
        <FilterContainer title={filterTitle}/>
        <PostSection posts={posts}/>
    </div>
}

export default MainSection;