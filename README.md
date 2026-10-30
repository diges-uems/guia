# Caderno TRF3

App de questões no estilo QConcursos / TEC Concursos para estudar para o TRF3 (banca VUNESP).

## Como usar
Abra `index.html` no navegador. Não precisa instalar nada.

- **Questões**: filtre por disciplina, assunto e situação (não resolvidas, erradas). Marque, risque alternativas, veja gabarito e comentário.
- **Pós-aula**: depois de cada aula, marque os assuntos e resolva as questões na hora. O app agenda revisões para 1, 7 e 30 dias e avisa na aba quando vencem.
- **Simulado**: escolha quantidade e disciplinas, questões divididas igualmente entre as matérias, cronômetro de 3 min por questão e cartão-resposta. Correção no final.
- **Evolução**: acerto por disciplina (pior primeiro) e botão para revisar os erros.
- **Ajustes**: copiar/restaurar backup e adicionar questões em JSON.

O progresso fica salvo no navegador (localStorage).

## Adicionar questões
Edite `questoes.js` seguindo o formato dos blocos existentes (`correta`: 0 = A ... 4 = E).

As 40 questões iniciais são inéditas, escritas no estilo VUNESP. Confira sempre a lei seca atualizada.
