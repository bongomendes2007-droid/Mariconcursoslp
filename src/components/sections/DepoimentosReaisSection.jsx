import React from 'react';

const depoimentos = [
  {
    nome: 'Ricardo',
    tag: 'Aluno da Mentoria MC',
    foto: 'https://media.base44.com/images/public/696d6f18010ba26b7b4dc801/e5d2066b7_afcb885e-fa20-4f73-b752-e3d770d20392.jpg',
    texto: 'A mentoria da Mari foi como uma luz no fim do túnel. Me via perdido e cheio de inseguranças, sem saber como e por onde começar. Com muita paciência e profissionalismo ela foi me ajudando e demonstrando diversas formas para que eu conseguisse atingir meu objetivo. Me senti bastante acolhido.',
    delay: '0.1s',
  },
  {
    nome: 'Maria Beatriz',
    tag: 'Aluna da Mentoria MC',
    foto: 'https://media.base44.com/images/public/696d6f18010ba26b7b4dc801/8393ed658_e916ff3a-0e28-4251-86f5-3c38ebe85b1b.jpg',
    texto: 'A mentoria foi um divisor de águas na minha preparação para concursos. Aprendi, de fato, o que é estudar com organização, disciplina e excelência. Antes, eu não tinha direção clara; hoje, sigo um método estruturado e eficiente, baseado em minha disponibilidade e necessidade. Passei a planejar e executar meus estudos com muito mais estratégia. Sou muito grata por todo o aprendizado e recomendo fortemente a mentoriaMC.',
    delay: '0.2s',
  },
  {
    nome: 'Hannah Miranda',
    tag: 'Aluna da Mentoria MC',
    foto: 'https://media.base44.com/images/public/696d6f18010ba26b7b4dc801/8fe51aea9_dc8e4792-56c4-49b4-846a-14821931aea7.jpg',
    texto: 'A chegada da Mari na minha vida de concurseira me fez acreditar que eu posso mais do que eu acreditava. Com a plataforma utilizada por ela fica muito mais fácil administrar as metas e os horários. E o mais importante: a Mari é muito disponível, sempre dá feedbacks, está sempre disposta a adaptar os estudos à realidade de cada aluno, e sabe como incentivar cada um para que continuemos firmes no caminho.',
    delay: '0.3s',
  },
  {
    nome: 'Andressa',
    tag: 'Aluna da Mentoria MC',
    foto: 'https://media.base44.com/images/public/696d6f18010ba26b7b4dc801/d32f7aa1c_c0b093ed-6d8a-4b80-85e6-870ee7ac9011.jpeg',
    texto: 'Mari, que benção ter encontrado você. Sua mentoria é incrível. A plataforma, o jeito que você conduz… e o mais importante: você não me deixa desistir. Você me fez criar constância, me fez gostar de fazer questões e até sentir falta de estudar! Meu crescimento é nítido e devo isso a você. Confio de olhos fechados e não te largo mais. Obrigada por tudo ❤️',
    delay: '0.4s',
  },
];

export default function DepoimentosReaisSection() {
  return (
    <section style={{
      background: '#0a0a0a',
      padding: '80px 20px',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .dep-card {
          position: relative;
          background: #181818;
          border: 1px solid #2a2a2a;
          border-radius: 20px;
          padding: 32px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards;
          transition: transform 0.3s ease, border-color 0.3s ease;
          overflow: hidden;
        }

        .dep-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #5B8DEF, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .dep-card:hover {
          transform: translateY(-4px);
          border-color: #3a3a3a;
        }

        .dep-card:hover::before {
          opacity: 1;
        }

        .dep-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        @media (max-width: 600px) {
          .dep-grid {
            grid-template-columns: 1fr;
          }
          section.dep-section {
            padding: 60px 16px !important;
          }
        }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.25em',
          color: '#888',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>
          RESULTADOS REAIS
        </p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          color: '#f5f5f0',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          Relatos de quem{' '}
          <em style={{ color: '#5B8DEF', fontStyle: 'italic' }}>viveu</em>
          {' '}o método.
        </h2>
        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontWeight: 300,
          fontSize: '15px',
          color: '#888',
          maxWidth: '420px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}>
          Histórias reais de alunos que transformaram sua preparação com a mentoria.
        </p>
      </div>

      {/* Grid */}
      <div className="dep-grid">
        {depoimentos.map((d) => (
          <div
            key={d.nome}
            className="dep-card"
            style={{ animationDelay: d.delay }}
          >
            {/* Aspas */}
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '64px',
              color: 'rgba(91,141,239,0.5)',
              lineHeight: 0.6,
              userSelect: 'none',
            }}>
              "
            </div>

            {/* Texto */}
            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
              fontSize: '14.5px',
              lineHeight: 1.75,
              color: '#cccccc',
              margin: 0,
            }}>
              {d.texto}
            </p>

            {/* Divisor */}
            <hr style={{ border: 'none', borderTop: '1px solid #2a2a2a', margin: 0 }} />

            {/* Autor */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src={d.foto}
                alt={d.nome}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  border: '2px solid #5B8DEF',
                  flexShrink: 0,
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: '15px',
                  color: '#f5f5f0',
                }}>
                  {d.nome}
                </span>
                <span style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  color: '#888',
                  marginTop: '2px',
                }}>
                  {d.tag}
                </span>
                <span style={{
                  fontSize: '13px',
                  color: '#c9a96e',
                  letterSpacing: '2px',
                  marginTop: '4px',
                }}>
                  ★★★★★
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
