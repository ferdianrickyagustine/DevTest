import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import Form from "../components/Form";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

export default function HomePage() {
    const [todos, setTodos] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const DevTest = ["D", "e", "v", " ", "T", "e", "s", "t"];
    
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
            className="bg-white min-h-screen w-full flex flex-col items-center justify-center">
            {isLoading ? (
                <div className="col-span-3 flex justify-center items-center relative z-10">
                    <Loading />
                </div>
            ) : (
                <motion.div
                    className="w-full h-screen justify-center items-center flex text-black text-4xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.8 }}
                >
                    {DevTest.map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ y: -300, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            whileHover={{
                                rotate: -20
                            }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.5,
                                y: { duration: 1.8 },
                                rotate: { duration: 0.3 }
                            }}
                            className="text-4xl font-bold p-1 hover:text-[#ff2994]">{letter}
                        </motion.span>
                    ))}
                </motion.div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 md:gap-20 min-h-screen bg-gray-700 min-w-full p-10">
                <div className="w-full flex flex-col">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, color: "#ffffff", textShadow: "0 0 20px #112D4E" }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.8, duration: 1.8 }}
                        className="text-2xl text-black text-center mb-5">Counter
                    </motion.span>
                    <Counter />
                </div>
                <div className="w-full flex flex-col">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, color: "#ffffff", textShadow: "0 0 20px #112D4E" }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.8, duration: 1.8 }}
                        className="text-2xl text-black text-center mb-5">Form
                    </motion.span>
                    <Form />
                </div>
                <div className="w-full flex flex-col">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, color: "#ffffff", textShadow: "0 0 20px #112D4E" }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.8, duration: 1.8 }}
                        className="text-2xl text-black text-center mb-5">Fetch
                    </motion.span>
                    <motion.div
                        className="block md:hidden text-white bg-[#181d23] rounded-lg p-5 text-center w-full overflow-hidden"
                        initial={{ x: -300, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, backgroundColor: "#ff2994", border: "2px solid #181d23" }}
                        transition={{ delay: 0.1, duration: 0.5, x: { duration: 1.8 } }}>
                        title: {todos.title}
                    </motion.div>
                    <motion.div
                        className="hidden md:block text-white bg-[#181d23] rounded-lg p-5 text-center w-full overflow-hidden"
                        initial={{ x: 200, y: 100, opacity: 0 }}
                        whileInView={{ x: 0, y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, backgroundColor: "#ff2994", border: "1px solid #181d23" }}
                        transition={{ delay: 0.2, duration: 0.5, y: { duration: 1.8 }, x: { duration: 1.8 } }}>
                        Title: {todos.title}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}