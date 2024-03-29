import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

const [loading,setLoading]=useState(false);
const [error,setError]=useState(false);

    const [formData,setformData]=useState({});

    const handleChange=(e)=>
    {
      setformData({...formData,[e.target.id]:e.target.value});
      console.log(formData);
    }


    const handleSubmit=async(e)=>
{
  try
  {
    e.preventDefault();
      setLoading(true);
    const res=await fetch('http://localhost:3000/api/auth/signup', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  });
  const data=await res.json();
  setLoading(false);
  if(data.success==false)
  {
    setError(true);
  }
  else
  {
    setError(false);
  }
  
  console.log(data,"data from backend");
  }
  catch(err)
  {
    setLoading(false);
    setError(true);
      console.log(err);
  }

  }
      



  return (
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-center text-3xl font-semibold my-7 '>Signup</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input onChange={handleChange} className='bg-slate-100 p-3 rounded-lg' placeholder='username' id="username"></input>
        <input onChange={handleChange}className='bg-slate-100 p-3 rounded-lg'placeholder='email' id="email"></input>
        <input onChange={handleChange} className='bg-slate-100 p-3 rounded-lg' placeholder="password" id="password"></input>
        <button  className=' disabled:{loading} uppercase p-3 bg-black text-white rounded-lg hover:opacity-95 disabled:opacity-80'>{loading?"loading":"signup"}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have a account ?</p>
        <Link to='sign-in'>
        <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
      <p className='text-red-500'>{error?"something went wrong!":null}</p>
    </div>
  )
}
