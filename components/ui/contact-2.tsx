import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contacto",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(11) 32750873",
  email = "jmesparre@gmail.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  return (
    <section className="pt-100 lg:pt-40 pb-32 px-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 pb-1 text-2xl md:text-3xl lg:text-4xl font-title">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <ul className="ml-4 list-none">
                <li>
                  <span className="font-bold">Telefono: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4 w-70">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Nombre</Label>
                <Input type="text" id="firstname" placeholder="Nombre" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <Button className="w-full border-1">Enviar</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
