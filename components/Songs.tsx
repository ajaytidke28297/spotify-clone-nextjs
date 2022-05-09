import React from 'react'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../atom/playlistAtom'
import Song from './Song'

function Songs() {
  const playlist = useRecoilValue(playlistState)

  return (
    <div className="mt-3 flex flex-col space-y-2 px-6 pb-28 text-white">
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  )
}

export default Songs
