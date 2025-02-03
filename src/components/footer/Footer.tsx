import React from 'react'

export default function Footer() {
  return (
    // <div>
    //   <div>
    //     <h1>
    //     The Generics
    //     </h1>
    //   </div>
    //   <div></div>
    // </div>
    <footer className="bg-blue-500 text-white text-center py-6 mt-10">
        <h2 className="text-4xl font-bold">The Generics</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.youtube.com"><img src="./img/youtube.png" alt="YouTube" className="w-10" /></a>
          <a href="https://spotify.com"><img src="./img/Spotify Logo.png" alt="Spotify" className="w-10" /></a>
          <a href="https://facebook.com"><img src="./img/Facebook Logo.png" alt="Facebook" className="w-10" /></a>
        </div>
      </footer>
  )
}
