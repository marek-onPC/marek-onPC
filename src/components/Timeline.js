import React from 'react'

export default function Timeline(props) {
  if (props.event !== null) {
    return (
      <div className='timeline'>
        {
          Object.entries(props.events).map((event, index) =>
            <div className="timeline__card" key= { index }>
              <div className="timeline__title">{ event[1].date }</div>
              <div className="timeline__content" dangerouslySetInnerHTML={ { __html: event[1].text } }>
              </div>
            </div>
          )
        }
      </div>
    )
  } else {
    return null
  }
}
