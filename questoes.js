/*
  Estrutura da prova de Analista Judiciário, Área Judiciária (AJAJ)
  Edital TRF3 nº 1/2026, banca VUNESP. Prova objetiva prevista para 31/01/2027.
  Fonte: notícias sobre o edital. Confira a lista no Anexo VI do edital oficial.
*/
window.EDITAL = {
  cargo: "Analista Judiciário · Área Judiciária",
  blocos: [
    { nome: "Conhecimentos Gerais", questoes: 24, peso: 1, disciplinas: [
      "Língua Portuguesa e Raciocínio Analítico",
      "Raciocínio Lógico-Matemático",
      "Ética no Serviço Público e Integridade",
      "Direitos Humanos e Acessibilidade",
      "Informática, IA e Inovação",
      "Sustentabilidade e Meio Ambiente"
    ] },
    { nome: "Conhecimentos Específicos", questoes: 36, peso: 2, disciplinas: [
      "Direito Constitucional",
      "Direito Administrativo",
      "Direito Civil",
      "Direito Processual Civil",
      "Direito Penal",
      "Direito Processual Penal",
      "Direito Tributário",
      "Direito Previdenciário",
      "Direito Ambiental"
    ] }
  ]
};

/*
  Banco de questões do app.
  Todas as questões são inéditas, escritas no estilo da banca VUNESP
  (5 alternativas, A a E) com base no conteúdo usual do TRF3.

  Para adicionar uma questão, copie um bloco e mude os campos:
    id           texto único, sem repetir
    disciplina   nome da matéria (aparece no filtro)
    assunto      tópico dentro da matéria
    enunciado    texto da questão
    alternativas lista com 5 textos, na ordem A, B, C, D, E
    correta      posição da certa: 0 = A, 1 = B, 2 = C, 3 = D, 4 = E
    comentario   explicação mostrada depois de responder
*/
window.QUESTOES = [
  // ---------------- LÍNGUA PORTUGUESA ----------------
  {
    id: "pt-001", disciplina: "Língua Portuguesa e Raciocínio Analítico", assunto: "Crase",
    enunciado: "Assinale a alternativa que preenche, correta e respectivamente, as lacunas da frase: \"Refiro-me ___ servidoras que trabalham neste cartório ___ dez anos.\"",
    alternativas: ["as … a", "às … há", "às … a", "as … há", "à … há"],
    correta: 1,
    comentario: "\"Referir-se\" exige a preposição A, que se funde ao artigo feminino plural AS: \"às servidoras\". Para indicar tempo decorrido usa-se o verbo haver: \"há dez anos\"."
  },
  {
    id: "pt-002", disciplina: "Língua Portuguesa e Raciocínio Analítico", assunto: "Concordância verbal",
    enunciado: "Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.",
    alternativas: [
      "Haviam muitos processos aguardando despacho.",
      "Faz dois anos que ingressei no tribunal.",
      "Existe muitas dúvidas sobre o novo sistema.",
      "Fazem meses que a sala está fechada.",
      "Houveram reclamações sobre o atendimento."
    ],
    correta: 1,
    comentario: "\"Fazer\" indicando tempo decorrido e \"haver\" no sentido de existir são impessoais e ficam no singular (faz, havia, houve). Já \"existir\" é pessoal e concorda com o sujeito: \"Existem muitas dúvidas\"."
  },
  {
    id: "pt-003", disciplina: "Língua Portuguesa e Raciocínio Analítico", assunto: "Colocação pronominal",
    enunciado: "Assinale a alternativa em que a colocação do pronome está de acordo com a norma-padrão.",
    alternativas: [
      "Me entregaram o ofício ontem.",
      "Entregarei-lhe o documento amanhã.",
      "Nunca se esqueça dos prazos processuais.",
      "Quando avisaram-me, já era tarde.",
      "Ninguém informou-nos sobre a mudança."
    ],
    correta: 2,
    comentario: "Palavras negativas (nunca, ninguém), conjunções subordinativas (quando) e pronomes indefinidos atraem o pronome para antes do verbo (próclise). Não se inicia frase com pronome oblíquo, e com futuro do presente usa-se mesóclise: \"Entregar-lhe-ei\"."
  },
  {
    id: "pt-004", disciplina: "Língua Portuguesa e Raciocínio Analítico", assunto: "Regência verbal",
    enunciado: "Assinale a alternativa em que a regência verbal está de acordo com a norma-padrão.",
    alternativas: [
      "Prefiro trabalhar do que estudar à noite.",
      "Obedeça o regulamento interno.",
      "Esqueci do prazo do recurso.",
      "Assistimos o julgamento pela internet.",
      "O servidor aspira ao cargo de analista."
    ],
    correta: 4,
    comentario: "\"Aspirar\" no sentido de desejar pede a preposição A. Corrigindo as demais: preferir algo A algo; obedecer AO regulamento; esqueci o prazo (ou esqueci-me do prazo); assistir (ver) pede A: assistimos AO julgamento."
  },
  {
    id: "pt-005", disciplina: "Língua Portuguesa e Raciocínio Analítico", assunto: "Pontuação",
    enunciado: "Assinale a alternativa em que a vírgula está empregada de acordo com a norma-padrão.",
    alternativas: [
      "Os candidatos aprovados, serão convocados por edital.",
      "Durante a sessão, os desembargadores discutiram o recurso.",
      "O juiz, determinou a citação do réu.",
      "Informamos que, o prazo já terminou.",
      "Solicitamos, aos interessados que compareçam ao balcão."
    ],
    correta: 1,
    comentario: "Adjunto adverbial deslocado para o início pode ser separado por vírgula. Nas outras há erro: vírgula entre sujeito e verbo (A, C), entre a conjunção e a oração (D) e entre o verbo e seu complemento (E)."
  },
  {
    id: "pt-006", disciplina: "Língua Portuguesa e Raciocínio Analítico", assunto: "Conjunções",
    enunciado: "Na frase \"Embora o prazo fosse curto, a equipe concluiu o relatório\", a conjunção destacada pode ser substituída, sem alteração de sentido, por:",
    alternativas: ["Porque", "Desde que", "Ainda que", "Logo que", "Para que"],
    correta: 2,
    comentario: "\"Embora\" é conjunção concessiva, assim como \"ainda que\", \"mesmo que\" e \"conquanto\". As outras indicam causa (porque), condição (desde que), tempo (logo que) e finalidade (para que)."
  },
  {
    id: "pt-007", disciplina: "Língua Portuguesa e Raciocínio Analítico", assunto: "Uso dos porquês",
    enunciado: "Assinale a alternativa em que o uso de \"por que\", \"porque\", \"por quê\" ou \"porquê\" está correto.",
    alternativas: [
      "Por quê você faltou à audiência?",
      "Não sei por que ele faltou à audiência.",
      "Ele faltou por quê estava doente.",
      "Faltou porquê?",
      "Explique o por que da sua ausência."
    ],
    correta: 1,
    comentario: "\"Por que\" separado e sem acento aparece em perguntas diretas e indiretas (\"não sei por que\"). \"Porque\" junto indica causa. \"Por quê\" vai no fim da frase. \"Porquê\" é substantivo e vem com artigo: \"o porquê\"."
  },

  // ---------------- RACIOCÍNIO LÓGICO ----------------
  {
    id: "rl-001", disciplina: "Raciocínio Lógico-Matemático", assunto: "Negação de proposições",
    enunciado: "Uma negação lógica da afirmação \"Todos os servidores do setor são pontuais\" é:",
    alternativas: [
      "Nenhum servidor do setor é pontual.",
      "Algum servidor do setor não é pontual.",
      "Todos os servidores do setor não são pontuais.",
      "Algum servidor do setor é pontual.",
      "Nenhum servidor pontual é do setor."
    ],
    correta: 1,
    comentario: "A negação de \"todo A é B\" é \"algum A não é B\". Basta um servidor não pontual para tornar a frase original falsa."
  },
  {
    id: "rl-002", disciplina: "Raciocínio Lógico-Matemático", assunto: "Negação de condicional",
    enunciado: "Uma negação lógica de \"Se o recurso foi protocolado, então o prazo foi cumprido\" é:",
    alternativas: [
      "Se o recurso não foi protocolado, então o prazo não foi cumprido.",
      "O recurso não foi protocolado e o prazo foi cumprido.",
      "O recurso foi protocolado e o prazo não foi cumprido.",
      "O recurso não foi protocolado ou o prazo foi cumprido.",
      "Se o prazo não foi cumprido, então o recurso não foi protocolado."
    ],
    correta: 2,
    comentario: "A negação de \"se P, então Q\" é \"P e não Q\". Mantém a primeira parte e nega a segunda, trocando o \"se… então\" por \"e\"."
  },
  {
    id: "rl-003", disciplina: "Raciocínio Lógico-Matemático", assunto: "Equivalências lógicas",
    enunciado: "A afirmação \"Se Ana estuda, então Ana é aprovada\" é logicamente equivalente a:",
    alternativas: [
      "Se Ana é aprovada, então Ana estuda.",
      "Se Ana não estuda, então Ana não é aprovada.",
      "Ana estuda e Ana é aprovada.",
      "Se Ana não é aprovada, então Ana não estuda.",
      "Ana não estuda e Ana é aprovada."
    ],
    correta: 3,
    comentario: "Equivalência pela contrapositiva: \"se P, então Q\" equivale a \"se não Q, então não P\". Também equivale a \"não P ou Q\" (Ana não estuda ou é aprovada)."
  },
  {
    id: "rl-004", disciplina: "Raciocínio Lógico-Matemático", assunto: "Porcentagem",
    enunciado: "O preço de um equipamento sofreu um aumento de 20% e, em seguida, um desconto de 20% sobre o novo valor. Em relação ao preço inicial, o preço final:",
    alternativas: [
      "é igual.",
      "é 4% menor.",
      "é 4% maior.",
      "é 2% menor.",
      "é 40% menor."
    ],
    correta: 1,
    comentario: "Multiplique os fatores: 1,20 × 0,80 = 0,96. O preço final é 96% do inicial, ou seja, 4% menor."
  },
  {
    id: "rl-005", disciplina: "Raciocínio Lógico-Matemático", assunto: "Sequências",
    enunciado: "Na sequência 2, 6, 18, 54, …, o próximo termo é:",
    alternativas: ["72", "108", "148", "162", "216"],
    correta: 3,
    comentario: "Cada termo é o anterior multiplicado por 3 (progressão geométrica de razão 3): 54 × 3 = 162."
  },
  {
    id: "rl-006", disciplina: "Raciocínio Lógico-Matemático", assunto: "Análise combinatória",
    enunciado: "De um grupo de 6 servidores, deseja-se formar uma comissão com 3 membros, sem distinção de cargos. O número de comissões diferentes possíveis é:",
    alternativas: ["18", "20", "36", "120", "216"],
    correta: 1,
    comentario: "Como a ordem não importa, é combinação: C(6,3) = 6 × 5 × 4 ÷ (3 × 2 × 1) = 120 ÷ 6 = 20."
  },
  {
    id: "rl-007", disciplina: "Raciocínio Lógico-Matemático", assunto: "Regra de três composta",
    enunciado: "Seis servidores analisam 120 processos em 4 dias. Mantido o mesmo ritmo, oito servidores analisarão 200 processos em:",
    alternativas: ["3 dias", "4 dias", "5 dias", "6 dias", "8 dias"],
    correta: 2,
    comentario: "Cada servidor analisa 120 ÷ (6 × 4) = 5 processos por dia. Oito servidores fazem 40 por dia. Logo, 200 ÷ 40 = 5 dias."
  },

  // ---------------- NOÇÕES DE INFORMÁTICA ----------------
  {
    id: "inf-001", disciplina: "Informática, IA e Inovação", assunto: "Excel",
    enunciado: "Em uma planilha do Microsoft Excel (versão em português), a célula A1 contém o valor 6,5. A fórmula =SE(A1>=7;\"Aprovado\";\"Reprovado\") retornará:",
    alternativas: ["Aprovado", "Reprovado", "6,5", "VERDADEIRO", "#VALOR!"],
    correta: 1,
    comentario: "A função SE testa a condição A1>=7. Como 6,5 não é maior ou igual a 7, a condição é falsa e o Excel retorna o terceiro argumento: \"Reprovado\"."
  },
  {
    id: "inf-002", disciplina: "Informática, IA e Inovação", assunto: "Excel",
    enunciado: "No Microsoft Excel (versão em português), a função que conta quantas células de um intervalo não estão vazias, independentemente do tipo de conteúdo, é:",
    alternativas: ["CONT.NÚM", "CONT.VALORES", "CONT.SE", "SOMA", "CONTAR.VAZIO"],
    correta: 1,
    comentario: "CONT.VALORES conta células não vazias (texto, número, erro). CONT.NÚM conta só números, CONT.SE conta com critério e CONTAR.VAZIO conta as vazias."
  },
  {
    id: "inf-003", disciplina: "Informática, IA e Inovação", assunto: "Excel",
    enunciado: "No Microsoft Excel, as células A1, A2, A3 e A4 contêm, respectivamente, 2, 4, 6 e 8. O resultado da fórmula =MÉDIA(A1:A4) é:",
    alternativas: ["4", "5", "6", "20", "8"],
    correta: 1,
    comentario: "MÉDIA soma os valores e divide pela quantidade: (2 + 4 + 6 + 8) ÷ 4 = 20 ÷ 4 = 5."
  },
  {
    id: "inf-004", disciplina: "Informática, IA e Inovação", assunto: "Windows",
    enunciado: "No Microsoft Windows 10, o atalho de teclado que bloqueia imediatamente o computador, exigindo nova autenticação do usuário, é:",
    alternativas: ["Windows + D", "Windows + E", "Windows + L", "Ctrl + Alt + Tab", "Alt + F4"],
    correta: 2,
    comentario: "Windows + L bloqueia a sessão (L de lock). Windows + D mostra a área de trabalho, Windows + E abre o Explorador de Arquivos e Alt + F4 fecha a janela ativa."
  },
  {
    id: "inf-005", disciplina: "Informática, IA e Inovação", assunto: "Correio eletrônico",
    enunciado: "Um servidor precisa enviar um e-mail a vários destinatários sem que nenhum deles veja os endereços dos demais. Para isso, deve inserir os endereços no campo:",
    alternativas: ["Para", "Cc", "Cco", "Assunto", "Responder a"],
    correta: 2,
    comentario: "Cco (cópia carbono oculta) envia a mensagem sem mostrar esses destinatários aos demais. No campo Cc, todos veem quem recebeu cópia."
  },
  {
    id: "inf-006", disciplina: "Informática, IA e Inovação", assunto: "Segurança da informação",
    enunciado: "Uma mensagem de e-mail que imita a comunicação de um banco e induz o usuário a clicar em um link para informar senha e dados pessoais caracteriza:",
    alternativas: ["Phishing", "Firewall", "Backup", "Spam legítimo", "Criptografia"],
    correta: 0,
    comentario: "Phishing é o golpe em que o atacante se passa por instituição confiável para obter dados do usuário. Firewall e criptografia são mecanismos de proteção; backup é cópia de segurança."
  },

  // ---------------- DIREITO CONSTITUCIONAL ----------------
  {
    id: "dc-001", disciplina: "Direito Constitucional", assunto: "Direitos e garantias fundamentais",
    enunciado: "De acordo com a Constituição Federal, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    alternativas: [
      "por determinação judicial, a qualquer hora do dia ou da noite.",
      "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      "por ordem de autoridade policial, durante o dia.",
      "em caso de flagrante delito, somente durante o dia.",
      "por determinação administrativa fundamentada, durante a noite."
    ],
    correta: 1,
    comentario: "Art. 5º, XI, da CF. Flagrante delito, desastre e socorro autorizam a entrada a qualquer hora. A ordem judicial só pode ser cumprida durante o dia."
  },
  {
    id: "dc-002", disciplina: "Direito Constitucional", assunto: "Remédios constitucionais",
    enunciado: "O remédio constitucional cabível para assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, é o:",
    alternativas: ["habeas corpus", "mandado de segurança", "habeas data", "mandado de injunção", "ação popular"],
    correta: 2,
    comentario: "Art. 5º, LXXII, da CF. O habeas data serve para conhecer ou retificar dados da própria pessoa. O mandado de segurança é residual: protege direito líquido e certo não amparado por habeas corpus ou habeas data."
  },
  {
    id: "dc-003", disciplina: "Direito Constitucional", assunto: "Administração Pública",
    enunciado: "Não está expressamente previsto no caput do art. 37 da Constituição Federal o princípio da:",
    alternativas: ["legalidade", "impessoalidade", "moralidade", "razoabilidade", "eficiência"],
    correta: 3,
    comentario: "O caput do art. 37 traz LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. Razoabilidade é princípio implícito na CF (e expresso na Lei 9.784/99)."
  },
  {
    id: "dc-004", disciplina: "Direito Constitucional", assunto: "Poder Judiciário: TRFs",
    enunciado: "Segundo a Constituição Federal, os Tribunais Regionais Federais compõem-se de, no mínimo, sete juízes, sendo:",
    alternativas: [
      "um terço dentre advogados e membros do Ministério Público Federal com mais de cinco anos de atividade.",
      "um quinto dentre advogados com mais de dez anos de efetiva atividade profissional e membros do Ministério Público Federal com mais de dez anos de carreira.",
      "um quinto dentre juízes estaduais com mais de dez anos de exercício.",
      "todos escolhidos mediante promoção de juízes federais, por antiguidade.",
      "metade dentre advogados indicados pela OAB e metade dentre juízes federais."
    ],
    correta: 1,
    comentario: "Art. 107, I, da CF (quinto constitucional). Os demais membros vêm de promoção de juízes federais com mais de cinco anos de exercício, por antiguidade e merecimento, alternadamente (art. 107, II)."
  },
  {
    id: "dc-005", disciplina: "Direito Constitucional", assunto: "Poder Judiciário: TRFs",
    enunciado: "Compete aos Tribunais Regionais Federais processar e julgar, originariamente:",
    alternativas: [
      "os Governadores dos Estados, nos crimes comuns.",
      "os membros dos próprios Tribunais Regionais Federais, nos crimes comuns.",
      "os juízes federais da área de sua jurisdição, nos crimes comuns e de responsabilidade, ressalvada a competência da Justiça Eleitoral.",
      "o Presidente da República, nas infrações penais comuns.",
      "o habeas corpus contra ato de Ministro de Estado."
    ],
    correta: 2,
    comentario: "Art. 108, I, \"a\", da CF. Governadores e desembargadores dos TRFs são julgados pelo STJ (art. 105, I, \"a\"). O Presidente da República é julgado pelo STF. HC contra Ministro de Estado também é do STJ."
  },
  {
    id: "dc-006", disciplina: "Direito Constitucional", assunto: "Nacionalidade",
    enunciado: "Nos termos da Constituição Federal, é cargo privativo de brasileiro nato o de:",
    alternativas: [
      "Senador da República.",
      "Ministro do Superior Tribunal de Justiça.",
      "Ministro do Supremo Tribunal Federal.",
      "Governador de Estado.",
      "Deputado Federal."
    ],
    correta: 2,
    comentario: "Art. 12, § 3º: Presidente e Vice, Presidente da Câmara, Presidente do Senado, Ministro do STF, carreira diplomática, oficial das Forças Armadas e Ministro de Estado da Defesa. Senador e Deputado comuns podem ser naturalizados."
  },

  // ---------------- DIREITO ADMINISTRATIVO ----------------
  {
    id: "da-001", disciplina: "Direito Administrativo", assunto: "Atos administrativos",
    enunciado: "O atributo do ato administrativo que permite à Administração executar suas próprias decisões por meios diretos, sem necessidade de prévia autorização do Poder Judiciário, é denominado:",
    alternativas: ["presunção de legitimidade", "imperatividade", "autoexecutoriedade", "tipicidade", "motivação"],
    correta: 2,
    comentario: "Autoexecutoriedade: a Administração executa por si mesma (ex.: apreensão de mercadoria estragada). Imperatividade é impor obrigações independentemente da concordância do particular."
  },
  {
    id: "da-002", disciplina: "Direito Administrativo", assunto: "Lei 9.784/1999",
    enunciado: "Nos termos da Lei nº 9.784/1999, salvo disposição legal específica, o prazo para interposição de recurso administrativo é de:",
    alternativas: ["5 dias", "10 dias", "15 dias", "30 dias", "60 dias"],
    correta: 1,
    comentario: "Art. 59 da Lei 9.784/99: 10 dias, contados da ciência ou divulgação oficial da decisão. O recurso deve ser decidido em até 30 dias (§ 1º)."
  },
  {
    id: "da-003", disciplina: "Direito Administrativo", assunto: "Lei 9.784/1999",
    enunciado: "Conforme a Lei nº 9.784/1999, o direito da Administração de anular os atos administrativos de que decorram efeitos favoráveis para os destinatários decai em:",
    alternativas: [
      "dois anos, contados da publicação do ato.",
      "cinco anos, contados da data em que foram praticados, salvo comprovada má-fé.",
      "dez anos, em qualquer hipótese.",
      "cinco anos, mesmo que comprovada a má-fé do destinatário.",
      "um ano, contado da ciência do vício."
    ],
    correta: 1,
    comentario: "Art. 54 da Lei 9.784/99. Se houver má-fé comprovada, o prazo decadencial de 5 anos não se aplica."
  },
  {
    id: "da-004", disciplina: "Direito Administrativo", assunto: "Lei 8.112/1990",
    enunciado: "De acordo com a Lei nº 8.112/1990, a posse ocorrerá no prazo de ___ contados da publicação do ato de provimento, e o servidor empossado terá ___ para entrar em exercício, contados da data da posse.",
    alternativas: [
      "15 dias … 30 dias",
      "30 dias … 15 dias",
      "30 dias … 30 dias",
      "15 dias … 15 dias",
      "60 dias … 30 dias"
    ],
    correta: 1,
    comentario: "Posse: 30 dias da publicação do ato de provimento (art. 13, § 1º). Exercício: 15 dias da posse (art. 15, § 1º). Dica: posse é o número maior."
  },
  {
    id: "da-005", disciplina: "Direito Administrativo", assunto: "Lei 8.112/1990",
    enunciado: "Segundo a Lei nº 8.112/1990, configura abandono de cargo a ausência intencional do servidor ao serviço por mais de:",
    alternativas: [
      "15 dias consecutivos.",
      "30 dias consecutivos.",
      "30 dias interpolados, no período de 12 meses.",
      "60 dias consecutivos.",
      "60 dias interpolados, no período de 12 meses."
    ],
    correta: 1,
    comentario: "Abandono de cargo: mais de 30 dias consecutivos (art. 138). Já a inassiduidade habitual é a falta sem causa justificada por 60 dias interpolados em 12 meses (art. 139). Ambos levam à demissão."
  },
  {
    id: "da-006", disciplina: "Direito Administrativo", assunto: "Improbidade administrativa",
    enunciado: "Com as alterações promovidas pela Lei nº 14.230/2021 na Lei nº 8.429/1992, os atos de improbidade administrativa:",
    alternativas: [
      "podem ser praticados de forma culposa em qualquer modalidade.",
      "exigem dolo apenas nos casos de enriquecimento ilícito.",
      "exigem conduta dolosa em todas as modalidades.",
      "admitem culpa apenas nos atos que causam prejuízo ao erário.",
      "dispensam a análise do elemento subjetivo do agente."
    ],
    correta: 2,
    comentario: "Após a Lei 14.230/2021, art. 1º, § 1º: são atos de improbidade apenas as condutas dolosas dos arts. 9º, 10 e 11. A modalidade culposa do art. 10 deixou de existir."
  },
  {
    id: "da-007", disciplina: "Direito Administrativo", assunto: "Licitações (Lei 14.133/2021)",
    enunciado: "Não é modalidade de licitação prevista na Lei nº 14.133/2021:",
    alternativas: ["pregão", "concorrência", "tomada de preços", "leilão", "diálogo competitivo"],
    correta: 2,
    comentario: "Art. 28 da Lei 14.133/21: pregão, concorrência, concurso, leilão e diálogo competitivo. Tomada de preços e convite existiam só na antiga Lei 8.666/93."
  },

  // ---------------- DIREITO PROCESSUAL CIVIL ----------------
  {
    id: "pc-001", disciplina: "Direito Processual Civil", assunto: "Prazos",
    enunciado: "Segundo o Código de Processo Civil, na contagem de prazo em dias, estabelecido por lei ou pelo juiz, computar-se-ão:",
    alternativas: [
      "dias corridos, incluindo o dia do começo.",
      "somente os dias úteis.",
      "dias corridos, excluindo sábados.",
      "somente os dias em que houver expediente forense integral.",
      "dias corridos, salvo nos recursos."
    ],
    correta: 1,
    comentario: "Art. 219 do CPC: só dias úteis. Regra do art. 224: exclui-se o dia do começo e inclui-se o do vencimento."
  },
  {
    id: "pc-002", disciplina: "Direito Processual Civil", assunto: "Recursos",
    enunciado: "De acordo com o CPC, excetuados os embargos de declaração, o prazo para interpor os recursos e para responder-lhes é de:",
    alternativas: ["5 dias", "8 dias", "10 dias", "15 dias", "30 dias"],
    correta: 3,
    comentario: "Art. 1.003, § 5º, do CPC: 15 dias úteis. Os embargos de declaração têm prazo de 5 dias (art. 1.023)."
  },
  {
    id: "pc-003", disciplina: "Direito Processual Civil", assunto: "Recursos",
    enunciado: "Conforme o CPC, os embargos de declaração serão opostos no prazo de:",
    alternativas: ["48 horas", "3 dias", "5 dias", "10 dias", "15 dias"],
    correta: 2,
    comentario: "Art. 1.023 do CPC: 5 dias, em petição dirigida ao juiz, indicando o erro, a obscuridade, a contradição ou a omissão."
  },
  {
    id: "pc-004", disciplina: "Direito Processual Civil", assunto: "Tutela provisória",
    enunciado: "Nos termos do CPC, a tutela de urgência será concedida quando houver elementos que evidenciem:",
    alternativas: [
      "a probabilidade do direito e o perigo de dano ou o risco ao resultado útil do processo.",
      "a certeza do direito, independentemente de perigo de dano.",
      "apenas o abuso do direito de defesa da parte contrária.",
      "a prova documental suficiente dos fatos, ainda que sem urgência.",
      "a concordância expressa da parte contrária."
    ],
    correta: 0,
    comentario: "Art. 300 do CPC. Abuso do direito de defesa e prova documental suficiente são hipóteses de tutela de EVIDÊNCIA (art. 311), que dispensa a urgência."
  },

  // ---------------- LGPD, LAI E ESTATUTO DA PCD ----------------
  {
    id: "lg-001", disciplina: "Informática, IA e Inovação", assunto: "LGPD (Lei 13.709/2018)",
    enunciado: "Segundo a Lei Geral de Proteção de Dados Pessoais, NÃO é considerado dado pessoal sensível o dado referente a:",
    alternativas: [
      "origem racial ou étnica.",
      "convicção religiosa.",
      "endereço residencial.",
      "saúde ou vida sexual.",
      "dado genético ou biométrico."
    ],
    correta: 2,
    comentario: "Art. 5º, II, da LGPD lista os sensíveis: origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou organização religiosa, filosófica ou política, saúde, vida sexual, dado genético ou biométrico. Endereço é dado pessoal comum."
  },
  {
    id: "lg-002", disciplina: "Ética no Serviço Público e Integridade", assunto: "Lei de Acesso à Informação (Lei 12.527/2011)",
    enunciado: "Pela Lei de Acesso à Informação, não sendo possível conceder o acesso imediato, o órgão deverá atender ao pedido em prazo não superior a:",
    alternativas: [
      "10 dias, prorrogável por mais 10 dias.",
      "15 dias, improrrogável.",
      "20 dias, prorrogável por mais 10 dias, mediante justificativa expressa.",
      "30 dias, prorrogável por mais 30 dias.",
      "5 dias úteis, improrrogável."
    ],
    correta: 2,
    comentario: "Art. 11, §§ 1º e 2º, da Lei 12.527/2011: 20 dias, prorrogáveis por mais 10, com justificativa expressa dada ao requerente."
  },
  {
    id: "lg-003", disciplina: "Direitos Humanos e Acessibilidade", assunto: "Estatuto da Pessoa com Deficiência (Lei 13.146/2015)",
    enunciado: "Segundo o Estatuto da Pessoa com Deficiência, considera-se pessoa com deficiência aquela que tem impedimento de ___ de natureza física, mental, intelectual ou sensorial, o qual, em interação com uma ou mais barreiras, pode obstruir sua participação plena e efetiva na sociedade em igualdade de condições com as demais pessoas.",
    alternativas: ["curto prazo", "médio prazo", "longo prazo", "caráter permanente", "caráter temporário"],
    correta: 2,
    comentario: "Art. 2º da Lei 13.146/2015: impedimento de LONGO PRAZO. A lei não exige que seja permanente."
  },

  // ---------------- ÉTICA NO SERVIÇO PÚBLICO E INTEGRIDADE ----------------
  {
    id: "et-001", disciplina: "Ética no Serviço Público e Integridade", assunto: "Código de Ética (Decreto 1.171/1994)",
    enunciado: "Nos termos do Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal (Decreto nº 1.171/1994), a pena aplicável ao servidor público pela Comissão de Ética é a de:",
    alternativas: ["advertência", "suspensão", "censura", "demissão", "multa"],
    correta: 2,
    comentario: "Item XXII do Código: a pena aplicável pela Comissão de Ética é a censura, fundamentada em parecer assinado por todos os integrantes, com ciência do faltoso. Advertência, suspensão e demissão são penalidades disciplinares da Lei 8.112/90."
  },
  {
    id: "et-002", disciplina: "Ética no Serviço Público e Integridade", assunto: "Lei Anticorrupção (Lei 12.846/2013)",
    enunciado: "Segundo a Lei nº 12.846/2013 (Lei Anticorrupção), as pessoas jurídicas serão responsabilizadas pelos atos lesivos contra a administração pública, nacional ou estrangeira, praticados em seu interesse ou benefício:",
    alternativas: [
      "subjetivamente, apenas no âmbito penal.",
      "objetivamente, nos âmbitos administrativo e civil.",
      "subjetivamente, desde que comprovado o dolo de seus dirigentes.",
      "objetivamente, apenas no âmbito penal.",
      "somente se houver condenação prévia de seus dirigentes."
    ],
    correta: 1,
    comentario: "Art. 2º da Lei 12.846/2013: responsabilidade OBJETIVA, nos âmbitos administrativo e civil. A responsabilização da empresa não exclui a responsabilidade individual de seus dirigentes (art. 3º)."
  },

  // ---------------- DIREITOS HUMANOS E ACESSIBILIDADE ----------------
  {
    id: "dh-001", disciplina: "Direitos Humanos e Acessibilidade", assunto: "Tratados internacionais",
    enunciado: "De acordo com a Constituição Federal, os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes:",
    alternativas: ["às leis ordinárias.", "às leis complementares.", "às emendas constitucionais.", "aos decretos legislativos.", "às normas supralegais."],
    correta: 2,
    comentario: "Art. 5º, § 3º, da CF (incluído pela EC 45/2004). Tratados de direitos humanos aprovados sem esse rito têm status supralegal, segundo o STF (abaixo da CF e acima das leis)."
  },
  {
    id: "dh-002", disciplina: "Direitos Humanos e Acessibilidade", assunto: "Tratados internacionais",
    enunciado: "Possui hierarquia equivalente à de emenda constitucional no ordenamento brasileiro, por ter sido aprovada pelo rito do art. 5º, § 3º, da Constituição Federal, a:",
    alternativas: [
      "Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica).",
      "Declaração Universal dos Direitos Humanos.",
      "Convenção Internacional sobre os Direitos das Pessoas com Deficiência.",
      "Convenção sobre os Direitos da Criança.",
      "Pacto Internacional sobre Direitos Civis e Políticos."
    ],
    correta: 2,
    comentario: "A Convenção sobre os Direitos das Pessoas com Deficiência e seu Protocolo Facultativo foram os primeiros aprovados pelo rito especial (Decreto Legislativo 186/2008). O Pacto de San José tem status supralegal."
  },

  // ---------------- SUSTENTABILIDADE E MEIO AMBIENTE ----------------
  {
    id: "sus-001", disciplina: "Sustentabilidade e Meio Ambiente", assunto: "Agenda 2030",
    enunciado: "A Agenda 2030 para o Desenvolvimento Sustentável, adotada pelos países-membros da ONU em 2015 e incorporada pelo Poder Judiciário brasileiro, é composta por:",
    alternativas: [
      "8 Objetivos de Desenvolvimento do Milênio.",
      "10 Objetivos de Desenvolvimento Sustentável.",
      "12 Objetivos de Desenvolvimento Sustentável.",
      "17 Objetivos de Desenvolvimento Sustentável.",
      "20 Objetivos de Desenvolvimento Sustentável."
    ],
    correta: 3,
    comentario: "São 17 ODS e 169 metas. Os 8 Objetivos de Desenvolvimento do Milênio eram a agenda anterior (2000 a 2015)."
  },
  {
    id: "sus-002", disciplina: "Sustentabilidade e Meio Ambiente", assunto: "Resíduos sólidos (Lei 12.305/2010)",
    enunciado: "Na gestão e no gerenciamento de resíduos sólidos, a Política Nacional de Resíduos Sólidos estabelece como primeira prioridade a:",
    alternativas: ["reciclagem", "reutilização", "não geração", "redução", "disposição final ambientalmente adequada"],
    correta: 2,
    comentario: "Art. 9º da Lei 12.305/2010, em ordem: não geração, redução, reutilização, reciclagem, tratamento dos resíduos e disposição final ambientalmente adequada dos rejeitos."
  },

  // ---------------- INFORMÁTICA, IA E INOVAÇÃO (nova) ----------------
  {
    id: "inf-007", disciplina: "Informática, IA e Inovação", assunto: "Inteligência artificial",
    enunciado: "Em sistemas de inteligência artificial generativa, o fenômeno chamado de \"alucinação\" consiste em:",
    alternativas: [
      "a interrupção do sistema por falta de memória.",
      "a geração de conteúdo falso ou inexistente apresentado com aparência plausível.",
      "a recusa do sistema em responder perguntas jurídicas.",
      "a cópia literal de textos protegidos por direito autoral.",
      "o vazamento de dados pessoais do usuário."
    ],
    correta: 1,
    comentario: "Alucinação é quando o modelo produz informação incorreta ou inventada (por exemplo, uma jurisprudência que não existe) com tom confiante. Por isso o uso no Judiciário exige revisão humana."
  },

  // ---------------- DIREITO CIVIL ----------------
  {
    id: "civ-001", disciplina: "Direito Civil", assunto: "LINDB",
    enunciado: "Segundo a Lei de Introdução às Normas do Direito Brasileiro, salvo disposição contrária, a lei começa a vigorar em todo o país:",
    alternativas: [
      "na data de sua publicação.",
      "trinta dias depois de oficialmente publicada.",
      "quarenta e cinco dias depois de oficialmente publicada.",
      "noventa dias depois de oficialmente publicada.",
      "três meses depois de oficialmente publicada."
    ],
    correta: 2,
    comentario: "Art. 1º da LINDB: 45 dias. Nos Estados estrangeiros, quando admitida, a obrigatoriedade começa três meses depois de publicada (art. 1º, § 1º)."
  },
  {
    id: "civ-002", disciplina: "Direito Civil", assunto: "Capacidade civil",
    enunciado: "De acordo com o Código Civil, com a redação dada pelo Estatuto da Pessoa com Deficiência, são absolutamente incapazes de exercer pessoalmente os atos da vida civil:",
    alternativas: [
      "os ébrios habituais e os viciados em tóxico.",
      "os pródigos.",
      "os menores de 16 anos.",
      "os maiores de 16 e menores de 18 anos.",
      "aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade."
    ],
    correta: 2,
    comentario: "Art. 3º do CC: só os menores de 16 anos são absolutamente incapazes. As demais hipóteses são de incapacidade relativa (art. 4º)."
  },
  {
    id: "civ-003", disciplina: "Direito Civil", assunto: "Prescrição",
    enunciado: "Conforme o Código Civil, prescreve em três anos a pretensão de:",
    alternativas: [
      "reparação civil.",
      "cobrança de dívidas líquidas constantes de instrumento público.",
      "qualquer natureza, quando a lei não fixar prazo menor.",
      "alimentos vencidos.",
      "haver o pagamento de honorários de profissionais liberais."
    ],
    correta: 0,
    comentario: "Art. 206, § 3º, V: reparação civil, 3 anos. Prazo geral: 10 anos (art. 205). Alimentos: 2 anos (§ 2º). Dívidas líquidas em instrumento e honorários: 5 anos (§ 5º)."
  },

  // ---------------- DIREITO PENAL ----------------
  {
    id: "pen-001", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública",
    enunciado: "O funcionário público que solicita, para si, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, pratica o crime de:",
    alternativas: ["concussão", "corrupção passiva", "prevaricação", "peculato", "corrupção ativa"],
    correta: 1,
    comentario: "Art. 317 do CP. Os verbos da corrupção passiva são solicitar, receber ou aceitar promessa. Na concussão (art. 316) o verbo é EXIGIR. Corrupção ativa (art. 333) é praticada pelo particular que oferece a vantagem."
  },
  {
    id: "pen-002", disciplina: "Direito Penal", assunto: "Tempo do crime",
    enunciado: "Quanto ao tempo do crime, o Código Penal considera praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado. Essa regra adota a teoria da:",
    alternativas: ["ubiquidade", "atividade", "resultado", "equivalência", "consumação"],
    correta: 1,
    comentario: "Art. 4º do CP: teoria da atividade para o TEMPO. Para o LUGAR do crime (art. 6º), o CP adota a ubiquidade. Dica: LUTA (Lugar = Ubiquidade, Tempo = Atividade)."
  },
  {
    id: "pen-003", disciplina: "Direito Penal", assunto: "Crimes contra a Administração Pública",
    enunciado: "O funcionário público que se apropria de dinheiro público de que tem a posse em razão do cargo, em proveito próprio, pratica:",
    alternativas: ["peculato", "apropriação indébita", "concussão", "furto qualificado", "prevaricação"],
    correta: 0,
    comentario: "Art. 312 do CP (peculato-apropriação). Se o funcionário reparar o dano antes da sentença irrecorrível, só no peculato CULPOSO há extinção da punibilidade (§ 3º)."
  },

  // ---------------- DIREITO PROCESSUAL PENAL ----------------
  {
    id: "ppe-001", disciplina: "Direito Processual Penal", assunto: "Prisão preventiva",
    enunciado: "De acordo com o Código de Processo Penal, após as alterações da Lei nº 13.964/2019 (Pacote Anticrime), a prisão preventiva:",
    alternativas: [
      "pode ser decretada de ofício pelo juiz em qualquer fase da persecução penal.",
      "não pode ser decretada de ofício pelo juiz.",
      "só pode ser decretada após o recebimento da denúncia.",
      "é cabível em qualquer crime, independentemente da pena.",
      "tem prazo máximo fixo de 81 dias."
    ],
    correta: 1,
    comentario: "Art. 311 do CPP: a preventiva cabe em qualquer fase, mas só a requerimento do MP, do querelante ou do assistente, ou por representação da autoridade policial. O juiz não decreta de ofício."
  },
  {
    id: "ppe-002", disciplina: "Direito Processual Penal", assunto: "Inquérito policial",
    enunciado: "Segundo o art. 10 do Código de Processo Penal, o inquérito policial deverá terminar no prazo de ___ se o indiciado estiver preso, e de ___ quando estiver solto.",
    alternativas: ["5 dias … 15 dias", "10 dias … 30 dias", "15 dias … 30 dias", "10 dias … 60 dias", "30 dias … 90 dias"],
    correta: 1,
    comentario: "Regra geral do CPP: 10 dias (preso) e 30 dias (solto). Atenção: nos inquéritos da Polícia Federal, a Lei 5.010/1966 (art. 66) prevê 15 dias para preso, prorrogáveis por mais 15."
  },
  {
    id: "ppe-003", disciplina: "Direito Processual Penal", assunto: "Competência da Justiça Federal",
    enunciado: "Segundo a Constituição Federal, NÃO compete aos juízes federais processar e julgar:",
    alternativas: [
      "os crimes políticos.",
      "as infrações penais praticadas em detrimento de bens, serviços ou interesse da União.",
      "as contravenções penais, ainda que praticadas em detrimento de interesse da União.",
      "os crimes cometidos a bordo de navios ou aeronaves, ressalvada a competência da Justiça Militar.",
      "os crimes contra a organização do trabalho."
    ],
    correta: 2,
    comentario: "Art. 109, IV, da CF exclui expressamente as contravenções. Súmula 38 do STJ: compete à Justiça Estadual julgar contravenção, mesmo que em detrimento da União."
  },

  // ---------------- DIREITO TRIBUTÁRIO ----------------
  {
    id: "trib-001", disciplina: "Direito Tributário", assunto: "Espécies tributárias",
    enunciado: "Segundo o Código Tributário Nacional, as taxas têm como fato gerador:",
    alternativas: [
      "a valorização imobiliária decorrente de obra pública.",
      "o exercício regular do poder de polícia ou a utilização, efetiva ou potencial, de serviço público específico e divisível.",
      "qualquer situação independente de atividade estatal específica relativa ao contribuinte.",
      "a prestação de serviços públicos gerais e indivisíveis, como a segurança pública.",
      "a sanção por ato ilícito do contribuinte."
    ],
    correta: 1,
    comentario: "Art. 77 do CTN. A alternativa A descreve contribuição de melhoria e a C descreve imposto (art. 16). Serviço geral e indivisível não pode ser custeado por taxa."
  },
  {
    id: "trib-002", disciplina: "Direito Tributário", assunto: "Princípio da anterioridade",
    enunciado: "O tributo que é exceção à anterioridade do exercício financeiro, mas deve respeitar a anterioridade nonagesimal (noventena), é o:",
    alternativas: ["Imposto de Importação", "Imposto de Renda", "IPI", "IOF", "Imposto de Exportação"],
    correta: 2,
    comentario: "Art. 150, § 1º, da CF. O IPI pode ser cobrado no mesmo ano, mas espera 90 dias. II, IE e IOF não respeitam nenhuma das duas. O IR é o contrário: respeita a anual, mas não a noventena."
  },
  {
    id: "trib-003", disciplina: "Direito Tributário", assunto: "Conceito de tributo",
    enunciado: "De acordo com o art. 3º do Código Tributário Nacional, tributo é toda prestação pecuniária compulsória, em moeda ou cujo valor nela se possa exprimir:",
    alternativas: [
      "que constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade discricionária.",
      "que não constitua sanção de ato ilícito, instituída em lei e cobrada mediante atividade administrativa plenamente vinculada.",
      "instituída por lei ou decreto, cobrada mediante atividade discricionária.",
      "que pode constituir sanção de ato ilícito, cobrada mediante atividade vinculada.",
      "instituída por contrato administrativo e cobrada mediante atividade vinculada."
    ],
    correta: 1,
    comentario: "Art. 3º do CTN. Multa não é tributo, pois é sanção de ato ilícito. A cobrança é plenamente vinculada: a autoridade não escolhe se cobra."
  },

  // ---------------- DIREITO PREVIDENCIÁRIO ----------------
  {
    id: "prev-001", disciplina: "Direito Previdenciário", assunto: "Segurados do RGPS",
    enunciado: "É exemplo de segurado facultativo do Regime Geral de Previdência Social:",
    alternativas: [
      "o empregado doméstico.",
      "o trabalhador avulso.",
      "a pessoa que se dedica exclusivamente ao trabalho doméstico em sua própria residência, sem renda própria.",
      "o empresário que recebe pró-labore.",
      "o segurado especial que trabalha em regime de economia familiar."
    ],
    correta: 2,
    comentario: "Facultativo é quem não exerce atividade que o torne segurado obrigatório e decide contribuir (ex.: dona de casa, estudante). Os demais são segurados obrigatórios (art. 11 da Lei 8.213/91)."
  },
  {
    id: "prev-002", disciplina: "Direito Previdenciário", assunto: "Carência",
    enunciado: "Nos termos da Lei nº 8.213/1991, independe de carência a concessão de:",
    alternativas: [
      "aposentadoria por idade.",
      "auxílio por incapacidade temporária decorrente de doença comum.",
      "pensão por morte.",
      "aposentadoria por tempo de contribuição.",
      "salário-maternidade da contribuinte individual."
    ],
    correta: 2,
    comentario: "Art. 26, I: pensão por morte, salário-família e auxílio-acidente independem de carência. Aposentadorias: 180 contribuições. Auxílio por incapacidade comum: 12. Salário-maternidade da contribuinte individual: 10."
  },
  {
    id: "prev-003", disciplina: "Direito Previdenciário", assunto: "Assistência social (BPC)",
    enunciado: "O benefício de prestação continuada (BPC), previsto na Lei Orgânica da Assistência Social, garante um salário mínimo mensal à pessoa com deficiência e ao idoso com idade igual ou superior a ___ que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família.",
    alternativas: ["60 anos", "62 anos", "65 anos", "70 anos", "75 anos"],
    correta: 2,
    comentario: "Art. 20 da Lei 8.742/1993: 65 anos. O BPC é assistencial: não exige contribuição e não gera pensão por morte nem 13º."
  },

  // ---------------- DIREITO AMBIENTAL ----------------
  {
    id: "amb-001", disciplina: "Direito Ambiental", assunto: "Responsabilidade ambiental",
    enunciado: "De acordo com a Constituição Federal, as condutas e atividades consideradas lesivas ao meio ambiente sujeitarão os infratores:",
    alternativas: [
      "pessoas físicas, apenas a sanções penais.",
      "pessoas físicas ou jurídicas, a sanções penais e administrativas, independentemente da obrigação de reparar os danos causados.",
      "pessoas jurídicas, apenas a sanções administrativas.",
      "pessoas físicas ou jurídicas, a sanções administrativas, que substituem a obrigação de reparar o dano.",
      "apenas os agentes públicos, a sanções disciplinares."
    ],
    correta: 1,
    comentario: "Art. 225, § 3º, da CF. É a base da responsabilidade penal da pessoa jurídica por crime ambiental (Lei 9.605/1998). As esferas penal, administrativa e civil são independentes."
  },
  {
    id: "amb-002", disciplina: "Direito Ambiental", assunto: "Responsabilidade ambiental",
    enunciado: "Segundo a Política Nacional do Meio Ambiente (Lei nº 6.938/1981), o poluidor é obrigado a indenizar ou reparar os danos causados ao meio ambiente e a terceiros afetados por sua atividade:",
    alternativas: [
      "somente se comprovado o dolo.",
      "somente se comprovada a culpa.",
      "independentemente da existência de culpa.",
      "apenas quando houver condenação criminal.",
      "apenas se a atividade for ilícita."
    ],
    correta: 2,
    comentario: "Art. 14, § 1º, da Lei 6.938/81: responsabilidade civil OBJETIVA. O STJ aplica a teoria do risco integral, que não admite excludentes como caso fortuito."
  }
];
