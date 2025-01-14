'use client';

import { useState } from 'react';
import EtapaEmail from './components/etapaEmail';
import EtapaDados from './components/etapaDados';
import EtapaSenha from './components/etapaSenha';
import EtapaVeiculo from './components/etapaVeiculo';
import IFormularioRegistro from '@/interfaces/IFormularioRegistro';

// Etapas
// 0: email
// 1: dados do usuario
// 2: senha
// 3: cadastro do veiculo

export default function Cadastrar() {
  const [etapa, setEtapa] = useState<number>(0);
  const [formData, setFormData] = useState<IFormularioRegistro>({
    email: '',
    nome: '',
    sobrenome: '',
    telefone: '',
    dataNascimento: null,
    senha: '',
    repetirSenha: '',
    marca: '',
    modelo: '',
    autonomia: '',
    ano: '',
  });

  function handleVoltar() {
    if (etapa > 0) {
      setEtapa((prev) => prev - 1);
    } else {
      location.href = '/login';
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  switch (etapa) {
    case 0:
      return (
        <EtapaEmail
          voltar={handleVoltar}
          proximo={setEtapa}
          formData={formData}
          handleChange={handleChange}
        />
      );
    case 1:
      return (
        <>
          <EtapaDados
            voltar={handleVoltar}
            proximo={setEtapa}
            formData={formData}
            handleChange={handleChange}
          />
        </>
      );
    case 2:
      return (
        <EtapaSenha
          voltar={handleVoltar}
          proximo={setEtapa}
          formData={formData}
          handleChange={handleChange}
        />
      );
    default:
      return (
        <EtapaVeiculo
          voltar={handleVoltar}
          proximo={setEtapa}
          formData={formData}
          handleChange={handleChange}
        />
      );
  }
}
