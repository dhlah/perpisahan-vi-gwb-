import Head from 'next/head';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const targetDate = new Date('May 14, 2023 20:00:00').getTime();
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining < 0) {
      router.push('/goodbye'); // Direct ke halaman perpisahan jika countdown selesai
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <div className="flex justify-center items-center">
        <div className="text-4xl font-bold text-black">{timeLeft.days}</div>
        <div className="text-4xl font-bold text-black mx-2">:</div>
        <div className="text-4xl font-bold text-black">{timeLeft.hours}</div>
        <div className="text-4xl font-bold text-black mx-2">:</div>
        <div className="text-4xl font-bold text-black">{timeLeft.minutes}</div>
        <div className="text-4xl font-bold text-black mx-2">:</div>
        <div className="text-4xl font-bold text-black">{timeLeft.seconds}</div>
      </div>
    </motion.div>
  );
}

function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sesuatu??</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold font-black mb-6">
          {mounted ? <Countdown /> : null}
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <h1>14 Mei 2023 20:00</h1>
      </footer>
    </div>
  );
}

export default HomePage;
