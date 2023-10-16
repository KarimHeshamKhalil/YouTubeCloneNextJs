import Link from 'next/link'
import React from 'react'

async function getVideos() {
  const res = await fetch('http://localhost:8000/videos', {
    next: {
      revalidate: 0
    }
  })

  return res.json()
}

export default async function Videos({ inputValue }) {
  const videos = await getVideos()

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 big:grid-cols-3 huge:grid-cols-4 gap-4 gap-y-12 py-8 px-6 '>
      {videos && videos.map(video => (
        <div key={video.id} >
          <Link href={'/watch/' + video.id}>
            <img className='rounded-xl w-full' src={video.thumbnailLink} />
          </Link>
          

          <div className='w-full px-2 py-2 flex gap-2'>
            <img className='w-8 h-8 rounded-full' src={video.channelInfo.channelLogoLink}/>

            <div className='px-3'>
              <Link href={'/watch/' + video.id}>
                <p className='font-semibold'>{video.title.slice(0, 50)}{video.title.length > 50 && '...'}</p>
              </Link>

              <div className='text-sm text-stone-600 my-1'>
                <p>{video.channelInfo.channelName}</p>

                <div className='flex items-center gap-2'>
                  <p>{video.stats.viewsCount} Views</p>
                  <span className='text-xl'>-</span>
                  <p>{video.stats.releaseDate}</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  )
}
