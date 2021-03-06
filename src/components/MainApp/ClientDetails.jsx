import React from 'react'

function ClientDetails({clientName, clientAddress}) {
  return (
    <div>
        <section className=" mt-5">
          <h4 className='font-bold'>Bill To:</h4>
          <h2 className="font-bold text-2xl uppercase">{clientName}</h2>
          <p>{clientAddress}</p>
        </section>
    </div>
  )
}

export default ClientDetails