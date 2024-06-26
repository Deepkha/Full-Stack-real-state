import React from 'react'
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = () => {
  const {currentUser} = useSelector((state) => state.user); 
  
  return (
    <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between item-center max-w-6xl mx-auto p-3'>

        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Khatri</span>
        <span className='text-slate-800'>Estate</span></h1>
    <form name='form' className='text-slate-100 p-3 rounded-lg flex items-center'>
    
        <input type="text" placeholder='Search...' className=' text-black bg-transparent focus:outline-none w-24 sm:w-64'/>
        
        <FaSearch className='text-slate-600' /> 
    </form>
    <ul className='flex gap-4'>

    <Link to='/'>
    <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
    </Link>
    <Link to='/about'>
    <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
    </Link>
    <Link to='/Sign-in '>
    {currentUser ? (
      <img src={currentUser.avatar} alt="" className='roundeed-full h-7 w-7 object-cover'/>
    ):
    (<li className='hidden sm:inline text-slate-700 hover:underline'>SignIn</li> )}
</Link>


    </ul>
    </div>
   
   </header>
  )
}

export default Header