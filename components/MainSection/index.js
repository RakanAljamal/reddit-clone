import React from 'react';
import styles from './styles.module.scss';
import FilterContainer from "../FilterContainer";
import PostSection from "../PostSection";
import CreatePostContainer from "../CreatePostContainer";
import useUser from "../../effects/useUser";

const MainSection = ({filterTitle, posts}) => {

    const user = useUser();

    return <div className={styles.mainSectionContainer}>
        {user && <CreatePostContainer/> }
        <FilterContainer title={filterTitle}/>
        <PostSection posts={posts}/>
    </div>
}

export default MainSection;