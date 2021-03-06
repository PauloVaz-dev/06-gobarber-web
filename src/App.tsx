import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AuthProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    <GlobalStyle />
  </Router>
);

export default App;
