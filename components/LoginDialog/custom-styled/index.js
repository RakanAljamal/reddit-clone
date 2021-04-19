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
    padding: 45px 26px;
    & > h1 {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      margin: 0px 0;
    }
  }
  
  
  & .MuiFormControl-root {
    width: 100%;
    margin: 5px 0;
  }
  
  & .MuiFormLabel-root {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .5px;
  }
  
  & .MuiFormLabel-root.Mui-focused {
    transform: translate(17px,5px) scale(0.75);
    color: #999;

  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border:#999 2px solid;
  }
  
`;


export {Dialog}