import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/passwordInput';
import IFormularioRegistro from '@/interfaces/IFormularioRegistro';
import { ChevronLeft } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  voltar: () => void;
  proximo: Dispatch<SetStateAction<number>>;
  formData: IFormularioRegistro;
  handleChange: (field: string, value: string) => void;
}

export default function EtapaSenha({
  voltar,
  proximo,
  formData,
  handleChange,
}: Props) {
  return (
    <Card>
      <div className="flex flex-col gap-3 w-[20vw]">
        <button
          onClick={voltar}
          className="text-start text-xs font-medium underline-offset-4 hover:underline flex gap-1 items-center"
        >
          <ChevronLeft size={16} />
          Voltar
        </button>
        <div className='flex flex-row gap-1 justify-between text-xs text-zinc-600'>
          <p>Email</p>
          <p>/</p>
          <p>Dados</p>
          <p>/</p>
          <p className='font-bold text-white'>Senha</p>
          <p>/</p>
          <p>Veículo</p>
          <p>/</p>
          <p>Fim</p>
        </div>
        <div>
          <Label htmlFor="password">Senha</Label>
          <PasswordInput
            name="password"
            id="password"
            placeholder="Senha"
            onChange={(e) => handleChange('senha', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="repeatPassword">Repetir senha</Label>
          <PasswordInput
            name="repeatPassword"
            id="repeatPassword"
            placeholder="E-mail"
            onChange={(e) => handleChange('repetirSenha', e.target.value)}
          />
        </div>
        <Button
          disabled={
            formData.senha.length <= 3 || formData.repetirSenha.length <= 3 || formData.senha !== formData.repetirSenha
          }
          onClick={() => proximo(3)}
        >
          Próximo
        </Button>
      </div>
    </Card>
  );
}
