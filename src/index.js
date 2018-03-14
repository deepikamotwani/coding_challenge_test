import React from 'react';
import { render } from 'react-dom';
import Main from './app/components/main';
import Header from './app/components/header';
import './styles/main.css';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Header />
    <Main name="CodeSandbox" />
  </div>
);

render(<App />, document.getElementById('root'));
