# Caderno TRF3

App de questões no estilo QConcursos / TEC Concursos para estudar para o TRF3 (banca VUNESP), cargo Analista Judiciário, Área Judiciária (edital nº 1/2026, prova em 31/01/2027).

Ao abrir, escolha quem está estudando (Giovanna ou Bruno). Cada pessoa tem respostas, revisões e simulados separados.

## Como usar
Abra `index.html` no navegador. Não precisa instalar nada.

- **Questões**: filtre por disciplina, assunto e situação (não resolvidas, erradas). Marque, risque alternativas, veja gabarito e comentário.
- **Pós-aula**: depois de cada aula, marque os assuntos e resolva as questões na hora. O app agenda revisões para 1, 7 e 30 dias e avisa na aba quando vencem.
- **Simulado**: escolha quantidade e disciplinas, questões divididas igualmente entre as matérias, cronômetro de 3 min por questão e cartão-resposta. Correção no final.
- **Evolução**: acerto por disciplina (pior primeiro) e botão para revisar os erros.
- **Ajustes**: copiar/restaurar backup e adicionar questões em JSON.

O progresso fica salvo no navegador (localStorage).

## Adicionar questões
As disciplinas seguem o edital (`window.EDITAL` no início de `questoes.js`): 24 questões de Conhecimentos Gerais (peso 1) e 36 de Específicos (peso 2).

Edite `questoes.js` seguindo o formato dos blocos existentes (`correta`: 0 = A ... 4 = E).

O banco tem 396 questões de provas anteriores da VUNESP (2024 e 2025), com texto e gabarito oficiais (versão 1): TJSP (Escrevente, Contador, Analista de Sistemas), MPSP (Analista Jurídico, Analista de Promotoria II), Prefeitura de Campinas (Procurador), ARES-PCJ (Procurador Jurídico) e SPCine (Analista Jurídico I). Só entram disciplinas do edital AJAJ. Ficaram de fora questões anuladas, questões com figura e temas fora do edital (Direito do Trabalho, Empresarial, Infância, Eleitoral, legislação interna etc.).
