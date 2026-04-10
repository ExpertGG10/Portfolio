import React from 'react'
import ProjectPageFrame from '../components/PageFrame'
import emDesenvolvimento from '../assets/em_desenvolvimento.png'

export default function DashboardWhatsappBusinessPage() {
  return (
    <ProjectPageFrame
      image={emDesenvolvimento}
      title="Dashboard Whatsapp Business"
      type="Aplicativo"
      description="Dashboard para gerenciar mensagens e requisições chegando pelo WhatsApp Business, além de monitorar métricas e desempenho"
    >
      <div className="mb-6 rounded-xl bg-slate-50 p-5">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-900">Visão geral</h3>
        <p className="text-sm leading-7 text-slate-700">Painel pensado para concentrar atendimento, métricas e acompanhamento de operação em um único ambiente.</p>
      </div>

      <div className="mb-6 space-y-3">
        <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">Visualização consolidada de mensagens e requisições.</div>
        <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">Monitoramento de desempenho da operação.</div>
        <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">Estrutura pronta para expansão futura.</div>
      </div>

      <button type="button" disabled className="mt-auto w-full cursor-not-allowed rounded-lg bg-gray-300 px-5 py-3 font-semibold text-gray-600">
        Em Breve
      </button>
    </ProjectPageFrame>
  )
}