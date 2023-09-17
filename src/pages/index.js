import { motion } from "framer-motion";

import Stopwatch from "@/components/goodbye/Stopwatch"

import MomentPerpisahan from "@/components/goodbye/MomentPerpisahan"
import momentperpisahan from "@/data/momentperpisahan"

import KeseruanKelas from "@/components/goodbye/KeseruanKelas"
import keseruankelas from "@/data/keseruankelas"

import AfterLulus from "@/components/goodbye/afterLulus"
import afterLulus from "@/data/afterLulus"

import Head from "next/head"
import Image from "next/image"

export default function Home() {
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  
  console.log('HENGKER JANGAN MENYERANG')
  console.log('HENGKER JANGAN MENYERANG')
  
  return (
    <div>
    <Head>
      <title>Perpisahan GWB VI Gen</title>
      <link rel="icon" href="/logo.jpg" />
    </Head>
    <div className="mt-64 mb-64 justify-center items-center">
      
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 1 }}
      >
        <h1 className="text-2xl text-center">
          Selamat, Siswa <span className="font-bold">SMP IT Gita Wirabangsa</span> Kelas IX B{" "}
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
        transition={{ duration: 0.8, delay: 3 }}
      >
      <p  className="text-center">Beberapa Foto Untuk Kenang Kenangan</p>
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 3.5 }}
      >
        <h1 className="text-center mt-5">XI B | VI Generation OF GWB</h1>
        
      </motion.div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 4 }}
        className="mt-2"
      >
        <Stopwatch />
      </motion.div>
    </div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 3 }}
      >
        <h1 className="text-center font-bold text-2xl">Moment Perpisahan</h1>
        <MomentPerpisahan images={momentperpisahan.images}/>
      </motion.div>
      
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 3 }}
      >
        <h1 className="text-center font-bold text-2xl">Keseruan Bersama</h1>
        <KeseruanKelas images={keseruankelas.images}/>
      </motion.div>
      
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 3 }}
      >
        <h1 className="text-center font-bold text-2xl">Setelah Lulus</h1>
        <AfterLulus images={afterLulus.images}/>
      </motion.div>
      
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 3.5 }}
        className="justify-center items-center m-10 flex flex-col"
      >
        <h1 className="text-center m-5 mt-10">Selamat Lulus Kawan, Semoga Di Jenjang Selanjutnya Kita Masih Bisa Bersama</h1>
        <Image src="https://media.discordapp.net/attachments/1106536230763638865/1107178015798087730/IMG-20230414-WA0003.jpg" alt="Foto Bersama" width={150} height={150} className="rounded-md"/>
      </motion.div>
      
      <div className="bg-black flex flex-col justify-center items-center p-10">
        <h4 className="italic text-white">science  2021-2023</h4>
        <p className="mt-4 text-white">Afifah Dan Ilham Selamanya</p>
        <p className="mt-1 text-white">Ekhm Bau Pindang</p>
      </div>
    </div>
  );
}
