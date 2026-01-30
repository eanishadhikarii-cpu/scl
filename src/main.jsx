import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ContactForm from './components/ContactForm'

// Mount React components only where designated
document.addEventListener('DOMContentLoaded', () => {
  // Header component (when ready)
  const headerRoot = document.getElementById('react-header')
  if (headerRoot) {
    // ReactDOM.createRoot(headerRoot).render(<Header />)
  }

  // Contact form component
  const contactRoot = document.getElementById('react-contact-form')
  if (contactRoot) {
    ReactDOM.createRoot(contactRoot).render(<ContactForm />)
  }

  console.log('React integration ready - Contact form mounted successfully')
})