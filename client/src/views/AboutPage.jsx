import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
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
        <motion.div
          className="max-w-sm max-h-sm flex flex-col justify-center items-center bg-black/50 border border-[#13BD9C] rounded-lg p-20 text-white/90 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
        >
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="mb-4 select-none">
            <img src="https://ik.imagekit.io/matguchi18/fer.jpg" alt="" className="w-48 h-48 rounded-full border-2 border-black pointer-events-none" />
          </motion.div>
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4"
          >
            About
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-center max-w-2xl"
          >
            My name is Ferdian Ricky Agustine
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
}