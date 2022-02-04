import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styled from "styled-components";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <AffairContainer>
            <span>{props.affair.name}</span>
            <SuperButton red onClick={deleteCallback}>X</SuperButton>
        </AffairContainer>
    )
}

export default Affair

const AffairContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`
