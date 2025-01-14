import React from 'react'

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-screen h-screen bg-cover bg-center'>
      <div className='w-full h-full bg-[#09090B] flex flex-col'>{children}</div>
    </div>
  )
}
