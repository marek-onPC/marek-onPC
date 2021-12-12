import React from 'react'

export default function Pills(props) {
  return (
    <div className='pills mb-5'>
      {
        props.pills.map((pill, index) =>
          <div className='pills__single' key={ index }> { pill } </div>
        )
      }
    </div>
  )
}
