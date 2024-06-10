import React from "react";
import { useNavigate } from "react-router-dom";

function Pedido({ id }) {
    const navigate = useNavigate();
    
    return (
        <div
            className="flex flex-col w-80 h-96 border border-neutral-700 rounded-md p-4 shadow-[0_15px_20px_-15px_rgba(0,0,0,0.3)] shadow-black
                    hover:scale-105 transition ease-in-out duration-300"
            onClick={(e) => {return navigate(`/pedido/${id}`)}}
        >
            <div className="flex flex-col grow border-b border-neutral-700 pb-4">
                <div className="flex grow justify-center items-center bg-zinc-800 rounded-md">
                    <p className="text-green-500 text-md md:text-4xl font-bold">
                        Finalizado
                    </p>
                </div>
                {/* <p className='text-white text-2xl font-bold py-2'>Dia da semana</p> */}
            </div>
            <div className="flex flex-col pt-4">
                <p className="text-neutral-500">Horário do pedido: </p>
                <p className="text-white">17:30PM 05/04/2024</p>
            </div>
        </div>
    );
}

export default Pedido;
