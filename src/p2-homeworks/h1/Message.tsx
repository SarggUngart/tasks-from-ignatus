import React from 'react'
import s from './Message.module.css'

export type MessageDataPropsType = {
  avatar: string,
  name: string,
  message: string,
  time: string
}

function Message(props: MessageDataPropsType) {
  return (
    <div className={s.message}>

      <img className={s.img} src={props.avatar} alt="fvatar"/>
      <div> {props.name}</div>
      <div> {props.message}</div>
      <div> {props.time} </div>

    </div>
  )
}

export default Message
