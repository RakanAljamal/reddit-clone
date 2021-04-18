import styled, {css} from "styled-components";


const Button = styled.a`
  display: flex;
  margin: 0.25rem;
  border-radius: 20px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 700;
  font-family: Noto Sans, Arial, sans-serif;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  color: #0079d3;
  background: #f6f7f8;
  align-items: center;


  & > svg {
    fill: #0079d3;
    height: 20px;
    width: 24px;
  }


  &:last-child {
    margin-left: auto;
  }


  &:hover {
    cursor: pointer;
  }

  ${props => props.hideBackground && css`
    background: #fff;
  `}

  ${props => !props.noHover && css`
    &:hover {
      background: #d3d4d5;
      opacity: 0.8;
      z-index: 1;
    }
  `}

  ${props => props.icon === 'Triple-Dots' && css`
    & > svg {
      fill: #878a8c;
      width: 12px;
      height: 15px;
    }`}
  ${props => props.lightHover && css`

    &:hover {
      background: #f6f7f8;
    }
  `}
`

export {Button}