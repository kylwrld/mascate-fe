import React from "react";
import { useNavigate } from "react-router-dom";
// import moment from 'moment';
// import 'moment/dist/locale/pt-BR';

function Pedido({ pedidoData }) {
    const navigate = useNavigate();
    
    let time = pedidoData.data
    let index = time.indexOf(".")
    time = time.slice(0, index)
    
    let date = new Date
    date.setTime(Date.parse(time));
    
    var options = {
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        weekday:"long"
    };

    const color = pedidoData.status == "PENDENTE" ? "text-yellow-500" : "text-green-500" 
    const text = pedidoData.status == "PENDENTE" ? "Pendente" : "Entregue" 

    return (
        <div
            className="flex flex-col w-80 h-96 border border-neutral-700 rounded-md p-4 shadow-[0_15px_20px_-15px_rgba(0,0,0,0.3)] shadow-black
                    hover:scale-105 transition ease-in-out duration-300"
            onClick={(e) => {return navigate(`/pedido/${pedidoData.id}`, { state: {pedidoData} })}}
        >
            <div className="flex flex-col grow border-b border-neutral-700">
                <div className="flex grow justify-center items-center bg-zinc-800 rounded-md">
                    <p className={`${color} text-md md:text-4xl font-bold`}>
                        {text}
                    </p>
                </div>
                <p className='text-white text-2xl font-bold py-2'>{`Pedido ${pedidoData.id}`}</p>
            </div>
            <div className="flex flex-col pt-2">
                <p className="text-neutral-500">Data do pedido: </p>
                <p className="text-white">{new Intl.DateTimeFormat('pt-BR', options).format(date)}</p>
                {/* <p className="text-white">{fromNow}</p> */}
            </div>
        </div>
    );
}

export default Pedido;
