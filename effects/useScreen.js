import React from 'react';
import { useMediaQuery } from "react-responsive";



const useScreen = () => {

    const fullScreen = useMediaQuery({minWidth: 1090});
    const largeScreen = useMediaQuery({minWidth: 774, maxWidth: 1089});
    const mediumScreen = useMediaQuery({minWidth: 554, maxWidth: 773});
    const smallScreen = useMediaQuery({maxWidth: 553});


    return {fullScreen, largeScreen, mediumScreen, smallScreen};
}

export default useScreen;