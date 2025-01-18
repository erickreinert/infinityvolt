import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return (
    <div className='bg-[#09090B] backdrop-blur text-white rounded-md border-2 border-azul/40 p-6'>
      {children}
    </div>
  )
}
