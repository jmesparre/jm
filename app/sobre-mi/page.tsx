"use client"

import React from 'react';
import PageWrapper from '@/components/PageWrapper';

const SobreMiPage = () => {
  return (
      <div className="py-[22vh] text-background min-h-[110vh] sm:min-h-[140vh]">
            <div className="container mx-auto px-4 py-12 md:py-24">
                <div className="grid md:grid-cols-2 gap-8 relative overflow-x-hidden">
                    <div className="md:order-2 relative">
                        <img
                            src="foto-perfil.png"
                            alt="Juan Manuel Esparré"
                            className="rounded-2xl w-full object-cover filter brightness-105"
                        />
                    </div>
                    <div className="md:order-1 flex flex-col justify-between">
                        <div className="flex flex-col h-full justify-between">
                            <h1 className="text-6xl font-title">
                                Sobre Mi
                            </h1>
                            <div>
                                <h2 className="text-4xl font-semibold mt-auto pt-8">
                                    Juan Manuel Esparré
                                </h2>
                                <p className="text-md max-w-md pt-4 ">
                                    <a
                                        href="https://kokonutui.com/"
                                        className="underline"
                                    >
                                        "The Bright Young"
                                    </a>{" "}
                                    draws inspiration from Anglomania,
                                    redefining sartorial elegance and school
                                    uniforms with a nod to British heritage.
                                    Suits of the collection are tailored out of
                                    English cloth, crafted from 1920's inspired
                                    cashmeres and wools, rewovendraws inspiration from Anglomania,
                                    redefining sartorial elegance and school
                                    uniforms with a nod to British heritage.
                                    Suits of the collection are tailored out of
                                    English cloth, crafted from 1920's inspired
                                    cashmeres and wools, rewoven...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
      </div>
  );
};

export default SobreMiPage;
