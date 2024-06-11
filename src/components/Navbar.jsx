
import { NavLink, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";


function Navbar() {

    const navigate = useNavigate();

    return (
        <>
            <nav className="flex px-3 items-center w-full h-32 md:h-16 border-b border-zinc-700 shadow-[0_13px_10px_-15px_rgba(0,0,0,0.3)] shadow-black">
                <div className="flex flex-wrap flex-row justify-center sm:justify-between items-center h-3/4 w-full mx-5">
                    {/* <div className="hidden md:block flex flex-1 items-center justify-start">
                        <img className="w-12 h-12" src={senacIcon} alt="" />
                    </div> */}

                    <div className="flex justify-center md:justify-start">
                        <NavLink
                            to="/"
                            className="text-4xl text-white font-bold font-mulish"
                            >
                                Mascate
                        </NavLink>
                    </div>

                    <div className="flex flex-1 justify-center md:justify-end gap-5">
                        <div className="flex flex-col">
                            <p className="text-green-500 text-right font-varela text-sm">Restaurante aberto</p>
                            <p className="hidden md:block text-white text-right font-varela text-sm">Dentro do horário programado</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <FaCheckCircle className="text-green-500"/>

                        </div>
                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;
