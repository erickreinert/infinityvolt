'use client';

import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

import React from 'react';

export default function Login() {
  const { toast } = useToast();

  return (
    <Card>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="font-bold text-2xl">Bem vindo!</h1>
          <h4 className="text-xs text-zinc-300">
            Para entrar digite seus dados de usuário
          </h4>
        </div>
        <div>
          <Label htmlFor="email">E-mail</Label>
          <Input
            name="email"
            id="email"
            type="email"
            placeholder="teste@teste.com"
          />
        </div>
        <div>
          <Label htmlFor="password">Senha</Label>
          <Input name="password" id="password" type="password" placeholder="" />
        </div>
        <Button
          onClick={() =>
            toast({
              title: 'Bem vindo!',
              description: 'Login realizado com sucesso!',
            })
          }
        >
          Entrar
        </Button>

        <a href="/cadastrar" className="text-xs font-medium text-center">
          Cadastrar-se
        </a>
      </div>
    </Card>
  );
}
