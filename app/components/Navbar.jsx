'use client'

import React, { useState } from 'react'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import Tooltip from './Tooltip'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('')

  const handleSearch = () => {
    if (!(inputValue[0] === ' ')) {
      router.push('/search/' + inputValue)
      setInputValue('')
    }
  }

  return (
    <nav className='relative flex items-center px-10 py-1 border-b border-stone-200 max-xSmall:h-10 max-xSmall:justify-center'>
      <button className='mr-8 text-xl hover:bg-stone-100 transition-all duration-100 px-2 py-2 rounded-full max-xSmall:hidden'>
        <AiOutlineMenu />
      </button>

      <Link className='max-xSmall:hidden' href='/'>
        <div className='h-5 flex items-center gap-1 text-xl font-medium tracking-tighter select-none max-xSmall:hidden'>
            <BsYoutube className='text-red-600 text-3xl' />
            <h2>YouTube</h2>
        </div>
      </Link>

      <div className='absolute left-[40%] flex justify-center items-center max-xSmall:static'>
        <input className='py-1 px-4 max-w-3xl w-80 rounded-full border border-stone-300 z-50 rounded-r-none' type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder='Search' />

        <button onClick={handleSearch} className='px-4 py-[6px] rounded-full rounded-l-none border border-stone-300 text-xl relative group'>
          <AiOutlineSearch />

          <Tooltip title={'Search'} />
        </button>
      </div>
      
    </nav>
  )
}
