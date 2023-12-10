import React from 'react'
import one from '../image/one.png'
import two from '../image/two.png'
import three from '../image/three.png'

function TestNev() {
  return (
    <div className='w-full py-[2rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-50 mx-auto mt-[-3rem] bg-white' src={one} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>TITLE</h2>
              <p className='text-center text-4xl font-bold'>111</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>something</p>
                  
                  <p className='py-2 border-b mx-8'>write something</p>
              </div>
              <button className='bg-[#D91E4D] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#1ed9aa]'>just test</button>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-50 mx-auto mt-[-3rem] bg-transparent' src={two} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>TITLE</h2>
              <p className='text-center text-4xl font-bold'>222</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>something</p>
                 
                  <p className='py-2 border-b mx-8'>write something</p>
              </div>
              <button className='bg-[#1ed9aa] text-[#D91E4D] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>just test</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-50 mx-auto mt-[-3rem] bg-white' src={three} alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>TITLE</h2>
              <p className='text-center text-4xl font-bold'>333</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>something</p>
                 
                  <p className='py-2 border-b mx-8'>write something</p>
              </div>
              <button className='bg-[#D91E4D] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#1ed9aa]'>just test</button>
          </div>
      </div>
    </div>
  )
}

export default TestNev