'use client';

import Navbar from '@/components/ui/navbar';
import { Car, User } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setAccessToken(token);

    if (!token) {
      location.href = 'login';
    }
  }, []);
  return (
    <div className="text-white">
      {accessToken ? (
        <div>
          <Navbar />
          <div className="p-6 flex gap-4 flex-col">
            <div className="flex items-center gap-3 justify-between">
              <div className='flex items-center gap-3'>
                <User size={50} className="border rounded-full p-2" />
                <div className="leading-none">
                  <h4 className="text-2xl font-bold leading-none">
                    José Neves
                  </h4>
                  <p className="text-xs leading-none">josevneves@outlook.com</p>
                </div>
              </div>
              <div>
                <p className='text-sm underline'>Alterar senha</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold">Seus veículos:</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3 bg-zinc-900/50 rounded-md px-6">
                  <div className="flex items-center gap-3">
                    <Car size={80} />
                    <div className="leading-none">
                      <h4 className="text-2xl font-bold leading-none">GWM</h4>
                      <p className="text-lg leading-none">H6</p>
                    </div>
                  </div>
                  <div className="text-end">
                    <p>
                      <b>Ano:</b> 2024
                    </p>
                    <p>
                      <b>Autonomia:</b> 532 km
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 bg-zinc-900/50 rounded-md px-6">
                  <div className="flex items-center gap-3">
                    <Car size={80} />
                    <div className="leading-none">
                      <h4 className="text-2xl font-bold leading-none">BYD</h4>
                      <p className="text-lg leading-none">Dolphin Mini</p>
                    </div>
                  </div>
                  <div className="text-end">
                    <p>
                      <b>Ano:</b> 2023
                    </p>
                    <p>
                      <b>Autonomia:</b> 321 km
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
