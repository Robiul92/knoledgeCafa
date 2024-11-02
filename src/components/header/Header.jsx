import React from 'react'
import profile from '../../images/profile.png'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4 m-4 border-b'>
       <h1 className="text-3xl font-bold ">
      Knowledge Cafe
    </h1>
    <img src={profile} alt="profile images" />
    </div>
  )
}

export default Header

