'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const filterData = (data, searchQuery) => {
  searchQuery = searchQuery.replaceAll('%20' , ' ')

  return data.filter(video => video.title.toLowerCase().includes(searchQuery.toLowerCase()))
}

export default function SearchVideos({ videos }) {
  const searchQuery = useParams().searchQuery

  const result = filterData(videos, searchQuery)

  return (
    <section className='px-8 py-2'>
      {result && result.map(video => (
        <div key={video.id}  className='flex mb-4'>
          <Link href={'/watch/' + video.id}>
            <img className='w-[400px] rounded-2xl' src={video.thumbnailLink} />
          </Link>

          <div className='px-2 py-[2px]'>
            <Link href={'/watch/' + video.id}>
              <p className='font-semibold text-lg'>{video.title}</p>
            </Link>

            <p className='text-sm text-stone-600 mt-0 mb-3'>{video.stats.viewsCount} views <span>-</span> {video.stats.releaseDate}</p>

            <div className='flex items-center gap-2'>
              <img className='w-8 h-8 rounded-full' src={video.channelInfo.channelLogoLink} />

              <p>{video.channelInfo.channelName}</p>
            </div>
          </div>
        </div>
      ))}

      {!result[0] && <p>Can't find your video</p>}
    </section>
  )
}
