import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { HowToPage } from './pages/HowToPage'
import { PrivacyPage } from './pages/PrivacyPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/how-to" element={<HowToPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
    </Routes>
  )
}
