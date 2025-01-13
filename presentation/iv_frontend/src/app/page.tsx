'use client';

import Navbar from '@/components/ui/navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-cover bg-center">
      <div className="w-full h-full bg-[#09090B] flex text-white flex-col">
        <Navbar />
        <div className="grid flex-1 grid-cols-2 justify-between items-center px-48">
          <div className=''>
            <Image
              src={'/logo-full.png'}
              width={500}
              height={46}
              alt="asasdas"
            />
          </div>
          <div className="flex flex-col items-end">
            <p className='w-full text-lg text-end'>
              Seja bem vindo a uma nova experiência para donos de veículos
              elétricos! Faça login ou cadastre-se para aproveitar todos os
              benefícios que a <b><u>Infinity Volt</u></b> pode te oferecer
            </p>
            <Link href={'/login'} className='bg-azul p-2 px-10 rounded-md hover:bg-azul/90'>Entrar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
