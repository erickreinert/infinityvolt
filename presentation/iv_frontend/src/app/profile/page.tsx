/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Loading from '@/components/ui/loading';
import Navbar from '@/components/ui/navbar';
import useListarVeiculos from '@/hooks/use-listar-veiculos';
// import { Car } from 'lucide-react';
import { useEffect, useState } from 'react';
import Veiculo from './components/Veiculo';

export default function Profile() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const { fetchData, isLoading, listaVeiculos } = useListarVeiculos();

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    setAccessToken(token);

    if (!token) {
      location.href = 'login';
    } else {
    fetchData(token);
    }
  }, []);
  return (
    <div className="text-white">
      {accessToken ? (
        <div>
          <Navbar />
          <div className="p-6 flex gap-4 flex-col">
            {/* <div className="flex items-center gap-3 justify-between">
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
            </div> */}
            <div>
              <h4 className="text-xl font-bold">Seus veículos:</h4>
              <div className="flex flex-col gap-3">
                {isLoading ? (
                  <Loading />
                ) : (
                  <>
                    {listaVeiculos.map((v, index) => {
                      return <Veiculo key={index} data={v}/>;
                    })}
                  </>
                )}
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
