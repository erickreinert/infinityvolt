import IVeiculo from '@/interfaces/IVeiculo';
import capitalizarTexto from '@/utils/capitalizarTexto';
import { Car } from 'lucide-react';

interface Props {
  data: IVeiculo;
}

export default function Veiculo({ data }: Props) {
  return (
    <div className="flex items-center justify-between gap-3 bg-zinc-900/50 rounded-md px-6">
      <div className="flex items-center gap-3">
        <Car size={80} />
        <div className="leading-none">
          <h4 className="text-2xl font-bold leading-none">{capitalizarTexto(data.brand_name)}</h4>
          <p className="text-lg leading-none">{capitalizarTexto(data.model_name)}</p>
        </div>
      </div>
      <div className="text-end">
        <p>
          <b>Ano:</b> {data.model_year}
        </p>
        <p>
          <b>Autonomia:</b> {data.autonomy} km
        </p>
      </div>
    </div>
  );
}
