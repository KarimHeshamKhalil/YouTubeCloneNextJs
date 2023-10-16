import React from 'react'

export default function Tooltip({ title, className }) {
  return (
    <div className='absolute left-0 -bottom-8 bg-zinc-300 px-2 py-1 rounded-sm scale-0 group-hover:scale-100 transition-all duration-[10ms] text-sm'>
      {title}
    </div>
  )
}
