import React from 'react';
import styled, {css} from 'styled-components';
import {getSvg} from '../../util/icon-utils';

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
const rJoin = css`
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
    height: 20px;
    width: 24px;
  }

  ${props => props.type === 'rPrimary' && css`${rPrimary}`}
  ${props => props.type === 'rSecondary' && css`${rSecondary}`}
  ${props => props.type === 'rShadow' && css`${rShadow}`}
  ${props => props.type === 'rJoin' && css`${rJoin}`}

`


const RButton = (props) => {
    return <React.Fragment>
        <Button {...props}>
            {props.type === 'rJoin' && getSvg('Plus')}
            <span>{props.title}</span>
        </Button>
    </React.Fragment>
}

export default RButton;