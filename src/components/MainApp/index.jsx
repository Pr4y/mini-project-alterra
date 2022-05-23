import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getClients } from "../../GraphQL/Clients";


// Components---------------------------
import Header from './Header'
import MyDetails from './MyDetails'
import ClientDetails from './ClientDetails'
import Dates from './Dates'
import Table from './Table'
import Notes from './Notes'
import Footer from './Footer'
import TableForm from "./TableForm";
import Navbar from "../Navbar";


const MainApp = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankHolder, setBankHolder] = useState("")
  const [bankNumber, setBankNumber] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [list, setList] = useState([])
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [afterDiscount, setAfterDiscount] = useState(0)
  const [discountNominal, setDiscountNominal] = useState(0)

  const componentRef = useRef();
  const today = new Date().toISOString().split('T')[0];
  const token = JSON.parse(localStorage.getItem("Token"));

    //Get Client List Query ---------------------------------------------------
    const { data } = useQuery(getClients, {
        variables: {
            id : token.id
        }
    })



  return (
    <>
    <Navbar/>
      <main className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start">
          {/* invoice Details */}
          <section className="bg-white p-5 rounded shadow">
            <div className=" flex flex-col justify-center">
              <h2 className="font-bold mb-3 border-b-2 pb-4">Your Details Information</h2>
              <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
              <label htmlFor="name">Your name</label>
                <input 
                  type="text" 
                  name="text" 
                  id="name" 
                  placeholder="Enter your name ...." 
                  autoComplete="off" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Your address</label>
                <input 
                  type="text" 
                  name="address" 
                  id="address" 
                  placeholder="Enter your address..." 
                  autoComplete="off" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)}
                />
                </div>

              </article>

              <article className="md:grid grid-cols-2 gap-10">
              <div className="flex flex-col">
              <label htmlFor="email">Your email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Enter your email ..." 
                  autoComplete="off" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

                <div className="flex flex-col">
                <label htmlFor="phone">Your phone number</label>
                <input 
                  type="text" 
                  name="phone" 
                  id="phone" 
                  placeholder="Enter your phone number" 
                  autoComplete="off" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)}
                />
                </div>
              </article>

                <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                <label htmlFor="bankName">Your bank name</label>
                <input 
                  type="text" 
                  name="bankName" 
                  id="bankName" 
                  placeholder="Enter your bank name" 
                  autoComplete="off" 
                  value={bankName} 
                  onChange={(e) => setBankName(e.target.value)}
                />
                </div>

                <div className="flex flex-col">
                <label htmlFor="bankHolder">Bank holder name</label>
                <input 
                  type="text" 
                  name="bankHolder" 
                  id="bankHolder" 
                  placeholder="Enter your bank holder" 
                  autoComplete="off" 
                  value={bankHolder} 
                  onChange={(e) => setBankHolder(e.target.value)}
                />
                </div>

                <div className="flex flex-col">
                <label htmlFor="bankNumber">Your bank number</label>
                <input 
                  type="text" 
                  name="bankNumber" 
                  id="bankNumber" 
                  placeholder="Enter your Bank Number" 
                  autoComplete="off" 
                  value={bankNumber} 
                  onChange={(e) => setBankNumber(e.target.value)}
                />
                </div>
                </article>

                <div className="flex flex-row mt-7 border-b-2 pb-4">
                <h2 className="font-bold py-2 px-8">Client's Detail</h2>
                <Link to="/app/list-client">
                <button className=" ml-4 bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 
                hover:bg-transparent hover:text-blue-500 
                transition-all duration-300">Add New Client</button>
                </Link>
                </div>

                <label>Select Client</label>
                
                  <select onChange={(e) => {
                    let selectedData = data?.clientDetail.find(data => data.id === Number(e.target.value)) 
                    console.log(data.clientDetail)
                    setClientAddress(selectedData.clientAddress) 
                    setClientName(selectedData.clientName)
                    
                  }}>
                  {data?.clientDetail.map(client => (
                  <option value={client.id} key={client.id}>{client.clientName}</option>
                  ))}
                </select>
                
                
                <article className="md:grid grid-cols-2 gap-10  md:mt-5">
                <div className="flex flex-col">
                <label htmlFor="clientName">Client's Name</label>
                <input 
                  type="text" 
                  name="clientName" 
                  id="clientName" 
                  placeholder="Enter your client name" 
                  value={clientName} 
                  onChange={(e) => setClientName(e.target.value)}
                />
                </div>

                <div className="flex flex-col">
                <label htmlFor="clientAddress">Client's Address</label>
                <input
                  type="text" 
                  name="clientAddress" 
                  id="clientAddress" 
                  placeholder="Enter your client address" 
                  autoComplete="off" 
                  value={clientAddress} 
                  onChange={(e) => setClientAddress(e.target.value)}
                />
                </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                <label htmlFor="invoiceNumber">Invoice number</label>
                <input 
                  type="text" 
                  name="invoiceNumber" 
                  id="invoiceNumber" 
                  placeholder="Enter your Invoice Number" 
                  autoComplete="off" 
                  value={invoiceNumber} 
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
                </div>

                <div className="flex flex-col">
                <label htmlFor="invoiceDate">Invoice date</label>
                <input 
                  type="date" 
                  name="invoiceDate" 
                  id="invoiceDate" 
                  placeholder="Enter your Invoice Date" 
                  autoComplete="off" 
                  min={today}
                  value={invoiceDate} 
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
                </div>

                <div className="flex flex-col">
                <label htmlFor="dueDate">Invoice Due Date</label>
                <input 
                  type="date" 
                  name="dueDate" 
                  id="dueDate" 
                  placeholder="Enter your Invoice Due Date" 
                  autoComplete="off"
                  min={today}
                  value={dueDate} 
                  onChange={(e) => setDueDate(e.target.value)}
                />
                </div>
                </article>

                <article>
                  <TableForm 
                    description={description} 
                    setDescription={setDescription}
                    quantity={quantity} 
                    setQuantity={setQuantity}
                    price={price} 
                    setPrice={setPrice}
                    amount={amount} 
                    setAmount={setAmount} 
                    setList={setList} 
                    list={list}
                    total={total}
                    setTotal={setTotal}
                    discount={discount}
                    setDiscount={setDiscount}
                    afterDiscount={afterDiscount} 
                    setAfterDiscount={setAfterDiscount} 
                    discountNominal={discountNominal}
                    setDiscountNominal={setDiscountNominal}
                  />
                </article>

                <label htmlFor="notes">Additional notes to your client's</label>
                <textarea 
                name="notes" 
                id="notes" 
                cols="30" 
                rows="10" 
                placeholder="Notes to your client's" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)}>
                </textarea>

            </div>
            </section>

            <div className="invoice__preview bg-white p-5 rounded">
            <ReactToPrint 
                trigger={() => <button className="bg-blue-500 text-white ml-5 font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Print</button>}
                content={() => componentRef.current}/>
            <div ref={componentRef} className="p-5"> 
                <Header/>

                <MyDetails 
                name={name} 
                address={address} /> 

                <ClientDetails 
                clientName={clientName} 
                clientAddress={clientAddress} />

                <Dates 
                invoiceNumber={invoiceNumber} 
                invoiceDate={invoiceDate} 
                dueDate={dueDate}  />

                <Table 
                description={description} 
                price={price} 
                quantity={quantity} 
                amount={amount} 
                list={list} 
                setList={setList} 
                total={total} 
                setTotal={setTotal} 
                discount={discount}
                setDiscount={setDiscount}
                afterDiscount={afterDiscount} 
                setAfterDiscount={setAfterDiscount} 
                discountNominal={discountNominal}
                setDiscountNominal={setDiscountNominal} />
                
                <Notes notes={notes} />

                <Footer name={name} 
                address={address} 
                email={email} 
                phone={phone}
                bankName={bankName} 
                bankNumber={bankNumber}
                bankHolder={bankHolder} />

            </div>
          </div>
        

      </main>
    </>
  );
}

export default MainApp;
