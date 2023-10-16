'use client'

import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

async function getVideo(id) {
  const res = await fetch('http://localhost:8000/videos/' + id)

  return res.json()
}

export default async function WatchPage() {
  const videoId = useParams().id
  const video = await getVideo(videoId)

  return (
    <main className='px-10 py-4'>
      <section className='h-[400px] max-w-[900px]'>
        <ReactPlayer  controls url={video.videoLink} />
      </section>
      
      
      <div className='py-2'>
        <h3 className='text-lg font-semibold mb-2'>{video.title}</h3>

        <div className='flex items-center'>
          <img className='w-10 h-10 rounded-full' src={video.channelInfo.channelLogoLink} />
          <div className='ml-2 mr-10'>
            <p className='font-semibold'>{video.channelInfo.channelName}</p>
            <p className='text-sm text-stone-600'>{video.channelInfo.subscribersCount} subscribers</p>
          </div>

          <button className='px-4 py-1 rounded-full bg-stone-900 text-white'>
            Subscribe
          </button>
        </div>
      </div>

    </main>
  )
}
