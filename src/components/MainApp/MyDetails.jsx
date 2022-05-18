import React from 'react'

function MyDetails({name, address}) {
  return (
    <div>
      <section className="flex flex-col items-end justify-end">
          <h2 className="font-bold text-4xl mb-1 uppercase md:text-3xl ">{name}</h2>
          <p>{address}</p>
        </section>
    </div>
  )
}

export default MyDetails