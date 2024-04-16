# RF 003.2 - Editar Aparelho

![Diagrama de Atividade RF 003.2 - Editar Aparelho](./imgs/RF003-2.png)

1. Início (*)
2. Fornecer Aparelho Existente e Novos Dados
3. Verificar se o aparelho existe
   - Sim: Atualizar Aparelho no Banco de Dados -> Aparelho Atualizado -> Retorno para (*)
   - Não: Aparelho Não Encontrado -> Fornecer Feedback de Erro -> Retorno para (*)
