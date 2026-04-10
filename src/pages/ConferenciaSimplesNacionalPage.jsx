import React from 'react'
import AutomationPageContent from '../components/AutomationPageContent'
import ProjectPageFrame from '../components/PageFrame'
import emDesenvolvimento from '../assets/em_desenvolvimento.png'

export default function ConferenciaSimplesNacionalPage() {
  return (
    <ProjectPageFrame
      image={emDesenvolvimento}
      hideImage
      title="Conferência Simples Nacional"
      type="Automação"
      description="Percorre uma planilha e verifica no site do governo se cada um dos cnpjs estão ou não no Simples Nacional"
    >
      <AutomationPageContent
        initialExplanation="Projeto desenhado para consultar CNPJs em lote e registrar automaticamente o enquadramento no Simples Nacional."
        inputItems={[
          'Uma planilha com os CNPJs que precisam ser consultados.',
          'O acesso necessário ao portal oficial de verificação.',
          'O padrão que será usado para registrar cada resultado encontrado.',
        ]}
        outputItems={[
          'O status de enquadramento de cada empresa consultada.',
          'Uma planilha ou relatório atualizado com todos os resultados.',
          'Uma base pronta para conferência posterior da equipe.',
        ]}
        flowSteps={[
          {
            title: 'Recebimento da lista',
            description: 'A automação carrega a lista de empresas que será consultada em lote.',
            imageLabel: 'Imagem da planilha com os CNPJs',
          },
          {
            title: 'Consulta governamental',
            description: 'Cada empresa é verificada no ambiente oficial para validação do enquadramento.',
            imageLabel: 'Imagem da consulta ao portal oficial',
          },
          {
            title: 'Registro dos resultados',
            description: 'Os dados encontrados são registrados para uso posterior da equipe.',
            imageLabel: 'Imagem do relatório final com os resultados',
          },
        ]}
      />

      <button type="button" disabled className="mt-auto w-full cursor-not-allowed rounded-lg bg-gray-300 px-5 py-3 font-semibold text-gray-600">
        Em Breve
      </button>
    </ProjectPageFrame>
  )
}