import { motion } from "framer-motion";

export default function Todo({ todos }) {

    return (
        <div className="h-96 w-full bg-[#13BD9C]/20 transition delay-200 hover:bg-[#13BD9C]/50 border border-[#13BD9C] flex flex-col items-center justify-center p-10 rounded-xl">
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
                    initial={{ x: -300, opacity: 0, backgroundColor: "#387478" }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, backgroundColor: "#13BD9C", border: "2px solid #181d23" }}
                    transition={{ delay: 0.1, duration: 0.5, x: { duration: 1.8 } }}>
                    Title: {todos.title}
                </motion.div>
                <motion.div
                    className="hidden md:block text-white bg-[#181d23] rounded-lg p-5 text-center w-full overflow-hidden"
                    initial={{ y: 100, opacity: 0, backgroundColor: "#387478" }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, backgroundColor: "#13BD9C", border: "1px solid #181d23" }}
                    transition={{ delay: 0.2, duration: 0.5, y: { duration: 1.8 } }}>
                    Title: {todos.title}
                </motion.div>
            </div>
        </div>
    )
}