'use client'
import React, { useEffect, useState } from 'react'

const VerifyEmailPAGE = () => {
  const [token, setToken] = useState("")
  const [loader, setLoader] = useState(false)
  
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1]
    setToken(urlToken || "");
  }, [])
  
  const onVerify = async () => {
    try {
      setLoader(true)
      const response = await fetch("api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token })
      })
      console.log(token)
      setLoader(false)
    } catch (error) {
      console.error("Verification failed", error)
      setLoader(false)
    }
  }
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-md w-full p-10 bg-white rounded-xl shadow-xl text-center border border-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Email Verification</h1>
        <p className="text-gray-600 mb-8">
          Please click the button below to verify your email address.
        </p>
        <div className="flex justify-center">
          <button 
            onClick={onVerify} 
            disabled={loader || !token}
            className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg shadow-md transition-all duration-300 flex items-center justify-center min-w-64 transform hover:-translate-y-1"
          >
            {loader ? (
              <span className="tracking-wide">Verifying...</span>
            ) : (
              <span className="tracking-wide font-semibold">VERIFY EMAIL</span>
            )}
          </button>
        </div>
        {!token && (
          <p className="mt-6 text-red-500 text-sm font-medium">
            Invalid verification link. Please check your email for the correct link.
          </p>
        )}
      </div>
    </div>
  )
}

export default VerifyEmailPAGE