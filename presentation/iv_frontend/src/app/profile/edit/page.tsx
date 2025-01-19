/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Loading from '@/components/ui/loading';
import Navbar from '@/components/ui/navbar';
import useBuscarUsuario from '@/hooks/use-buscar-usuario';
import useEditarUsuario from '@/hooks/use-editar-usuario';
import IFormularioEditar from '@/interfaces/IFormularioEditar';
import React, { useEffect, useState } from 'react';

export default function EditUserPage() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const [formData, setFormData] = useState<IFormularioEditar>({
    nome: '',
    sobrenome: '',
    telefone: '',
    dataNascimento: null,
  });

  const { fetchUser, isLoadingUser, userData } = useBuscarUsuario();

  const { isLoading, sendData } = useEditarUsuario();

  const handleChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    setAccessToken(token);

    if (!token) {
      location.href = 'login';
    } else {
      fetchUser(token);
    }
  }, []);

  useEffect(() => {
    if (userData) {
      setFormData({
        nome: userData.name,
        sobrenome: userData.lastname,
        dataNascimento: String(userData.birthdate),
        telefone: userData.phone,
      });
    }
  }, [userData]);

  return (
    <div className="text-white flex flex-1 flex-col">
      <Navbar />
      {isLoadingUser ? (
        <Loading />
      ) : (
        <>
          {!accessToken ? (
            <></>
          ) : (
            <div className="flex flex-1 justify-center items-center">
              <div className="w-1/4 flex flex-col gap-3">
                <div>
                  <Label htmlFor="nome">Nome</Label>
                  <Input
                    name="nome"
                    id="nome"
                    type="nome"
                    value={formData.nome}
                    onChange={(e) => handleChange('nome', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="sobrenome">Sobrenome</Label>
                  <Input
                    name="sobrenome"
                    id="sobrenome"
                    type="sobrenome"
                    value={formData.sobrenome}
                    onChange={(e) => handleChange('sobrenome', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input
                    name="telefone"
                    id="telefone"
                    type="telefone"
                    value={formData.telefone}
                    onChange={(e) => handleChange('telefone', e.target.value)}
                  />
                </div>
                <Button
                  onClick={() => {
                    sendData(formData, accessToken);
                  }}
                  disabled={
                    formData.nome.length <= 0 ||
                    formData.sobrenome.length <= 0 ||
                    isLoading
                  }
                >
                  {isLoading ? <Loading /> : "Salvar"}
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
