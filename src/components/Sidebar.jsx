import React from "react";
import { NavLink } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

import { FiCoffee } from "react-icons/fi";
import { TbFileReport } from "react-icons/tb";
import { BiFoodMenu } from "react-icons/bi";

function Sidebar() {
    return (
        <div className="w-20 md:w-64 border-r border-zinc-700">
            <div className="flex flex-col md:pl-8 pt-8 md:items-start *:text-2xl *:font-mulish *:font-bold gap-14">
                

                    <NavLink
                        to="/pedidos"
                        className={({ isActive }) =>
                            isActive
                        ? "active flex justify-center items-center gap-3 rounded-full md:bg-neutral-700 text-orange-500 md:px-4 py-2 transition ease-in-out duration-300 peer"
                        : "flex justify-center items-center gap-3 text-white hover:text-orange-500 transition ease-in-out duration-300 peer"
                    }
                    >
                        <FiCoffee></FiCoffee>

                        <p className="hidden md:block">Pedidos</p>
                    </NavLink>
                    {/* <div className="flex justify-center items-center text-xl text-white opacity-0 peer-[.active]:opacity-100 transition duration-300">
                        <FaAngleLeft/>
                    </div> */}
                    

                <NavLink
                    to="/cardapio"
                    className={({ isActive }) =>
                        isActive
                            ? "flex justify-center items-center rounded-full gap-3 md:bg-neutral-700 text-orange-500 md:px-4 py-2 transition ease-in-out duration-300"
                            : "flex justify-center items-center gap-3 text-white hover:text-orange-500 transition ease-in-out duration-300"
                    }
                >
                    <BiFoodMenu></BiFoodMenu>
                    <p className="hidden md:block">Cardápio</p>
                </NavLink>
                <NavLink
                    to="/relatorio"
                    className={({ isActive }) =>
                        isActive
                            ? "flex justify-center items-center rounded-full gap-3 md:bg-neutral-700 text-orange-500 md:px-4 py-2 transition ease-in-out duration-300"
                            : "flex justify-center items-center gap-3 text-white hover:text-orange-500 transition ease-in-out duration-300"
                    }
                >
                    <TbFileReport></TbFileReport>

                    <p className="hidden md:block">Relatório</p>
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;
