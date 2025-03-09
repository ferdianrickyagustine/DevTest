import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import Form from "../components/Form";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import Todo from "../components/Todo";
import DevTest from "../components/DevTest";

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
            animate={{ opacity: 1, backgroundColor: ["#243642", "#387478", "#387478", "#243642"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="bg-white min-h-screen w-full flex flex-col items-center justify-center">
            {isLoading ? (
                <div className="col-span-3 flex justify-center items-center relative z-10">
                    <Loading />
                </div>
            ) : (
                <DevTest />
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5 md:gap-20 min-h-screen bg-[#0C1325] min-w-full p-10">
                <Counter />
                <Form />
                <Todo todos={todos} />
            </div>
        </motion.div>
    );
}