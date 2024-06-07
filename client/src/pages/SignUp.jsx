import React from 'react'
import {Link } from 'react-router-dom'
import { useState } from 'react'
const SignUp = () => {
  const [formData,setformData] = useState({});
  const handleChange =(e) =>{
    setformData({...formData,[e.target.id]: e.target.value,})
    console.log(formData);

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await fetch('api/route/signup',{ method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)

  })
  const data =await res.json();
  console.log(data);  
}


  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold my-7'>SignUp</h1>
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input type="text" onChange={handleChange} placeholder='Username' className='border outline-none p-3 rounded-lg' id='username' />

      <input type="email" onChange={handleChange} placeholder='email' className='border p-3 rounded-lg' id='email' />

      <input type="password" onChange={handleChange} placeholder='password' className='border p-3 rounded-lg' id='password' />
      <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity:80'>Sign Up</button>
    
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Have an account?</p>
      <Link to={'/sign-in'}><span className='text-blue-700'>SignIn</span></Link>
    </div>

    </div>
  )
}

export default SignUp