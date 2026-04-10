import React from 'react'
import AutomationPageContent from '../components/AutomationPageContent'
import ProjectPageFrame from '../components/PageFrame'
import planilhaCodigoPlanilha from '../assets/planilha-codigo-planilha.png'
import etapa0 from '../assets/etapa0_conferencia-econet.png'

export default function BuscadorAliquotasPage() {
  return (
    <ProjectPageFrame
      image={planilhaCodigoPlanilha}
      hideImage
      title="Verificador de Aliquotas"
      type="Automação"
      description="Percorre uma planilha de NCM e identifica aqueles que podem ser sujeitos a alíquotas diferenciadas e benefícios fiscais"
    >
      <AutomationPageContent
        initialExplanation="Automação criada para varrer planilhas extensas de NCM e localizar itens com potencial enquadramento em regras especiais de tributação."
        inputItems={[
          'Uma planilha com os NCMs que precisam ser conferidos.'
        ]}
        outputItems={[
          'Uma lista com todos os numeros que possuem qualquer tipo de atenção especial.'
        ]}
        setupStep={{
          title: 'Setup',
          description: 'Esse sistema executará em econet -> Fiscal -> Aliquotas/Benefícios Fiscais.',
          image: etapa0,
          imageAlt: 'Imagem do caminho para acessar o ambiente de consulta',
          imageCaption: 'Configuração inicial para acessar o ambiente de consulta das alíquotas e benefícios fiscais.',
        }}
        flowSteps={[
          {
            title: 'Consulta na econet',
            description: 'Os dados são verificados busca por NCM para identificar os códigos com regras diferenciadas de tributação.',
            imageLabel: 'Imagem da etapa de consulta tributária',
          },
          {
            title: 'Identificação de códigos relevantes',
            description: 'As buscas que retornarem qualquer numero de alíquotas ou benefícios são sinalizadas para conferência posterior da equipe.',
            imageLabel: 'Imagem de uma pesquisa com resultado positivo para alíquotas diferenciadas',
          },
          {
            title: 'Resultado para conferência',
            description: 'A planilha recebida é atualizada com as informações encontradas, destacando os códigos que exigem atenção especial para revisão posterior.',
            imageLabel: 'Imagem da planilha final com os resultados destacados para conferência',
          }
        ]}
      />
    </ProjectPageFrame>
  )
}