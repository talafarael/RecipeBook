import React from 'react'
import Logo from "@/public/logo.svg"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
export const Header = () => {
  const router = useRouter();
  const backToHome = () => {
    router.push("/")
  }
  return (
    <header className='h-[12vh] w-[100vw] bg-[#626F47] flex items-center'>
      <Image src={Logo} alt="" className='h-[90%] w-auto' onClick={backToHome} />
    </header>

  )
}
