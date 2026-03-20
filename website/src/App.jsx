import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AppendicesPage from './pages/AppendicesPage'
import BlogPage from './pages/BlogPage'
import EvaluationPage from './pages/EvaluationPage'
import HomePage from './pages/HomePage'
import ImplementationPage from './pages/ImplementationPage'
import RequirementsPage from './pages/RequirementsPage'
import ResearchPage from './pages/ResearchPage'
import SystemDesignPage from './pages/SystemDesignPage'
import TestingPage from './pages/TestingPage'
import UiDesignPage from './pages/UiDesignPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="requirements" element={<RequirementsPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="ui-design" element={<UiDesignPage />} />
          <Route path="system-design" element={<SystemDesignPage />} />
          <Route path="implementation" element={<ImplementationPage />} />
          <Route path="testing" element={<TestingPage />} />
          <Route path="evaluation" element={<EvaluationPage />} />
          <Route path="appendices" element={<AppendicesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
