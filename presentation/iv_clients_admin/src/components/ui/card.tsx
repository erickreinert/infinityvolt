import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return (
    <div className='bg-zinc-900/90 backdrop-blur text-white rounded-md border-2 border-azul p-6'>
      {children}
    </div>
  )
}
