import React from 'react'

function SectionTitle({ children }) {
  return <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-900">{children}</h3>
}

function normalizeItem(item) {
  if (typeof item === 'string') {
    return { text: item }
  }

  return item || { text: '' }
}

function hasItemContent(item) {
  const content = normalizeItem(item)
  const hasText = typeof content.text === 'string' && content.text.trim().length > 0
  return Boolean(hasText || content.image)
}

function BulletCard({ item }) {
  const content = normalizeItem(item)

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="px-4 py-3 text-sm leading-7 text-slate-700">{content.text}</div>

      {content.image ? (
        <div className="border-t border-slate-200 bg-slate-50 p-3">
          <img
            src={content.image}
            alt={content.imageAlt || content.text || 'Imagem demonstrativa'}
            className="h-44 w-full rounded-lg object-cover"
          />
          {content.imageCaption ? <p className="mt-2 text-xs text-slate-500">{content.imageCaption}</p> : null}
        </div>
      ) : null}
    </div>
  )
}

function FlowStepCard({ step, stepNumber }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-blue-100 bg-blue-50">
      <div className="border-b border-blue-100 px-5 py-4">
        <div className="mb-2 flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-800 text-xs font-bold text-white">
            {stepNumber}
          </span>
          <h4 className="text-sm font-semibold text-blue-950">{step.title}</h4>
        </div>
        <p className="text-sm leading-6 text-blue-950">{step.description}</p>
      </div>

      <div className="px-5 py-5">
        {step.image ? (
          <>
            <div className="flex min-h-72 items-center justify-center rounded-xl border border-blue-100 bg-white p-2">
              <img
                src={step.image}
                alt={step.imageAlt || step.title || `Imagem da etapa ${stepNumber}`}
                className="max-h-[28rem] w-full rounded-lg object-contain"
              />
            </div>
            {step.imageCaption ? <p className="mt-2 text-xs text-slate-500">{step.imageCaption}</p> : null}
          </>
        ) : (
          <div className="flex min-h-72 items-center justify-center rounded-xl border-2 border-dashed border-blue-200 bg-white p-4 text-center text-sm text-slate-500">
            {step.imageLabel || `Imagem da etapa ${stepNumber}`}
          </div>
        )}
      </div>
    </div>
  )
}

export default function AutomationPageContent({ initialExplanation, inputItems = [], outputItems = [], flowSteps = [], setupStep = null }) {
  const visibleInputItems = inputItems.filter(hasItemContent)
  const visibleOutputItems = outputItems.filter(hasItemContent)
  const showInput = visibleInputItems.length > 0
  const showOutput = visibleOutputItems.length > 0

  return (
    <>
      <div className="mb-8 rounded-xl bg-slate-50 p-5">
        <SectionTitle>Explicação Inicial</SectionTitle>
        <p className="text-sm leading-7 text-slate-700">{initialExplanation}</p>
      </div>

      {showInput || showOutput ? (
        <div className="mb-8 grid gap-6 lg:grid-cols-2">
          {showInput ? (
            <section>
              <SectionTitle>Entrada - O que o bot precisa?</SectionTitle>
              <div className="space-y-3">
                {visibleInputItems.map((item, index) => (
                  <BulletCard key={`${normalizeItem(item).text}-${index}`} item={item} />
                ))}
              </div>
            </section>
          ) : null}

          {showOutput ? (
            <section>
              <SectionTitle>Saída - O que o bot devolverá?</SectionTitle>
              <div className="space-y-3">
                {visibleOutputItems.map((item, index) => (
                  <BulletCard key={`${normalizeItem(item).text}-${index}`} item={item} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      ) : null}

      <section className="mb-8">
        <SectionTitle>Fluxo da automação</SectionTitle>
        <div className="space-y-4">
          {setupStep ? <FlowStepCard step={setupStep} stepNumber={0} /> : null}
          {flowSteps.map((step, index) => (
            <FlowStepCard key={step.title} step={step} stepNumber={index + 1} />
          ))}
        </div>
      </section>

      <section className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
        <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber-900">Aviso Importante</h4>
        <p className="mb-3 text-sm leading-7 text-amber-900">
          Se durante o processo aparecer algum erro ou situação diferente do esperado, isso será retornado em uma lista no formato:
        </p>
        <div className="mb-3 space-y-2 rounded-xl border border-amber-200 bg-white p-4 text-sm text-amber-950">
          <p>1234: "Tela de envio não localizada"</p>
          <p>2345: "Aviso de cadastro pendente"</p>
        </div>
        <p className="text-sm leading-7 text-amber-900">
          Sempre que for possível e viável tratar esse tipo de ocorrência de forma automática, o código poderá ser ajustado para, futuramente, incluir esses novos caminhos no processo.
        </p>
      </section>
    </>
  )
}