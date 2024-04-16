# RF 002 - Cadastro de Aparelhos

![Diagrama de Atividade RF 002 - Cadastro de Aparelhos](./imgs/RF002.png)

1. Início (*)
2. Verificar se o cliente existe
   - Sim: Salvar no Banco de Dados -> Retorna Aparelho -> Retorno para (*)
   - Não: Cliente Não Existe -> Fornecer Feedback de Erro -> Retorno para (*)
