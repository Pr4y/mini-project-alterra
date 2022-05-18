import React from 'react'

function Dates({invoiceNumber, invoiceDate, dueDate}) {
  return (
    <div>
        <article className="mb-10 mt-15 flex items-center justify-end">
          <ul>
            <li className=' p-1'>
              <span className="font-bold">Invoice Number : </span>{invoiceNumber}
            </li>
            <li className=' p-1 bg-gray-100'>
              <span className="font-bold">Invoice Date : </span>{invoiceDate} 
            </li>
            <li className=' p-1'>
              <span className="font-bold">Due Date : </span>{dueDate}
            </li>
          </ul>
        </article>

    </div>
  )
}

export default Dates