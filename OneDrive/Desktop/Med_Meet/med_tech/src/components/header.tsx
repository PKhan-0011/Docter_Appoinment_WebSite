'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Button} from '@/components/ui/button'

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

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
              
              <div className='flex items-center space-x-2'>
                      <SignedOut>
                             <SignInButton>
                                 <Button variant="secondary" className='bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer'>SignIn</Button>
                              </SignInButton>

                     </SignedOut>
             <SignedIn>
                   <UserButton />
             </SignedIn>
              </div>
                  
            </nav>
     </header>
  )
}

export default Header;

        