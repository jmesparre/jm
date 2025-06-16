// components/DesktopNavbar.tsx
import React from 'react';
import Link from 'next/link';


const DesktopNavbar = () => {
  return (
    <nav className='absolute top-5 right-16 z-20'>
      <ul className='flex space-x-4'>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
        <li><Link href="/proyectos">Trabajos</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
