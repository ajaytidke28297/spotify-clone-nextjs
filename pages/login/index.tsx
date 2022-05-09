import React from 'react'
import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <img
        className="m-5 w-52"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
        alt=""
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className="rounder-l rounded-full bg-[#18D860] p-5 text-white"
            onClick={() => {
              signIn(provider.id, { callbackUrl: '/' })
            }}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}
