import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Layout from './components/Layout'
import Footer from './components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <App />
      <Footer />
    </Layout>
  </React.StrictMode>,
)
