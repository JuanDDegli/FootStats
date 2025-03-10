# FootStats

O FootStats é uma plataforma que traz informações sobre as principais ligas de futebol do mundo, exibindo resultados de partidas ao vivo e as últimas notícias do universo do futebol. ⚽🔥

🔗 Acesse o projeto online: https://footstats-five.vercel.app/primeira-liga

## 🚀 Funcionalidades
- 📌 Exibição de partidas ao vivo e finalizadas.
- 📰 Notícias sobre futebol.
- 🎛️ Sidebar com seleção de ligas
- 📊 Filtros de partidas por liga e por data.



## 🛠️ Tecnologias Utilizadas
- **Next.js** (React + SSR)
- **TypeScript**
- **Tailwind CSS**
- **Football-Data.org API** (dados de jogos e classificações)
- **NewsAPI** (notícias sobre futebol)

## 📦 Instalação

### 1️⃣ Clone o repositório:
```bash
 git clone https://github.com/JuanDDegli/footstats.git
 cd footstats
```

### 2️⃣ Instale as dependências:
```bash
npm install  # ou yarn install
```

### 3️⃣ Configure as variáveis de ambiente:
Crie um arquivo `.env.local` na raiz do projeto e adicione:
```bash
NEXT_PUBLIC_API_KEY=SEU_TOKEN_DA_FOOTBALL_DATA
NEXT_PUBLIC_NEWS_API_KEY=SEU_TOKEN_DA_NEWS_API
```

### 4️⃣ Rode o projeto localmente:
```bash
npm run dev  # ou yarn dev
```

## 📜 Estrutura do Projeto
```plaintext
📂 footstats
├── 📂 src
│   ├── 📂 app  # Páginas do Next.js
│   ├── 📂 components  # Componentes reutilizáveis
│   ├── 📂 styles  # Estilos globais
│   ├── 📂 api  # Funções para chamadas à API
│   ├── 📂 types  # Tipagens do TypeScript
├── .env.local.example  # Exemplo de variáveis de ambiente
├── tailwind.config.ts  # Configuração do Tailwind CSS
├── next.config.js  # Configuração do Next.js
├── README.md  # Documentação do projeto
```

## 🌎 Deploy
O projeto pode ser facilmente implantado no **Vercel**. Para isso:
1. Crie um repositório no GitHub e suba o projeto.
2. Acesse [Vercel](https://vercel.com/) e importe o repositório.
3. Configure as variáveis de ambiente na interface da Vercel.
4. Faça o deploy automaticamente!

## 📌 Contribuição
Sinta-se à vontade para abrir **issues** e enviar **pull requests**! Se quiser contribuir:
1. **Fork** o repositório.
2. Crie uma **branch** com sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça o commit:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie o push:
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**!

## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e modificá-lo! ⚽🚀

