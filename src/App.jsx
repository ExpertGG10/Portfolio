import React from 'react'
import Card from './components/Card'
import enviador from './assets/enviador_preview.png'
import planilha_codigo_planilha from './assets/planilha-codigo-planilha.png'
import planilha_codigo_pasta_pdf from './assets/planilha-codigo-pasta_pdf.png'
import jaralIcon from './assets/icone jaral.png'

const aplicativos = [
  { title: 'AEnvio', type: 'Aplicativo', description: 'Envio em massa de mensagens via Gmail e WhatsApp', tags: ['Whatsapp', 'Gmail'], image: enviador, href: 'https://enviador-eight.vercel.app/' },
  { title: 'Conferência de Substituição Tributária', type: 'Aplicativo', description: 'Site para a conferência de substituição tributária por planilha de NCMs', tags: ['Econet'], isComingSoon: true },
  { title: 'Dashboard Whatsapp Business', type: 'Aplicativo', description: 'Dashboard para gerenciar mensagens e requisições chegando pelo WhatsApp Business, além de monitorar métricas e desempenho', tags: ['Whatsapp'], isComingSoon: true },
]

const automacoes = [
  { title: 'Buscador de Aliquotas', type: 'Automação', description: 'Percorre uma planilha de NCM e identifica aqueles que podem ser sujeitos a alíquotas diferenciadas e benefícios fiscais', tags: ['Econet'], image: planilha_codigo_planilha },
  { title: 'Bot da Folha', type: 'Automação', description: 'Realiza o fechamento da folha e gera os extratos e recibos correspondentes', tags: ['Dominio'], image: planilha_codigo_pasta_pdf },
  { title: 'Conferência Simples Nacional', type: 'Automação', description: 'Percorre uma planilha e verifica no site do governo se cada um dos cnpjs estão ou não no Simples Nacional', tags: ['fazenda.gov.br'], isComingSoon: true },
]

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-blue-800 shadow-lg">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={jaralIcon} alt="Jaral" className="w-10 h-10 object-contain" />
              <h1 className="text-2xl font-bold text-white">Painel de Sistemas</h1>
            </div>

            
          </div>
        </nav>
      </header>


      {/* Projetos */}
      <section id="projetos" className="py-16">
        <div className="w-full max-w-7xl mx-auto px-6">

          {/* Aplicativos */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold mb-6 text-blue-900">Aplicativos</h4>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {aplicativos.map((p) => (
                <Card key={p.title} image={p.image} title={p.title} type={p.type} description={p.description} tags={p.tags} href={p.href} isComingSoon={p.isComingSoon} />
              ))}
            </div>
          </div>

          {/* Automações */}
          <div>
            <h4 className="text-2xl font-semibold mb-6 text-blue-900">Automações</h4>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {automacoes.map((p) => (
                <Card key={p.title} image={p.image} title={p.title} type={p.type} description={p.description} tags={p.tags} isComingSoon={p.isComingSoon} />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2026 Jaralcon. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
