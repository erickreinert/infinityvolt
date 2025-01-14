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
        description: 'Cadastro realizado!',
      });

      const accessToken = res.data.accessToken;

      localStorage.setItem('accessToken', accessToken);

      location.href = '/profile';
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
