'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
  const router = useRouter()
  const [data, setData] = useState<any>(null)

  const logout = async () => {
    try {
      const res = await fetch("/api/logOut", {
        method: "POST",
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "Logout failed")
      }

      const responseData = await res.json()
      console.log("Logged out:", responseData)

      router.push("/logIn")
    } catch (error: any) {
      console.error("Logout failed:", error.message || error)
    }
  }

  const getUserDetails = async () => {
    try {
      const res = await fetch("/api/me", {
        method: "POST",})
      const userData = await res.json()
      setData(userData)
      console.log(userData)
    } catch (error) {
      console.error("Error fetching user details:", error)
    }
  }

  return (
    <div className="p-4 space-y-4">
      <button
        onClick={logout}
        className="bg-black text-white p-2 rounded-lg"
      >
        LOGOUT
      </button>

      <button
        onClick={getUserDetails}
        className="bg-black text-white p-2 rounded-lg ml-4"
      >
        GET USER DETAILS
      </button>

      {data && (
        <pre className="text-white mt-4">{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  )
}

export default Page