import { useState } from "react";
import { motion } from "framer-motion";

export default function Form() {
    const [number, setNumber] = useState(0);

    function incrementCounter() {
        if (number >= 1000) {
            setNumber(1000);
        } else {
            setNumber(number + 1);
        }
    }

    function decrementCounter() {
        if (number <= 0) {
            setNumber(0);
        } else {
            setNumber(number - 1);
        }
    }

    function handleReset() {
        setNumber(0);
    }

    return (
        <div>
            <motion.label initial={{ y: -100 }} animate={{ y: 0 }} whileHover={{ scale: 1.1, backgroundColor: "#ff2994" }} transition={{ duration: 0.5, y: { duration: 2.0 } }} htmlFor="my_modal_7" className="btn">Component Creation and State Management</motion.label>
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box bg-black/80">
                    <div className="text-white p-4 rounded-lg text-center w-full">
                        <h1 className="text-2xl">Counter</h1>
                        <div className="flex justify-center items-center space-x-4">
                            <button onClick={decrementCounter} className="bg-red-500/80 w-56 text-white px-4 py-2 rounded-lg mt-4">
                                <span className="block sm:hidden">-</span>
                                <span className="hidden sm:block">Decrement</span>
                            </button>

                            <p className="inline-block text-2xl mx-4 mt-4">{number}</p>
                            <button onClick={incrementCounter} className="bg-blue-500/80 w-56 text-white px-4 py-2 rounded-lg mt-4">
                                <span className="block sm:hidden">+</span>
                                <span className="hidden sm:block">Increment</span>
                            </button>
                        </div>
                    </div>
                </div>
                <label onClick={handleReset} className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>
        </div>
    )
}