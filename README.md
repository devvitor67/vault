# 🔐 Gerenciador de Senhas

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)

Um aplicativo web moderno e seguro para gerenciar suas senhas com facilidade. Construído com as tecnologias mais recentes para garantir performance e segurança.

> **Nota:** Este é um projeto em desenvolvimento.

## 🚀 Sobre o Projeto

Este projeto é um gerenciador de senhas full-stack que permite aos usuários armazenar, gerenciar e acessar suas credenciais de forma segura. A aplicação conta com um sistema de autenticação robusto e uma interface de usuário intuitiva.

## ✨ Funcionalidades

*   **Autenticação de Usuários:** Sistema completo de cadastro e login.
*   **Dashboard Segura:** Área restrita para usuários autenticados gerenciarem suas senhas.
*   **Armazenamento Criptografado:** (Futuro) As senhas são armazenadas de forma segura no banco de dados.
*   **Interface Moderna:** UI limpa e responsiva construída com React e CSS Globals.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

*   **Frontend:**
    *   [Next.js](https://nextjs.org/) (com App Router)
    *   [React](https://reactjs.org/)
    *   [TypeScript](https://www.typescriptlang.org/)
*   **Backend:**
    *   [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
*   **Banco de Dados & ORM:**
    *   [Drizzle ORM](https://orm.drizzle.team/)
    *   [SQLite](https://www.sqlite.org/index.html) (para desenvolvimento local)
*   **Autenticação:**
    *   [Better Auth](https://www.better-auth.com/).
*   **Ferramentas:**
    *   [Bun](https://bun.sh/) como runtime e package manager.
    *   [PostCSS](https://postcss.org/)

## 🏁 Como Começar

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos

*   [Bun](https://bun.sh/docs/installation) instalado em sua máquina.

### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/app-gerenciador-senhas.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd app-gerenciador-senhas
    ```
3.  Instale as dependências:
    ```bash
    bun install
    ```

### Configuração do Ambiente

1.  Renomeie o arquivo `.env.example` (se houver) para `.env` e preencha as variáveis de ambiente necessárias, como as credenciais do banco de dados e chaves de autenticação.

### Migrações do Banco de Dados

Execute as migrações do Drizzle para configurar o schema do banco de dados:
```bash
bun db:migrate
```

### Executando o Projeto

Para iniciar o servidor de desenvolvimento, execute o comando:
```bash
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver a aplicação.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Feito com ❤️ por Vitor Felicio(https.github.com/devvitor67)
