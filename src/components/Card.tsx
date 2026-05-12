import React from 'react'
import { Link } from 'react-router-dom'
import emDesenvolvimento from '../assets/em_desenvolvimento.png'

interface CardProps {
  image?: string
  title: string
  type: string
  description: string
  tags: string[]
  detailsHref?: string
  siteHref?: string
  isComingSoon?: boolean
}

export default function Card({ image, title, type, description, tags, detailsHref, siteHref, isComingSoon }: CardProps) {
  return (
    <article className="h-full overflow-hidden rounded-lg border-t-4 border-t-blue-800 bg-white shadow-md transition-all hover:shadow-xl">
      {/* Imagem */}
      <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
        <img src={image || emDesenvolvimento} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Conteúdo */}
      <div className="flex h-[calc(100%-12rem)] flex-col p-6">
        {/* Badge Tipo */}
        <span className="inline-block bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
          {type}
        </span>

        {/* Título */}
        <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>

        {/* Descrição */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Tags */}
        {tags.length > 0 ? (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-blue-100 text-blue-900 text-xs px-2 py-1 rounded font-medium">
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {/* Botão */}
        {isComingSoon ? (
          <button
            type="button"
            disabled
            className="mt-auto w-full cursor-not-allowed rounded-lg bg-gray-300 py-2 font-semibold text-gray-600"
          >
            Em Breve
          </button>
        ) : siteHref ? (
          <a
            href={siteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto block w-full rounded-lg bg-blue-800 py-2 text-center font-semibold text-white transition-colors hover:bg-blue-900"
          >
            Acessar o site
          </a>
        ) : detailsHref ? (
          <Link
            to={detailsHref}
            className="mt-auto block w-full rounded-lg bg-blue-800 py-2 text-center font-semibold text-white transition-colors hover:bg-blue-900"
          >
            Detalhes
          </Link>
        ) : (
          <button type="button" className="mt-auto w-full rounded-lg bg-blue-800 py-2 font-semibold text-white transition-colors hover:bg-blue-900">
            Detalhes
          </button>
        )}
      </div>
    </article>
  )
}
