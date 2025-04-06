'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const SignUpPage = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  })
  const [loader, setLoader] = useState(false)
  const router = useRouter()

  const onSignUp = async () => {
    try {
      setLoader(true)
      const response = await fetch("api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
      const responseData = await response.json()
      console.log("woah user signed up!!", responseData)
      router.push("/logIn")
    } catch (error: any) {
      console.log(error.message)
      console.log("signup failed")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-96 p-8 bg-gray-50 border border-gray-200 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-black text-center">Create Account</h1>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
            <input 
              type="text" 
              name="email" 
              id="email" 
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              className="w-full px-3 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button 
            type="button" 
            onClick={onSignUp}
            className="w-full py-2 px-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
          >
            {loader ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage