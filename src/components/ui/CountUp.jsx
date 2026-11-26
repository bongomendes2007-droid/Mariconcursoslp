import React, { useEffect, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * Número que conta até o valor final uma única vez, quando entra na tela.
 * Escreve direto no DOM (ref), sem setState por frame.
 * Com reduced-motion, mostra o valor final sem contagem.
 *
 * value: string como "+50", "+4 anos", "100%" — anima só a parte numérica.
 */
export default function CountUp({ value, duration = 1100, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  const match = String(value).match(/^(\D*)(\d+)(.*)$/);
  const prefix = match ? match[1] : '';
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : '';

  useEffect(() => {
    if (!match || !inView || reduce || !ref.current) return;
    const el = ref.current;
    const start = performance.now();
    let raf;
    // ease-out forte (mesma família do --ease-out): rápido no início, assenta no fim
    const ease = (t) => 1 - Math.pow(1 - t, 4);
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      el.textContent = `${prefix}${Math.round(ease(t) * target)}${suffix}`;
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce]);

  // Começa em 0 (evita piscar valor final → 0); leitor de tela sempre lê o valor real.
  const initial = match && !reduce ? `${prefix}0${suffix}` : value;
  return (
    <span className={className}>
      <span ref={ref} aria-hidden="true" className="tabular">
        {initial}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
