"use client";

import { TrabajosPage } from "@/components/blocks/blog8";
import { useTranslation } from "react-i18next";

function TrabajosBlock() {
  const { t } = useTranslation();

  const trabajosData = {
    heading: t("trabajos_heading"),
    description: t("trabajos_description"),
    posts: [
      {
        id: "nutricion-sanshine",
        title: t("sanshine_title"),
        summary: t("sanshine_summary"),
        label: t("sanshine_label"),
        author: "React, NextJS",
        published: "1 Oct 2025",
        url: "https://www.nutricionsanshine.com/",
        image: "/sanshine-trabajo.png",
        altText: "Sitio web y branding para Nutricion Sanshine",
        tags: ["Diseño Web", "Branding", "UX/UI"],
      },
      {
        id: "proyecto-arami",
        title: t("arami_title"),
        summary: t("arami_summary"),
        label: t("arami_label"),
        author: "Wordpress",
        published: "20 Dic 2024",
        url: "/proyectos/estudio-arami",
        image: "/arami-trabajo2.png",
        altText: "Sitio web y branding para Estudio Arami",
        tags: ["Diseño Web", "Branding", "UX/UI"],
      },
      {
        id: "proyecto-turismo-san-luis",
        title: t("coyuyo_title"),
        summary: t("coyuyo_summary"),
        label: t("coyuyo_label"),
        author: "NextJS",
        published: "01 Feb 2025",
        url: "/proyectos/turismo-san-luis",
        image: "/coyuyo-trabajo.png",
        altText: "Plataforma de turismo para San Luis",
        tags: ["Branding", "Desarrollo Web", "Ilustraciones"],
      },
      {
        id: "proyecto-barrio-privado",
        title: t("barrio_title"),
        summary: t("barrio_summary"),
        label: t("barrio_label"),
        author: "NextJS, Supabase",
        published: "25 Sep 2023",
        url: "/proyectos/tienda-virtual",
        image: "/ayni-trabajo2.png",
        altText: "Herramienta de gestion barrio privado",
        tags: ["Sistema de Gestion", "Desarrollo Web", "Back-end"],
      },
      {
        id: "proyecto-tienda-virtual",
        title: t("tienda_title"),
        summary: t("tienda_summary"),
        label: t("tienda_label"),
        author: "Tienda San Luis",
        published: "25 Sep 2023",
        url: "/proyectos/tienda-virtual",
        image: "/tienda-trabajo.png",
        altText: "Tienda virtual de ropa online",
        tags: ["E-commerce", "Desarrollo Web", "Pagos Online"],
      }
    ],
  };

  return <TrabajosPage {...trabajosData} />;
}

export { TrabajosBlock };
