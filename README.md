# MZ Smart - Plataforma de Gerenciamento para Assistência Técnica

![MZ Smart Logo](./mzsmartlogo.png)

## 📋 Sumário
- [📖 Sobre o Projeto](#sobre-o-projeto)
- [✨ Funcionalidades Principais](#funcionalidades-principais)
- [💻 Tecnologias Utilizadas](#tecnologias-utilizadas)
- [🔧 Requisitos](#requisitos)
- [⚙️ Instalação e Configuração](#instalação-e-configuração)
- [👥 Histórias de Usuário](#histórias-de-usuário)
- [📊 Diagramas](#diagramas)
- [👨‍💻 Equipe de Desenvolvimento](#equipe-de-desenvolvimento)
- [📥 Contribuições](#contribuições)
- [📝 Licença](#licença)

## 📖 Sobre o Projeto
O **MZ Smart** é uma plataforma web desenvolvida para simplificar e organizar o fluxo de trabalho de assistências técnicas de celulares e tablets. O sistema permite o gerenciamento de clientes, dispositivos e pedidos de serviço de maneira eficiente, facilitando a administração diária e a rastreabilidade de informações.

Este projeto foi criado com o intuito de atender às necessidades do nosso cliente, possibilitando a visualização rápida do status de dispositivos e a geração de relatórios detalhados de clientes e aparelhos.

## ✨ Funcionalidades Principais
- ✅ **Cadastro e Gerenciamento de Clientes**: Interface intuitiva para adicionar, editar e visualizar clientes, bem como associar dispositivos aos perfis.
- 📱 **Gerenciamento de Aparelhos**: Cadastro detalhado de dispositivos, com informações como modelo, nome do cliente, descrição do problema, status do aparelho, senha e IMEI
- 🔧 **Status de Reparos**: Atualização em tempo real do progresso dos reparos, facilitando o acompanhamento de cada etapa do processo.
- 📜 **Histórico de Serviços**: Registro de todos os serviços realizados em cada aparelho, proporcionando maior controle e histórico de atendimentos.
- 💻 **Interface Responsiva**: Design que se adapta a diferentes tamanhos de tela, permitindo o uso em desktops, tablets e celulares.

## 💻 Tecnologias Utilizadas
O projeto utiliza uma combinação de tecnologias modernas para garantir desempenho, escalabilidade e uma experiência de usuário fluida.

- **Frontend**:
  - ⚛️ [Next.js](https://nextjs.org/) (ReactJS)
  - 🎨 [Tailwind CSS](https://tailwindcss.com/)
  - ⌨️ [TypeScript](https://www.typescriptlang.org/)

- **Backend**:
  - 🛠 [NestJS](https://nestjs.com/) com TypeORM
  - 🗃 Banco de Dados: [MongoDB](https://www.mongodb.com/)
  - ⌨️ [TypeScript](https://www.typescriptlang.org/)

- **Outras Tecnologias**:
  - 🌿 Versionamento: Git e GitHub
  - 📦 Gerenciamento de Pacotes: npm
  - 🧪 Testes Automatizados: [Jest](https://jestjs.io)
## 🔧 Requisitos
Para rodar o projeto localmente, é necessário ter os seguintes pré-requisitos instalados:

- Node.js v14.0 ou superior
- MongoDB
- npm (gerenciador de pacotes do Node.js)

Veja mais sobre os requisitos detalhados [aqui](./Documentation/requirements.md).

## ⚙️ Instalação e Configuração
Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório para sua máquina:
   ```bash
   git clone https://github.com/seu-usuario/mzsmart.git
   cd mzsmart
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente (arquivo `.env`):
   ```bash
   PORT=3000
   DB_CONNECTION=mongodb://localhost:27017/mzsmart
   JWT_SECRET=sua-chave-secreta
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

O servidor estará rodando em [http://localhost:3000](http://localhost:3000).

## 👥 Histórias de Usuário

As histórias de usuário detalham as principais interações entre o usuário final e o sistema, garantindo que todas as funcionalidades atendam às expectativas e necessidades do cliente.

Confira a lista completa de histórias de usuário [aqui](./Documentation/userStories.md).

## 📊 Diagramas

Os diagramas de fluxo e arquitetura são uma parte fundamental do desenvolvimento, ajudando a visualizar como os diferentes módulos do sistema se integram.

Veja os diagramas [aqui](./Documentation/Diagrams/diagrams.md).

## 👨‍💻 Equipe de Desenvolvimento

O **MZ Smart** foi desenvolvido pela seguinte equipe:

- **Guilherme dos Santos Cavalcante** - RA: 510831
- **Jorge Bruno Costa Alves** - RA: 509718
- **Gabriel Ileis Araujo Vieira** - RA: 493973

Cada integrante contribuiu para diferentes aspectos do projeto, incluindo desenvolvimento frontend, backend, e integração com banco de dados.

## 📥 Contribuições

Contribuições são bem-vindas! Se você deseja colaborar com o projeto, siga as etapas abaixo:

1. Faça um fork do projeto
2. Crie uma nova branch:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. Envie para o repositório:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
5. Abra um Pull Request no GitHub.

