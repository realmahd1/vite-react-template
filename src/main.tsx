import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { MantineProvider, createEmotionCache } from '@mantine/core';
//@ts-ignore
import rtlPlugin from 'stylis-plugin-rtl';
const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionCache={rtlCache}
      theme={{
        fontFamily: "IRANSansX !important",
        colorScheme: 'light',
        dir: 'rtl'
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
)
