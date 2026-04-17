import React from 'react'
import Card from '../components/Card'
import enviador from '../assets/enviador_preview.png'
import planilhaCodigoPlanilha from '../assets/planilha-codigo-planilha.png'
import planilhaCodigoPastaPdf from '../assets/planilha-codigo-pasta_pdf.png'
import planilhaCodigo from '../assets/planilha-codigo.png'
import { SiteFooter, SiteHeader } from '../components/PageFrame'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-50">
      <SiteHeader />

      <section id="projetos" className="py-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="mb-12">
            <h4 className="mb-6 text-2xl font-semibold text-blue-900">Aplicativos</h4>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card
                image={enviador}
                title="AEnvio"
                type="Aplicativo"
                description="Envio em massa de mensagens via Gmail e WhatsApp"
                tags={['Whatsapp', 'Gmail']}
                siteHref="https://enviador-eight.vercel.app/"
              />
              <Card
                title="Conferência de Substituição Tributária"
                type="Aplicativo"
                description="Site para a conferência de substituição tributária por planilha de NCMs"
                tags={['Econet']}
                detailsHref="/conferencia-substituicao-tributaria"
                isComingSoon
              />
              <Card
                title="Dashboard Whatsapp Business"
                type="Aplicativo"
                description="Dashboard para gerenciar mensagens e requisições chegando pelo WhatsApp Business, além de monitorar métricas e desempenho"
                tags={['Whatsapp']}
                detailsHref="/dashboard-whatsapp-business"
                isComingSoon
              />
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-2xl font-semibold text-blue-900">Automações</h4>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card
                image={planilhaCodigoPlanilha}
                title="Buscador de Aliquotas"
                type="Automação"
                description="Percorre uma planilha de NCM e identifica aqueles que podem ser sujeitos a alíquotas diferenciadas e benefícios fiscais"
                tags={['Econet']}
                detailsHref="/automacoes/buscador-de-aliquotas"
              />
              <Card
                image={planilhaCodigoPastaPdf}
                title="Bot da Folha"
                type="Automação"
                description="Realiza o fechamento da folha e gera os extratos e recibos correspondentes"
                tags={['Dominio']}
                detailsHref="/automacoes/bot-da-folha"
              />
              <Card
                image={planilhaCodigo}
                title="Enviar DCTFWeb"
                type="Automação"
                description="Realiza o envio automático da DCTFWeb no Dominio"
                tags={['Dominio']}
                detailsHref="/automacoes/enviar-dctfweb"
              />
              <Card
                title="Conferência Simples Nacional"
                type="Automação"
                description="Percorre uma planilha e verifica no site do governo se cada um dos cnpjs estão ou não no Simples Nacional"
                tags={['fazenda.gov.br']}
                detailsHref="/automacoes/conferencia-simples-nacional"
                isComingSoon
              />
              <Card
                title="Gerador de Boletos de Honorários"
                type="Automação"
                description="Gera boletos de honorários contábeis no Conta Azul a partir de uma planilha de informações dos clientes"
                tags={['Conta Azul']}
                detailsHref="/automacoes/gerador-de-boletos-de-honorarios"
                isComingSoon
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}