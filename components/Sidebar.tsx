import React from 'react'
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

function Sidebar() {
  const { data: session, status } = useSession()
  return (
    <div className="border-r border-gray-900 p-5 text-sm text-gray-500">
      <div className="space-y-4">
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <p>Log out</p>
        </button>
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
        <PlayListItem playListName="Dance Songs" />
        <PlayListItem playListName="Dance Songs" />
        <PlayListItem playListName="Dance Songs" />
        <PlayListItem playListName="Dance Songs" />
        <PlayListItem playListName="Dance Songs" />
        <PlayListItem playListName="Dance Songs" />
        <PlayListItem playListName="Dance Songs" />
        <PlayListItem playListName="Dance Songs" />
        <PlayListItem playListName="Dance Songs" />
        <PlayListItem playListName="Dance Songs" />
      </div>
    </div>
  )
}

export default Sidebar
