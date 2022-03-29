import React, {ChangeEvent, KeyboardEvent} from 'react'


type GreetingPropsType = {
  name: string
  setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void
  setNameKeyBoard: (event: KeyboardEvent<HTMLInputElement>) => void
  addUser: () => void
  error: boolean
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, setNameKeyBoard, error, totalUsers} // деструктуризация пропсов
) => {


  return (
    <div className={'wrapper'}>
      <input value={name}
             onChange={setNameCallback}
             onKeyPress={setNameKeyBoard}
             className={error ? 'error' : 'default'}/>
      <button onClick={addUser}>add</button>
      <span>{totalUsers}</span>
      <div>
        <span>{error}</span>
      </div>
    </div>
  )
}

export default Greeting
