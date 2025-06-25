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
  title = "Contacto",
  phone = "(11) 32750873",
  email = "jmesparre@gmail.com",
  web = { label: "juandesarrolloweb.com", url: "/" },
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
    <section className="px-4 pt-[25vh] sm:px-[11%] sm:pt-[40vh] pb-40 text-background min-h-[110vh] sm:min-h-[101vh]">
        <div>
          <h1 className="mb-2 text-pretty text-5xl md:text-5xl lg:text-6xl font-title">
            {title}
          </h1>  
        </div>
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto ml-0 sm:order-2 order-1 flex flex-col justify-between">
            <div className="text-left">
              <div className="max-w-120 mt-10 w-[90%] sm:mt-20">
                   <Image priority={true} src="/contacto-juan-manuel-esparre.png" alt="  de Diseño Gráfico y UX/UI en Argentina" width={1207} height={929} />
              </div>
            </div>
            <div className="w-fit lg:mx-0">
              <ul className="list-none">
                 <li className="pb-10">
                  <p>Pongamonos en contacto.</p>
                </li>
                 <li >
                  <a href="https://wa.me/541132750873/?text=Hola" className="font-semibold" target="_blank" rel="noopener noreferrer">
                    Whatsapp <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32.7 32.9" className="h-3.5 w-3.5 inline">
                <path style={{ fill: '#1ac165', fillRule: 'evenodd' }} d="M24.1,19.7c-.4-.2-2.4-1.3-2.7-1.4-.4-.2-.6-.2-.9.2-.3.4-1.1,1.3-1.4,1.6-.2.3-.5.3-.9,0-.4-.2-1.7-.7-3.2-2.2-1.2-1.1-1.9-2.5-2.2-2.9-.2-.4,0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.7.1-.3,0-.5,0-.7,0-.2-.8-2.3-1.1-3.1-.3-.8-.7-.7-.9-.7-.2,0-.5,0-.8,0-.3,0-.7,0-1.1.5-.4.4-1.5,1.3-1.6,3.4,0,2,1.3,4,1.5,4.3.2.3,2.7,4.6,6.8,6.4,4.1,1.8,4.1,1.2,4.9,1.2.8,0,2.5-.9,2.8-1.8.4-.9.4-1.8.3-1.9,0-.2-.4-.3-.8-.5h0ZM16.6,29.4c-2.7,0-5.2-.8-7.3-2.2l-5.1,1.6,1.7-5c-1.6-2.2-2.5-4.9-2.5-7.8,0-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3-6,13.3-13.3,13.3h0ZM16.6,0C7.8,0,.6,7.2.6,16s.8,5.9,2.3,8.3l-2.9,8.6,8.9-2.8c2.3,1.3,4.9,2,7.7,2,8.9,0,16-7.2,16-16S25.5,0,16.6,0h0Z"/>
            </svg>
                  </a>
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

          <div className="mx-auto ml-0 sm:order-2 order-1 flex max-w-screen-md flex-col gap-6 rounded-lg border p-8 sm:p-10 sm:mt-15 mt-5 pb-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 pb-5">
              <div className="flex gap-4 w-60 sm:w-70 mt-4">
                <div className="grid w-full items-center gap-1.5">
                  <Input type="text" id="firstname" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Input type="email" id="email" placeholder="Email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
              </div>
              <div className="grid w-full gap-1.5">
                <Textarea className="h-[150px]" placeholder="Mensaje" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
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
