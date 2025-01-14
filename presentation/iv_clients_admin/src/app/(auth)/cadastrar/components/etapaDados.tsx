import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ChevronLeft } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react';
import DateInput from './dateInput';
import IFormularioRegistro from '@/interfaces/IFormularioRegistro';

interface Props {
  voltar: () => void;
  proximo: Dispatch<SetStateAction<number>>;
  formData: IFormularioRegistro;
  handleChange: (field: string, value: string) => void;
}

const dataRegex = /^\d{4}-\d{2}-\d{2}$/;

export default function EtapaDados({
  voltar,
  proximo,
  handleChange,
  formData,
}: Props) {
  return (
    <Card>
      <div className="flex flex-col gap-3 w-[20vw]">
        <button
          type="button"
          onClick={voltar}
          className="text-start text-xs font-medium underline-offset-4 hover:underline flex gap-1 items-center"
        >
          <ChevronLeft size={16} />
          Voltar
        </button>
        <div className='flex flex-row gap-1 justify-between text-xs text-zinc-600'>
          <p>Email</p>
          <p>/</p>
          <p className='font-bold text-white'>Dados</p>
          <p>/</p>
          <p>Senha</p>
          <p>/</p>
          <p>Veículo</p>
          <p>/</p>
          <p>Fim</p>
        </div>
        <div>
          <p className="text-xs text-white">
            Precisamos de mais algumas informações.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input
              name="name"
              id="name"
              type="name"
              placeholder="Nome"
              onChange={(e) => handleChange('nome', e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="surname">Sobrenome</Label>
            <Input
              name="surname"
              id="surname"
              type="surname"
              placeholder="Sobrenome"
              onChange={(e) => handleChange('sobrenome', e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Label>Data de nascimento</Label>
          <DateInput handleChange={handleChange} />
        </div>
        <Button
          disabled={
            formData.nome.length <= 0 ||
            formData.sobrenome.length <= 0 ||
            !(
              formData.dataNascimento !== null &&
              dataRegex.test(formData.dataNascimento)
            )
          }
          onClick={() => proximo(2)}
        >
          Próximo
        </Button>
      </div>
    </Card>
  );
}
