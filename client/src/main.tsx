import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/index.css';

import App from './app';
import JavascriptClass from './pages/javascriptClass';
import TypescriptClass from './pages/typescriptClass';
import PythonClass from './pages/pythonClass';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <JavascriptClass />
    <TypescriptClass />
    <PythonClass />
  </StrictMode>,
)
