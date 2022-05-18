import React from 'react'

function ClientDetails({clientName, clientAddr}) {
  return (
    <div>
               <section className=" mt-5">
          <h2 className="font-bold text-2xl uppercase">{clientName}</h2>
          <p>{clientAddr}</p>
        </section>
    </div>
  )
}

export default ClientDetails