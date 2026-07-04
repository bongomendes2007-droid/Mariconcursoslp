// Assets hospedados no Cloudinary (conta dnth1inmv), mais imagens locais do redesign.
// Centralizados aqui para não espalhar URLs pelos componentes.

import logoWhite from '../assets/logo-h-white.png';
import mariHero from '../assets/mari-hero.png';
import mariSticker from '../assets/mari-sticker.png';
import mentor1 from '../assets/mentor-1.jpg';
import mentor2 from '../assets/mentor-2.jpg';
import mentor3 from '../assets/mentor-3.jpg';

const CLD = 'https://res.cloudinary.com/dnth1inmv';

export const assets = {
  logo: {
    horizontalWhite: logoWhite,
  },
  mari: {
    // PNG recortado (sem fundo) — ideal para o hero sobre o azul-marinho
    foto: `${CLD}/image/upload/v1776784227/28801041-8394-46d0-a58b-14530dfcf72f-removebg-preview_fq94mm.png`,
    hero: mariHero,
    sticker: mariSticker,
    video: `${CLD}/video/upload/v1776687076/lv_0_20260415185927_lmibg3.mp4`,
  },
  mentores: {
    vitor: `${CLD}/image/upload/v1782086137/c6663ede-4981-48e6-83df-a63323c05322_bpizzj.jpg`,
    victorCarvalho: `${CLD}/image/upload/v1782086127/8eba961b-b912-466c-908a-13e57d2a4650_fmxjra.jpg`,
    victorCarvalhoLocal: mentor1,
    vitorLocal: mentor2,
    petrusLocal: mentor3,
  },
  aprovados: {
    petrus: `${CLD}/image/upload/v1782871185/IMG_2267.JPG_1_pmq7ki.jpg`,
    ricardo: `${CLD}/image/upload/v1782086148/acb2f250-e33f-4370-b5c4-01fdf1e107d1_dlsxwu.jpg`,
    mariaBeatriz: `${CLD}/image/upload/v1782086155/7b67419a-64e0-4fcd-81a2-36a112adfaa1_leedqc.jpg`,
    hannah: `${CLD}/image/upload/v1782086163/715cde3f-4b8a-40e7-ad9a-00f608fd7e52_pmgkn9.jpg`,
    andressa: `${CLD}/image/upload/v1782086172/1a01b306-5fa9-4fc5-bafd-d372259202d0_yqcvzx.jpg`,
  },
};

export default assets;
