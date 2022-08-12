import React from 'react';

const Modal = ({ onShowClick, data }) => {
    const handleClickShow = () => {
        onShowClick();
    };

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 bg-overlay'>
            <div className='w-[400px] h-[300px] bg-teal-700 mt-[50vh] ml-[50%] -translate-y-2/4 -translate-x-2/4 rounded relative'>
                <button
                    onClick={handleClickShow}
                    className='absolute right-0 top-0 cursor-pointer px-3 py-1 text-white'
                >
                    x
                </button>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className='flex items-center justify-center'>
                        <img src={data.sprites.back_default} alt={data.name} />
                        <img src={data.sprites.front_default} alt={data.name} />
                        <img src={data.sprites.back_shiny} alt={data.name} />
                        <img src={data.sprites.front_shiny} alt={data.name} />
                    </div>
                    <p className='text-lg text-white font-semibold uppercase'>
                        {data.name}
                    </p>
                    <div className='flex justify-between gap-20 text-white text-base'>
                        <p>Height: {data.height}</p>
                        <p>Weight: {data.weight}</p>
                    </div>
                    <div className='text-white flex flex-col justify-center'>
                        <h1 className='text-center'>Abilities</h1>
                        {data.abilities.map((item, idx) => (
                            <div
                                key={idx}
                                className='flex items-center justify-between gap-5'
                            >
                                <p>{item.ability.name}</p>
                                <p>Slot: {item.slot}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
