import Image from 'next/image';
import { motion } from "framer-motion";

export default function HariGuru({ images }) {
  return (
    <div className="flex flex-wrap">
      {images.map((image) => (
      <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      key={image.id} 
      className="bg-gray-200 p-3 m-2 rounded-md ">
          <Image src={image.src} alt={image.alt} width={150} height={150} className="rounded-sm"/>
        </motion.div>
      ))}
    </div>
  );
}
