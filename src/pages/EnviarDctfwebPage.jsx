import React from 'react'
import AutomationPageContent from '../components/AutomationPageContent'
import ProjectPageFrame from '../components/PageFrame'
import planilhaCodigo from '../assets/planilha-codigo.png'
import planilhaDctfWeb from '../assets/planilha_dctfweb.png'
import etapa1 from '../assets/etapa1_dctfweb.png'
import etapa2 from '../assets/etapa2_dctfweb.png'


export default function EnviarDctfwebPage() {
  return (
    <ProjectPageFrame
      image={planilhaCodigo}
      hideImage
      title="Enviar DCTFWeb"
      type="Automação"
    >
      <AutomationPageContent
        initialExplanation="Realiza o processo de envio de DCTFWeb no dominio através de uma lista com o código das empresas"
        inputItems={[
          {
            text: 'As informações da competência que será fechada.',
            image: planilhaDctfWeb,
            imageAlt: 'Exemplo de pasta e documentos da competência',
            imageCaption: 'Exemplo visual dos arquivos usados como base da execução.',
          },
        ]}
        outputItems={[]}
        flowSteps={[
          {
            title: 'Abertura do ambiente',
            description: 'Entra nos menus Relatórios -> e-social -> eventos periódicos',
            image: etapa1,
            imageAlt: 'Imagem do acesso ao Dominio',
            imageCaption: 'Etapa 1: abertura do ambiente para iniciar o envio da DCTFWeb.',
          },
          {
            title: 'Seleção dos campos',
            description: 'Preenche a competência e seleciona os campos necessários para gerar e enviar a DCTFWeb.',
            image: etapa2,
            imageAlt: 'Imagem da tela de preenchimento da obrigação',
            imageCaption: 'Etapa 2: preenche a competência e seleciona os campos necessários.',
          },
        ]}
      />
    </ProjectPageFrame>
  )
}