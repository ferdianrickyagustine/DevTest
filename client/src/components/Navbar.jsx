import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="sticky top-0 bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-2xl">DevTest</Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-white">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}