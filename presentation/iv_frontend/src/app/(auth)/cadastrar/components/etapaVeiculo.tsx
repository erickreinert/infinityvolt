import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Loading from '@/components/ui/loading';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useCadastro from '@/hooks/use-cadastro';
import IFormularioRegistro from '@/interfaces/IFormularioRegistro';
import { ChevronLeft } from 'lucide-react';

import React, { Dispatch, SetStateAction } from 'react';

const brands = [
  {
    value: 'byd',
    label: 'BYD',
  },
  {
    value: 'gwm',
    label: 'GWM',
  },
  {
    value: 'renault',
    label: 'Renault',
  },
  {
    value: 'nissan',
    label: 'Nissan',
  },
];

interface Props {
  voltar: () => void;
  proximo: Dispatch<SetStateAction<number>>;
  formData: IFormularioRegistro;
  handleChange: (field: string, value: string) => void;
}

export default function EtapaVeiculo({
  voltar,
  formData,
  handleChange,
  proximo
}: Props) {
  const {isLoading, sendData} = useCadastro()
  return (

    <Card>
      <div className="flex flex-col gap-3 w-[25vw]">
        <button
          onClick={voltar}
          className="text-start text-xs font-medium underline-offset-4 hover:underline flex gap-1 items-center"
        >
          <ChevronLeft size={16} />
          Voltar
        </button>
        <div className="flex flex-row gap-1 justify-between text-xs text-zinc-600">
          <p>Email</p>
          <p>/</p>
          <p>Dados</p>
          <p>/</p>
          <p>Senha</p>
          <p>/</p>
          <p className="font-bold text-white">Veículo</p>
          <p>/</p>
          <p>Fim</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <Label htmlFor="inputMarca">Marca do veículo</Label>
            <Select
              value={formData.marca}
              onValueChange={(e) => handleChange('marca', e)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione a marca..." />
              </SelectTrigger>
              <SelectContent>
                {brands.map((brand, index) => (
                  <SelectItem key={index} value={brand.value}>
                    {brand.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col">
            <Label htmlFor="inputModelo">Modelo do veículo</Label>
            <Input
              name="inputModelo"
              id="inputModelo"
              value={formData.modelo}
              onChange={(e) => handleChange('modelo', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col">
              <Label htmlFor="inputAno">Ano de fabricação</Label>
              <Input
                type="number"
                name="inputAno"
                id="inputAno"
                maxLength={4}
                placeholder='YYYY'
                value={formData.ano}
                onChange={(e) => handleChange('ano', e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="inputAutonomia">Autonomia (KM)</Label>
              <Input
                name="inputAutonomia"
                id="inputAutonomia"
                placeholder='KM'
                type="number"
                value={formData.autonomia}
                onChange={(e) => handleChange('autonomia', e.target.value)}
              />
            </div>
          </div>
        </div>
        <Button
          disabled={
            formData.marca === '' ||
            formData.modelo === '' ||
            Number(formData.ano) <= 0 ||
            Number(formData.autonomia) <= 0 ||
            isLoading
          }
          onClick={() => {
            sendData(formData, () => proximo(4));
          }}
        >
          {isLoading ? <Loading /> : <p>Cadastrar</p>}
        </Button>
      </div>
    </Card>
  );
}
