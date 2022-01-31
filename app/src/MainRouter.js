import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home'
import Invoices from './invoices/invoices'
import Invoice from './invoices/invoice'
import Menu from './core/Menu'
import ClippedDrawer from './core/Drawer'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const MainRouter = () => {
    return (<div>
      {/* <Menu/> */}
      <Box sx={{ display: 'flex' }}>
        <ClippedDrawer/>
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <Toolbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/invoices" element={<Invoices />}/>   
            <Route path="/invoices/invoice/:id" element={<Invoice />}/>         
            <Route path="/invoices/invoice" element={<Invoice />}/>    
          </Routes>
        </Box>
      </Box>
    </div>)
}

export default MainRouter