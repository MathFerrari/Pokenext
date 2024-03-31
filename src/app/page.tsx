"use client"

import Card from '../components/Card'

import { useEffect, useState } from 'react';

async function getData() {
    const maxPokemons = 50;
    const api = `https://pokeapi.co/api/v2/pokemon/`;

    const res = await fetch(`${api}?limit=${maxPokemons}`);
    const data = await res.json();

    // add pokemon index
    data.results.forEach((item: any, index: number) => {
        item.id = index + 1;
    });

    return data.results;
}


export default function Home() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const data = await getData();
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1 className='font-bold text-5xl text-center mt-20'>Poke<span className='text-red-500'>LIST</span></h1>
            <p className='text-lg text-center mb-12'>Lista de pokemons</p>
            <div className='grid grid-cols-1 place-items-center items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-4 mr-12 ml-12 mb-12'>
                {data.map((pokemon: any) => (
                    <Card key={pokemon.id} name={pokemon.name} id={pokemon.id} />
                ))}
            </div>
        </>
    )
}