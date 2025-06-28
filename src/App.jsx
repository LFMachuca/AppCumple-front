import {BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import RSVP from './pages/RSVP.jsx'
import EventDashboard from './pages/EventDashboard.jsx'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/event/:id/rsvp" element={<RSVP/>}/>
      <Route path='/event/:id/summary' element={<EventDashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
