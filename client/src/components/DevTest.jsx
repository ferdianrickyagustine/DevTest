import { motion } from "framer-motion"

export default function DevTest() {
    const DevTest = ["D", "e", "v", " ", "T", "e", "s", "t"];

    return (
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
                    className="text-4xl text-white/80 font-bold p-1 hover:text-[#13BD9C]">{letter}
                </motion.span>
            ))}
        </motion.div>
    )
}