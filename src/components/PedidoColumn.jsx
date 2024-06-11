import React from "react";

function PedidoColumn({ data }) {

    return (
        <div className="flex grow justify-center items-center grid grid-cols-3 bg-neutral-700 rounded-lg p-4 gap-5">
            <p className="font-mulish text-white text-center text-[9px] small:text-xs navwrap:text-lg sm:text-xl md:text-2xl">
                {data.nome}
            </p>
            <p className="text-white text-center text-[9px] small:text-xs navwrap:text-lg sm:text-xl md:text-2xl">
                {data.quantidade}
            </p>
            <p className="text-white text-center text-[9px] small:text-xs navwrap:text-lg sm:text-xl md:text-2xl">
                {data.comida_id}
            </p>
        </div>
    );
}

export default PedidoColumn;
