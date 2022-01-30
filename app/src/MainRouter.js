import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home'
import Invoices from './invoices/invoices'
import Invoice from './invoices/invoice'
import Menu from './core/Menu'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/invoices" element={<Invoices />}/>   
        <Route path="/invoices/invoice/:id" element={<Invoice />}/>         
        <Route path="/invoices/invoice" element={<Invoice />}/>    
      </Routes>
    </div>)
}

export default MainRouter