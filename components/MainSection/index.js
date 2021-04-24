import React from 'react';
import styles from './styles.module.scss';
import FilterContainer from "../FilterContainer";
import PostSection from "../PostSection";
import CreatePostContainer from "../CreatePostContainer";
import useUser from "../../effects/useUser";
import Link from "next/link";

const MainSection = ({filterTitle, posts}) => {

    const user = useUser();

    return <div className={styles.mainSectionContainer}>
        {user && <Link href="/submit"><CreatePostContainer/></Link>}
        <FilterContainer title={filterTitle}/>
        <PostSection posts={posts}/>
    </div>
}

export default MainSection;