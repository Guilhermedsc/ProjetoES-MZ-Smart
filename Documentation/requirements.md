## 1. Requisitos Funcionais:

-   **Cadastro de Clientes:** Registro de clientes solicitando informações obrigatórias como:
    -   Nome
    -   Endereço
    -   Contato

-   **Cadastro de Aparelhos:** Registro de aparelhos solicitando informações obrigatórias e opcionais:
    -   Obrigatórias:
        -   ID `gerado automaticamente`
        -   Cliente
        -   Modelo
        -   Descrição do problema
        -   Data de entrada
        -   Status (aguardando avaliação, aguardando peças, em manutenção, aguardando pagamento, `finalizado`)
    -   Se o status for `finalizado`:
        -   Solução
        -   Valor do serviço
        -   Data de saída
    -   Não obrigatória:
        -   Senha do aparelho

-   **Edição de Clientes e Aparelhos:** Possibilidade de editar informações tanto de clientes quanto de aparelhos.

-   **Exclusão de Registros:** Capacidade de excluir registros tanto de clientes quanto de aparelhos.

-   **Busca de Clientes:** Pesquisa de clientes por nome.

-   **Busca de Aparelhos:** Pesquisa de aparelhos por ID, cliente ou modelo.

-   **Histórico de Atendimento:** Manter um registro histórico de todos os atendimentos realizados, incluindo detalhes como data, solução e valor do serviço.

-   **Exportação e Importação de Dados:** Possibilidade de exportar e importar dados para facilitar a migração de informações e para backup.

## 2. Requisitos Não Funcionais:

-   **Usabilidade:** A interface do website deve ser intuitiva e de fácil compreensão para facilitar o uso pelo cliente.

-   **Compatibilidade:** O website deve ser compatível com os principais navegadores web, garantindo uma experiência consistente em diferentes plataformas.

-   **Manutenibilidade:** O código-fonte deve ser bem estruturado e documentado para facilitar futuras manutenções e atualizações do sistema.