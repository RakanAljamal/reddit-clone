import React from 'react';
import styled, {css} from 'styled-components';


const rPrimary = (props) => css`
  color: #0079d3;
  fill: #0079d3;
  border: 1px solid #0079d3;

  &:hover, &:focus {
    background-color: #f5fafd;
  }`
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
`;

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


  ${props => props.type === 'rPrimary' && css`${rPrimary}`}
  ${props => props.type === 'rSecondary' && css`${rSecondary}`}
  ${props => props.type === 'rShadow' && css`${rShadow}`}

`


const RButton = (props) => {
    return <Button {...props}>
        <span>{props.title}</span>
    </Button>
}

export default RButton;