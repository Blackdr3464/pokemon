import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Modal from './Modal';

const Container = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(20);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showUp, setShowUp] = useState(false);

    const [data, setData] = useState();

    const getPokemons = async () => {
        setLoading(true);
        const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        );
        res.data.results.forEach(async (pokemons) => {
            const poke = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${pokemons.name}`
            );
            setPokemons((prev) => [...prev, poke.data]);
            setLoading(false);
        });
    };

    useEffect(() => {
        getPokemons();
    }, [offset]);

    const handleClick = (pokemon) => {
        setShowModal(true);
        setData(pokemon);
    };

    const handleLoadMore = () => {
        setOffset((prev) => prev + 20);
        setLoading(true);
    };

    const handleShowClick = () => {
        setShowModal(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            scrollY > 400 ? setShowUp(true) : setShowUp(false);
        });
    }, []);

    const handleUp = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='pt-20 px-12 py-7 relative'>
            <Header />
            {showUp && (
                <div
                    onClick={handleUp}
                    className='w-10 h-10 rounded-full bg-overlay fixed bottom-3 right-1 flex items-center justify-center cursor-pointer text-white text-xs'
                >
                    Up
                </div>
            )}
            <ul className='flex items-center justify-center text-base text-white'>
                <li className='px-7 py-2 bg-teal-700 hover:bg-teal-500'>Hỏa</li>
                <li className='px-7 py-2 bg-teal-700 hover:bg-teal-500'>Thổ</li>
                <li className='px-7 py-2 bg-teal-700 hover:bg-teal-500'>Kim</li>
                <li className='px-7 py-2 bg-teal-700 hover:bg-teal-500'>
                    Thủy
                </li>
                <li className='px-3 py-2 bg-teal-700 hover:bg-teal-500'>Mộc</li>
            </ul>

            <ul className='grid md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-3 mt-7 '>
                {pokemons.map((pokemon) => (
                    <li
                        key={pokemon.id}
                        onClick={() => handleClick(pokemon)}
                        className='h-24 bg-teal-800 rounded p-2 hover:bg-teal-500 flex flex-col items-center justify-center'
                    >
                        <img
                            src={pokemon.sprites.back_default}
                            alt='avt'
                            className='w-16 object-cover'
                        />
                        <p className='text-white text-xs'>{pokemon.name}</p>
                    </li>
                ))}
            </ul>

            <button
                onClick={handleLoadMore}
                className='px-6 py-2 bg-teal-600 rounded mt-7 flex mx-auto hover:bg-teal-500'
            >
                {loading ? 'Loading...' : 'Load more'}
            </button>
            {showModal && <Modal onShowClick={handleShowClick} data={data} />}
        </div>
    );
};

export default Container;
