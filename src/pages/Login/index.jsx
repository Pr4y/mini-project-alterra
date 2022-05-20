import React, { useState, useEffect} from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie'
import { GetUserByUsername } from "../../GraphQL/User";

import Navbar from "../../components/Navbar";
import Swal from "sweetalert2";


const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [getUser, { data, loading, error }] = useLazyQuery(GetUserByUsername,{
    onCompleted:(data) => {
    const token = JSON.stringify({
      id: data.users[0].id,
      username: data.users[0].username,
    })
    localStorage.setItem('Token', token)
  } })
  console.log(data)
  const [errorMsg, setErrorMsg] = useState('')
  const [errorMsgPW, setErrorMsgPW] = useState('')
  const cookies = new Cookies()

  useEffect(() => {
    setErrorMsg(errorMsg)
    if (data?.users.length === 1) {
      cookies.set('users', true, { path: '/' })
      navigate('/app')
    }
  })
  const handleLogin = async () => {
    getUser({
      variables: {
        _eq: username,
        _eq1: password
      }
    })
    if (await data?.auth.username != username && data?.auth.username != password) {
      setErrorMsg('Username tidak sesuai!')
            setErrorMsgPW('Password Salah!')
            console.log(errorMsg)
  }
  }
  if (loading) {
    return <div className="text-center">
    <svg role="status" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
</div>
  }

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
}

const handleChangePassword = (e) => {
    setPassword(e.target.value)
}
  return (
    <>
      <Navbar transparent />
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
          Welcome Back
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to access your account
        </div>

        <div className="mt-10">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col mb-5">
              <label
                htmlFor="username"
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
                  <i className="fas fa-at text-blue-500"></i>
                </div>

                <input 
                  onChange={handleChangeUsername}
                  id="username"
                  type="text"
                  name="username"
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
                  placeholder="Enter your username"
                />
                <div>{errorMsg}</div>
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
                >Password: </label>
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
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input 
                  onChange={handleChangePassword}
                  id="password"
                  type="password"
                  name="password"
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
                 <div>{errorMsgPW}</div>
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
                <span className="mr-2 uppercase">Sign In</span>
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
        <p>You dont have an account? <Link to="/register"> <span className=" ml-2 text-blue-500 font-semibold">Register Now</span></Link></p>
      </div>
    </div>
    </>
  )
}

export default Login