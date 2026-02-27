// import './index.css' // <--- This MUST be here for Tailwind to work
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Import routing tools
import './index.css'
import App from './App.tsx'
import ResumePage from './pages/Resume.tsx' // Assuming you created this file

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* The Landing Page */}
        <Route path="/" element={<App />} />
        
        {/* The Resume Page */}
        <Route path="/Resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)