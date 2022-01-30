// import NewInvoice from './invoices/new';
// import InvoicesList from './invoices/list';

// function App() {

//   return (
//     <div style={{display: 'flex', justifyContent: 'space-between'}}>
//       <NewInvoice />
//       <InvoicesList />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import MainRouter from './MainRouter';
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from '@mui/styles';
import theme from './theme.js';
import { hot } from 'react-hot-loader';
import { GlobalStyles } from '@mui/styled-engine';


const App = () => {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, [])
  return (
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <MainRouter/>
      </ThemeProvider>
  </BrowserRouter>
)}

export default hot(module)(App);