import Image from 'next/image'
import Link from 'next/link'

export default function Card(pokemon: { name: string, id: number }) {
    return (
        <>
            <div className='flex flex-col items-center p-8 shadow-xl border-4 border-red-500 bg-zinc-800 rounded-lg min-w-[250px] min-h-[4=300px]'>
                <div className='relative w-[150px] h-[150px]'>
                <Image
                    src={`/pokeImages/poke_${pokemon.id}.gif`}
                    alt={pokemon.name}
                    fill
                    className='absolute top-0 left-0 w-full h-full object-contain'
                />
                </div>
                <p className='mt-6 text-xl mb-3 font-bold text-white'>#{pokemon.id} - {pokemon.name.toUpperCase()}</p>
                <Link href={`/pokemon/${pokemon.id}`} className='text-center bg-black text-white rounded-2xl border-2 p-2 hover:bg-transparent hover:border-red-500 hover:text-red-500 transition ease-in-out duration-[200ms] hover:scale-105 w-full'>
                    <p>Detalhes</p>
                </Link>
            </div>
        </>
    )
}

