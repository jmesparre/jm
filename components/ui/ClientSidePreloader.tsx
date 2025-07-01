"use client";

import React, { useState, useEffect } from 'react';
import ImagePreloader from './ImagePreloader';

const imageUrlsToPreload = [
  '/servicio-desarrollo-web-argentina.png',
  '/servicio-e-commerce-argentina.png',
  '/servicio-herramientas-de-gestion-empresas.png',
  '/servicio-posicionamiento-web-seo-argentina.png',
  '/servicios-web-precios-fijos.png',
  '/servicio-diseño-grafico-argentina.png',
];

const ClientSidePreloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return isLoaded ? <ImagePreloader imageUrls={imageUrlsToPreload} /> : null;
};

export default ClientSidePreloader;
