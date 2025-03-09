import { useState } from "react";
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function handleSubmit(e, name, email, password, confirmPassword) {
        e.preventDefault();
        if (name === "") {
            toast.error("Name should not be empty.");
        }
        if (email !== "") {
            if (!email.includes("@")) {
                toast.error("Email should be a valid email address.");
            }
        }
        if (password < 8) {
            toast.error("Password should be at least 8 characters long.");
        }
        if (password !== confirmPassword) {
            toast.error("Confirm Password should match the Password field.");
        }
    }

    function handleReset() {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
    return (
        <div className="h-96 w-full bg-[#13BD9C]/20 transition delay-200 hover:bg-[#13BD9C]/50 border border-[#13BD9C] flex flex-col items-center justify-center p-10 rounded-xl">
            <div className="w-full flex flex-col">
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, color: "#ffffff", textShadow: "0 0 20px #112D4E" }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8, duration: 1.8 }}
                    className="text-2xl text-black text-center mb-5">Form
                </motion.span>
                <div>
                    <motion.label
                        initial={{ x: -50, opacity: 0, backgroundColor: "#387478" }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, backgroundColor: "#13BD9C" }}
                        transition={{ delay: 0.2, duration: 0.5, x: { duration: 1.8 } }}
                        htmlFor="modal-1"
                        className="block md:hidden btn modal-button h-auto p-5 w-full">Form Handling and Validation
                    </motion.label>
                    <motion.label
                        initial={{ y: 100, opacity: 0, backgroundColor: "#387478" }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, backgroundColor: "#13BD9C" }}
                        transition={{ delay: 0.2, duration: 0.5, y: { duration: 1.8 } }}
                        htmlFor="modal-1"
                        className="hidden md:block btn modal-button h-auto p-5 w-full">Form Handling and Validation
                    </motion.label>
                    <input type="checkbox" id="modal-1" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box bg-black/80">
                            <div className="text-white p-4 rounded-lg text-center w-full">
                                <h1 className="text-2xl">Form</h1>
                                <form onSubmit={(e) => handleSubmit(e, name, email, password, confirmPassword)} className="flex flex-col items-center space-y-4">
                                    <input type="text" placeholder="Name" className="w-full p-2 rounded-lg border border-gray-400 mt-4"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                    />
                                    <input type="email" placeholder="Email" className="w-full p-2 rounded-lg border border-gray-400 mt-4"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                    />
                                    <input type="password" placeholder="Password" className="w-full p-2 rounded-lg border border-gray-400 mt-4"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                    />
                                    <input type="password" placeholder="Confirm Password" className="w-full p-2 rounded-lg border border-gray-400 mt-4"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        value={confirmPassword}
                                    />
                                    <button className="bg-blue-500/80 w-full text-white px-4 py-2 rounded-lg mt-4">Submit</button>
                                </form>
                                <div className="modal-action">
                                    <label onClick={handleReset} htmlFor="modal-1" className="btn bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors absolute top-1 right-1">
                                        X
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}