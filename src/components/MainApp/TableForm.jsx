import React, { useEffect, useState } from 'react'
import {TiDeleteOutline, TiEdit} from 'react-icons/ti'
import { v4 as uuidv4 } from 'uuid'
import Swal from 'sweetalert2'


function TableForm({description, 
  setDescription, 
  quantity, 
  setQuantity, 
  price, 
  setPrice, 
  amount, 
  setAmount, 
  list, 
  setList, 
  total, 
  setTotal}) {

    const [isEditItem, setIsEditItem] = useState(false)

    const hanldeSubmit = (e) => {
        e.preventDefault()

        if (!description || !quantity || !price) {
          Swal.fire('Please fill in all input')
        } else {
          const newItem = {
            id: uuidv4(),
            description,
            quantity,
            price,
            amount,
          }
          setDescription("")
          setQuantity("")
          setPrice("")
          setAmount("")
          setList([...list, newItem])
          setIsEditItem(false)
          console.log(list)
        }
      }


    // Multiply amount of items
    useEffect(() => {
        const multiplyAmount = (amount) => {
            setAmount(quantity * price)
        }
        multiplyAmount(amount)
    }, [amount, price, quantity, setAmount])

    //total amount of all items
    useEffect(() => {
      let rows = document.querySelectorAll(".amount")
      let sum = 0
  
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].className === "amount") {
          sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
          setTotal(sum)
        }
      }
    })

    //handle edit
  

    const handleEditItem = (id) => {
      const editingItem = list.find((item) => item.id === id)
      setList(list.filter((item) => item.id !== id))
      setIsEditItem(true)
      setDescription(editingItem.description)
      setQuantity(editingItem.quantity)
      setPrice(editingItem.price)
    }

    // handle delete
    const handleDeleteItem = (id) => setList(list.filter((item) => item.id !== id))


  return (
      <>
   <form onSubmit={hanldeSubmit}>
       <div className='flex flex-col mt-10'>
        <label htmlFor="description">Item Description</label>
        <input type="text" 
          name='description' 
          id='description' 
          placeholder='Item Description' 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className='md:grid grid-cols-3 gap-10'>
        <div className='flex flex-col'>
        <label htmlFor="description">Quantity</label>
        <input type="text" 
          name='quanity' 
          id='quantity' 
          placeholder='Quantity' 
          value={quantity} 
          onChange={(e) => setQuantity(e.target.value)} />
        </div>

        <div className='flex flex-col'>
        <label htmlFor="price">Price</label>
        <input type="text" 
          name='price' 
          id='price' 
          placeholder='Item Price' 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className='flex flex-col'>
          <label htmlFor="amount">Amount</label>
          <p>{amount}</p>
        </div>
        </div>
        <button type="submit" className="mb-10 mt-3 bg-blue-500 
        text-white font-bold py-2 px-8 
        rounded shadow border-2 border-blue-500 
        hover:bg-transparent hover:text-blue-500 
        transition-all duration-300">
          {isEditItem ? "Edit Item" : "Add Item"}
        </button>
   </form>

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
                <td className='amount'>{amount}</td>
                <td>
                  <button onClick={()=> handleDeleteItem(id)}><TiDeleteOutline className='text-red-500'/></button>
                </td>
                <td>
                  <button onClick={() => handleEditItem(id)}><TiEdit className=' text-green-500 hover:placeholder:'/></button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
       </table>
       <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Rp. {total.toLocaleString()}
        </h2>
      </div>
   </>
  )
}

export default TableForm