import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import React from 'react';

export default function EtapaFinal() {
  return (
    <Card>
      <div className="flex flex-col gap-3 w-[25vw]">
        <h4 className="font-bold text-center text-2xl">Parabéns!</h4>
        <p className="text-sm text-center">
          Seu cadastro foi realizado com sucesso!
        </p>
        <Button onClick={() => (location.href = '/login')}>
          Clique aqui para fazer o login
        </Button>
      </div>
    </Card>
  );
}
