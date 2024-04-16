# RF 004.2 - Excluir Aparelho

![Diagrama de Atividade RF 004.2 - Excluir Aparelho](./imgs/RF004-2.png)

1. Início (*)
2. Fornecer Aparelho Existente
3. Verificar se o aparelho existe
   - Sim: Remover Aparelho do Banco de Dados -> Aparelho Removido -> Retorno para (*)
   - Não: Aparelho Não Encontrado -> Fornecer Feedback de Erro -> Retorno para (*)
