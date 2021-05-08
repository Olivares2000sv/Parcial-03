import {useState} from 'react'
import Menu from './components/Menu'
import Header from './components/Header'
import Contenido from './components/Contenido'
import Galeria from './components/Galeria'
import Formulario from './components/Formulario'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="sitio_web">
      <Menu />
      <Header />
      <Contenido />
      <Galeria />
      <Formulario />
      <Footer />
    </div>
  );
}




