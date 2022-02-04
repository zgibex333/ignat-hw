import React, {ButtonHTMLAttributes, DetailedHTMLProps, ComponentProps} from 'react'

import s from './SuperButton.module.css'
import styled from "styled-components";


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}


const SuperButton: React.FC<any> = (
    {
        red, className,
        ...restProps

    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${className}`

    return (
        <ButtonS
            className={finalClassName}
            {...restProps}
        />
    )
}

const ButtonS = styled.button<SuperButtonPropsType>`
  margin: 0.25rem;
  align-items: center;
  background-color: #5585b5;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  //display: flex;
  font-weight: 700;
  font-size: 16px;
  height: 48px;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


  &:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform .2s ease-out;
    z-index: -1;
  }

  &:hover:after {
    transform: translate(0, 0);
  }

  &:active {
    background-color: #ffdeda;
    outline: 0;
  }

  &:hover {
    outline: 0;
  }
  
  &:disabled {
    background-color: gray;
  }
  
  &:disabled:after {
    transform: translate(0, 0)
  }
`




export default SuperButton
