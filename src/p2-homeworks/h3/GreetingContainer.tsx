import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')

  const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value)
  }

  const setNameKeyBoard = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addUser()
    }
  }

  const addUser = () => {
    const trimmedName = name.trim()
    if (trimmedName) {
      addUserCallback(trimmedName)
      alert(`Hello ${trimmedName} !`)
    } else {
      setError('name is require')
    }
    setName('')
  }

  const totalUsers = users.length // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      setNameKeyBoard={setNameKeyBoard}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
