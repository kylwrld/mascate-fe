import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import PedidosPage from "./pages/PedidosPage";
import CardapioPage from "./pages/CardapioPage";
import RelatorioPage from "./pages/RelatorioPage";
import PedidoPage from "./pages/PedidoPage";
import { toast } from "react-toastify";

function App() {
    async function createOrder(orderList) {
        const res = await fetch("https://mascate-be.onrender.com/api/pedidocomida/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderList),
        });
        if (res.ok) {
            toast.success("Pedido feito.")
        }
        return;
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout></MainLayout>}>
                <Route index element={<PedidosPage />} />
                <Route path="/pedido/:id" element={<PedidoPage />} />
                <Route path="/pedidos" element={<PedidosPage />} />
                <Route path="/cardapio" element={<CardapioPage createOrder={createOrder} />} />
                <Route path="/relatorio" element={<RelatorioPage />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
