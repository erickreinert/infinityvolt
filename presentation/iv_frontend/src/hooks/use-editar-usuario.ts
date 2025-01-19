import axios from 'axios';
import { useState } from 'react';
import { useToast } from './use-toast';
import IFormularioEditar from '@/interfaces/IFormularioEditar';

export default function useEditarUsuario() {
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  async function sendData(formData: IFormularioEditar, userId: string) {
    setIsLoading(true);
    try {
      await axios.put(process.env.NEXT_PUBLIC_BFF_URL + '/user/' + userId, formData);
      toast({
        title: 'Sucesso!',
        description: 'Edição realizada!',
      });
      location.href = '/profile';
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, sendData };
}
