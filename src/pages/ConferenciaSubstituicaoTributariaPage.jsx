import React from 'react'
import ProjectPageFrame from '../components/PageFrame'
import emDesenvolvimento from '../assets/em_desenvolvimento.png'

export default function ConferenciaSubstituicaoTributariaPage() {
  return (
    <ProjectPageFrame
      image={emDesenvolvimento}
      title="Conferência de Substituição Tributária"
      type="Aplicativo"
      description="Site para a conferência de substituição tributária por planilha de NCMs"
    >
      <div className="mb-6 rounded-xl bg-slate-50 p-5">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-900">Visão geral</h3>
        <p className="text-sm leading-7 text-slate-700">Aplicativo voltado para validar NCMs em lote e apoiar análises tributárias com mais segurança operacional.</p>
      </div>

      <div className="mb-6 space-y-3">
        <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">Leitura de planilhas com base de NCMs.</div>
        <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">Conferência orientada por regras tributárias.</div>
        <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700">Projeto em preparação para publicação.</div>
      </div>

      <button type="button" disabled className="mt-auto w-full cursor-not-allowed rounded-lg bg-gray-300 px-5 py-3 font-semibold text-gray-600">
        Em Breve
      </button>
    </ProjectPageFrame>
  )
}