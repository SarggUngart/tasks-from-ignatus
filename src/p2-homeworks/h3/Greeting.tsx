import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
  name: string
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
  setNameKeyBoard: (event: KeyboardEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, setNameKeyBoard, error, totalUsers} // деструктуризация пропсов
) => {

  const inputClass = error === "name is require" ? s.error : s.allow

  return (
    <div className={s.wrapper}>
      <input value={name} onChange={setNameCallback} onKeyPress={setNameKeyBoard} className={inputClass}/>
      <button onClick={addUser}>add</button>
      <span>{totalUsers}</span>
      <div>
        <span>{error}</span>
      </div>
    </div>
  )
}

export default Greeting
