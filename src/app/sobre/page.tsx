import Image from 'next/image';

export default function About() {
    return (
        <div className='h-screen flex flex-col text-center mt-40 items-center '>
            <h1 className='text-4xl'>Sobre o projeto</h1>
            <p className='text-lg mt-2'>PokeNext é um App construído em Next.js para consultar Pokémons.</p>
            <Image
                src="/charizard.png"
                alt="Charizard"
                width="300"
                height="300"
                className='flex justify-center items-center w-[300px] h-[300px] object-contain mx-auto mt-10'
            />
        </div>
    );
}