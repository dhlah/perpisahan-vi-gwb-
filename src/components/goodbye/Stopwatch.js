import { useState, useEffect } from 'react';
import { DateTime, Interval } from 'luxon';

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval = null;

    // Fungsi untuk mengupdate waktu setiap detik
    const updateElapsedTime = () => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    };

    // Hitung selisih waktu antara tanggal dan jam yang ditentukan dan waktu saat ini
    const targetDate = new Date('2023-06-08T10:00:00Z'); // Tanggal 8 Juni 2023 jam 10:00 pagi
    const currentTime = DateTime.now().setZone('Asia/Jakarta');
    const initialElapsedTime = Math.floor((currentTime - targetDate) / 1000);

    // Mulai stopwatch saat komponen dimuat dengan waktu awal yang sudah dihitung
    setElapsedTime(initialElapsedTime);

    // Memulai interval untuk mengupdate waktu
    interval = setInterval(updateElapsedTime, 1000);

    // Bersihkan interval saat komponen unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Fungsi untuk membagi waktu menjadi hari, jam, menit, dan detik
  const formatElapsedTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor(((totalSeconds % 86400) % 3600) / 60);
    const seconds = totalSeconds % 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const { days, hours, minutes, seconds } = formatElapsedTime(elapsedTime);

  return (
    <div className="flex justify-center ">
      <div className="bg-gray-100 p-3 rounded-lg">
        <ul className="flex">
          <li>
            <div>
                <div className="bg-gray-300 rounded-lg p-3">{days}</div>
                <p className="text-center">Hari</p>
              </div>
          </li>
          <li><p className="font-bold p-3">:</p></li>
          <li>
            <div>
                <div className="bg-gray-300 rounded-lg p-3">{hours}</div>
                <p className="text-center">Jam</p>
              </div>
          </li>
          <li><p className="font-bold p-3">:</p></li>
          <li>
            <div>
                <div className="bg-gray-300 rounded-lg p-3">{minutes}</div>
                <p className="text-center">Menit</p>
              </div>
          </li>
          <li><p className="font-bold p-3">:</p></li>
          <li>
            <div>
                <div className="bg-gray-300 rounded-lg p-3">{seconds}</div>
                <p className="text-center">Detik</p>
              </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Stopwatch;
