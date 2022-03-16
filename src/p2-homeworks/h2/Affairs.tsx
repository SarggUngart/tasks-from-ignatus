import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = {
  data: AffairType[]
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {

  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id}
      affair={props.setFilter}
      deleteAffairCallback={() => props.deleteAffairCallback(a._id)}
    />
  ))

  const setFilter = (filter: FilterType) => {
    props.setFilter(filter)
  }

  return (
    <div>

      {mappedAffairs}

      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('high')}>High</button>
      <button onClick={() => setFilter('middle')}>Middle</button>
      <button onClick={() => setFilter('low')}>Low</button>
    </div>
  )
}

export default Affairs
