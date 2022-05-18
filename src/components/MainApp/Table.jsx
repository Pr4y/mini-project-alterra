import React from 'react'

function Table({total, list,}) {
  return (
    <div>
        <table width="100%" className='mb-10'>
   <thead>
              <tr className='bg-gray-100 p-1'>
                <td className='font-bold'>Description</td>
                <td className='font-bold'>Quantity</td>
                <td className='font-bold'>Price</td>
                <td className='font-bold'>Ammount</td>
              </tr>
            </thead>
       {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
       </table>

       <div className='flex items-end justify-end font-bold text-4xl'>
         <h2>Rp.{total.toLocaleString()}</h2>
       </div>
        </div>
  )
}

export default Table