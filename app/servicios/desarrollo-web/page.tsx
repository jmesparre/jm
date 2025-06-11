import React from 'react';
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react'


const DesarrolloWebPage = () => {
  return (
    <div>
      <section className="py-26 md:py-36 text-background">
            <div className="mx-auto px-[5%] sm:px-[5%] md:px-[12%]">
                <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">                 
                    <div className="lg:col-span-2 align-middle">
                        <div className="md:pr-6 lg:pr-0">
                            <h2 className="text-4xl font-semibold lg:text-4xl">Desarrollo Web a medida</h2>
                            <p className="mt-6">Orrupti aut temporibus assumenda atque ab, accusamus sit, molestiae veniam laboriosam pariatur.</p>
                        </div>
                        <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                            <li>
                                <Mail className="size-5" />
                                Email and web support
                            </li>
                            <li>
                                <Zap className="size-5" />
                                Fast response time
                            </li>
                            <li>
                                <Activity className="size-5" />
                                Menitoring and analytics
                            </li>
                            <li>
                                <DraftingCompass className="size-5" />
                                Architectural review
                            </li>
                        </ul>
                    </div>
                    <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                        <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl from-background to-transparent p-px dark:from-background">
                            <img src="/arami.png" className="rounded-[15px] shadow " alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                  
                </div>
            </div>
        </section>
    </div>
  );
};

export default DesarrolloWebPage;
