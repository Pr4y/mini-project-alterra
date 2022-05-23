import React from 'react'

function Table({afterDiscount, list, discount, discountNominal, total}) {
  return (
    <div>
        <table width="100%" className='mb-10'>
   <thead>
              <tr className='bg-gray-100 p-1'>
                <td className='font-bold'>Description</td>
                <td className='font-bold'>Quantity</td>
                <td className='font-bold'>Price</td>
                <td className='font-bold'>Amount</td>
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
        <div className='flex flex-col items-end font-semibold text-xl mb-4 pb-2'>
          <p>Subtotal :</p>
        <h2>Rp. {total.toLocaleString()}</h2>
        </div>
       <div className='flex flex-row items-end justify-end font-bold text-4xl'>
         <p className=' mr-8'>Total Due:</p>
         <h2>Rp.{afterDiscount.toLocaleString()}</h2>
       </div>
       <div className='flex flex-col justify-end items-end mt-3'>
       {(discountNominal > 0) ? <p className='italic text-sm text-gray-500'>You Get {discount}% off, worth Rp. {discountNominal.toLocaleString()}</p> : ""}
       </div>
        </div>
  )
}

export default Table