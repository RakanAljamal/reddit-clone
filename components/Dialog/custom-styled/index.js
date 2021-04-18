import styled from "styled-components";
import MuiDialog from "@material-ui/core/Dialog";

const Dialog = styled(MuiDialog)`
  & .MuiDialog-paperWidthSm {
    max-width: 850px;
  }

  & .MuiList-padding {
    padding-top: 0;
    padding-bottom: 0;
  }

  & .MuiList-root {
    display: block;
  }

  & .MuiListItem-root {
    padding: 0;
  }

  & .MuiPaper-root {
    display: flex;
    flex-direction: row;
  }

  & .MuiDialogContent-root {
    width: 850px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & > h1 {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      margin: 0px 0;
    }
  }
`;


export {Dialog}