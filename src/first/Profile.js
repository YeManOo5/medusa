import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import medusa from '../image/medusa.png'
import { useNavigate } from 'react-router-dom';

function Profile() {
   
    const navigate = useNavigate();

    
  return (
    <div>
        <section className="w-full flex-center flex-col ">
    <div className="w-full text-center">
    <h1 className="p-5  font-normal leading-[1.15] text-white w-full bg-[#D91E4D] uppercase">Be Careful, Remember...your life belongs to this Queen.</h1>
    </div>
   
      </section>

  <div className='w-full bg-white  px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={medusa} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#D91E4D] font-bold '>CHAI`LIN (Medusa) </p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Cold, enchanting, and capable of bringing disaster to a country…</h1>
          <p>
          She is very prideful and has superiority complex as she wanted other people to address her as "Your Highness" or "Queen". Medusa has a soft point towards children and admitted that humans are interesting(Only In Manhua). She didn't have much respect for Human Life before Xiao Yan. She has the traits of a Medusa (A Name meaning Snake Queen, i.e. there were various Queen Medusa before her) which is a "Medusa truly loves someone until the end once she has been subdued by him."[5] Despite the fact that Xiao Yan has taken her virginity[6], she has conflicted feeling about killing him which she acknowledges.
          </p>
          <button className='bg-[#D91E4D] text-[#1ed9aa] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3' onClick={()=>navigate('/TestNev')}>Test Navigation</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Profile