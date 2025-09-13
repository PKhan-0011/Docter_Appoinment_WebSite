'use client'
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from '@/lib/Icon';
import { MovingBorder } from "@/components/ui/moving-border";

export default function Home() {
  return (
     <>
          <div className="bg-background">
            <section className="relative overflow-hidden py-24 container mx-auto">
                <div>
                      <div>
                            <div className="space-y-10">
                                  <Badge variant="outline" className="bg-emerald-900/50 border-none p-3 mx-auto text-1xl text-light03_green">HealthCare made simple</Badge>
                                   
                                     <div className="flex flex-col space-y-4 h-full">
                                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide ">Connect</h1>
                                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide">with doctors</h1>
                                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide text-light_dark">anytime, anywhere</h1>
                                     </div>

                                     <div className="max-w-xl space-y-2">
                                           <p className="text-1xl md:text-2xl lg:text-1.5xl text-light_brown"> Book appointments, consult through secure video calls, and manage your entire healthcare journey
                                                from the comfort of your home. Our platform makes it simple to connect with trusted doctors whenever you need them.</p>
                                     </div>
                                      
                                      <div className="flex items-center gap-2 ">
                                             
                                           <Button className="flex items-center gap-2 px-4 py-2 text-[1em] rounded bg-light_dark h-12 w-50 mx-6"> Get Started  <Icon /></Button>
                                            
                                            <Button className="px-4 py-2 rounded bg-gray-800 text-white text-base w-50 h-12">Find Doctors</Button>

                                      </div>

                             </div>


                      </div>

                      <div>
                          
                      </div>
                </div>
            </section>
                  
          </div>
     </>
  );
}
