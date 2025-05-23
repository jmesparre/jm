// components/DesktopNavbar.tsx
import React from 'react';

const DesktopNavbar = () => {
  return (
    <nav className='absolute top-0 right-0 pr-9 pt-8'>
      <ul className='flex space-x-4'>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
