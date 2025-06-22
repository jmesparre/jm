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
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRef, useEffect } from "react";

function Header1() {
    const headerRef = useRef<HTMLElement>(null);
    const navigationItems = [
        {
            title: "Inicio",
            href: "/",
            description: "",
        },
        {
            title: "Servicios",
            description: "Explora mis servicios de desarrollo web y diseño.",
            items: [
                {
                    title: "[ Ver todos los servicios ]",
                    href: "/servicios",
                },
                {
                    title: "[ Desarrollo Web ]",
                    href: "/servicios/desarrollo-web",
                },
                
                {
                    title: "[ Servicios de Diseño ]",
                    href: "/servicios/servicios-de-diseno",
                },
                {
                    title: "[ E-commerce ]",
                    href: "/servicios/e-commerce",
                },
                {
                    title: "[ Posicionamiento Web ]",
                    href: "/servicios/posicionamiento-web",
                },
                {
                    title: "[ Herramientas de Gestion ]",
                    href: "/servicios/herramientas-de-gestion",
                },
                {
                    title: "[ Precios Fijos ]",
                    href: "/servicios/precios-fijos",
                }
            ],
        },
        {
            title: "Trabajos",
            href: "/trabajos",
            description: "Descubre nuestros proyectos destacados.",
        },
        {
            title: "Sobre Mi",
            href: "/sobre-mi",
            description: "",
        },
        {
            title: "Contacto",
            href: "/contacto",
            description: "Ponte en contacto con nosotros para más información.",   
        }
    ];

    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header ref={headerRef} className="w-full bg-foreground z-40 fixed opacity-98 top-0 left-0 text-background px-2">
              <div className="fixed top-1 sm:top-0 left-4 sm:left-11.5 z-10 logo">
              <Link href="/">
                <Image  priority={true} src="/logosvg.svg" alt="Logo-juan-manuel-esparre-desarrollador-web" width={40} height={40} className="mt-3"/>
                <h2 className="top-4 ml-12 logo-text font-bold">Desarrollo Web</h2>
              </Link>
            </div>
            <div className="container relative mx-auto min-h-15 flex gap-4 flex-row justify-end items-center">
                <NavigationMenu className="flex justify-start items-start justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenuList className="flex justify-start flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
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
                                                        {item.title === "Contacto" && ( // Only show Contactame button for Contacto dropdown
                                                            <a href="https://wa.me/541132750873/?text=Hola" target="_blank" rel="noopener noreferrer">
                                                                <Button size="sm" className="mt-10 cursor-pointer">
                                                                    Contactame
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
