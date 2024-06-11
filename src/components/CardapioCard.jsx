import React, { useState } from "react";
import {Checkbox} from "@mui/material/Checkbox";

function CardapioCard({name, identifier, handleOnChange, handleQuantityChange}) {
    const [quantity, setQuantity] = useState(0);

    return (
        <div className="flex flex-col justify-center items-start gap-5 w-80 h-32 border border-neutral-700 rounded-lg p-4">
            <p className="text-white font-mulish font-bold">{name}</p>
            <div className="flex justify-between flex-row w-full gap-5">
                <input
                    className="w-full text-sm rounded-full bg-transparent border border-neutral-700 text-white outline-none font-inter px-4 py-2"
                    placeholder="Quantidade"
                    type="number"
                    value={quantity}
                    onChange={(e) => {setQuantity(e.target.value); handleQuantityChange(e, identifier)}}
                    min={0}
                    max={400}
                />
                <Checkbox
                    sx={{
                        color: "white",
                        "&.Mui-checked": {
                            color: "white",
                        },
                    }}
                    inputProps={{ "aria-label": identifier }}
                    onChange={(e) => handleOnChange(e, quantity)}
                />
            </div>

        </div>
    );
}

export default CardapioCard;
