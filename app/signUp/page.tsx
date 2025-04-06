import React, { useState } from 'react'

const SignUpPage = () => {
  const[user,setUser] = useState({
    user:"",
    email:"",
    password:"",
  })
  const[loader,setLoader] = useState(false)

  const onSignUp = async ()=>{
    try {
      setLoader(true)
      const response = await fetch("api/signUp",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
        
      })
      const responseData = await response.json()
      console.log("woah user signed up!!",responseData)


      
    } catch (error:any) {
      console.log(error.message)
      console.log("signup failed")


      
      
    }

  }




  return (
    <div>signup</div>
  )
}

export default SignUpPage