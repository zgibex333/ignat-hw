import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Content";
import styled from "styled-components";

// className={`${s.headerList} ${visible ? s.active: ''}`}

function Header() {
    const [visible, setVisible] = useState(false);
    return (
        <Navigation  onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}>
            <ul style={{left: `${visible ? '0%' : '-100%'}`}}>
                <li><NavLink to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink></li>
                <li><NavLink to={PATH.PRE_JUNIOR}>Junior</NavLink></li>
                <li><NavLink to={PATH.PRE_JUNIOR}>Junior+</NavLink></li>
                <li><NavLink to="not-found">NOT FOUND</NavLink></li>
            </ul>
        </Navigation>


    )
}

const Navigation = styled.div`
  width: fit-content;
  
  ul {
    display: flex;
    list-style: none;
    position: relative;
    transition: all .5s ease;
    &:after {
      content: 'menu';
      display: inline-block;
      position: absolute;
      right: -20%;
      top: 50%;
      transform: translateY(-50%);
      color: white;
      text-transform: capitalize;
      background: #233142;
      padding: 0.5rem;
      cursor: pointer;
    }
  }
  
  li {
    padding: 0.5rem;
  }
  
  a {
    text-decoration: none;
    color: #233142;
    font-weight: 700;
    
    &:hover {
      color:  #455d7a;
    }
  }
  
  
`

export default Header
