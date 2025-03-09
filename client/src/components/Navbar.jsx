import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
    const [selected, setSelected] = useState("Home");

    return (
        <nav className="fixed top-0 w-full p-8 z-50">
            <div className="container mx-auto">

                <ul className="flex w-full justify-between">
                    <li>
                        <Link to="/" onClick={() => setSelected("Home")} className="text-white text-xl">DevTest</Link>
                    </li>
                    <li className="space-x-10">
                        <Link to="/" onClick={() => setSelected("Home")} className={selected === "Home" ? "text-[#13BD9C] font-bold rounded-md" : "text-white hover:text-[#13BD9C] delay-150 duration-300 ease-in-out p-2 rounded-md"}>Home</Link>
                        <Link to="/about" onClick={() => setSelected("About")} className={selected === "About" ? "text-[#13BD9C] font-bold rounded-md" : "text-white hover:text-[#13BD9C] delay-150 duration-300 ease-in-out p-2 rounded-md"}>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}