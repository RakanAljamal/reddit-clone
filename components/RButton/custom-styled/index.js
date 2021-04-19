import styled, { css } from "styled-components";

const rPrimary = (props) => css`
  color: #0079d3;
  fill: #0079d3;
  border: 1px solid #0079d3;

  &:hover, &:focus {
    background-color: #f5fafd;
  }`


const authButton = (props) => css`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid #0079d3;
  color: #0079d3;
  text-align: center;
  border-radius: 4px;
  padding: 1px;
  position: relative;

  &:hover {
    background: red;
  }

  &:hover, &:focus {
    background-color: #3394dc;
    color: #fff;
  }

  & > span {
    align-self: center;
    padding: 15px 16px 15px 50px;
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 46px;
    width: 46px;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translate(-50%, -50%);

  }

  & > div > div {
    height: 20px;
    width: 20px;
    ${props => props.image && `background: url(${props.image}) center center/cover no-repeat;`}
    background-color: #fff;

  }


`


const rShadow = (props) => css`
  padding: 6px 8px;
  color: #0079d3;
  fill: #0079d3;
  background-color: #f6f7f8;
  display: inline-block;

  &:hover {
    background-color: #E3EDF6;
  }

  & > span {
    font-size: 13px;
  }
`


const rSecondary = (props) => css`
  color: #FFF;
  background-color: #0079d3;
  border: 1px solid #0079d3;

  &:hover, &:focus {
    opacity: .9;
  }

  ${props.fullWidth && css`

    display: inline-block;
    width: 100%;
    text-align: center;

  `}

  ${props.size && css`
    ${props.size==='L' && 'padding: 10px'}

  `}
`;
const rJoin = () => css`
  ${rSecondary};
  padding-inline: initial;
  padding: 1px 6px;
  align-items: center;
  display: flex;
  position: absolute;
  right: 5px;
  top: 5px;
  font-family: Noto Sans, Arial, sans-serif;
  justify-content: space-between;
  vertical-align: baseline;
  width: 62px;
  font-size: 13px;


`
const Button = styled.a`
  padding: 6px 15px;
  margin: 0.25rem;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  font-family: Noto Sans, Arial, sans-serif;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;

  &:hover {
    cursor: pointer;
  }

  & > svg {
    fill: #fff;
    height: 19px;
    width: 19px;
  }

  ${props => props.type === 'rPrimary' && css`${rPrimary}`}
  ${props => props.type === 'rSecondary' && css`${rSecondary}`}
  ${props => props.type === 'rShadow' && css`${rShadow}`}
  ${props => props.type === 'rJoin' && css`${rJoin}`}
  ${props => props.type === 'Apple' && css`${authButton}`}
  ${props => props.type === 'Google' && css`${authButton}`}

`

export { Button }