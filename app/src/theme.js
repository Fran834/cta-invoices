import { createTheme } from '@mui/material/styles'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// const theme = createTheme({
//   type: 'dark',
//   primary: {
//     main: '#3f51b5',
//   },
//   secondary: {
//     main: '#f50057',
//   },
// });

const theme = createTheme({
  palette: {
    primary: {
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737',
      contrastText: '#fff',
    },
    secondary: {
      light: '#63ccff',
      main: '#039be5',
      dark: '#006db3',
      contrastText: '#000',
    },
  }
});


export default theme