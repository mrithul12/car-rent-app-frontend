import { ShoppingCart } from "lucide-react";
import React from "react";

const CartEmptyDisplay = () => {
    return (
        <div className="w-full h-[30vh] flex justify-center items-center">
            <span className="flex flex-col items-center">
                <ShoppingCart className="h-[50%] w-[50%]" />{" "}
                <p className="font-bold">Your Cart is Empty...</p>
            </span>
        </div>
    );
};

export default CartEmptyDisplay;
