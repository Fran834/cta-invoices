import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home'
import Invoices from './invoices/invoices'
import InvoicesNew from './invoices/new'
import Menu from './core/Menu'

const MainRouter = () => {
    return (<div>
      <Menu/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/invoices" element={<Invoices />}/>        
        <Route path="/invoices/new" element={<InvoicesNew />}/>    
      </Routes>
    </div>)
}

export default MainRouter