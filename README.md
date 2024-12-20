# Teste - Front-End JR

## Teste Prático e Teórico para:  
**Desenvolvedor Front-End JR**

---

### Instruções Gerais

- Ferramentas permitidas: qualquer editor de código (VS Code, etc.).
- Precisa ter o entendimento do que está sendo feito (será avaliado o raciocínio).

---

## Parte 1: Exercício Prático

**Objetivo:** Criar uma página web simples com funcionalidade interativa usando HTML, CSS e JavaScript, incluindo o consumo de uma API pública e testes unitários.

### Descrição do Problema:

Crie uma página que simula uma lista de tarefas (To-Do List) com as seguintes funcionalidades:

1. **Adicionar Tarefa:**
   - Um campo de texto e um botão para adicionar novas tarefas.
   - As tarefas devem aparecer listadas abaixo do campo.

2. **Marcar como Concluída:**
   - Cada tarefa listada deve ter uma opção para marcá-la como concluída.
   - Quando uma tarefa for concluída, deve ser visualmente destacada (ex.: riscada ou com fundo verde).

3. **Remover Tarefa:**
   - Cada tarefa deve ter uma opção para ser removida da lista.

4. **Consumo de API para Sugestão de Tarefas:**
   - Adicione um botão "Sugestão de Tarefa".
   - Ao clicar neste botão, consuma a API pública JSONPlaceholder para buscar uma tarefa.
   - Exiba a tarefa recebida da API na lista, como se tivesse sido adicionada manualmente.

5. **Detalhes da API:**
   - **Endpoint:** `https://jsonplaceholder.typicode.com/todos`
   - Cada tarefa retornada contém `id`, `title` e `completed`.
   - Use o campo `title` como o nome da tarefa.
   - Ignore as tarefas cujo campo `completed` for `true`.

6. **Persistência Local:**
   - Use o `localStorage` para salvar e carregar as tarefas (manuais e sugeridas) quando a página for atualizada.

7. **Teste Unitário:**
   - Escreva um teste unitário para verificar a funcionalidade de adicionar tarefa.
   - Use uma biblioteca como Jest ou Vitest.
   - O teste deve verificar se:
     - Uma nova tarefa é adicionada corretamente à lista.
     - O `localStorage` é atualizado após adicionar uma nova tarefa.
