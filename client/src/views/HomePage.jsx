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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-gray-200 min-h-screen w-full flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-4">
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Counter />
                        <Form />
                        <div className="text-black">
                            {todos.title}
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    );
}