import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>):void => { // need to fix any
            setError(false)
            setName(e.currentTarget.value) // need to fix
    }

    const submitKey = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            addUser()
        }
    }

    const addUser = ():void => {
        if(name.trim().length) {
            setError(false)
            addUserCallback(name)
            setName('')
            alert(`Hello  !`)
        } else {
            setError(true)
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            submitKey={submitKey}
        />
    )
}

export default GreetingContainer
