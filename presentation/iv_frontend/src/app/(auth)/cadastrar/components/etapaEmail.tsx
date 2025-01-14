import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import IFormularioRegistro from '@/interfaces/IFormularioRegistro';
import { ChevronLeft } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  voltar: () => void;
  proximo: Dispatch<SetStateAction<number>>;
  formData: IFormularioRegistro
  handleChange: (field: string, value: string) => void;
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function EtapaEmail({ voltar, proximo, handleChange, formData }: Props) {
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
          <p className='font-bold text-white'>Email</p>
          <p>/</p>
          <p>Dados</p>
          <p>/</p>
          <p>Senha</p>
          <p>/</p>
          <p>Veículo</p>
          <p>/</p>
          <p>Fim</p>
        </div>
        <div>
          <h4 className="font-bold text-2xl">Cadastro</h4>
          <p className="text-xs text-zinc-300">
            Ficamos felizes que queira fazer parte de nossa comunidade!
          </p>
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="E-mail"
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>
        <Button disabled={!emailRegex.test(formData.email)} onClick={() => proximo(1)}>
          Próximo
        </Button>
      </div>
    </Card>
  );
}
