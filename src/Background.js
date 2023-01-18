import React from 'react'

function Background() {
  return (
      <section className='deco-all'>
        {Array.from({length: 10}, (_, k) =>
      <section className='bg-deco' key={k}>
        {Array.from({length: 15}, (_, i) =><i className='bg-circles' class='fas fa-circle' key={i}></i>)}
      </section>)}</section>
    
  )
}
export default Background