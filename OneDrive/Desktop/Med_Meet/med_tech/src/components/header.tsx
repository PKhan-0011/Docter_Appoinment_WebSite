'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
     <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10'>
            <nav className='container mx-auto px-4 h-16 flex justify-between items-center '>
                  <Link href='/'>
                        <Image 
                            src = '/logo-single (1).png'
                            alt = 'logo_image'
                            width = {200}
                            height = {60}
                            className='h-12 w-auto pl-5'
                        />
                  </Link>

                  <Link href={'/sign-up'}>
                      SignUp
                  </Link>
            </nav>
     </header>
  )
}

export default Header