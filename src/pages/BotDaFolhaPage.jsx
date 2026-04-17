import React from 'react'
import AutomationPageContent from '../components/AutomationPageContent'
import ProjectPageFrame from '../components/PageFrame'
import planilhaCodigoPastaPdf from '../assets/planilha-codigo-pasta_pdf.png'

export default function BotDaFolhaPage() {
  return (
    <ProjectPageFrame
      image={planilhaCodigoPastaPdf}
      hideImage
      title="Bot da Folha"
      type="Automação"
      description="Realiza o fechamento da folha e gera os extratos e recibos correspondentes"
    >
      <AutomationPageContent
        initialExplanation="Fluxo automatizado para encerrar a rotina de folha com geração dos documentos que normalmente exigiriam várias etapas repetitivas."
        inputItems={[
          {
            text: 'Planilha com lista das empresas e classificação entre Mensalistas ou INSS Individual.',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Exemplo de pasta e documentos da competência',
            imageCaption: 'Exemplo visual dos arquivos usados como base da execução.',
          }
        ]}
        outputItems={[
          {
            text: 'Uma pasta zipada contendo os extratos e recibos organizados por empresa, prontos para conferência e envio.',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Exemplo de documentos gerados após execução',
            imageCaption: 'Exemplo visual do material organizado após o processamento.',
          },
          'Alem disso o RPA tambem fecha a competencia no e-social',
        ]}
        flowSteps={[
          {
            title: 'Calculo da competencia',
            description: 'Realiza a apuração dos dados no dominio',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Tela inicial da rotina de fechamento',
            imageCaption: 'Etapa 1: abertura e validação inicial da competência.',
          },
          {
            title: 'Geração de extrato - 1',
            description: 'Acessa Extrato',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Etapa de geração de extratos e recibos',
            imageCaption: 'Etapa 2: documentos processados automaticamente.',
          },
          {
            title: 'Geração de extrato - 2',
            description: 'Gera o extrato e salva no formato PDF',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Pasta final com os arquivos organizados',
            imageCaption: 'Etapa 3: organização final para revisão e envio.',
          },
          {
            title: 'Geração de recibo - 1',
            description: 'Acessa Recibo',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Etapa de geração de recibos',
            imageCaption: 'Etapa 4: documentos processados automaticamente.',
          },
          {
            title: 'Geração de recibo - 2',
            description: 'Gera o recibo e salva no formato PDF',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Pasta final com os arquivos organizados',
            imageCaption: 'Etapa 5: organização final para revisão e envio.',
          },
          {
            title: 'Fechamento no e-Social - 1',
            description: 'Acessa e-Social',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Etapa de fechamento no e-Social',
            imageCaption: 'Etapa 6: acesso inicial ao e-Social.',
          },
          {
            title: 'Fechamento no e-Social - 2',
            description: 'Finaliza o fechamento no e-Social',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Pasta final com os arquivos organizados',
            imageCaption: 'Etapa 7: organização final para revisão e envio.',
          },
        ]}
      />
    </ProjectPageFrame>
  )
}