import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Blob — elemento de assinatura da estética "personal brand".
 * Forma orgânica azul, borrada e em baixa opacidade, posicionada ATRÁS
 * das seções escuras. Usar com moderação (1–2 por seção).
 *
 * Props:
 *  - color:     cor de preenchimento (default secondary #5D8BFF)
 *  - size:      diâmetro em px (default 480)
 *  - opacity:   0–1 (default 0.28)
 *  - blur:      px de desfoque (default 80)
 *  - className: posicionamento (ex: "top-0 -left-24")
 *  - float:     anima uma leve flutuação (default true; respeita reduced-motion)
 *  - style:     estilos extras
 */
export default function Blob({
  color = '#5D8BFF',
  size = 480,
  opacity = 0.28,
  blur = 80,
  className = '',
  float = true,
  style = {},
}) {
  const reduceMotion = useReducedMotion();
  const animate =
    float && !reduceMotion
      ? { y: [0, -24, 0], x: [0, 12, 0], scale: [1, 1.04, 1] }
      : undefined;

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-0 ${className}`}
      style={{
        width: size,
        height: size,
        opacity,
        background: color,
        filter: `blur(${blur}px)`,
        // border-radius irregular = cara orgânica
        borderRadius: '42% 58% 63% 37% / 45% 39% 61% 55%',
        ...style,
      }}
      animate={animate}
      transition={
        animate
          ? { duration: 14, repeat: Infinity, ease: 'easeInOut' }
          : undefined
      }
    />
  );
}
