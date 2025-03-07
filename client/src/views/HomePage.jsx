import { useEffect, useState } from "react";
import Counter from "../components/Counter";
import Form from "../components/Form";

export default function HomePage() {
    const [todos, setTodos] = useState({});

    async function todo() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json();
        setTodos(data);
    }

    useEffect(() => {
        todo();
    }, []);

    return (
        <div className="bg-gray-200 min-h-screen w-full flex items-center justify-center p-4">

            <div className="flex flex-col items-center gap-4">
                <Counter />
                <Form />
                <div className="text-black">
                   {todos.title}
                </div>
            </div>

        </div>
    );
}