import { motion } from "framer-motion";
import KeseruanKelas from "@/components/goodbye/KeseruanKelas"
import keseruankelas from "@/data/keseruankelas"

export default function Goodbye() {
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
    <div className="mt-64 mb-64 justify-center items-center">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h1 className="text-2xl text-center">
          Selamat, Siswa <span className="font-bold">SMP IT Gita Wirabangsa</span> Angkatan Ke 6{" "}
        </h1>
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <h1 className="text-4xl text-center font-bold">Atas Kelulusannya!</h1>
      </motion.div>
      
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <h1 className="text-center mt-5">XI B | VI Generation OF GWB</h1>
      </motion.div>
    </div>
      <div className="">
        <h1 className="text-center font-bold text-2xl">Keseruan Bersama</h1>
        <KeseruanKelas images={keseruankelas.images}/>
      </div>
    </div>
  );
}
