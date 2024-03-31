"use client"

import Image from 'next/image'
import { useSearchParams, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const getPokemon = async (pokeId: { id: string }) => {
    const { id } = pokeId
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return data
}

export default function Pokemon({ params }: { params: { id: string } }) {
    const { id } = params
    const [pokemon, setPokemon] = useState({} as any)

    useEffect(() => {
        getPokemon({ id }).then(data => {
            setPokemon(data)
        })
    }, [id])

    return (
        <>
            <div className='flex justify-center mt-4 h-[80vh] items-center'>
                <div className=''>
                    <h2 className='font-bold uppercase text-center text-4xl bg-zinc-800 text-white p-4 rounded-md '>#{pokemon.id} - {pokemon.name && pokemon.name.toUpperCase()}</h2>
                    <div className='w-80 h-80 relative'>
                        <Image
                            src={`/pokeImages/poke_${pokemon.id}.gif`}
                            alt={pokemon.name}
                            fill
                            className='absolute top-0 left-0 w-full h-full object-contain'
                        />
                    </div>
                    <div className='flex flex-col text-center text-xl mt-8'>

                        <p className='p-[0.3rem]'><span className='font-bold'>Altura:</span> {pokemon.height / 10} m</p>
                        <p className='p-[0.3rem]'><span className='font-bold'>Peso:</span> {pokemon.weight / 10} kg</p>
                        <p className='p-[0.3rem]'><span className='font-bold'>Tipo:</span></p>
                            {pokemon.types && pokemon.types.map((item: any) => (
                                <span key={item.type.id} className={`m-2 uppercase p-2 rounded-md text-zinc-100 text-base border-2 border-zinc-200 shadow-md
                                ${item.type.name === 'normal' ? 'bg-[#a8a878]' : null ||
                                item.type.name === 'fire' ? 'bg-[#f05030]' : null ||
                                item.type.name === 'water' ? 'bg-[#6890f0]' : null ||
                                item.type.name === 'grass' ? 'bg-[#78c850]' : null ||
                                item.type.name === 'flying' ? 'bg-[#a890f0]' : null ||
                                item.type.name === 'fighting' ? 'bg-[#903028]' : null ||
                                item.type.name === 'electric' ? 'bg-[#f8d030]' : null ||
                                item.type.name === 'poison' ? 'bg-[#a040a0]' : null ||
                                item.type.name === 'ground' ? 'bg-[#e0c068]' : null ||
                                item.type.name === 'rock' ? 'bg-[#b8a038]' : null ||
                                item.type.name === 'psychic' ? 'bg-[#f85888]' : null ||
                                item.type.name === 'ice' ? 'bg-[#98d8d8]' : null ||
                                item.type.name === 'bug' ? 'bg-[#a8b820]' : null ||
                                item.type.name === 'ghost' ? 'bg-[#705898]' : null ||
                                item.type.name === 'steel' ? 'bg-[#b8b8d0]' : null ||
                                item.type.name === 'dragon' ? 'bg-[#7038f8]' : null ||
                                item.type.name === 'dark' ? 'bg-[#705848]' : null ||
                                item.type.name === 'fairy' ? 'bg-[#f0b6bc]' : null}`}> 
                                {item.type.name}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}