import { motion } from "framer-motion";

import MomentPerpisahan from "@/components/goodbye/MomentPerpisahan"
import momentperpisahan from "@/data/momentperpisahan"

import Jamran from "@/components/goodbye/Jamran"
import jamran from "@/data/jamran"

import HariGuru from "@/components/goodbye/MomentPerpisahan"
import hariguru from "@/data/hariguru"

import KeseruanKelas from "@/components/goodbye/KeseruanKelas"
import keseruankelas from "@/data/keseruankelas"

import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
    <Head>
      <title>Perpisahan GWB VI Gen</title>
      
    </Head>
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
        <link rel="icon" href="/logo.jpg" />
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
        transition={{ duration: 0.8, delay: 3.5 }}
      >
        <h1 className="text-center font-bold text-2xl">Masa Jambore Ranting</h1>
        <Jamran images={jamran.images}/>
      </motion.div>
      
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 3 }}
      >
        <h1 className="text-center font-bold text-2xl">Hari Guru</h1>
        <HariGuru images={hariguru.images}/>
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
        transition={{ duration: 0.8, delay: 3.5 }}
        className="justify-center items-center m-10 flex flex-col"
      >
        <h1 className="text-center m-5 mt-10">Selamat Lulus Kawan, Semoga Di Jenjang Selanjutnya Kita Masih Bisa Bersama</h1>
        <Image src="https://media.discordapp.net/attachments/1106536230763638865/1107178015798087730/IMG-20230414-WA0003.jpg" alt="Foto Bersama" width={200} height={200} className="rounded-md"/>
      </motion.div>
      
      <Link href="/RamanAlizaWedding">
        <h3 className="text-center bg-red-600 rounded-md font-bold mb-96 mt-30 mx-10 py-3">Jangan Di Klik</h3>
      </Link>
    </div>
  );
}
