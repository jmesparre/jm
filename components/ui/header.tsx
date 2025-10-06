"use client";

import { Button } from "./button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./navigation-menu";
import { Component as AnimatedMenuButton } from "./animated-menu-button";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import { Earth } from 'lucide-react';

function Header1() {
    const { t, i18n } = useTranslation();
    const [, setLang] = useState(i18n.language);

    useEffect(() => {
        const handleLanguageChange = (lng: string) => setLang(lng);
        i18n.on('languageChanged', handleLanguageChange);
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const changeLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    const [isOpen, setOpen] = useState(false);
    const headerRef = useRef(null);

    const navigationItems = [
        {
            title: t('home'),
            href: "/",
            description: "",
        },
        {
            title: t('services'),
            description: t('services_description'),
            items: [
                {
                    title: t('all_services'),
                    href: "/servicios",
                },
                {
                    title: t('web_development'),
                    href: "/servicios/desarrollo-web",
                },
                
                {
                    title: t('design_services'),
                    href: "/servicios/servicios-de-diseno",
                },
                {
                    title: t('ecommerce'),
                    href: "/servicios/e-commerce",
                },
                {
                    title: t('seo'),
                    href: "/servicios/posicionamiento-web",
                },
                {
                    title: t('management_tools'),
                    href: "/servicios/herramientas-de-gestion",
                },
                {
                    title: t('fixed_prices'),
                    href: "/servicios/precios-fijos",
                }
            ],
        },
        {
            title: t('projects'),
            href: "/trabajos",
            description: t('projects_description'),
        },
        {
            title: t('about_me'),
            href: "/sobre-mi",
            description: "",
        },
        {
            title: t('contact'),
            href: "/contacto",
            description: t('contact_description'),   
        }
    ];

    return (
        <header ref={headerRef} className="w-full bg-foreground z-40 fixed  top-0 left-0 text-background px-2">
              <div className="fixed top-1 sm:top-0 left-4 sm:left-11.5 z-10 logo">
              <Link href="/">
                <Image  priority={true} src="/logosvg.svg" alt="Logo-juan-manuel-esparre-desarrollador-web" width={40} height={40} className="mt-3"/>
                <h2 className="top-4 ml-12 logo-text font-bold">Desarrollo Web</h2>
              </Link>
            </div>
            <div className="container relative mx-auto min-h-15 flex gap-4 flex-row justify-end items-center">
                <NavigationMenu delayDuration={0} skipDelayDuration={0} className="flex justify-start items-start justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenuList className="flex justify-start flex-row">
                            {navigationItems.map((item, index) => (
                                <NavigationMenuItem key={item.href || index} className="relative z-50">
                                    {item.items ? ( // If item has sub-items (e.g., Servicios, Contacto)
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4 bg-foreground">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-2xl">{item.title}</p>
                                                            <p className="text-muted-foreground text-xs mt-2 font-base">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        {item.title === t('contact') && ( // Only show Contactame button for Contacto dropdown
                                                            <a href="https://wa.me/541132750873/?text=Hola" target="_blank" rel="noopener noreferrer">
                                                                <Button size="sm" className="mt-10 cursor-pointer">
                                                                    {t('contact_me')}
                                                                </Button>
                                                            </a>
                                                        )}
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex  flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <span>{subItem.title}</span>
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    ) : ( // If item only has a direct link (e.g., Inicio, Trabajos, Blog, Sobre Mi)
                                        <NavigationMenuLink asChild>
                                            <Link href={item.href}>
                                                <Button variant="ghost">{item.title}</Button>
                                            </Link>
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="flex items-center gap-2 pt-[2px]">
                        <Button variant="ghost" size="sm" onClick={changeLanguage}>
                            {i18n.language === 'es' ? 'EN' : 'ES'}
                            <Earth className="ml-2 h-3 w-3 mt-[-2px]" />
                        </Button>
                    </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <AnimatedMenuButton open={isOpen} onToggle={() => setOpen(!isOpen)} />
                    {isOpen && (
                        <div className="absolute top-15 border-t flex flex-col w-full right-0 bg-foreground p-5 shadow-lg py-4 pb-6 container gap-5">
                            {navigationItems.map((item, index) => (
                                <div key={`${item.title}-${index}`}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex justify-between items-center"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="text-lg">{item.title}</span>
                                            </Link>
                                        ) : (
                                            <p className="text-lg">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem, subIndex) => (
                                                <Link
                                                    key={`${item.title}-${subItem.title}-${subIndex}`}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="text-muted-foreground text-sm pl-4">
                                                        {subItem.title}
                                                    </span>
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };
