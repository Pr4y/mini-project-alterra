import React from 'react'

function Notes({notes}) {
  return (
    <div>
        <section className="mb-5">
          {/* TextArea */}
          <div className='lg:w-1/2 text-justify mt-10'>
            <p className='font-bold'>Notes :</p>
            <p>{notes}</p>
          </div>
          
        </section>
    </div>
  )
}

export default Notes