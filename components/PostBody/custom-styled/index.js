import styled from "styled-components";

const LinkedDiv = styled.div`

  padding: 0 4px;
  position: relative;
  width: 143px;
  height: 98px;
  border: 1px solid ${props=>props.dark ? 'rgb(255,255,255)':'rgb(0, 121, 211)'};
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
    color: ${props=>props.dark ? 'rgb(255,255,255)':'rgb(0, 121, 211)'};
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
    background: ${props=>props.dark ? 'rgb(255,255,255)':'rgb(0, 121, 211)'};
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
    font-weight: 500;
    ${props=>props.dark && 'color: #d7dadc;'}
  }
`

const ShortTitleShortTextPost = styled(Post)`
  mask-image: linear-gradient(180deg, #000 60%, transparent);

  & > span {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: ${props=>props.dark && '#d7dadc'};
  }

  linear-gradient(180deg, #000 60%, transparent);

`;
const ShortTitleWithPhotoPost = styled.div`
  height: 518px;

  & > div {
    margin: 0;
    ${props => props.content && `background: url(${props.content}) center center/cover no-repeat;`}
    max-width: 100%;
    height: 100%;
  }

`;
const ShortTitleWithLinkPost = styled(Post)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > div > a {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    color: ${props=>props.dark ? '#4fbcff' : '#0079d3'};

    &:hover {
      text-decoration: underline;
    }
  }

  & > div > svg {
    border-top-left-radius: 4px;
    padding: 4px;
    font-size: 16px;
    color: ${props=>props.dark ? 'rgb(255,255,255)' : 'rgb(0, 121, 211)'};
  }
`;

export {ShortTitleWithLinkPost, ShortTitleShortTextPost, ShortTitleWithPhotoPost, LinkedDiv}
