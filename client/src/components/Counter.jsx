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
        <div className="h-96 w-full bg-[#13BD9C]/20 transition delay-200 hover:bg-[#13BD9C]/50 border border-[#13BD9C] flex flex-col items-center justify-center p-10 rounded-xl">
            <div className="w-full flex flex-col">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, color: "#ffffff", textShadow: "0 0 20px #112D4E" }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8, duration: 1.8 }}
                    className="text-2xl text-black text-center mb-5">Counter
                </motion.span>
                <div>
                    <motion.label
                        initial={{ x: -50, opacity: 0, backgroundColor: "#387478" }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, backgroundColor: "#13BD9C" }}
                        transition={{ delay: 0.2, duration: 0.5, x: { duration: 1.8 } }}
                        htmlFor="my_modal_7"
                        className="block md:hidden btn h-auto w-full p-5">Component Creation and State Management
                    </motion.label>
                    <motion.label
                        initial={{ y: 100, opacity: 0, backgroundColor: "#387478" }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, backgroundColor: "#13BD9C" }}
                        transition={{ delay: 0.2, duration: 0.5, y: { duration: 1.8 } }}
                        htmlFor="my_modal_7"
                        className="hidden md:block btn h-auto w-full p-5">Component Creation and State Management
                    </motion.label>
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
            </div>
        </div>
    )
}