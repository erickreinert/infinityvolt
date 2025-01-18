import axios, { isAxiosError } from 'axios';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import IFormularioLogin from '@/interfaces/IFormularioLogin';

export default function useLogin() {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  async function sendData(formData: IFormularioLogin) {
    setIsLoading(true);
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_BFF_URL + '/user/login',
        formData,
      );
      toast({
        title: 'Sucesso!',
        description: 'Login realizado!',
      });

      const accessToken = res.data.accessToken;

      sessionStorage.setItem('accessToken', accessToken);

      location.href = '/map';
    } catch (error) {
      if (isAxiosError(error)) {
        toast({
          title: 'Erro!',
          description: error.response?.data.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, sendData };
}
