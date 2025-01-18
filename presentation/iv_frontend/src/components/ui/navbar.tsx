import { LogOut, Map, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    setAccessToken(token);
  }, []);

  const logout = () => {
    sessionStorage.removeItem('accessToken');
    location.href = '/';
  };

  return (
    <nav className="p-2 bg-black/50 backdrop-blur flex justify-between px-6">
      <Image src={'/logo.png'} width={46} height={46} alt="asasdas" />
      {accessToken && (
        <ul className="flex items-center">
          <li className="flex items-center gap-1 hover:bg-zinc-900 h-full px-3 duration-100 ease-linear rounded-md">
            <Map />
            <Link href={'/map'}>Mapa</Link>
          </li>
          <li className="flex items-center gap-1 hover:bg-zinc-900 h-full px-3 duration-100 ease-linear rounded-md">
            <User />
            <Link href={'/profile'}>Perfil</Link>
          </li>

          <li className="flex items-center gap-1 hover:bg-zinc-900 h-full px-3 duration-100 ease-linear rounded-md">
            <button className="flex items-center gap-1" onClick={logout}>
              <LogOut />
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
