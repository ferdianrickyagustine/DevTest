import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
    const [selected, setSelected] = useState("Home");

    return (
        <nav className="sticky top-0 bg-gray-800 p-8 z-50">
            <div className="container mx-auto flex justify-center items-center">
                <ul className="flex space-x-20">
                    <li>
                        <Link to="/" onClick={() => setSelected("Home")} className={selected === "Home" ? "text-white bg-red-500/70 p-2 rounded-md" : "text-white hover:bg-red-500/70 delay-150 duration-300 ease-in-out p-2 rounded-md"}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setSelected("About")} className={selected === "About" ? "text-white bg-red-500/70 p-2 rounded-md" : "text-white hover:bg-red-500/70 delay-150 duration-300 ease-in-out p-2 rounded-md"}>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}