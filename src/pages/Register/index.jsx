import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client'
import { listAuth, InsertAuth } from "../../GraphQL/User";


// Component ---------------------------------
import Navbar from "../../components/Navbar";


const Register = () => {
  const navigate = useNavigate()
  const baseData = {
    username: '',
    email: '',
    password: ''
}
  const [insertAuth, { loading: loadingInsert }] = useMutation(InsertAuth, { refetchQueries: [listAuth] })

  const [data, setData] = useState(baseData)

  const onChangeUser = (e) => {
    const name = e.target.name
    const value = e.target.value

    setData({
        ...data,
        [name]: value
    })
}

const onSubmitUser = (e) => {
  e.preventDefault();
  insertAuth({
      variables: {
          object: {
              username: data.username,
              email: data.email,
              password: data.password,
          }
      }
  })
  resetData()
  navigate("/login")
}

const resetData = () => {
  setData(baseData)
}

  
  

  return (
    <>
      <Navbar/>
      <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
          Join us Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>

        <div className="mt-10">
          <form onSubmit={onSubmitUser }>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >Username:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                </div>

                <input
                  id="username"
                  type="text"
                  name="username"
                  value={data.username} 
                  onChange={onChangeUser}
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-2
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
                >E-Mail Address:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                </div>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={data.email} 
                  onChange={onChangeUser} 
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-2
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password:</label
              >
              <div className="relative">
                <div
                  className="
                    inline-flex
                    items-center
                    justify-center
                    absolute
                    left-0
                    top-0
                    h-full
                    w-10
                    text-gray-400
                  "
                >
                  <span>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={onChangeUser} 
                  className="
                    text-sm
                    placeholder-gray-500
                    pl-2
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400
                  "
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                className="
                  flex
                  mt-2
                  items-center
                  justify-center
                  focus:outline-none
                  text-white text-sm
                  sm:text-base
                  bg-blue-500
                  hover:bg-blue-600
                  rounded-2xl
                  py-2
                  w-full
                  transition
                  duration-150
                  ease-in
                "
              >
                <span className="mr-2 uppercase">Sign Up</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
          
            
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" mt-3">
        <p>You have an account? <Link to="/login"> <span className=" ml-2 text-blue-500 font-semibold">Login here</span></Link></p>
      </div>
      
    </div>
    </>
  );
}


export default Register