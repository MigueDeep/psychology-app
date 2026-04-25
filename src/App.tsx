import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { AboutPage } from './pages/AboutPage'
import { ActivitiesPage } from './pages/ActivitiesPage'
import { EvaluationPage } from './pages/EvaluationPage'
import { HomePage } from './pages/HomePage'
import { ParentsTeachersPage } from './pages/ParentsTeachersPage'
import { SelfAssessmentPage } from './pages/SelfAssessmentPage'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/actividades" element={<ActivitiesPage />} />
        <Route path="/evaluacion" element={<EvaluationPage />} />
        <Route path="/padres-maestros" element={<ParentsTeachersPage />} />
        <Route path="/autoevaluacion" element={<SelfAssessmentPage />} />
        <Route path="/acerca-de" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  )
}

export default App
