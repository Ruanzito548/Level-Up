# Level Up

Base Next.js com App Router, TypeScript e ESLint. A pagina inicial exibe
"Level Up" centralizado, com tamanho de texto responsivo.

## Desenvolvimento

Requer Node.js 24.x e npm.

```bash
npm ci
npm run dev
```

Acesse http://localhost:3000.

## Estrutura

- `src/app/page.tsx`: pagina inicial.
- `src/app/layout.tsx`: layout global, idioma e metadados.
- `src/app/globals.css`: estilos globais.
- `public/`: arquivos estaticos.

## Validacao

```bash
npm run lint
npm run typecheck
npm run build
```

Para servir o build localmente, execute `npm start` depois do build.

## Git

Repositorio: https://github.com/Ruanzito548/Level-Up

Para enviar novas alteracoes na branch `main`:

```bash
git add .
git commit -m "Descreva as alteracoes"
git push
```

Dependencias, builds locais, arquivos `.env` e configuracoes locais da
Vercel sao ignorados pelo Git.

## Deploy na Vercel

O framework e detectado automaticamente; nao e necessario um `vercel.json`
nem variaveis de ambiente para esta base.

Para publicar a pasta local:

```bash
npx vercel login
npx vercel --prod
```

Para deploys automaticos, envie este projeto para um repositorio Git e
importe-o em https://vercel.com/new, usando o preset Next.js e a raiz
do projeto como Root Directory. Cada push na branch de producao
dispara um novo deploy.

Nao publique arquivos `.env` ou credenciais no repositorio.
