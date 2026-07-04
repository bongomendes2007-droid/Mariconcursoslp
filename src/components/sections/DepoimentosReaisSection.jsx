import React from 'react';
import { motion } from 'framer-motion';
import assets from '../../data/assets';

const depoimentos = [
  {
    nome: 'Andressa',
    tag: 'Aluna da Mentoria MC',
    foto: assets.aprovados.andressa,
    texto:
      'Mari, que benção ter te encontrado. Você não me deixa desistir, me fez criar constância e até sentir falta de estudar. Meu crescimento é nítido e devo isso a você. Confio de olhos fechados.',
  },
  {
    nome: 'Hannah Miranda',
    tag: 'Aluna da Mentoria MC',
    foto: assets.aprovados.hannah,
    texto:
      'A Mari me fez acreditar que posso mais do que eu imaginava. Com a plataforma fica fácil administrar metas e horários, e ela está sempre disponível, adaptando os estudos à realidade de cada aluno.',
  },
  {
    nome: 'Maria Beatriz',
    tag: 'Aluna da Mentoria MC',
    foto: assets.aprovados.mariaBeatriz,
    texto:
      'A mentoria foi um divisor de águas. Aprendi o que é estudar com organização e excelência. Antes eu não tinha direção; hoje sigo um método estruturado e eficiente. Recomendo fortemente a Mentoria MC.',
  },
  {
    nome: 'Ricardo',
    tag: 'Aluno da Mentoria MC',
    foto: assets.aprovados.ricardo,
    texto:
      'A mentoria da Mari foi como uma luz no fim do túnel. Eu me via perdido, sem saber por onde começar. Com paciência e profissionalismo ela me guiou até o meu objetivo. Me senti muito acolhido.',
  },
];

export default function DepoimentosReaisSection() {
  return (
    <section id="depoimentos" className="bg-background py-24 px-5 md:px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <div className="text-secondary text-[13px] font-bold tracking-[0.09em] uppercase mb-4">
          Depoimentos reais
        </div>
        <h2 className="font-heading font-extrabold text-3xl md:text-[40px] leading-[1.15] tracking-tight text-ink">
          Relatos de quem
          <br />
          viveu o método
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {depoimentos.map((d, i) => (
          <motion.div
            key={d.nome}
            className="relative rounded-card overflow-hidden min-h-[480px] flex flex-col"
            style={{ background: '#16204B', boxShadow: '0 24px 60px rgba(17,29,68,0.18)' }}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <img
              src={d.foto}
              alt={d.nome}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: '50% 25%' }}
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(16,28,66,0.12) 0%, rgba(16,28,66,0.55) 42%, rgba(13,22,52,0.96) 100%)',
              }}
            />
            <div className="relative z-10 mt-auto px-6 pt-7 pb-7">
              <div className="font-heading font-extrabold text-4xl leading-[0.5] text-accent mb-3.5">
                &ldquo;
              </div>
              <p className="text-[13px] leading-[1.65] text-white/80 mb-5">{d.texto}</p>
              <div className="font-heading font-bold text-base text-white">{d.nome}</div>
              <div className="text-[12.5px] font-semibold text-accent mt-0.5">{d.tag}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
