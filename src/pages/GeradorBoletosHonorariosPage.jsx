import React from 'react'
import AutomationPageContent from '../components/AutomationPageContent'
import ProjectPageFrame from '../components/PageFrame'
import emDesenvolvimento from '../assets/em_desenvolvimento.png'

export default function GeradorBoletosHonorariosPage() {
  return (
    <ProjectPageFrame
      image={emDesenvolvimento}
      hideImage
      title="Gerador de Boletos de Honorários"
      type="Automação"
      description="Gera boletos de honorários contábeis no Conta Azul a partir de uma planilha de informações dos clientes"
    >
      <AutomationPageContent
        initialExplanation="Automação proposta para transformar uma planilha operacional em cobranças emitidas no Conta Azul com menos retrabalho."
        inputItems={[
          'Uma planilha com os dados dos clientes e valores de honorários.',
          'As regras usadas pela equipe para emitir a cobrança.',
          'O acesso ao ambiente do Conta Azul.',
        ]}
        outputItems={[
          'Os boletos gerados de forma padronizada.',
          'Os lançamentos criados dentro do Conta Azul.',
          'Uma base pronta para conferência antes do envio ao cliente.',
        ]}
        flowSteps={[
          {
            title: 'Leitura da planilha',
            description: 'Os dados dos clientes são carregados para o processamento automático.',
            imageLabel: 'Imagem da planilha de honorários',
          },
          {
            title: 'Criação dos lançamentos',
            description: 'A automação gera os registros correspondentes dentro do Conta Azul.',
            imageLabel: 'Imagem da criação do lançamento no Conta Azul',
          },
          {
            title: 'Emissão dos boletos',
            description: 'Os boletos são preparados para conferência final antes do uso.',
            imageLabel: 'Imagem da lista final de boletos emitidos',
          },
        ]}
      />

      <button type="button" disabled className="mt-auto w-full cursor-not-allowed rounded-lg bg-gray-300 px-5 py-3 font-semibold text-gray-600">
        Em Breve
      </button>
    </ProjectPageFrame>
  )
}