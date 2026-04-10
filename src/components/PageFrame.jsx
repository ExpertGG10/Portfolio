import React from 'react'
import { Link } from 'react-router-dom'
import jaralIcon from '../assets/icone jaral.png'

export function SiteHeader({ backToHome = false }) {
  return (
    <header className="bg-blue-800 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={jaralIcon} alt="Jaral" className="h-10 w-10 object-contain" />
          <h1 className="text-2xl font-bold text-white">Painel de Sistemas</h1>
        </div>

        {backToHome ? (
          <Link
            to="/"
            className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Voltar
          </Link>
        ) : null}
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-blue-800 py-8 text-white">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2026 Jaralcon. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default function ProjectPageFrame({ image, title, type, description, children, hideImage = false }) {
  return (
    <div className="min-h-screen bg-blue-50">
      <SiteHeader backToHome />

      <main className={`mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-16 lg:flex-row`}>
        <section className="flex flex-1 flex-col rounded-2xl bg-white p-8 shadow-lg">
          <span className="mb-3 inline-block w-fit rounded-full bg-blue-900 px-3 py-1 text-xs font-semibold text-white">
            {type}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-blue-900">{title}</h2>
          <p className="mb-6 text-base leading-7 text-gray-700">{description}</p>
          {children}
        </section>
      </main>
    </div>
  )
}