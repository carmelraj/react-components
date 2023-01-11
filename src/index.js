import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const rootElements = document.getElementById('root1');
const root1 = createRoot(rootElements);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
