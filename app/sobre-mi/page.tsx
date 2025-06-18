import React from 'react';
import PageWrapper from '@/components/PageWrapper';
import { motion, useMotionValue, useTransform } from "motion";

const SobreMiPage = () => {
  return (
    <PageWrapper>
      <div className="py-[22vh] text-background min-h-[110vh] sm:min-h-[140vh]">
        <h1 className="text-4xl font-bold">Sobre Mí</h1>
        <p className="mt-4 text-lg text-center">
          Aquí irá la información sobre Juan Manuel Esparré, su trayectoria, misión y visión.
        </p>
      </div>
    </PageWrapper>
  );
};

export default SobreMiPage;
