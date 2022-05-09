import React from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackIdState, isPlayingState } from '../atom/songAtom'
import useSpotify from '../hooks/useSpotify'
import { millisToMinutesAndSeconds } from '../lib/time'

function Song(props) {
  const spotifyApi = useSpotify()
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

  const playSong = () => {
    setCurrentTrackId(props.track.track.id)
    setIsPlaying(true)
    spotifyApi.play({
      uris: [props.track.track.uri],
    })
  }

  return (
    <div
      className="grid cursor-pointer grid-cols-2 rounded-lg py-4 px-5 text-gray-500 hover:bg-gray-900"
      onClick={playSong}
    >
      <div className="flex items-center space-x-4">
        <p>{props.order + 1}</p>
        <img
          className="h-10 w-10"
          src={props.track.track.album.images[0].url}
          alt=""
        />
        <div className="">
          <p className="lg:64 w-36 truncate text-white">
            {props.track.track.name}
          </p>
          <p className="w-40">{props.track.track.artists[0].name}</p>
        </div>
      </div>
      <div className="ml-auto flex items-center justify-between md:ml-0">
        <p className="hidden w-40 md:inline">{props.track.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(props.track.track.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Song
