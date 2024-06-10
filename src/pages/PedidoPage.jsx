import React from "react";
import { useParams } from "react-router-dom";



function PedidoPage() {
    const { id } = useParams();
    console.log(id)

    return (
        <div className="flex flex-col h-full">
            <div className="flex justify-between items-center flex-wrap gap-5 h-20 px-8 border-b border-neutral-700">

                
            </div>
        </div>
    );
}

export default PedidoPage;
