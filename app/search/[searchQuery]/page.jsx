import { useParams } from 'next/navigation'
import React from 'react'
import SearchVideos from './SearchVideos'

async function getVideos() {
  const res = await fetch('http://localhost:8000/videos', {
    next: {
      revalidate: 0
    }
  })

  return res.json()
}



export default async function SearchPage({ children }) {

  const videos = await getVideos()

  return (
    <>
      <SearchVideos videos={videos} />
    </>
  )
}
