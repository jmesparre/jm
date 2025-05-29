// components/DesktopNavbar.tsx
import React from 'react';

const DesktopNavbar = () => {
  return (
    <nav className='absolute top-5 right-8'>
      <ul className='flex space-x-4'>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
