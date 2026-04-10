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
            text: 'As informações da competência que será fechada.',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Exemplo de pasta e documentos da competência',
            imageCaption: 'Exemplo visual dos arquivos usados como base da execução.',
          },
          'Os acessos e dados necessários para entrar no sistema.',
          'As regras da rotina para gerar extratos e recibos corretamente.',
        ]}
        outputItems={[
          {
            text: 'O fechamento da folha realizado automaticamente.',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Exemplo de documentos gerados após execução',
            imageCaption: 'Exemplo visual do material organizado após o processamento.',
          },
          'Uma pasta com os extratos prontos para conferência.',
          'Os recibos organizados para envio ou arquivamento.',
        ]}
        flowSteps={[
          {
            title: 'Início do fechamento',
            description: 'A rotina começa com os parâmetros definidos para a competência selecionada.',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Tela inicial da rotina de fechamento',
            imageCaption: 'Etapa 1: abertura e validação inicial da competência.',
          },
          {
            title: 'Geração de documentos',
            description: 'A automação executa a emissão dos extratos e recibos correspondentes.',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Etapa de geração de extratos e recibos',
            imageCaption: 'Etapa 2: documentos processados automaticamente.',
          },
          {
            title: 'Organização da entrega',
            description: 'Os arquivos finais são separados para conferência e distribuição.',
            image: planilhaCodigoPastaPdf,
            imageAlt: 'Pasta final com os arquivos organizados',
            imageCaption: 'Etapa 3: organização final para revisão e envio.',
          },
        ]}
      />
    </ProjectPageFrame>
  )
}