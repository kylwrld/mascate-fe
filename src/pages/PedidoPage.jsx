import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PedidoColumn from "../components/PedidoColumn";
import { toast } from "react-toastify";

function PedidoPage() {
    const { id } = useParams();
    const { state } = useLocation();
    const [pedido, setPedido] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (state === null) {
            const fetchPedido = async () => {
                try {
                    const res = await fetch(
                        `https://mascate-be.onrender.com/api/pedido/${id}/`
                    );
                    const data = await res.json();
                    setPedido(data.pedido);
                } catch (error) {
                    console.error(error);
                } finally {
                    setLoading(false);
                }
            };
            fetchPedido();
        } else {
            setPedido(state.pedidoData);
        }
    }, []);

    async function handleEntregue(e) {
        try {
            const res = await fetch(
                `https://mascate-be.onrender.com/api/pedido/${id}/`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({status: "ENTREGUE"}),
                }
            );
            const data = await res.json();

            if (res.ok) {
                toast.success("Mudança feita com sucesso.")
            }
        } catch (error) {
            console.error(error);
        }

        return;
    }

    return (
        <div className="flex flex-col h-full">
            <div>
                <div className="flex justify-between items-center flex-wrap gap-5 h-20 px-8 border-b border-neutral-700">
                    <p className="text-white text-lg sm:text-3xl font-mulish font-bold hidden navwrap:block">
                        {`Pedido ${id}`}
                    </p>
                    <div className="flex flex-row justify-between gap-3">
                        {/* <button className="bg-orange-500 text-white px-4 py-2 rounded-full">Marcar como finalizado</ */}
                        <button
                            className="bg-orange-500 text-xs sm:text-base text-white font-mulish px-4 py-2 rounded-full
                                           hover:scale-110 active:scale-100 transition ease-in-out duration-300"
                            onClick={handleEntregue}
                        >
                            Marcar como entregue
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full gap-5 overflow-y-auto">
                <div className="flex">
                    <div className="flex justify-center items-center flex-wrap grid grid-cols-3 gap-5 w-full h-16 px-4 lg:px-5 border-b border-neutral-700">
                        <p className="text-white text-center text-[9px] small:text-xs navwrap:text-lg sm:text-xl md:text-2xl font-bold">
                            NOME
                        </p>
                        <p className="text-white text-center text-[9px] small:text-xs navwrap:text-lg sm:text-xl md:text-2xl font-bold">
                            QUANTIDADE
                        </p>
                        <p className="text-white text-center text-[9px] small:text-xs navwrap:text-lg sm:text-xl md:text-2xl font-bold">
                            CÓDIGO
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 p-4 pt-0 overflow-y-auto">
                    {pedido
                        ? pedido.pedidoscomida.map((comida, index) => {
                              return <PedidoColumn data={comida} key={index} />;
                          })
                        : ""}
                </div>

                {/* <div className="flex flex-row bg-neutral-700 rounded-lg w-fit h-fit gap-10 p-12">
                    <div className="flex items-start flex-col">
                        <p className="text-white font-inter font-bold">Nome</p>
                        <div className="flex grow justify-center items-center">
                            <p className="text-white font-inter">Coxinha de Frango</p>

                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white font-inter font-bold">Quantidade</p>
                        <div className="flex grow justify-center items-center">
                            <p className="text-white font-inter">22</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-white font-inter font-bold">Código</p>
                        <div className="flex grow justify-center items-center">
                            <p className="text-white font-inter">1</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default PedidoPage;
