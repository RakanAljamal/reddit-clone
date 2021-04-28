import styles from "../Chat/style.module.scss";
import React from "react";
import styled from "styled-components";
import {Skeleton} from "@material-ui/lab";
import {CircularProgress} from "@material-ui/core";
import {ChatBodyHeader} from "../ChatBodyHeader";
import {ChatBodyFooter} from "../ChatFooter";

const StyledSkeleton = styled(Skeleton)`
  border-radius: 50px !important;
`;


const StyledCircularProgress = styled(CircularProgress)`
  margin: auto;
`;

const ChatLoading = ({otherUser}) => {
    return <div className={styles.chatBody}>
        <div className={styles.chatLoading}>
            <div>
                <StyledSkeleton variant="text" width={'90%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'90%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'90%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'50%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'20%'} height={'100%'}/>
            </div>
            <div>
                <StyledSkeleton variant="text" width={'70%'} height={'100%'}/>
            </div>
        </div>
        <ChatBodyFooter otherUser={otherUser}/>
    </div>
}

export {ChatLoading, StyledCircularProgress}
