import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

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
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={submitKey}/>
            <button disabled={error} onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <span className={s.errorMessage}>{error && 'Enter the correct value'}</span>
        </div>
    )
}

export default Greeting
