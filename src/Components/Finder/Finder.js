import React from 'react'
import Searchicon from "../../Assets/searchicon.svg"
import Deleteicon from "../../Assets/delete.svg"
const Finder = () => {
  return (
    <div className='bg-finderBg  max-w-md rounded-xl m-2'>
    <div className='p-4'>
    <span className='text-2xl font-bold '>Find the Best <br/> <span className='text-primaryBlue '>Videos</span> To Download</span>
      <div className='mt-4 relative' >
      <input className='w-full rounded-3xl p-2  relative placeholder:text-xs placeholder:font-semibold placeholder:pl-3' placeholder='Search..'/>
      <i className='absolute right-9  top-1.5 rounded-full  '> <img className='p-2 cursor-pointer' width={30} src={Deleteicon} />  </i>
     
      <i className='absolute  right-0 bg-seconderyBlue rounded-full'> <img className=' cursor-pointer p-3' width={40} src={Searchicon} />  </i>
      </div>
    </div>

    </div>
  )
}

export default Finder