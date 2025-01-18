'use client';

import { Button } from '@/components/ui/button';
import Card from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Loading from '@/components/ui/loading';
import useLogin from '@/hooks/use-login';
import IFormularioLogin from '@/interfaces/IFormularioLogin';

import React, { useEffect, useState } from 'react';

export default function Login() {
  const { isLoading, sendData } = useLogin();
  const [formData, setFormData] = useState<IFormularioLogin>({
    email: '',
    senha: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      location.href = "/map"
    }
  }, []);

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
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">Senha</Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder=""
            value={formData.senha}
            onChange={(e) => handleChange('senha', e.target.value)}
          />
        </div>
        <Button
          disabled={formData.email.length <= 0 || formData.senha.length <= 0}
          onClick={() => sendData(formData)}
        >
          {isLoading ? <Loading /> : <p>Entrar</p>}
        </Button>

        <a href="/cadastrar" className="text-xs font-medium text-center">
          Cadastrar-se
        </a>
      </div>
    </Card>
  );
}
