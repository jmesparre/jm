// components/DesktopNavbar.tsx
import React from 'react';
import Link from 'next/link';

const DesktopNavbar = () => {
  return (
    <nav className='absolute top-5 right-8'>
      <ul className='flex space-x-4'>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
        <li><Link href="/proyectos">Proyectos</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
