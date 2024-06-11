import React, { useEffect, useState } from "react";
import Pedido from "../components/Pedido";
import Switch from "@mui/material/Switch";
import { SyncLoader } from "react-spinners";

function PedidosPage() {
    const [pedidosList, setPedidoList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const res = await fetch("https://mascate-be.onrender.com/api/pedidocomida/");
                const data = await res.json();
                setPedidoList(data.pedidos);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }

        };

        fetchPedidos();
    }, []);

    return (
        <div className="flex flex-col h-full">
            <div>
                {/* h-48 md:h-32 lg:h-20 */}
                <div className="flex justify-between items-center flex-wrap h-20 px-8 border-b border-neutral-700">
                    <p className="text-white text-3xl font-mulish font-bold">
                        Pedidos
                    </p>

                    <div className="hidden flex justify-center md:justify-start items-center gap-2 border rounded-full px-4 py-2">
                        <p className="font-mulish text-white text-md pr-2">
                            Mostrar pedidos finalizados.
                        </p>
                        <div className="border-l">

                            <Switch
                                size="small"
                                defaultChecked
                                sx={{
                                    ".MuiSwitch-track": {
                                        backgroundColor: "white",
                                    },
                                    "& .MuiSwitch-switchBase.Mui-checked": {
                                        color: "#f97316",
                                    },
                                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                                        {
                                            backgroundColor: "#f97316",
                                        },
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-10 2xl:gap-16 p-8 overflow-y-auto">
                {loading ? (
                    <div className="flex justify-center items-center grow">
                        <SyncLoader
                            size={50}
                            color="#ffffff"
                            loading={loading}
                        />
                    </div>
                ) : (
                    pedidosList.map((pedido, index) => {
                        return (
                            <Pedido pedidoData={pedido} key={index}/>
                        )
                    })
                )}
                
                {/* <Pedido id={1}></Pedido>
                <Pedido id={2}></Pedido> */}
            </div>
        </div>
    );
}

export default PedidosPage;
