import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import styled from "styled-components";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (name: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void  // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    submitKey: (e: KeyboardEvent<HTMLInputElement>)=>void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, submitKey} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <Wrapper>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass} onKeyPress={submitKey}/>
            <SuperButton disabled={error} onClick={addUser}>add</SuperButton>
            <Counter>{totalUsers}</Counter>
            <span className={s.errorMessage}>{error && 'Enter the correct value'}</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: fit-content;
`

const Counter = styled.span`
  font-size: 1.25rem;
  margin-left: 1rem;
`

export default Greeting
