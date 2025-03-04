import React from 'react'
import Card from './Card'

const Results = ({results}) => {
  return (
    <>
     <div className='max-w-6xl mx-auto py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {
         results.map((result) => {
            return(
               <Card result={result} key={result.id}/> 
            )
        })
      }
     </div>
    </>
  )
}

export default Results