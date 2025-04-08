'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const LoginPage = () => {
  const [user, setUser] = useState({
    password: "",
    email:"",
  })

  const [loader, setLoader] = useState(false)
  const router = useRouter()

  const onLogin = async () => {
    try {
      setLoader(true)
      const response = await fetch("api/logIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Login failed")
      }
      console.log(data, "user logged in")
      router.push("/me")
      
    } catch (error:any) {
      console.log(error.message)
      console.log("login failed")
    }finally{
      setLoader(false)
    }

  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-white text-black p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>


        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-black"
          />
        </div>
        
        <button
          onClick={onLogin}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-white hover:text-black border border-black transition-colors duration-300"
        >
          {loader ? 'Logging in...' : 'Login'}
        </button>
        <p>
          don't have an account ? <a href="/signUp" className="text-blue-500 hover:underline">sign up</a>
        </p>
      </div>
    </div>
  )
}

export default LoginPage