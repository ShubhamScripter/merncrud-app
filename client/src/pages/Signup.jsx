import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-center text-3xl font-semibold my-7 '>Signup</h1>
      <form className='flex flex-col gap-4'>
        <input className='bg-slate-100 p-3 rounded-lg' placeholder='username' id="username"></input>
        <input className='bg-slate-100 p-3 rounded-lg'placeholder='email' id="email"></input>
        <input className='bg-slate-100 p-3 rounded-lg' placeholder="password" id="password"></input>
        <button className='uppercase p-3 bg-black text-white rounded-lg hover:opacity-95 disabled:opacity-80'>signup</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have a account ?</p>
        <Link to='sign-in'>
        <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
