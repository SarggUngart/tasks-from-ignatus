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

      <div className={s.wrapper}>

        <img className={s.img} src={props.avatar} alt="avatar"/>

        <div className={s.content__wrapper}>
          <h4 className={s.name}> {props.name}</h4>
          <p className={s.text}> {props.message}</p>
          <p className={s.time}> {props.time} </p>
          <div className={s.triangle}></div>
          <div className={s.circle}></div>
        </div>

      </div>

    </div>
  )
}

export default Message
