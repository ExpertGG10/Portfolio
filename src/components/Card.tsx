import React from 'react'
import emDesenvolvimento from '../assets/em_desenvolvimento.png'

interface CardProps {
  image?: string
  title: string
  type: string
  description: string
  tags: string[]
  href?: string
  isComingSoon?: boolean
}

export default function Card({ image, title, type, description, tags, href, isComingSoon }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      {/* Imagem */}
      <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
        <img src={image || emDesenvolvimento} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Conteúdo */}
      <div className="p-6">
        {/* Badge Tipo */}
        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-2">
          {type}
        </span>

        {/* Título */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

        {/* Descrição */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Botão */}
        {isComingSoon ? (
          <button
            type="button"
            disabled
            className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-semibold cursor-not-allowed"
          >
            Em Breve
          </button>
        ) : href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            Acessar
          </a>
        ) : (
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Detalhes
          </button>
        )}
      </div>
    </div>
  )
}
