import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AEnvioPage from './pages/AEnvioPage'
import ConferenciaSubstituicaoTributariaPage from './pages/ConferenciaSubstituicaoTributariaPage'
import DashboardWhatsappBusinessPage from './pages/DashboardWhatsappBusinessPage'
import BuscadorAliquotasPage from './pages/BuscadorAliquotasPage'
import BotDaFolhaPage from './pages/BotDaFolhaPage'
import EnviarDctfwebPage from './pages/EnviarDctfwebPage'
import ConferenciaSimplesNacionalPage from './pages/ConferenciaSimplesNacionalPage'
import GeradorBoletosHonorariosPage from './pages/GeradorBoletosHonorariosPage'

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aenvio" element={<AEnvioPage />} />
        <Route path="/conferencia-substituicao-tributaria" element={<ConferenciaSubstituicaoTributariaPage />} />
        <Route path="/dashboard-whatsapp-business" element={<DashboardWhatsappBusinessPage />} />
        <Route path="/automacoes/buscador-de-aliquotas" element={<BuscadorAliquotasPage />} />
        <Route path="/automacoes/bot-da-folha" element={<BotDaFolhaPage />} />
        <Route path="/automacoes/enviar-dctfweb" element={<EnviarDctfwebPage />} />
        <Route path="/automacoes/conferencia-simples-nacional" element={<ConferenciaSimplesNacionalPage />} />
        <Route path="/automacoes/gerador-de-boletos-de-honorarios" element={<GeradorBoletosHonorariosPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App
