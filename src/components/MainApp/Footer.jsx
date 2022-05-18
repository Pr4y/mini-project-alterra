import React from 'react'

function Footer({
  name, 
  email, 
  phone, 
  bankNumber, 
  bankHolder, 
  bankName}) {
  return (
    <div>
    <footer className='footer border-t-2 border-gray-500 pt-5'>
      <ul className="flex flex-wrap items-center justify-center">
        <li><span className="font-bold">Your Name:</span> {name}</li>
        <li><span className="font-bold">Email:</span> {email} </li>
        <li><span className="font-bold">Phone Number:</span> {phone}</li>
        <li><span className="font-bold">Bank Name:</span> {bankName}</li>
        <li><span className="font-bold">Bank Holder:</span> {bankHolder}</li>
        <li><span className="font-bold">Bank Number:</span> {bankNumber}</li>
      </ul>
    </footer>
    </div>
  )
}

export default Footer