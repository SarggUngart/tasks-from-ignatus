import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import './Greeting.css';

// v1()

// types
export type UserType = {
  _id: string //
  name: string //
}

// уровень работы с глобальными данными
function HW3() {
  const [users, setUsers] = useState<Array<UserType>>([]) //

  const addUserCallback = (name: string) => {
    let newUser = {_id: v1(), name: name}
    setUsers([...users, newUser])
  }

  console.log(users)

  const newArr = users

  return (
    <div>
      <hr/>
      homeworks 3

      {/*should work (должно работать)*/}
      <GreetingContainer users={users} addUserCallback={addUserCallback}/>
      {newArr.map((u) => <div key={u._id}>{u.name}</div>)}
      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeGreeting/>*/}
      <hr/>
    </div>
  )
}

export default HW3
