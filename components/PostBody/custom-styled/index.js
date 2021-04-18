import styled from "styled-components";

const LinkedDiv = styled.div`

  padding: 0 4px;
  position: relative;
  width: 143px;
  height: 98px;
  border: 1px solid rgb(0, 121, 211);
  border-radius: 4px;

  & > div {
    position: relative;
    align-self: center;
  }

  & > svg:first-child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: rgb(0, 121, 211);
    font-size: 20px;
  }

  & > svg:last-child {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    border-top-left-radius: 4px;
    padding: 4px;
    font-size: 16px;
    background: rgb(0, 121, 211);
  }

`;
const Post = styled.div`
  height: 140px;
  line-height: 22px;
  margin: 0 8px;
  font-family: BentonSans, sans-serif;
  color: #222222;


  & > h3 {
    font-family: IBMPlexSans, Arial, sans-serif;;
    font-size: 18px;
    font-weight: 600;
  }
`

const ShortTitleShortTextPost = styled(Post)`
  mask-image: linear-gradient(180deg, #000 60%, transparent);

  & > span {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }

  linear-gradient(180deg, #000 60%, transparent);

`;
const ShortTitleWithPhotoPost = styled.div`
  height: 413px;

  & > h3 {
    font-family: unset;
    -webkit-font-smoothing: antialiased;
    font-size: 18px;
    font-weight: 500;
    margin-left: 4px;
    margin-bottom: 4px;
  }

  & > div {
    margin: 0;
    ${props => props.image && `background: url(${props.image}) center center/cover no-repeat;`}
    max-width: 100%;
    max-height: 366px;
    height: 100%;
  }
`;
const ShortTitleWithLinkPost = styled(Post)`
  display: flex;
  flex-direction: row;

  & > div > a {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: #0079d3;

    &:hover {
      text-decoration: underline;
    }
  }

  & > div > svg {
    border-top-left-radius: 4px;
    padding: 4px;
    font-size: 16px;
    color: rgb(0, 121, 211);
  }
`;

export {ShortTitleWithLinkPost, ShortTitleShortTextPost, ShortTitleWithPhotoPost, LinkedDiv}