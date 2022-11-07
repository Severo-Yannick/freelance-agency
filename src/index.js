import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header/Header'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import Survey from './pages/Survey'
import NotFound from './components/Error/NotFound'
import Footer from './components/Footer/Footer'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="/results" element={<Results />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals()
