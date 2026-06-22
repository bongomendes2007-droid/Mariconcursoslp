# MariConcursos — Landing Page

Landing page institucional da MariConcursos (mentoria para concursos públicos).
Reconstrução limpa do projeto que estava no Base44, agora **100% independente** —
sem nenhuma dependência do SDK, autenticação ou hospedagem do Base44.

Stack: **Vite + React 18 + Tailwind CSS v3 + Framer Motion + lucide-react**.
A captação de leads é feita 100% por link `wa.me` (WhatsApp) — não há backend.

---

## 1. Rodar localmente

Pré-requisito: Node.js 18+ instalado.

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

Para gerar a versão de produção (pasta `dist/`):

```bash
npm run build
npm run preview   # testa o build localmente
```

---

## 2. Subir na Vercel

### Opção A — via GitHub (recomendado)

1. Crie um repositório novo no GitHub (ex.: `mariconcursos`).
2. Suba o projeto:
   ```bash
   git init
   git add .
   git commit -m "Landing MariConcursos — migrada do Base44"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/mariconcursos.git
   git push -u origin main
   ```
   > O `.gitignore` já impede que `node_modules/` e `dist/` subam.
3. Em vercel.com → **Add New → Project** → importe o repositório.
4. A Vercel detecta Vite sozinha. Confirme:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Clique em **Deploy**. Em ~1 min o site está no ar num domínio `*.vercel.app`.

### Opção B — via CLI (sem GitHub)

```bash
npm i -g vercel
vercel        # primeira vez: faz login e configura
vercel --prod # publica em produção
```

---

## 3. Apontar o domínio mentoriamclp.com para a Vercel

1. No projeto da Vercel → **Settings → Domains → Add** → digite `mentoriamclp.com`.
2. A Vercel mostra **os registros exatos** que você deve cadastrar no seu provedor
   de domínio (onde o domínio foi registrado). Normalmente:
   - Domínio raiz (`mentoriamclp.com`): registro **A** apontando para o IP que a Vercel indicar (hoje costuma ser `76.76.21.21` — **use sempre o valor que a Vercel exibir**).
   - `www.mentoriamclp.com`: registro **CNAME** apontando para `cname.vercel-dns.com`.
3. **Importante:** remova no seu provedor os registros antigos que apontavam para o
   Base44, senão dá conflito.
4. A propagação do DNS leva de alguns minutos a algumas horas. A Vercel emite o
   certificado SSL (https) automaticamente.

> Você precisa de acesso ao painel onde o domínio `mentoriamclp.com` foi registrado
> para mudar esses registros.

---

## 4. ⚠️ TODO importante: migrar as 8 fotos do Base44

Oito imagens ainda apontam para `media.base44.com`. Enquanto o Base44 servir esses
arquivos elas funcionam, mas **se a conta/CDN for desativada, as fotos somem.**
Salve as 8, suba no seu Cloudinary (`dnth1inmv`) e troque as URLs.

**Arquivo `src/components/sections/DepoimentosReaisSection.jsx`** (4 fotos de alunos):
- Ricardo, Maria Beatriz, Hannah Miranda, Andressa

**Arquivo `src/components/sections/MentorSection.jsx`** (4 fotos):
- Mariana Lima (mentora principal), Petrus Tabatinga, Vitor Vilarinho, Victor Carvalho

Depois de subir no Cloudinary, é só substituir cada URL `https://media.base44.com/...`
pela nova URL `https://res.cloudinary.com/dnth1inmv/...` no campo `foto`/`image`.

---

## 5. Observações sobre o conteúdo (etapa de melhorias, opcional)

Coisas que estão "de fábrica" e que talvez valha ajustar depois:

- **`CTABandSection.jsx`** renderiza `null` (faz `return null;`). Hoje os dois pontos
  onde ela aparece no `Home.jsx` ficam vazios. A página funciona normal; o CTA de
  fundo é o `ProximoPassoSection`. Se quiser, dá pra construir uma faixa de CTA real.
- **`VSLSection.jsx`**: o vídeo aponta para um arquivo no seu Cloudinary. Confirme que
  é o vídeo definitivo da apresentação.
- Algumas seções **não usadas** foram deixadas de fora da reconstrução (3 heros
  alternativos, `PlanosSection`, `MetodoSection`, depoimentos com fotos de banco de
  imagem etc.), porque não estavam no `Home.jsx` que está no ar.

---

Migração feita a partir dos arquivos originais do Base44, mantendo o layout fiel ao
que estava publicado.
