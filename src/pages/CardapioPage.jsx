import React, { useEffect, useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import CardapioCard from "../components/CardapioCard";
import { ClipLoader } from "react-spinners";

function CardapioPage({ createOrder }) {
    const [comidas, setComidas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pedidoList, setPedidoList] = useState([]);

    useEffect(() => {
        const fetchComidas = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/comida/");
                const data = await res.json();
                setComidas(data.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchComidas();
    }, []);

    function handleCheckboxChange(e, quantity) {
        if (e.target.checked) {
            let newData = {};
            newData["identificador_nome"] = e.target.ariaLabel;
            newData["quantidade"] = parseInt(quantity);

            setPedidoList([...pedidoList, newData]);
            e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove(
                "invalid"
            );
        } else {
            let data = [...pedidoList];
            data = data.filter((item) => {
                const name = item["identificador_nome"];

                if (name !== e.target.ariaLabel) {
                    return item;
                }
            });

            setPedidoList(data);
        }
    }

    function handleQuantityChange(e, identifier) {
        let data = [...pedidoList];
        data = data.map((item) => {
            const name = item["identificador_nome"];

            if (name == identifier) {
                item["quantidade"] = parseInt(e.target.value);
                return item;
            }
            return item;
        });
        setPedidoList(data);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (pedidoList.length == 0) {
            e.target.classList.add("invalid");
            return;
        }

        const order = {
            comidas: pedidoList,
        };

        createOrder(order);
    }

    return (
        <form className="flex flex-col h-full group" onSubmit={handleSubmit}>
            <div className="flex justify-start items-center gap-5 h-20 px-8 border-b border-neutral-700">
                <button
                    className="px-4 py-2 bg-orange-500 text-white text-md font-mulish rounded-full
                                hover:scale-110 active:scale-100 transition ease-in-out duration-300"
                    type="submit"
                >
                    Fazer pedido
                </button>
                <p className="text-white hidden group-[.invalid]:block font-mulish">
                    Não envie um pedido vazio.
                </p>
            </div>
            <div className="flex flex-wrap gap-16 p-4">
                {loading ? (
                    <div className="flex justify-center items-center grow">
                        <ClipLoader
                            size={230}
                            color="#ffffff"
                            loading={loading}
                        />
                    </div>
                ) : (
                    comidas.map((comida, index) => {
                        return (
                            <CardapioCard
                                name={comida.nome}
                                identifier={comida.identificador_nome}
                                handleOnChange={handleCheckboxChange}
                                handleQuantityChange={handleQuantityChange}
                                key={index}
                            />
                        );
                    })
                )}
            </div>
        </form>
    );
}

export default CardapioPage;
