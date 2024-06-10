import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInfoCircle, FaAlignRight } from "react-icons/fa";
import Pedido from "../components/Pedido";
import { toast } from "react-toastify";

import Switch from "@mui/material/Switch";

function PedidosPage() {
    const [pedidosList, setPedidoList] = useState([]);
    const [loading, setLoading] = useState(true);


    let date = new Date
    date.setTime(Date.parse("2024-06-09T10:04:51"));

    var options = {
        weekday: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };

    console.log(new Intl.DateTimeFormat('pt-BR', options).format(date));

    useEffect(() => {
        const fetchPedidos = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/pedidocomida/");
                const data = await res.json();
                setPedidoList(data.data);
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
                <div className="flex justify-between items-center flex-wrap h-48 md:h-32 lg:h-20 px-8 border-b border-neutral-700">
                    <p className="text-white text-3xl font-mulish font-bold">
                        Pedidos da tarde
                    </p>

                    <div className="flex justify-center md:justify-start items-center gap-2 border rounded-full px-4 py-2">
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
            <div className="flex flex-wrap gap-16 p-8 overflow-y-auto">
                <Pedido id={1}></Pedido>
                <Pedido id={2}></Pedido>
            </div>
        </div>
    );
}

export default PedidosPage;
