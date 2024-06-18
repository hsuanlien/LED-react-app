import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'mcs-lite-theme';
import 'normalize.css';
import './index.css';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ThemeProvider } from 'styled-components';
// import { theme } from 'mcs-lite-theme';
// import 'normalize.css';
// import './index.css';
// import App from './App';


// ReactDOM.render(  // 應用程式的介面主題
//   <ThemeProvider theme={theme}>
//     <App />
//   </ThemeProvider>,
//   document.getElementById('root')
// );