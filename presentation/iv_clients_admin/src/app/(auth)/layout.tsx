import React from 'react'

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-screen h-screen bg-cover bg-center'>
      <div className='w-full h-full bg-black/90 backdrop-blur-sm flex justify-center items-center'>{children}</div>
    </div>
  )
}
