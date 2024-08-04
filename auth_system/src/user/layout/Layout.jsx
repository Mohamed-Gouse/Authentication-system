import React from 'react'

function Layout({children}) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-300">
      {children}
    </div>
  )
}

export default Layout