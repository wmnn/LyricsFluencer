import React from 'react'
import {BiTimeFive, BiTrendingUp} from 'react-icons/bi'
import {HiMusicNote} from 'react-icons/hi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import AppstoreIcon from '../AppstoreIcon'

function Reasons() {
  return (
    <div className='w-[100%] text-center px-8 flex justify-center'>  
        <ul className='h-[100%] w-[100%] md:w-[40%] flex flex-col items-center text-l justify-between py-48 text-2xl'>
          <h1 className='text-2xl md:text-2xl font-bold'>Contact us</h1>
          <p className='mb-48'>contact@lyricsfluencer.com</p>
          <h1 className='text-2xl md:text-2xl font-bold'>Why you'll love LyricsFluencer</h1>
          <li className='flex items-center w-[100%]'><HiMusicNote size={"24"}/><p className='pl-4'>You can learn a language while listening to music</p></li>
          <li className='flex items-center w-[100%]'><BiTimeFive size={"24"}/><p className='pl-4'>You will get fluent in a language in no time</p></li>
          <li className='flex items-center w-[100%]'><AiOutlineQuestionCircle size={"24"}/><p className='pl-4'>You can check the meanings of each words easily</p></li>
          <li className='flex w-[100%] items-center mb-16'><BiTrendingUp size={"24"}/><p className='pl-4'>You can learn with trending songs</p></li>
          <AppstoreIcon />
        </ul>
    </div>
  )
}

export default Reasons