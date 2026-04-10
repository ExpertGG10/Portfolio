import React from 'react'
import ProjectPageFrame from '../components/PageFrame'
import enviador from '../assets/enviador_preview.png'

export default function AEnvioPage() {
  return (
    <ProjectPageFrame
      title="AEnvio"
      type="Aplicativo"
      description="Envio em massa de mensagens via Gmail e WhatsApp"
    >
      <div className="mb-6 rounded-xl bg-slate-50 p-5">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-900">Visão geral</h3>
        <p className="text-sm leading-7 text-slate-700">
          Plataforma focada em agilizar campanhas de comunicação, centralizando disparos e reduzindo trabalho manual na operação comercial.
        </p>
      </div>

      <div className="mb-6 space-y-3">
        <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">Envio de Mensagens em massa via WhatsApp ou Gmail através de planilhas com os dados dos destinatários.</div>
        <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">Salvamento de mensagens pré-formatadas e listas de destinatários para envio rápido.</div>
        <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">Mensagens com informações personalizadas para cada destinatário.</div>
      </div>

      <div className="mt-auto space-y-4">
        <p className="rounded-lg bg-blue-50 p-4 text-sm text-blue-950">Comece agora mesmo.</p>
        <a
          href="https://enviador-eight.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg bg-blue-800 px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-900"
        >
          Acessar sistema
        </a>
      </div>
    </ProjectPageFrame>
  )
}