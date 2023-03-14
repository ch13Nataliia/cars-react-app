import React, { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import Add from './pages/Add'
import ListCars from './pages/ListCars'
import Update from './pages/Update'
import NotFound from './pages/NotFound'

function App() {

return (
  <Router>
  <Routes>
    <Route path="/" element={<Layout />} >
<Route index element={<ListCars />} />
<Route path="/add" element={<Add />} />
<Route path="/update" element={<Update />} />
<Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</Router>
)


}

export default App
