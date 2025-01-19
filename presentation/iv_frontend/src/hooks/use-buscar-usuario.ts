import IUserData from '@/interfaces/IUserData';
import axios from 'axios';
import { useState } from 'react';

export default function useBuscarUsuario() {
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [userData, setUserData] = useState<IUserData | null>(null);

  async function fetchUser(userId: string) {
    setIsLoadingUser(true);
    try {
      const res = await axios.get(
        process.env.NEXT_PUBLIC_BFF_URL + '/user/' + userId,
      );
      setUserData(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingUser(false);
    }
  }

  return { isLoadingUser, userData, fetchUser };
}
