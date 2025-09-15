'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from 'next/link';
import { ArrowBigRight, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";
import { creditBenefits, features } from "@/lib/data";
import {Stethoscope} from 'lucide-react';
import { testimonials } from "@/lib/data";





export default function Home() {
  return (
     <>
          <div className="bg-background">
            <section className="relative overflow-hidden py-20 container mx-auto">
                <div className="relative overflow-hidden py-20">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
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
                                             
                                            <Link href={'/onboarding'}>
                                                   <Button className="flex items-center gap-2 px-4 py-2 text-[1em] rounded bg-light_dark h-12 w-50 mx-6"> Get Started <ArrowBigRight /> </Button>
                                            </Link>
                                            
                                            <Link href={'/doctors'}>
                                                  <Button className="px-4 py-2 rounded bg-gray-800 text-white text-base w-50 h-12">Find Doctors</Button>
                                            </Link>

                                      </div>
                             </div>
                               
                               <div className=" relative h-[400px] lg:h-[600px] w-full rounded-xl overflow-hidden mr-10 mb-10">
                                    <Image 
                                      src={'/banner2 (1).png'}
                                      alt='Doctor consultation'
                                      fill 
                                      priority
                                      className="object-cover md:pt-8 rounded-lg h-[100px] w-[100px]"
                                    />
                               </div>
                      </div>
                </div>
            </section>
                  

                   {/* Featured Section ayega yah s abb okkh!..*/}
                    <section className="py-20 bg-bg_muted">
                        <div className="container mx-auto px-4">
                              <div className="text-center mb-16">
                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 ">
                                          How its works
                                    </h1>

                                       <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                                          Our platform makes healthcare accessible with just a few clicks
                                      </p>
                              </div>

                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                       {
                                          
                                           features.map((feature, index) => (
                                                <Card key={index} 

                                                className="bg-card border-emrald-900/20 hover:border-emerald-800/40 transition-all duration-300">

                                                    <CardHeader className="pb-2">
                                                            
                                                            <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-4">
                                                                  {feature.icon}
                                                            </div>

                                                      <CardTitle
                                                         className="text-xl font-semibold text-white"
                                                      >{feature.title}</CardTitle>

                                                    </CardHeader>
                                                    <CardContent>
                                                      <p className="text-muted-foreground">{feature.description}</p>
                                                    </CardContent>
                                                
                                                </Card>
                                                
                                           ))
                                         
                                       }
                                 </div>
                        </div>
                    </section>

                    {/* Ye wala jo section hai isme hame Consultation packages write down karenge okkh!...*/}
                  <section className="py-20 ">
                        <div className="container mx-auto px-4">
                              <div className="text-center mb-16 space-y-8">

                                       <Badge variant="outline" 
                                       className="bg-emerald-900/50 border border-transparent hover:border-white transition-all duration-300 p-3 mx-auto text-1xl text-light03_green">
                                       Affordable HealthCare
                                       </Badge>

                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 ">
                                           Consultation Packages
                                    </h1>

                                       <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
                                           Choose the perfect consultation package that files your healthcare needs.
                                      </p>
                              </div> 

                                <div>
                                      {/*pricing Table ayega yha p sahi s kar liyo usse okkh!..*/}

                                      {/* Yha p abb hame ek aur chiz dhyan dena hai like How our credit works etc..*/}

                                      <Card className="mt-12 bg-bg_muted border-emerald-900/30 ">
                                             <CardHeader>

                                               <CardTitle className="text-xl font-semibold text-white flex items-center">
                                                   <Stethoscope className="h-8 w-8 mr-2 text-emerald-400 "/>
                                                      How Our Credit Systeam Work
                                               </CardTitle>
                                             </CardHeader>
                                             <CardContent>
                                                    <ul>
                                                      {creditBenefits.map((credit,index) => (
                                                            <li key={index} className="flex items-center ">
                                                                  <div className="flex items-center  gap-4 mt-1 mr-3 bg-emerald-900/20 p-1 rounded-full">
                                                                        <Check className="h-5 w-5 text-emerald-400"/>
                                                                           
                                                                           <p
                                                                             className="text-muted-foreground"
                                                                             dangerouslySetInnerHTML={{__html:credit}}
                                                                           />   
                                                                  </div>
                                                            </li>
                                                      ))}
                                                    </ul>
                                             </CardContent>
                                             
                                       </Card>

                                </div>

                                


                        </div>
                    </section>

                    {/*Testinomial section ayega abb yha s okkh!..*/}
                     
                     <section className="py-20 bg-bg_muted">
                        <div className="container mx-auto px-4">
                              <div className="text-center mb-16 space-y-8">

                                       <Badge variant="outline" 
                                       className="bg-emerald-900/50 border border-transparent hover:border-white transition-all duration-300 p-3 mx-auto text-1xl text-light03_green">
                                         Success Stories
                                       </Badge>

                                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 ">
                                           What Our Users Says
                                    </h1>

                                       <p className="text-neutral-300 text-lg max-w-2xl mx-auto ">
                                             Our platform has transformed the way our users work and learn. 
                                             From beginners to experts, everyone shares their success stories and experiences with us.
                                             Join them and see the difference!
                                      </p>
                              </div> 

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                      
                                      {
                                        testimonials.map((test, index) => (
                                              <Card key={index} 
                                                className="bg-card border-emrald-900/20 hover:border-emerald-800/40 transition-all duration-300">
                                                   
                                                   <CardContent>
                                                       <div className="space-y-4">
                                                      <div className="flex flex-row gap-4 items-center ">
                                                            <span className="text-emerald-400 text-bold">{test.initials}</span>
                                                            <h4 className="text-1xl text-white">{test.name}</h4>
                                                      </div>
                                                             <div className="bg-emerald-900 px-4 py-2 items-center rounded min-w-30">
                                                                  <p>{test.role}</p>
                                                             </div>
                                                    </div>
                                                    <p className="text-muted-foreground mt-6">
                                                     &quote: {test.quote}&quote;
                                                    </p>
                                                   </CardContent>
                                                </Card>
                                        ))
                                      } 

                                     

                                </div>
                        </div>
                    </section>

                     
                     <section className="py-20 ">
                        <div className="container mx-auto px-4">

                                  <Card className="bg-gradient-to-r from-emerald-900/30 to-emerald-950/20 border-emerald-800/20">
                                   <CardContent className="pt-6">
                                       
                                       <div className="">
                                           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                                Ready to take control of healthcare
                                           </h2>

                                           <p className="text-lg text-muted-foreground mb-8">
                                                Join thousands of users who have simplified their healthcare
                                                journey with our platform. Get started today and experience
                                                healthcare the way it should be.
                                           </p>

                                           <div className='flex flex-rows gap-4'>
                                                <Button
                                                 variant="destructive"
                                                 size='lg'
                                                 className="bg-emerald-600 text-white hover:bg-emerald-700 "
                                                >
                                                      <Link href={'/sign-in'}>Sign up Now</Link>
                                                </Button>

                                                <Button
                                                 variant="outline"
                                                 size='lg'
                                                 className="border-emerald-700/30 hover:bg-muted/80"
                                                >
                                                  <Link href={'/pricing'}>View Pricing</Link>
                                                </Button>

                                           </div>
                                       </div>

                                        {/*ye code alg se kuch designing k hai okkh!..*/}

                                         <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-emerald-800/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                                        <div className="absolute left-0 bottom-0 w-[200px] h-[200px] bg-emerald-700/10 rounded-full blur-3xl -ml-10 -mb-10"></div>
                                     
                                   </CardContent>
                                   
                                 </Card> 
                       
                        </div>
                    </section>

          </div>
     </>
  );
}

