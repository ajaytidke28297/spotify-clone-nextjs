import React, { useEffect, useState } from 'react'
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline'
import Button from './UI/Button'
import PlayListItem from './UI/PlayListItem'
import { signOut, useSession } from 'next-auth/react'
import useSpotify from '../hooks/useSpotify'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../atom/playlistAtom'

function Sidebar() {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <div className="hidden h-screen overflow-y-scroll border-r border-gray-900 p-5 text-sm text-gray-500 scrollbar-hide sm:max-w-[12rem] md:inline-flex lg:max-w-[15rem] ">
      <div className="space-y-4">
        <Button label="Home">
          <HomeIcon className="h-5 w-5" />
        </Button>
        <Button label="Search">
          <SearchIcon className="h-5 w-5" />
        </Button>
        <Button label="Your Library">
          <LibraryIcon className="h-5 w-5" />
        </Button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <Button label="Create Playlist">
          <PlusCircleIcon className="h-5 w-5" />
        </Button>
        <Button label="Liked Songs">
          <HeartIcon className="h-5 w-5" />
        </Button>
        <Button label="Your episodes">
          <RssIcon className="h-5 w-5" />
        </Button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlist */}
        {playlists.map((playlist) => {
          return (
            <PlayListItem
              key={playlist.id}
              playListName={playlist.name}
              onClick={() => setPlaylistId(playlist.id)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
