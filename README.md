# Trabalho Final - Parte 01

## Equipe:
- Guilherme dos Santos Cavalcante - 510831
- Jorge Bruno Costa Alves - 509718
- Gabriel Illeis

## 1. Descrição:
O projeto proposto consiste em desenvolver um website local para auxiliar o cliente, Gustavo, que possui uma loja de assistência técnica de celulares, na administração mais eficiente de seu trabalho. A aplicação permitirá o gerenciamento de clientes e seus respectivos dispositivos.

## 2. Requisitos Funcionais:

### Cadastro de Clientes:
- Registro de clientes solicitando informações obrigatórias como:
  - Nome
  - Endereço
  - Contato

### Cadastro de Aparelhos relacionados a Clientes:
- Registro de aparelhos solicitando informações obrigatórias e opcionais:
  - **Obrigatórias:**
    - Modelo
    - Descrição do problema
    - Cliente
    - IMEI
  - **Não obrigatória:**
    - Senha do aparelho

### Edição de Registros de Clientes e Aparelhos:
- Possibilidade de editar informações tanto de clientes quanto de aparelhos.

### Gerenciamento de Status de Aparelhos:
- Os aparelhos devem possuir status, como:
  - Em manutenção
  - Aguardando avaliação
  - Concluído
  - Aguardando peças
  - Aguardando pagamento

### Exclusão de Registros:
- Capacidade de excluir registros tanto de clientes quanto de aparelhos.

### Busca de Aparelhos:
- Opção para buscar aparelhos por nome do cliente, modelos de aparelhos e IMEI do aparelho.

### Geração de Orçamentos:
- Sistema para gerar orçamentos para os clientes com base nas informações dos aparelhos e serviços necessários.

### Histórico de Atendimento:
- Manter um registro histórico de todos os atendimentos realizados, incluindo detalhes como data, serviço prestado e custo.

### Agendamento de Atendimentos:
- Capacidade de agendar horários para atendimento aos clientes, garantindo uma melhor organização do trabalho.

### Relatórios Financeiros:
- Gerar relatórios financeiros para análise de desempenho do negócio, incluindo faturamento, despesas e lucro.

## 3. Requisitos Não Funcionais:

### Usabilidade:
- A interface do website deve ser intuitiva e de fácil compreensão para facilitar o uso pelo cliente.

### Segurança:
- As informações dos clientes e seus aparelhos devem ser protegidas adequadamente para garantir a privacidade e segurança dos dados.

### Desempenho:
- O sistema deve ser responsivo e rápido para proporcionar uma experiência fluida ao usuário, mesmo em condições de carga elevada.

### Compatibilidade:
- O website deve ser compatível com os principais navegadores web, garantindo uma experiência consistente em diferentes plataformas.

### Manutenibilidade:
- O código-fonte deve ser bem estruturado e documentado para facilitar futuras manutenções e atualizações do sistema.

### Portabilidade:
- O sistema deve ser desenvolvido de forma a permitir sua instalação e funcionamento em diferentes ambientes, garantindo flexibilidade ao cliente.

### Conformidade Legal:
- O sistema deve respeitar todas as leis e regulamentações relacionadas à proteção de dados pessoais e direitos do consumidor.

## 4. Adicionais:
- Implementar um sistema de histórico de notificações local para registrar eventos relevantes, como conclusão de manutenções ou agendamentos.
- Adicionar um módulo de relatórios para análise estatística do fluxo de trabalho da assistência técnica.
- Integrar um sistema de backup automático para evitar perda de dados.
- Implementar uma funcionalidade de login seguro para acesso ao sistema.
