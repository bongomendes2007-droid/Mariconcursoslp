import React, { useState, useRef } from 'react';
import { Play } from 'lucide-react';
import Article, { Em } from '../ui/Article';
import assets from '../../data/assets';

const orgaos = ['TRF', 'Tribunais', 'Carreiras Policiais', 'TRT'];

export default function VSLSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section
      id="aprovacoes"
      className="relative py-24 md:py-32"
      style={{ background: 'linear-gradient(180deg, #13205A 0%, #101C42 100%)' }}
    >
      <div className="max-w-page mx-auto px-5 md:px-8">
        <Article
          n={2}
          tone="dark"
          label="Do método, em vídeo"
          title={
            <>
              Toda aprovação começa com <Em tone="dark">método</Em>
            </>
          }
          intro="Em poucos minutos, a Mari explica como a mentoria funciona na prática — do diagnóstico ao plano."
        />

        <div className="mt-12 md:mt-16 lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-start-4 lg:col-span-9">
            <div
              className="relative rounded-card overflow-hidden bg-black"
              style={{ boxShadow: '0 40px 80px -30px rgba(0,0,0,0.7)' }}
            >
              <video
                ref={videoRef}
                src={assets.mari.video}
                playsInline
                preload="metadata"
                controls={playing}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                className="block w-full aspect-video object-cover bg-black"
              />
              {!playing && (
                <button
                  type="button"
                  onClick={handlePlay}
                  aria-label="Assistir ao vídeo de apresentação da mentoria"
                  className="vsl-play group absolute inset-0 w-full cursor-pointer text-left"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(16,28,66,0) 40%, rgba(16,28,66,0.85) 100%)',
                    }}
                  />
                  <span className="vsl-play-btn absolute top-1/2 left-1/2 w-[84px] h-[84px] -ml-[42px] -mt-[42px] rounded-full flex items-center justify-center bg-white/95">
                    <Play className="w-[24px] h-[24px] text-primary ml-1" fill="#1A2B5E" strokeWidth={0} />
                  </span>
                  <span className="absolute left-6 md:left-8 bottom-5 md:bottom-7 font-mono text-[12px] uppercase tracking-[0.1em] text-white/80">
                    Assista · dê o play
                  </span>
                </button>
              )}
            </div>

            <div className="mt-10 border-t rule-inverse pt-5 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
              <span className="font-mono text-[12px] uppercase tracking-[0.1em] text-white/50 shrink-0">
                Alunos aprovados em
              </span>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {orgaos.map((o, i) => (
                  <li key={o} className="font-display text-[22px] md:text-[26px] text-white flex items-baseline gap-6">
                    {o}
                    {i < orgaos.length - 1 && (
                      <span aria-hidden="true" className="text-accent/60 text-[18px]">
                        /
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .vsl-play-btn {
          box-shadow: 0 12px 40px rgba(0,0,0,0.35);
          transition: transform 200ms var(--ease-out), background-color 200ms ease;
        }
        .vsl-play:active .vsl-play-btn { transform: scale(0.96); }
        @media (hover: hover) and (pointer: fine) {
          .vsl-play:hover .vsl-play-btn { transform: scale(1.06); background-color: #76D7E3; }
        }
      `}</style>
    </section>
  );
}
