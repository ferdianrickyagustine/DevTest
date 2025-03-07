import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

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
        <div>
            <label htmlFor="modal-1" className="btn modal-button">Form Handling and Validation</label>
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
    )
}