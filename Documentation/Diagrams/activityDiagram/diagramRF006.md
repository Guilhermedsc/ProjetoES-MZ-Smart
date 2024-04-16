# RF 006 - Buscar Aparelho

![Diagrama de Atividade RF 006 - Buscar Aparelho](./imgs/RF006.png)

1. Início (*)
2. Fornecer Credenciais
3. Verificar se as credenciais são válidas
   - Sim: Consultar Banco de Dados por Aparelho
     - Aparelho Encontrado: Retornar Aparelho -> Retorno para (*)
     - Aparelho Não Encontrado: Fornecer Feedback de Erro -> Retorno para (*)
   - Não: Credenciais Inválidas -> Fornecer Feedback de Erro -> Retorno para (*)
