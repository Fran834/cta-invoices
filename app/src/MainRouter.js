import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from './core/Home'
import Invoices from './invoices/invoices'
import Menu from './core/Menu'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/invoices" element={<Invoices />}/>        
      </Routes>
    </div>)
}

export default MainRouter