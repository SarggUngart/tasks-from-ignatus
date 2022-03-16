import React from 'react'
import {FilterType} from "./HW2";

type AffairPropsType = {

  affair: (filter: FilterType) => void
  deleteAffairCallback: () => void
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback()
  }

  return (
    <div>
      // show some text

      <button onClick={deleteCallback}>X</button>
    </div>
  )
}

export default Affair
