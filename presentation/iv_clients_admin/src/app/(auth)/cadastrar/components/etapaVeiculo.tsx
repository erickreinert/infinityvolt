import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
}: Props) {
  // const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState('');
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
            <select
              id="inputMarca"
              name="inputMarca"
              className="bg-zinc-900 p-2"
              value={formData.marca}
              onChange={(e) => handleChange('marca', e.target.value)}
            >
              {brands.map((brand, index) => (
                <option key={index} value={brand.value}>
                  {brand.label}
                </option>
              ))}
            </select>
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
              <Label htmlFor="inputCapacidade">Capacidade da bateria</Label>
              <Input
                name="inputCapacidade"
                id="inputCapacidade"
                value={formData.capacidade}
                onChange={(e) => handleChange('capacidade', e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="inputAutonomia">Autonomia (KM)</Label>
              <Input
                name="inputAutonomia"
                id="inputAutonomia"
                value={formData.autonomia}
                onChange={(e) => handleChange('autonomia', e.target.value)}
              />
            </div>
          </div>
        </div>
        <Button
          onClick={() => {
            alert(JSON.stringify(formData));
            window.location.href = "/login"
          }}
        >
          Cadastrar
        </Button>
      </div>
    </Card>
  );
}
