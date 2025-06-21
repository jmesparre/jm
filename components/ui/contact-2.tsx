import React, { useState, FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";


interface Contact2Props {
  title?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contactoss",
  phone = "(11) 32750873",
  email = "jmesparre@gmail.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email: userEmail, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setName("");
        setUserEmail("");
        setMessage("");
      } else {
        setError(data.message || "Error al enviar el mensaje.");
      }
    } catch (err) {
      console.error("Error en la petición:", err);
      setError("Error de red o del servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-[11%] pt-[5vh] sm:pt-[40vh] pb-40  text-background min-h-[110vh] sm:min-h-[101vh]">
        <div>
          <h1 className="mb-2 text-pretty text-5xl md:text-5xl lg:text-6xl font-title">
            {title}
          </h1>  
        </div>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto ml-0  sm:order-2 order-1 flex flex-col justify-between">
            <div className="text-left">
              <div className="max-w-120 mt-20 w-[90%]">
                   <Image priority={false} src="/contacto-juan-manuel-esparre.png" alt="Servicios de Diseño Gráfico y UX/UI en Argentina" width={1207} height={929} />
              </div>
            </div>
            <div className=" w-fit lg:mx-0">
              <ul className=" list-none">
                 <li className="pb-10">
                  <p>Pongamonos en contacto</p>
                </li>
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

          <div className="mx-auto ml-0 sm:order-2 order-1 flex max-w-screen-md flex-col gap-6 rounded-lg border p-10 sm:mt-15 mt-5 pb-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 pb-5">
              <div className="flex gap-4 w-70 mt-4">
                <div className="grid w-full items-center gap-1.5">
                  <Input type="text" id="firstname" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Input type="email" id="email" placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
              </div>
              <div className="grid w-full gap-1.5">
                <Textarea placeholder="Mensaje" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full border-1" disabled={loading}>
                {loading ? "Enviando..." : "Enviar"}
              </Button>
              {success && <p className="text-background">¡Mensaje enviado con éxito!</p>}
              {error && <p className="text-red-300">{error}</p>}
            </form>
          </div>
        </div>

    </section>
  );
};
