import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import { dark } from '@clerk/themes'

import { ThemeProvider } from "@/components/theme-provider";
import Header from '@/components/header';

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]}); 

export const metadata: Metadata = {
  title: "Doctor Appoiment ",
  description: "make med_tech easy..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider 
     appearance={{
       baseTheme: dark,
     }}
    >

    <html lang="en">
      <body
        className={inter.className}
      >

        <ThemeProvider

           attribute="class"
           defaultTheme="dark"
           enableSystem
           disableTransitionOnChange

        >

         <Header />
         

         <main className="min-h-screen pt-[1em]">
              {children}
         </main>

                  <footer className="bg-muted/50 py-12">
                        <div className="container mx-auto py-4 text-center text-gray-200">
                            <p className="text-3xl font-bold tracking-tight">
                              Made Project ❤️ by Techy_Prey.
                            </p>
                        </div>
                </footer> 


          </ ThemeProvider>

              
      </body>
    </html>

    </ClerkProvider>
  );
}
