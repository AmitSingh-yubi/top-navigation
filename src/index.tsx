import StyleProvider from '@yubi/yb-style-provider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.web';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <StyleProvider baseUrl="https://design-system-qa.go-yubi.in/tokens">
      <App />
    </StyleProvider>
  </React.StrictMode>,
);
