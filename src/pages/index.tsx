import Image from 'next/image'
import localFont from "next/font/local";
import Signin from './Auth/Signin'
import React from 'react'


const Andora = localFont({
  src: "../../public/font/AndoraModernSerif-lgrvw-1.otf",
  variable: "--font-Andora",
});
const mulish = localFont({
  src: "../../public/font/Mulish-VariableFont_wght.ttf",
  variable: "--font-Mulish",
});
export default function Home() {
  return (
    <main>
     <Signin />
    </main>
  )
}
