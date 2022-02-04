import React from 'react'
import Affair from './Affair'
import {AffairPriorityType, AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import styled from "styled-components";

type AffairsPropsType = { // need to fix any
    data: AffairPriorityType
    setFilter: (priority: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <Wrapper>
            <div>
                {mappedAffairs}
            </div>
            <Buttons>
                <SuperButton onClick={setAll}>All</SuperButton>
                <SuperButton onClick={setHigh}>High</SuperButton>
                <SuperButton onClick={setMiddle}>Middle</SuperButton>
                <SuperButton onClick={setLow}>Low</SuperButton>
            </Buttons>

        </Wrapper>
    )
}

export default Affairs

const Wrapper = styled.div`
  margin: 0 auto;
  width: 45%;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
