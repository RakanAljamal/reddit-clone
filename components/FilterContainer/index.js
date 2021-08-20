import React, {useContext, useEffect, useState} from "react";
import styles from './style.module.scss';
import FilterButton from "../FilterButton";
import {DarkModeContext} from "../DarkModeProvider";
import useUser from "../../effects/useUser";

const FilterContainer = ({title}) => {
    const {dark} = useContext(DarkModeContext);
    const [isMount,setIsMount] = useState(false);
    const loggedInUser = useUser();
    useEffect(()=>{
        setIsMount(true);
    },[])
    return isMount && <div className={styles.filterBackgroundContainer}>
        <h2 className={dark ? styles.darkFilterTitle: styles.filterTitle} style={{marginTop: !loggedInUser ? '-25px':''}}>{title}</h2>
        <div className={dark ? styles.darkFilterContainer: styles.filterContainer}>
            <FilterButton title='Hot' icon='Hot'/>
            <FilterButton title='Everywhere' noHover showArrow/>
            <FilterButton title='Top' icon='Top' hideBackground/>
            <FilterButton title='New' icon='New' hideBackground/>
            <FilterButton icon='Triple-Dots' hideBackground lightHover/>
            <FilterButton icon='Layout-Switch' hideBackground showArrow lightHover/>
        </div>
    </div>
}

export default FilterContainer;
