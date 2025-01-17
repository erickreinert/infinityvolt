import IFormularioRegistro from '@/interfaces/IFormularioRegistro';
import axios from 'axios';
import { useState } from 'react';
import { useToast } from './use-toast';

export default function useCadastro() {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  async function sendData(formData: IFormularioRegistro, callback: () => void) {
    setIsLoading(true);
    try {
      console.log(JSON.stringify(formData))
      await axios.post(process.env.NEXT_PUBLIC_BFF_URL + '/user', formData);
      toast({
        title: 'Sucesso!',
        description: 'Cadastro realizado!',
      });
      callback()
      // location.href = '/login';
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, sendData };
}
