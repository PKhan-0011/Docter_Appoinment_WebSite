// hamm yha p ye layout ka use karenge bcz 

import React from 'react'

const AuthLayout = ({children, }: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className='flex justify-center pt-40 items-center'>
        {children}
    </div>
  )
}

export default AuthLayout