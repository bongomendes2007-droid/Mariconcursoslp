import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VSLSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoSrc = "https://res.cloudinary.com/dnth1inmv/video/upload/v1776687076/lv_0_20260415185927_lmibg3.mp4";
  const thumbnail = "https://res.cloudinary.com/dnth1inmv/video/upload/so_0/v1776687076/lv_0_20260415185927_lmibg3.jpg";

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => {
      if (videoRef.current) videoRef.current.play();
    }, 100);
  };

  return (
    <section className="py-16 md:py-40" style={{ background: '#111111' }}>
      <div className="max-w-4xl mx-auto px-5 md:px-6">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-[-0.02em] mb-4">
            Por que a maioria não passa —
            <br />
            <span style={{ background: 'linear-gradient(90deg, #4F46E5, #22D3EE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              e como mudar isso.
            </span>
          </h2>
          <p className="text-[#A1A1AA] text-sm max-w-sm md:max-w-md mx-auto">
            Em poucos minutos você vai entender o que separa quem é aprovado de quem fica tentando.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative aspect-video rounded-2xl overflow-hidden border border-[#262626]"
          style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(79,70,229,0.1)' }}>

          {!playing ? (
            <>
              <img
                src={thumbnail}
                alt="VSL thumbnail"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                style={{ filter: 'brightness(0.7)' }}
              />
              <div className="absolute inset-0 bg-black/20" />
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-5 cursor-pointer"
                onClick={handlePlay}>
                <motion.div
                  className="w-20 h-20 rounded-full border flex items-center justify-center border-white/10"
                  style={{ background: 'rgba(79,70,229,0.3)', backdropFilter: 'blur(12px)', boxShadow: '0 0 40px rgba(79,70,229,0.4)' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                  <Play className="w-7 h-7 text-white ml-1" fill="white" />
                </motion.div>
                <p className="text-white/50 text-xs tracking-widest uppercase">Assistir apresentação</p>
              </div>
            </>
          ) : (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full"
              controls
              autoPlay
              playsInline
              style={{ background: '#000' }}>
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </motion.div>
      </div>
    </section>
  );
}
