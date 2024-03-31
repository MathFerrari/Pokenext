"use client"

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className='bg-black text-white flex flex-col md:flex-row pt-16 md:pt-4 justify-evenly p-4'>
            <div className='flex items-center justify-center text-3xl '>
                <Image src="/pokeball.png" width="30" height="30" alt='Poke ' className='mr-3'/>
                PokeNEXT
            </div>
            <ul className='flex items-center justify-center pt-16 pb-8 md:pt-7 md:pb-7'>
                <li className='flex items-center transition ease-in delay-75 border-b-2 border-transparent hover:border-b-2 hover:border-b-white pb-3 text-lg'><Link href="/">Home</Link></li>
                <li className='flex items-center transition ease-in delay-75 ml-10 pb-3 border-b-2 border-transparent hover:border-b-2 hover:border-b-white text-lg'><Link href="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    )
}