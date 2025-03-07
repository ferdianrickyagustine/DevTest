import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import Form from "../components/Form";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

export default function HomePage() {
    const [todos, setTodos] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    async function todo() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 300);
        }
    }

    useEffect(() => {
        todo();
    }, []);

    return (
        <motion.div
            animate={{ opacity: 1, backgroundColor: ["#CBF1F5", "#A6E3E9", "#71C9CE", "#A6E3E9", "#CBF1F5"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="bg-white min-h-screen w-full flex items-center justify-center p-4">

            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 md:gap-20">

                {isLoading ? (
                    <div className="col-span-3 flex justify-center items-center relative z-10">
                        <Loading />
                    </div>
                ) : (
                    <>
                        <div className="w-full flex flex-col">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, color: "#112D4E", textShadow: "0 0 20px #112D4E" }}
                                transition={{ delay: 1.8, duration: 1.8 }}
                                className="text-2xl text-black text-center mb-5">Counter
                            </motion.span>
                            <Counter />
                        </div>
                        <div className="w-full flex flex-col">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, color: "#112D4E", textShadow: "0 0 20px #112D4E" }}
                                transition={{ delay: 1.8, duration: 1.8 }}
                                className="text-2xl text-black text-center mb-5">Form
                            </motion.span>
                            <Form />
                        </div>
                        <div className="w-full flex flex-col">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, color: "#112D4E", textShadow: "0 0 20px #112D4E" }}
                                transition={{ delay: 1.8, duration: 1.8 }}
                                className="text-2xl text-black text-center mb-5">Fetch
                            </motion.span>
                            <motion.div 
                                className="block md:hidden text-white bg-[#181d23] rounded-lg p-5 text-center w-full overflow-hidden" 
                                initial={{ x: -300 }} 
                                animate={{ x: 0 }} 
                                whileHover={{ scale: 1.1, backgroundColor: "#ff2994" }} 
                                transition={{ duration: 0.5, x: { duration: 1.8 } }}>
                                title: {todos.title}
                            </motion.div>
                            <motion.div 
                                className="hidden md:block text-white bg-[#181d23] rounded-lg p-5 text-center w-full overflow-hidden" 
                                initial={{ x: 200, y: 100 }} 
                                animate={{ x: 0, y: 0 }} 
                                whileHover={{ scale: 1.1, backgroundColor: "#ff2994" }} 
                                transition={{ duration: 0.5, y: { duration: 1.8 }, x: { duration: 1.8 } }}>
                                title: {todos.title}
                            </motion.div>
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    );
}