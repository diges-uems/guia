/*
  Banco de questões: provas anteriores da VUNESP (2024 em diante).
  Só entram disciplinas do edital TRF3 nº 1/2026 (Analista Judiciário, Área Judiciária).
  Texto e gabarito copiados dos cadernos e gabaritos oficiais (versão 1).
  Ficaram de fora: questões anuladas, questões que dependem de figura e temas fora do edital.

  Campos: id, disciplina, assunto, fonte, textoId (texto-base em TEXTOS),
  enunciado, alternativas (A a E), correta (0 = A ... 4 = E).
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

window.TEXTOS = {
 "tjsp25-esc-t1": "A Universidade de Cambridge, onde Stephen Hawking realizou boa parte de suas contribuições, enfatizou que ele era uma “inspiração para milhões” de pessoas e deixa ao mundo “um legado indelével”. Em um comunicado, Stephen Toope, vice-reitor dessa instituição acadêmica, disse que o renomado professor era um “indivíduo único”, que será lembrado com “calor e carinho”, não só na universidade, mas também em todo o mundo.\n“Suas contribuições excepcionais para o conhecimento científico e a popularidade da ciência e da matemática deixaram um legado indelével”, afirmou a academia da universidade. (https://www.estadao.com.br/ciencia, 14.03.2018. Adaptado)",
 "tjsp25-esc-t2": "Epidemia de violência de gênero tem de ser contida Com a realização do Agosto Lilás, o Brasil dedicou um mês para desenvolver campanhas de conscientização e combate à violência contra a mulher, celebrando a Lei Maria da Penha. Mas, infelizmente, a realidade cruel que envolve esse tipo de crime se mostra implacável e, em meio aos eventos, a divulgação do Mapa Nacional da Violência de Gênero comprova que ainda há muito a ser feito.\nDivulgados na última semana, números organizados a partir de dados extraídos do Ministério da Justiça e Segurança Pública revelam que o país apresentou média de quatro feminicídios e 187 estupros de mulheres por dia no primeiro semestre de 2025. O levantamento detalha, ainda, que 718 mulheres morreram em razão do gênero de janeiro a junho deste ano, conforme os registros de ocorrências. O bárbaro diagnóstico expõe a falha nos mecanismos de proteção e escancara a gravidade desse contexto.\nUm recorte mais amplo mostra que, desde a criação da Lei do Feminicídio, em 2015, o Brasil contabilizou 12.380 vítimas desse crime, e a média de quatro homicídios por dia se repete há cinco anos. Esse roteiro de horror permanente precisa ser interrompido. É urgente que sejam adotadas medidas para melhorar a articulação para o enfrentamento da violência de gênero.\nAs estatísticas assustadoras não podem ser consideradas de interesse apenas da parcela da população que diariamente está na mira dos abusos domésticos e dos ataques nas ruas. E o tema não pode continuar sendo tratado como algo da esfera da moral e particular. Acabar com a violência contra as mulheres é uma responsabilidade da gestão pública e precisa ser encarada como prioridade.\nA sociedade brasileira não pode aceitar que o país se transforme, cada vez mais, em um território de perigo para meninas e mulheres. Essa epidemia de violência precisa ser contida, e o Estado, o Judiciário e as forças de segurança, especialmente as polícias especializadas, têm que executar ações de forma conjunta diante do quadro alarmante.\nO abuso sexual, a morte e a agressão por gênero não podem fazer parte do cotidiano nacional. As políticas públicas precisam amparar as mulheres presas em relacionamentos violentos, oferecendo a elas a certeza de que há caminho longe desse horror.\n(Editorial. https://www.correiobraziliense.com.br/opiniao, 01.09.2025. Adaptado)",
 "tjsp25-esc-t3": "Passaporte da cultura Ao lado dos brasileiros, o povo mais musical que tive o privilégio de conhecer são os cabo-verdianos. O amor incondicional que nutrem pelo país e pelos seus ritmos não tem paralelo. Um amor libertador, que não precisa possuir para se validar. Um amor não exigente, mas que se faz presente na língua que todos aprendem a falar desde o berço — ou melhor, a declamar e a cantar desde o ventre. Não é exagero:\ntodos os cabo-verdianos que conheço são poetas.\nEmbora se reconheça Cesária Évora como sendo a voz que revelou a alma do arquipélago, existe nas montanhas longínquas do interior de Santiago um gênero que já sofrera os seus desafios de silenciamento. Uma música catártica, crua e negra com a qual gerações novas se reconciliaram e aprenderam a reivindicar a sua herança africana. A música continua a ser o passaporte da cultura cabo-verdiana no mundo. Está presente em todos os momentos marcantes da história do país, e é por meio dela que as memórias ancestrais são catalogadas e transportadas para o futuro. Um dos músicos mais celebrados da nação é Orlando Pantera, um cometa que viveu na terra por escassos 33 anos.\nNão gravou nenhum álbum, morreu no dia em que iniciaria, em Paris, as gravações do disco que confirmaria aquilo que os habitantes da ilha de Santiago já sabiam: era um gênio.\nE um dos poucos que conseguiu transportar para a canção o sentir das gentes dos campos, os esquecidos, os seus ritmos e desejos.\n(Kalaf Epalanga. Minha pátria é a língua pretuguesa: Crônicas.\n2023. Adaptado)",
 "tjsp25-sis-t4": "De como Itaguaí ganhou uma casa de Orates1 As crônicas da Vila de Itaguaí dizem que em tempos remotos vivera ali um certo médico, o Dr. Simão Bacamarte, filho da nobreza da terra e o maior dos médicos do Brasil, de Portugal e das Espanhas. Estudara em Coimbra e Pádua. Aos trinta e quatro anos regressou ao Brasil, não podendo el-rei alcançar dele que ficasse em Coimbra, regendo a universidade, ou em Lisboa, expedindo dos negócios da monarquia.\n– A ciência, disse ele a Sua Majestade, é o meu emprego único, Itaguaí é o meu universo.\nDito isso, meteu-se em Itaguaí, e entregou-se de corpo e alma ao estudo da ciência, alternando as curas com as leituras e demonstrando os teoremas com cataplasmas2.\nAos quarenta anos casou com D. Evarista da Costa e Mascarenhas, senhora de vinte e cinco anos, viúva de um juiz de fora, e não bonita nem simpática. Um dos tios dele, caçador de pacas perante o Eterno, e não menos franco, admirou-se de semelhante escolha e disse-lho. Simão Bacamarte explicou-lhe que D. Evarista reunia condições fisiológicas e anatômicas de primeira ordem, digeria com facilidade, dormia regularmente, tinha bom pulso e excelente vista; estava assim apta para dar-lhe filhos robustos, sãos e inteligentes. Se além dessas prendas, únicas dignas da preocupação de um sábio, D. Evarista era mal composta de feições, longe de lastimá-lo, agradecia-o a Deus, porquanto não corria o risco de preterir os interesses da ciência na contemplação exclusiva, miúda e vulgar da consorte. D. Evarista mentiu às esperanças do Dr. Bacamarte, não lhe deu filhos robustos nem mofinos. A índole natural da ciência é a longanimidade3; o nosso médico esperou três anos, depois quatro, depois cinco. Ao cabo desse tempo fez um estudo profundo da matéria, releu todos os escritores árabes e outros, que trouxera para Itaguaí, enviou consultas às universidades italianas e alemãs, e acabou por aconselhar à mulher um regime alimentício especial. A ilustre dama, nutrida exclusivamente com a bela carne de porco de Itaguaí, não atendeu às admoestações do esposo; e à sua resistência, – explicável, mas inqualificável –, devemos a total extinção da dinastia dos Bacamartes.\n(Machado de Assis. O Alienista) Casa de Orates: casa de loucos, manicômio.\nCataplasmas: massas medicamentosas.\nLonganimidade: firmeza de ânimo.",
 "tjsp25-sis-t5": "Um Oscar para a coragem Já conquistamos cinco Copas do Mundo, mas nunca tivemos um Prêmio Nobel e até anteontem jamais havíamos levado um Oscar. De certa forma, isto nos resumia: um país bom de bola, mas ruim do resto. Não mais: o Brasil finalmente entrou para o time dos laureados com o principal prêmio do cinema mundial, ganhando como melhor filme de língua não inglesa com a produção Ainda Estou Aqui.\nIsso não significa, é claro, que de uma hora para outra o cinema brasileiro tenha se tornado uma potência capaz de ombrear com a indústria de países com muito mais tradição nessa arte. No entanto, o prêmio para Ainda Estou Aqui aponta o amadurecimento dos artistas e profissionais brasileiros nessa arte que comove e diverte o mundo há mais de um século. É muito provável que essa vitória atraia mais curiosidade no exterior sobre o cinema brasileiro e acalente os sonhos dos jovens diretores daqui.\nDito isso, mesmo que não tivesse sido o primeiro filme brasileiro a conquistar um Oscar, Ainda Estou Aqui tem um significado extraordinário para o País, como poucas obras de arte tiveram em nossa história. À medida que o filme passou a ganhar visibilidade, críticas positivas e prêmios no exterior, instalou-se no País um sentimento que só costumamos ver em época de Copas do Mundo.\nQuando a atriz espanhola Penélope Cruz anunciou o Oscar para o longa dirigido por Walter Salles, o Brasil explodiu em celebração. Tanto entusiasmo não é exagero. Como destacou Fernanda Torres, atriz principal do filme, o fato de uma produção falada em português ter recebido três indicações ao Oscar – melhor filme, melhor atriz e melhor filme estrangeiro – já era um feito.\nAncorado na atuação impecável de Fernanda Torres, agora um talento internacionalmente reconhecido, o filme conseguiu, com sutileza e sobriedade, retratar a vida de inúmeras famílias. Com isso, a produção transformou um tema local em algo universal.\nAo decidir narrar a história dos Paiva na atual conjuntura, portanto, o diretor Walter Salles foi particularmente corajoso, sobretudo porque deu visibilidade à aguerrida Eunice, que lutou para preservar sua família e perseverou em busca de justiça. Só isso já é digno de aplausos. Nem precisava de Oscar. (Opinião. https://www.estadao.com.br/opiniao, 04.03.2025. Adaptado)",
 "tjsp25-cont-t6": "Choque de realidade na Polônia A madrugada de 10 de setembro passado foi um divisor de águas: 19 drones russos penetraram o espaço aéreo da Polônia, membro da Otan, obrigando caças poloneses e holandeses a abatê-los. Foi a primeira vez desde 1949 que aeronaves da aliança confrontaram armamentos russos em território aliado. O premiê polonês, Donald Tusk, alertou:\n“Foi o momento mais próximo de um conflito aberto desde a 2a Guerra Mundial”. O gesto deixou claro o que está em jogo: a credibilidade da defesa coletiva no coração da ordem euro-atlântica.\nMoscou acusou Varsóvia de disseminar “mitos”. Mas a escala, a origem e o momento – às vésperas do exercício Zapad, na Bielorrússia, que tradicionalmente ensaia cenários de guerra contra a Otan – não deixam dúvidas: foi uma operação de sondagem. Vladimir Putin buscou testar tempo de resposta, interoperabilidade e nervos políticos da aliança, a fim de expor velhas fissuras e, sobretudo, abrir novas. A estratégia é antiga, mas eficaz: avançar por meio de provocações ambíguas, negar responsabilidade e colher inteligência e dividendos psicológicos.\nA resposta não pode ser tímida nem só verbal. É preciso combinar três dimensões. Primeiro, defesa ativa: interceptar sistematicamente qualquer incursão, reforçar o policiamento aéreo e deslocar barreiras antiaéreas para o leste. Segundo, apoio ampliado à Ucrânia: negar à Rússia os “santuários”\nde onde partem ataques implica fornecer a Kiev arsenais de longo alcance, inteligência e meios industriais para atingir fábricas de drones e mísseis no território russo. Terceiro, clareza estratégica: a Otan precisa provar que não tolerará a criação de uma nova “zona cinzenta” em seu firmamento, riscando linhas vermelhas – ao invés de diluí-las.\nA investida na Polônia foi o ensaio de um desafio maior à segurança europeia e ao sistema internacional. O episódio serve de alerta a líderes europeus que continuam a tratar suas obrigações de defesa com tibieza, ao contrário da Polônia, que leva a ameaça russa a sério. A diretora de Relações Exteriores da União Europeia enunciou a verdade da qual muitos se esquivam: “A guerra da Rússia está escalando, não acabando”.\nA lição é tão antiga quanto a guerra: fraqueza é um convite à agressão. Reagir com firmeza já não é escalar, é dissuadir. Armar a Ucrânia e fortalecer a integridade da Otan são a única forma de evitar que a Rússia transforme provocações em rotina, e rotinas, em guerra aberta. O teste foi feito. A hora da verdade chegou.\n(Editorial. https://www.estadao.com.br/opiniao, 12.09.2025. Adaptado)",
 "tjsp25-cont-t7": "Na conversa de anteontem com Rita esqueceu-me dizer a parte relativa a minha mulher, que lá está enterrada em Viena. Pela segunda vez falou-me em transportá-la para o nosso jazigo. Novamente lhe disse que estimaria muito estar perto dela, mas que, em minha opinião, os mortos ficam bem onde caem; redarguiu-me que estão muito melhor com os seus.\n– Quando eu morrer, irei para onde ela estiver, no outro mundo, e ela virá ao meu encontro – disse eu.\nSorriu, e citou o exemplo da viúva Noronha, que fez transportar o marido de Lisboa, onde faleceu, para o Rio de Janeiro, onde ela conta acabar. Não disse mais sobre este assunto, mas provavelmente tornará a ele, até alcançar o que lhe parece. Já meu cunhado dizia que era seu costume dela, quando queria alguma cousa.\nOutra cousa que não escrevi foi a alusão que ela fez à gente Aguiar, um casal que conheci a última vez que vim, com licença, ao Rio de Janeiro, e agora encontrei. São amigos dela e da viúva, e celebram daqui a dez ou quinze dias as suas bodas de prata. Já os visitei duas vezes e o marido, a mim.\nRita falou-me deles com simpatia e aconselhou-me a ir cumprimentá-los por ocasião das festas aniversárias. (Machado de Assis. Memorial de Aires.\nhttps://machadodeassis.net/texto/memorial-de-aires)",
 "mpsp25-prom-t8": "O ECA digital é um bom avanço O Congresso aprovou o Projeto de Lei no 2.628/2022, batizado de “Estatuto da Criança e do Adolescente Digital”, que aguarda a sanção do Executivo. Entre a versão que foi ao plenário da Câmara e a que saiu para a aprovação do Senado, o texto passou por transformações que merecem ser reconhecidas: afastaram-se riscos claros e imediatos à liberdade de expressão e foram refinadas medidas de proteção mais consistentes para crianças e adolescentes. No balanço geral, o resultado é positivo, mas poderia ter sido melhor, e, pelos riscos incorridos numa tramitação desnecessariamente atabalhoada, resta uma sensação de alívio por ter-se evitado um desastre.\nA Câmara quase entregou um arcabouço que permitiria remoções indiscriminadas de conteúdo, sem ordem judicial, a partir de denúncias genéricas. Quase concedeu ao Executivo poderes para suspender redes inteiras por ato administrativo. Quase institucionalizou uma guerra de denúncias, abrindo a porta à censura privada. Esses desastres foram revertidos, felizmente, por pressão da oposição: a legitimidade de denúncia foi limitada a vítimas, responsáveis e órgãos competentes, e a interrupção de plataformas ficou restrita ao Judiciário.\nMas a tramitação açodada deixou lacunas e ambiguidades. Persistem conceitos vagos, como a exigência de evitar o “uso compulsivo”, que pode ser interpretado de múltiplas maneiras. Permanecem dúvidas sobre a futura “autoridade nacional” responsável por regulamentar e fiscalizar a lei: terá autonomia real, ou será capturada pelo governo de turno?\nComo se sabe, o diabo mora nos detalhes – mas também, às vezes, na falta deles. Um marco regulatório só se sustenta se for tecnicamente sólido e institucionalmente blindado contra arbitrariedades.\nAlém disso, é preciso reconhecer que leis, sozinhas, não resolverão o problema. A exploração infantil nas redes é real e abjeta, mas não será contida apenas por notificações de conteúdo. O avanço regulatório sobre as plataformas não pode servir de pretexto para aliviar responsabilidades dos agentes públicos, transferir culpas e alimentar a ilusão de que a vigilância digital substitui a investigação criminal. Proteger os menores exige corresponsabilidade: família, escola, instituições públicas e empresas precisam agir em conjunto, cada qual no âmbito de sua função.\nO Brasil tem a chance de implementar uma regulação que concilie a proteção integral da infância com o respeito às liberdades. Para tanto, precisará resistir às tentações do sentimentalismo e do voluntarismo, e assumir que nenhum texto legal substituirá a “aldeia inteira” necessária para educar e proteger crianças. Uma lei robusta é um começo. Mas sua aplicação exigirá vigilância, prudência e a coragem de corrigir rumos quando for preciso.\n(Editorial. https://www.estadao.com.br/opiniao, 29.08.2025. Adaptado)",
 "mpsp25-aj-t9": "Desemprego cai, precarização sobe A taxa de desemprego de 6,2% apurada pelo IBGE para o trimestre encerrado em maio não representa apenas o patamar mais baixo da série histórica da pesquisa, iniciada em 2012. O indicador reflete a mudança profunda de um mercado de trabalho marcado pela “uberização”, que vai muito além da informalidade dos aplicativos de transportes para se estender a inúmeras atividades criadas com a digitalização da economia.\nOs dados do IBGE, monitorados pela Pesquisa Nacional por Amostra de Domicílios (Pnad) Contínua, atestam que há 39,3 milhões de trabalhadores informais no País, o que não é pouco. E embora a taxa de informalidade tenha caído de 38,1% para 37,8% de um trimestre móvel para outro, é uma queda que deve ser relativizada, já que houve alta de 3,7% daqueles que trabalham como CNPJ, os autônomos da era da “pejotização”. Há alguns anos o emprego atravessa uma fase de precarização, fenômeno não apenas brasileiro, mas mundial.\nNum mundo sob novos parâmetros, faz-se necessário o aperfeiçoamento dos critérios de análise para compor um retrato mais fiel do mundo do trabalho. O gráfico do desemprego, em trajetória de queda desde o trimestre encerrado em maio de 2021, não pode ser traduzido como um caminho firme ao pleno emprego, por mais auspiciosos que os dados possam parecer.\nNelson Marconi, professor da FGV Eaesp, comparou, em recente artigo, microdados da Pnad do ano de 2012, quando a taxa de desemprego estava baixa (média de 7,4%) com o ano fechado de 2024 (média de 6,9%). Em vez de abordar as condições de oferta de emprego, como nível de escolaridade e qualificação profissional, o trabalho de Marconi foi orientado pela demanda, buscando identificar quem contrata e para qual tipo de ocupação. Concluiu que o mercado de trabalho no ano passado estava tão aquecido quanto em 2012, mas com empregos de menor qualidade e remunerações mais baixas mesmo para ocupações que demandam maior qualificação.\nÉ o mesmo cenário deste ano, com perda de dinamismo do setor produtivo, redução de setores industriais relevantes e investimento insuficiente em setores tecnologicamente mais sofisticados. Um quadro distante do alvissareiro pleno emprego, já que, ao fim das contas, o saldo é a perda do poder de compra, embora a massa de salários em circulação tenha renovado a máxima da série do IBGE, chegando a R$ 354,605 bilhões no trimestre terminado em maio.\nOs dados confirmam que um indicador isolado pouco reflete a economia como um todo. Enquanto o poder de compra se mantiver corroído por uma inflação acima da meta, a queda no desemprego não significa felicidade.\n(Editorial. https://www.estadao.com.br/opiniao, 02.07.2025. Adaptado)",
 "spcine24-aj-t10": "2024 caminha para entrar para a história como um ponto de virada do cinema nacional. Se, em 1990, o termo retomada entrou em cena para marcar a produção de longas que conquistaram sucesso de crítica e público, a atual sequência positiva é marcada pelos números de bilheteria. Até o dia 11 de setembro 2024, os filmes nacionais levaram 7,4 milhões de pessoas aos cinemas, com renda de R$ 142 milhões, marcando os melhores números desde 2020.\nOs dados, disponíveis no Painel Indicadores do Mercado de Exibição da Agência Nacional do Cinema (Ancine), indicam uma verdadeira retomada de público e renda. Mesmo antes do fim do ano, os dados são animadores. Ao todo, já foram exibidos 212 títulos nacionais nos cinemas. O número tende a crescer, com as estreias de Passagrana e de Silvio. Até dezembro, novas produções estão previstas – para comparação, em 2023, chegaram às telonas 281 produções brasileiras.\nEm termos de renda, 2024 já é o melhor ano desde a eclosão da pandemia de covid-19. Parte do aumento dos números pode ser explicada por filmes que atraíram uma multidão aos cinemas. Os Farofeiros 2 (1,878 milhão), Minha Irmã e Eu (1,816 milhão) e Nosso Lar 2 – Os Mensageiros (1,611 milhão) lideram a bilheteria de produções brasileiras. O desempenho dos filmes chama atenção já que, desde 2019, nenhuma produção nacional havia conseguido superar a marca de mais de 1 milhão de espectadores nos cinemas. Se, de um lado, as produções parecem ter atraído mais público, houve também a retomada da Lei de Cotas de Telas – que tinha perdido vigência em setembro de 2021. A legislação, que dispõe sobre o número mínimo de filmes brasileiros que devem ser exibidos nos cinemas, voltou a entrar em vigor no último mês de julho.\nAlém do desempenho de público, o cinema nacional, em 2024, também tem tido reconhecimento internacional. Ainda Estou Aqui, novo longa de Walter Salles, sem previsão de lançamento, tem chamado atenção da crítica estrangeira. O filme, que faturou o prêmio de Melhor Roteiro no Festival de Veneza, virou a principal aposta brasileira para voltar à disputa de Melhor Filme Estrangeiro no Oscar – o que não ocorre desde 1999, com Central do Brasil, também de Walter Salles.\n(Gabriel Lima. https://www.metropoles.com/entretenimento/cinema. 22.09.2024. Adaptado)"
};

window.QUESTOES = [
 {
  "id": "campinas25-proc-001",
  "disciplina": "Direito Constitucional",
  "assunto": "Organização do Estado",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 1",
  "enunciado": "A respeito das Formas de Estado, assinale a alternativa correta.",
  "alternativas": [
   "O Estado Unitário caracteriza-se por uma estrutura de poder única, completamente centralizada, e uma ordem jurídica central; já a Confederação e a União de Estados, se formam com a reunião de Estados, que perdem a soberania, mas mantêm um certo grau de independência.",
   "A diferença entre o Estado Federal e o Estado Unitário descentralizado não está na descentralização em si, mas na origem jurídica dos poderes exercidos pelas unidades federadas.",
   "O primeiro estado federal da história foi formado pelas colônias alemãs, que se reuniram formando a Alemanha, em 1787; 10 (dez) anos depois, houve a promulgação da Constituição dos Estados Unidos da América, estabelecendo-se como o segundo estado federal criado.",
   "Atualmente, a doutrina majoritária entende que a distribuição do poder típica do federalismo deve ser compreendida como uma espécie de dupla soberania, compartilhada entre a União e os Estados-membros.",
   "Considera-se que a autonomia é um dos elementos essenciais da forma federativa de Estado, e ela é formada pela capacidade de autogoverno e auto-organização, mas não engloba a participação dos Estados-membros na vontade federal, por não se considerar como um elemento essencial do federalismo."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-002",
  "disciplina": "Direito Constitucional",
  "assunto": "Poder Judiciário",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 2",
  "enunciado": "Considere que, no dia 01 de março de 2020, foi promulgada a Lei Estadual no 10.000/2020, a qual proibiu a Administração Pública de contratar obras e serviços com empresas que tenha tido empregado condenado, com trânsito em julgado, por crime ou contravenção que se relacionem com a prática de atos discriminatórios. De acordo com a jurisprudência do Supremo Tribunal Federal, a Lei Estadual no 10.000/2020 é",
  "alternativas": [
   "constitucional, pois concretiza o princípio da moralidade no âmbito da administração estadual, como preceitua o caput do art. 37 da Constituição Federal.",
   "constitucional apenas se tiver origem parlamentar, pois a iniciativa de tal matéria é da competência exclusiva do Poder Legislativo.",
   "constitucional, pois concretiza a vedação ao racismo, estipulando condição legalmente cabível.",
   "inconstitucional, pois ofende diretamente o princípio da intransmissibilidade da pena, expressamente previsto no rol do art. 5o da Constituição Federal.",
   "dotada de inconstitucionalidade material orgânica, pois compete à União, exclusivamente, editar leis que versem sobre licitação."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-003",
  "disciplina": "Direito Constitucional",
  "assunto": "Controle de constitucionalidade",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 3",
  "enunciado": "Suponha que foi publicada uma decisão administrativa do Tribunal de Justiça do Estado X, que tem conteúdo normativo dotado de generalidade e abstração. Inconformado com o teor da deliberação, o Governador do Estado X ajuizou ação direta de inconstitucionalidade no Supremo Tribunal Federal. Ocorre que, dois dias após o protocolo da inicial, o Governador procedeu ao seu aditamento, com o fim de incluir novos dispositivos legais na impugnação. Com base na situação hipotética apresentada e no disposto na jurisprudência do Supremo Tribunal Federal, é correto afirmar:",
  "alternativas": [
   "admite-se que decisão administrativa de Tribunal de Justiça seja objeto de ação direta de inconstitucionalidade, a qual deve ter seu mérito analisado ainda que a deliberação seja revogada, mas o Governador do Estado não tem legitimidade para propor ação direta com esse objeto.",
   "após despachada a inicial, não é possível o aditamento, devendo o Governador ajuizar uma nova ação direta de inconstitucionalidade.",
   "o aditamento à petição inicial é possível, desde que não seja necessário requerer novas informações do Advogado-Geral da União e do Procurador-Geral da República e que não atrapalhe o objeto da ação.",
   "a ação direta de inconstitucionalidade não deve ser conhecida, pois não se admite que ela tenha por objeto decisão administrativa de Tribunal de Justiça.",
   "o aditamento à petição inicial em ação direta de inconstitucionalidade é admitido até a publicação do despacho do relator que o coloca em pauta para julgamento."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-004",
  "disciplina": "Direito Constitucional",
  "assunto": "Organização do Estado",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 4",
  "enunciado": "Imagine que Luciano foi eleito para o cargo de Prefeito do Município X, mas, durante o período eleitoral, sua campanha foi marcada pelo abuso do poder econômico. José, que também concorreu ao mesmo cargo, inconformado por ter perdido o pleito por apenas 5 (cinco) votos, pretende impugnar o mandato eletivo, nos termos que disciplina a Constituição Federal. Com base na situação hipotética, é correto afirmar que José",
  "alternativas": [
   "poderá ajuizar ação de impugnação de mandato eleitoral, que tramitará em segredo de justiça, mas que o julgamento será público.",
   "deverá aguardar a posse de Luciano para ajuizar ação de impugnação de mandato eleitoral.",
   "poderá ajuizar ação na Justiça Eleitoral, no prazo de 15 (quinze) dias úteis contados da proclamação do resultado.",
   "poderá ajuizar ação de impugnação de mandato eletivo, que deve ser protocolada em 3 (três) dias contados da diplomação, dispensando-se a prova pré-constituída.",
   "deverá instruir a ação com provas do abuso do poder econômico e, se a ação for julgada improcedente pela totalidade dos membros do Tribunal Regional Eleitoral, será condenado ao décuplo das custas."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-005",
  "disciplina": "Direito Constitucional",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 5",
  "enunciado": "A respeito da eficácia e aplicabilidade das normas constitucionais, assinale a alternativa correta.",
  "alternativas": [
   "Não há uma distinção entre eficácia jurídica e eficácia social, pois ambos os termos são utilizados como sinônimos para medir a aplicabilidade das normas constitucionais.",
   "Até pelo menos a década de 1960, prevaleceu na doutrina brasileira o entendimento defendido por Meirelles Teixeira, que acolhia a distinção entre normas autoaplicáveis e normas não autoaplicáveis, denominadas pela doutrina americana como normas self-executing, self-acting, ou self-enforcing, e normas not self-executing, not self-acting, ou not self-enforcing.",
   "Nem todas as normas constitucionais possuem eficácia jurídica, na medida em que as normas de eficácia limitada são consideradas do tipo não autoaplicáveis, dependendo da intermediação do Poder Legislativo para obter efetividade.",
   "Um dos expoentes na matéria de eficácia e aplicabilidade das normas constitucionais foi Pontes de Miranda. Ele classificava as normas em dois grupos: as normas bastantes em si mesmas, que independem de concretização legislativa para alcançarem sua plena eficácia, e as normas incompletas, não bastantes em si mesmas e que reclamam atuação do legislador infraconstitucional.",
   "Em decorrência da segurança jurídica e do descrédito que enfrenta o Poder Legislativo, atualmente a doutrina majoritária prega que as normas constitucionais modernas devem ter uma mínima abertura à mediação do legislador, dependendo, sempre, da análise da conveniência e oportunidade antes de se proceder à concretização."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-006",
  "disciplina": "Direito Constitucional",
  "assunto": "Poder Judiciário",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 6",
  "enunciado": "Considere que, em sede de controle difuso de constitucionalidade, por meio de julgamento de recurso extraordinário repetitivo, com repercussão geral, o Supremo Tribunal Federal decidiu a lide e não declarou a lei inconstitucional, mas, por razões de segurança jurídica, é desejável que tal decisão tenha seus efeitos modulados. Com base na situação hipotética e no disposto na jurisprudência do Supremo Tribunal Federal, é correto afirmar que:",
  "alternativas": [
   "em face da não declaração de inconstitucionalidade da lei, o quórum exigido para a modulação de efeitos da decisão é da totalidade dos membros da Turma do Supremo Tribunal Federal em que tramita o recurso extraordinário.",
   "em sede de controle difuso de constitucionalidade, a modulação de efeitos deve ser feita pelo relator do recurso extraordinário, desde que haja motivação em razões de segurança jurídica.",
   "como o Supremo Tribunal Federal não declarou a lei inconstitucional, exige-se quórum de maioria absoluta para modular os efeitos dessa decisão.",
   "diante da excepcionalidade da modulação de efeitos em sede de controle difuso, é necessário voto favorável de pelo menos 3/4 (três quartos) dos membros do Supremo Tribunal Federal.",
   "não se admite a modulação de efeitos em sede de controle difuso de constitucionalidade."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-007",
  "disciplina": "Direito Constitucional",
  "assunto": "Controle de constitucionalidade",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 7",
  "enunciado": "Considere que foi aprovada, no Município de Campinas, a Lei no 10.000/2025, que obriga a implantação de ambulatório médico ou serviço de Pronto-Socorro equipado para o atendimento de emergência em shoppings centers localizados no referido ente federativo. A Associação Nacional de Shopping Centers – ANSC deseja impugnar a norma e ajuizar ADI Estadual, já que, de acordo com a Constituição do Estado de São Paulo, ela possui tal competência. Com base na situação hipotética apresentada e no disposto na jurisprudência do Supremo Tribunal Federal, é correto afirmar:",
  "alternativas": [
   "a Lei no 10.000/2025 é formalmente constitucional, pois ainda que verse sobre Direito do Consumidor, tal previsão encontra-se no âmbito da competência legislativa concorrente, enquadrando-se, também, como interesse preponderantemente local.",
   "ainda que, de acordo com a Constituição do Estado de São Paulo, a ANSC tenha legitimidade para ajuizar ação direta de inconstitucionalidade estadual, falta-lhe legitimidade para interpor recurso extraordinário da decisão proferida pelo Tribunal de Justiça.",
   "a Lei no 10.000/2025 é constitucional, pois visa proteger o direito à saúde e garantir a incolumidade física dos frequentadores do shopping, impondo obrigação razoável e proporcional.",
   "da decisão proferida em sede de ADI Estadual, caberá recurso extraordinário ao Supremo Tribunal Federal, se constatada que a Lei ofende norma de observância obrigatória disposta na Constituição Federal, e, exclusivamente nesse tipo de apelo, dispensa-se a exigência de prequestionamento.",
   "a Lei no 10.000/2025 é formal e materialmente inconstitucional, pois invade a competência legislativa da União e afronta os princípios da livre iniciativa, da razoabilidade e da proporcionalidade."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-008",
  "disciplina": "Direito Constitucional",
  "assunto": "Nacionalidade",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 8",
  "enunciado": "Suponha que Gabriela e Marcelo são brasileiros naturalizados e que, há 20 (vinte) anos, se mudaram de São Paulo e foram, com animus definitivo, morar em Bordeaux, na França. Após um ano na nova residência, eles tiveram uma filha, Carolina, que não foi registrada na repartição brasileira competente, e que se mudou para o Brasil há um ano, com o fim de residir com sua avó, no Município de Campinas. Com base na situação hipotética apresentada e no disposto na Constituição Federal, é correto afirmar que",
  "alternativas": [
   "Carolina será considerada brasileira naturalizada após residir por mais de 15 (quinze) anos ininterruptos no Brasil, independentemente de requerer a nacionalidade brasileira.",
   "já que Carolina é filha de brasileiros naturalizados, a ela será garantida a mesma espécie de nacionalidade, não podendo concorrer ao cargo de Prefeita do Município de Campinas após completar 21 (vinte e um) anos.",
   "como Gabriela e Marcelo deixaram o Brasil há mais de 15 (quinze) anos, com animus definitivo, Carolina apenas será considerada brasileira naturalizada após residir no território brasileiro por, pelo menos, 10 (dez) anos.",
   "Carolina será considerada brasileira naturalizada, desde que seja fluente na língua portuguesa e comprove residência por 2 (dois) anos ininterruptos e idoneidade moral.",
   "como Carolina já reside no Brasil e já atingiu a maioridade, poderá optar, a qualquer tempo, pela nacionalidade brasileira, sendo considerada brasileira nata."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-009",
  "disciplina": "Direito Constitucional",
  "assunto": "Organização do Estado",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 9",
  "enunciado": "Considere que, em face do fenômeno da conurbação, os habitantes dos Municípios A e B se encontram cada vez mais próximos, compartilhando a mesma cultura e muitos hábitos. Em face dessa identidade populacional, os Prefeitos das referidas localidades estão pressionando a Assembleia Legislativa Estadual para editar a lei estadual necessária para que haja a fusão dos municípios. Com base na situação apresentada e no disposto na Constituição Federal, é correto afirmar que",
  "alternativas": [
   "antes da edição da lei estadual pela Assembleia Legislativa, é preciso que as Câmaras Municipais editem, cada uma, uma lei autorizando a fusão.",
   "após a divulgação dos Estudos de Viabilidade Municipal, as populações dos Municípios A e B deverão ser ouvidas por meio de plebiscito.",
   "a primeira etapa do processo de fusão dos municípios é a edição, pela Assembleia Legislativa, de lei complementar estadual.",
   "os Prefeitos do Municípios A e B deveriam pressionar a edição de lei federal por meio do Congresso Nacional, pois essa é a primeira etapa do processo de fusão dos municípios.",
   "após a recente decisão do Supremo Tribunal Federal, proferida em ação direta de inconstitucionalidade por omissão, se a inércia do Congresso Nacional persistir até junho de 2026, será automaticamente autorizada a fusão de municípios, desde que observados todos os requisitos constantes na Constituição."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-010",
  "disciplina": "Direito Constitucional",
  "assunto": "Poderes Legislativo e Executivo",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 10",
  "enunciado": "De acordo com o disposto na Constituição Federal, sem a sanção do Presidente da República, cabe ao Congresso Nacional:",
  "alternativas": [
   "dispor sobre matéria cambial.",
   "conceder anistia.",
   "dispor sobre incorporação de áreas de Territórios ou Estados, ouvidas as respectivas Assembleias Legislativas.",
   "apreciar os atos de concessão e renovação de concessão de emissoras de rádio e televisão.",
   "criar, transformar e extinguir cargos, empregos e funções."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-011",
  "disciplina": "Direito Constitucional",
  "assunto": "Poder Judiciário",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 11",
  "enunciado": "Suponha que, durante o processo legislativo que elaborou a Lei Ordinária Federal no 1.234/25, o Senado Federal, enquanto Casa revisora, esclareceu o texto, acrescentando uma emenda de redação. No entanto, o projeto de lei não retornou à Casa iniciadora para nova votação e, logo depois, foi vetado pelo Presidente da República. Em seguida, a Câmara dos Deputados e o Senado Federal, em sessão conjunta, derrubaram o veto e aprovaram a lei. Considerando a situação hipotética apresentada e o disposto na jurisprudência do Supremo Tribunal Federal, assinale a alternativa correta.",
  "alternativas": [
   "Como se tratou de uma emenda de redação, com o fim de esclarecer o texto, a lei deve ser considerada formalmente constitucional, apesar de que, em regra, exige-se a discussão e aprovação de um projeto de lei por ambas as casas, sendo obrigatório que qualquer alteração de conteúdo ao projeto aprovado por uma das Casas do Congresso Nacional retorne à outra.",
   "Emendas de redação são obrigatoriamente consideradas como inovação e o projeto de lei deveria ter retornado para a Câmara dos Deputados, configurando-se hipótese de inconstitucionalidade formal objetiva.",
   "A derrubada do veto pela Câmara dos Deputados tem o efeito de sanar o vício no processo legislativo e, consequentemente, impossibilita a análise que o Supremo Tribunal Federal poderia vir a fazer de sua inconstitucionalidade formal.",
   "O art. 65 da Constituição Federal estabelece uma regra procedimental para assegurar o bicameralismo, de forma que qualquer emenda ao projeto de lei deve, obrigatoriamente, retornar à Casa iniciadora, sob pena de ser considerada inexistente.",
   "O retorno do projeto emendado à Casa iniciadora advém do fato de ele ter sido simplesmente emendado, e, como não foi observado o procedimento constitucional, o Presidente da República, antes de analisar o teor e decidir pela sanção ou veto, deveria ter devolvido o projeto de lei à Câmara dos Deputados."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-012",
  "disciplina": "Direito Constitucional",
  "assunto": "Poder Judiciário",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 12",
  "enunciado": "A respeito do Tribunal de Contas, assinale a alternativa que está de acordo com o disposto na Constituição Federal.",
  "alternativas": [
   "Os Ministros do Tribunal de Contas da União terão as mesmas garantias, prerrogativas, e impedimentos dos Ministros do Supremo Tribunal Federal.",
   "Os responsáveis pelo controle interno, ao tomarem conhecimento de ilegalidade, dela darão ciência ao Tribunal de Contas da União, sob pena de responsabilidade solidária, o que não se aplica em caso de irregularidade.",
   "O Tribunal de Contas da União é integrado por 9 (nove) Ministros, sendo que 2/3 (dois terços) deles são escolhidos pelo Congresso Nacional.",
   "As Constituições estaduais irão dispor sobre os Tribunais de Contas respectivos, que serão integrados por 11 (onze) Conselheiros.",
   "Compete ao Tribunal de Contas da União fiscalizar as contas nacionais das empresas supranacionais de cujo capital social a União participe, desde que a participação ocorra de forma direta."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-013",
  "disciplina": "Direito Constitucional",
  "assunto": "Organização do Estado",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 13",
  "enunciado": "Suponha que Flávia, obedecendo a todos os trâmites legais, abriu uma empresa na cidade de Campinas para prestar o serviço de hotel e day care para cachorros e gatos. A atividade empresarial cresceu rapidamente e, em 1 (um) ano, ela já contava com mais de 50 (cinquenta) funcionários. No entanto, uma notícia falsa disseminada nas redes sociais fez com que a empresa de Flávia perdesse muitos clientes e, para não ter que demitir seus empregados, ela resolveu parar de pagar a contribuição social para a Seguridade Social que incide sobre o faturamento e sobre a folha de salários e demais rendimentos do trabalho pagos ou creditados, a qualquer título, às pessoas físicas que lhe prestam serviço. Com base na situação hipotética e no disposto na Constituição Federal, assinale a alternativa correta.",
  "alternativas": [
   "Flávia poderá parcelar o débito em até 180 (cento e oitenta) meses, desde que concorde na incidência de juros e de correção monetária, no mesmo patamar aplicado às dívidas relativas aos tributos federais.",
   "A inadimplência com o sistema da seguridade social impede a empresa de Flávia de contratar com o Poder Público, mas não obsta a receber benefícios creditícios, dada sua natureza estritamente privada.",
   "A inadimplência com o sistema da seguridade social impede a empresa de Flávia de contratar com o Poder Público, mas não obsta a receber incentivos fiscais.",
   "É possível que à Flávia seja deferida a moratória das contribuições sociais devidas, desde que haja motivação idônea.",
   "São vedados a moratória e o parcelamento em prazo superior a 60 (sessenta) meses das contribuições sociais devidas."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-014",
  "disciplina": "Direito Constitucional",
  "assunto": "Direitos e garantias fundamentais",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 14",
  "enunciado": "A respeito dos Direitos e Garantias Fundamentais, assinale a alternativa correta.",
  "alternativas": [
   "Na experiência constitucional brasileira, os direitos individuais são previstos desde a primeira Constituição republicana, promulgada em 1891, pois, durante o período imperial, as Cartas Constitucionais não previram direitos individuais nem coletivos, mas apenas mecanismos de manutenção e concentração do poder.",
   "Os direitos fundamentais podem ser restringidos tanto por expressa disposição constitucional quanto por norma legal promulgada com fundamento na Constituição, e também por meio de limitações advindas da colisão de um direito fundamental com outros bens jurídico-constitucionais.",
   "É uníssono na doutrina brasileira que os animais não podem ser titulares de direitos fundamentais, em face da ausência de previsão legal e do rol estrito de tais direitos, o que não ocorre, por exemplo, na Convenção Americana sobre Direitos Humanos, que garante diversos direitos dessa natureza aos animais.",
   "A noção de que os direitos fundamentais cumprem papéis diversificados na ordem constitucional, o que se denomina de multifuncionalidade, tem sua origem remota atribuída ao publicista alemão Wolfgang Hoffmann-Riem.",
   "Apesar de existir posicionamento minoritário, a doutrina majoritária reconhece exclusivamente a aplicabilidade imediata das normas de direitos fundamentais elencadas no rol do artigo 5o da Constituição Federal."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-015",
  "disciplina": "Direito Constitucional",
  "assunto": "Poder Judiciário",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 15",
  "enunciado": "Considere que Luiz, advogado atuante na área dos direitos humanos, notou que a Lei no 20.000/2024 tem incompatibilidade com um tratado de direitos humanos, que tem status de norma constitucional, em vigor no país. O referido diploma legislativo permite que trabalhadores do setor da bananicultura tenham intervalo intrajornada de apenas 15 (quinze) minutos e recebam R$ 20,00 (vinte reais) pelo dia trabalhado. Luiz tem diversos amigos que atuam nessas lavouras e que se sentem prejudicados pela carga excessiva de trabalho. Assim, imbuído do desejo de ajudar, pensou em ajuizar uma ação, na comarca em que residem os trabalhadores, requerendo que seja realizado o controle de convencionalidade difuso e declarada a incompatibilidade da norma. Com base na situação hipotética referida, assinale a alternativa correta.",
  "alternativas": [
   "O controle de convencionalidade só é cabível nas hipóteses em que o tratado tiver sido internalizado com quórum qualificado, podendo ser ajuizado em qualquer Tribunal do país, mas não perante juiz de primeiro grau.",
   "Como o tratado que Luiz deseja usar como paradigma é formalmente constitucional, não cabe controle de convencionalidade, mas apenas de constitucionalidade.",
   "O controle de convencionalidade deve ser primeiro ajuizado perante um tribunal internacional, uma vez que o controle interno de convencionalidade é secundário, complementar.",
   "Luiz deve ajuizar o controle de convencionalidade perante o Supremo Tribunal Federal, pois não se admite que tal controle seja realizado na modalidade difusa.",
   "O juiz a quem for distribuída a ação deverá realizar o controle de convencionalidade, pois esse é um dever que decorre da ordre public internacional, não podendo ser afastado por qualquer pretexto, sob pena de responsabilidade internacional do Estado."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-016",
  "disciplina": "Direito Administrativo",
  "assunto": "Serviços públicos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 16",
  "enunciado": "O art. 27, caput, e §1o, da Lei no 8.987/95, autoriza a transferência da concessão de serviço público ou do controle societário da concessionária a terceiros, nas hipóteses em que especifica. A respeito da transferência da concessão, a sua compatibilidade com os princípios constitucionais da Administração Pública e a jurisprudência do Supremo Tribunal Federal, é correto afirmar que",
  "alternativas": [
   "a transferência da concessão pode ocorrer sem a anuência do poder concedente, pois a concessão é exercida por conta e risco do concessionário.",
   "a realização da medida viola o princípio constitucional da licitação.",
   "a transferência pode ser realizada, desde que o concessionário comprove ter observado o princípio da impessoalidade.",
   "o poder concedente deve anuir com a transferência, mas cabe ao concessionário decidir com quem fará a transferência, pois a operação entre cedente e cessionário é disciplinada pelo direito privado.",
   "embora a medida não viole o princípio constitucional da licitação, não é compatível com os princípios da moralidade, da impessoalidade e da eficiência."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-017",
  "disciplina": "Direito Administrativo",
  "assunto": "Agentes públicos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 17",
  "enunciado": "Um cientista, formado por uma renomada universidade pública, passou a divulgar em suas redes sociais ter descoberto a fórmula para a cura do câncer. Segundo relata em suas postagens, a composição do medicamento é relativamente simples e pode ser utilizada para tratar a doença em todas as suas formas, inclusive em pacientes em estágio terminal. O relato é corroborado por postagens de supostos pacientes, que, emocionados, afirmam ter alcançado a cura. Atendendo ao clamor popular, o Congresso Nacional autorizou seu uso e determinou a inclusão da “pílula do câncer” no Sistema Único de Saúde, em contrariedade à decisão da agência reguladora federal com competência técnica para tratar do assunto. A mesma lei obrigou, ainda, o poder público a fornecer gratuitamente medicamentos aprovados por órgãos de vigilância sanitária de outros países, enquanto não validados pela agência brasileira. Com base nessa situação hipotética e na jurisprudência do Supremo Tribunal Federal, a respeito do controle judicial de atos de agências reguladoras, é correto afirmar que",
  "alternativas": [
   "o Poder Judiciário não pode ordenar, em qualquer hipótese, a concessão de medicamento não validado pela agência sanitária local.",
   "o Poder Judiciário pode autorizar a concessão da pílula do câncer para pacientes em estágio terminal, mesmo de forma contrária à decisão da agência.",
   "como se trata de tema técnico, prevalece a decisão da agência reguladora.",
   "o ato da agência reguladora de vetar a concessão da pílula do câncer é ilegal, por contrariar a decisão do Congresso Nacional.",
   "o Poder Judiciário deve ordenar o poder público a entregar os medicamentos previstos no enunciado, salvo se forem de alto custo."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-018",
  "disciplina": "Direito Administrativo",
  "assunto": "Agentes públicos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 18",
  "enunciado": "Um servidor da Secretaria de Educação do Município X cometeu um erro operacional e autorizou, no mês de dezembro, o pagamento da remuneração de todos os professores da rede municipal de ensino como se fossem diretores de escola, além do pagamento em duplicidade do décimo terceiro salário. O equívoco só foi identificado após a transferência dos recursos para as contas dos profissionais. Após tomar ciência do problema, o Secretário convocou uma reunião com o sindicato representante da categoria profissional, que se posicionou contra a devolução dos valores aos cofres públicos, sob o argumento de que os profissionais receberam os valores de boa-fé. Alguns servidores já entraram com ações judiciais, em que foram concedidas liminares para impedir que a Administração cobre os valores. Para participar da reunião, o Secretário convocou os Procuradores Mário e Mariana, que, com base na situação hipotética e na jurisprudência do Superior Tribunal de Justiça, poderão afirmar que",
  "alternativas": [
   "o STJ entende que a devolução pode ser realizada quando o pagamento decorre de erro operacional.",
   "a devolução não pode ser realizada, pois as rubricas têm natureza alimentar.",
   "a devolução pode ser executada administrativamente, com desconto em folha, sem que seja necessária a concordância do servidor.",
   "de fato, a devolução não é devida, pois o pagamento se deu por erro administrativo.",
   "a devolução é devida tanto em caso de erro operacional como de interpretação inadequada da lei, pela Administração."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-019",
  "disciplina": "Direito Administrativo",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 19",
  "enunciado": "Com base na Lei no 13.019/14, a respeito do Procedimento de Manifestação de Interesse Social (PMIS), é correto afirmar que a sua",
  "alternativas": [
   "proposição acontece, em regra, por iniciativa da Administração.",
   "realização pode ser imposta como condição para a realização de chamamento público ou celebração de parceria.",
   "proposição não impede a organização da sociedade civil proponente de participar de eventual chamamento público subsequente.",
   "propositura somente pode ser feita por organizações da sociedade civil, constituídas há, pelo menos, um ano.",
   "propositura deve resultar no ressarcimento ao proponente pelos custos incorridos na elaboração do projeto, ainda que não venha a ser utilizado em chamamento público."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-020",
  "disciplina": "Direito Administrativo",
  "assunto": "Agentes públicos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 20",
  "enunciado": "O Secretário de Gestão do Município X está estudando medidas para a redução de gastos com pessoal, tendo em vista a sinalização de que o ente alcançará, em breve, os limites estabelecidos pela Lei de Responsabilidade Fiscal. Para tanto, entre as medidas analisadas, está a propositura de projeto de lei que proíba o pagamento de horas extras a profissionais da área da saúde remunerados por subsídio, preveja a perda do direito às férias do servidor que tenha usufruído mais de dois meses de licença médica no ano, bem como o limite a incidência do terço de férias a trinta dias de descanso para as carreiras profissionais cujos períodos sejam de quarenta e cinco dias. Com base na situação hipotética, no disposto na Constituição Federal e na jurisprudência do Supremo Tribunal Federal, é correto afirmar que",
  "alternativas": [
   "o direito de férias pode ser regulado dessa forma, pois compete ao ente municipal dispor sobre o regime jurídico dos servidores estatutários.",
   "a restrição do terço de férias é inconstitucional, pois o adicional deve incidir sobre a remuneração relativa ao período de descanso.",
   "a proposta é redundante, pois a Constituição Federal já proíbe o pagamento do adicional de horas extras para servidores remunerados por subsídio.",
   "o adicional de horas extras pode ser pago em conjunto com o subsídio, mas não o abono de permanência.",
   "as três medidas são válidas, pois são inerentes ao poder de auto-organização do Município."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-021",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 21",
  "enunciado": "A respeito do Sistema de Registro de Preços (SRP), com base na Lei no 14.133/21, é correto afirmar que",
  "alternativas": [
   "em regra, o seu edital não precisa conter a quantidade máxima de cada item que poderá ser adquirido.",
   "o contrato decorrente da adesão à ata de registro de preços deve ser executado em até 60 (sessenta) meses.",
   "pode, desde que atendidas as condições legais, ser utilizado para contratações de obras e de serviços de engenharia.",
   "a ata de registro de preços formada pela União não pode ser utilizada pelos Estados, Distrito Federal e Municípios.",
   "não pode ter o seu cadastro formado por dispensa ou inexigibilidade de licitação."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-022",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 22",
  "enunciado": "Com relação a contratações diretas por inexigibilidade de licitação, com base na Lei no 14.133/21, é correto afirmar que",
  "alternativas": [
   "não abarcam os procedimentos de credenciamento.",
   "podem ser realizadas para a contratação de profissional do setor artístico, desde que não representado por empresário.",
   "não se aplicam à contratação de obras.",
   "não podem ser utilizadas para a aquisição ou locação de imóveis.",
   "podem contemplar serviços técnicos especializados de natureza, predominantemente, intelectual, desde que não sejam de publicidade e divulgação."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-023",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 23",
  "enunciado": "O Município de Campinas foi afetado por chuvas acima da média histórica, as quais causaram graves danos à infraestrutura da cidade e impactaram diversas obras atualmente em fase de execução. Há expectativa de que sejam apresentados pedidos de reequilíbrio econômico-financeiro e de alterações contratuais, com significativo impacto econômico. Diante desse cenário, o setor de planejamento da Secretaria de Finanças convocou reunião para tratar do tema. Com base na situação hipotética e na Lei no 14.133/21, o Procurador do Município que participe do encontro poderá afirmar, corretamente, que",
  "alternativas": [
   "os pedidos de reequilíbrio dos contratos deverão ser analisados, de forma conclusiva, no prazo de 30 (trinta) dias.",
   "nos casos em que adotada a contratação integrada, será autorizada a alteração dos valores contratuais, independentemente da distribuição de riscos feita no contrato.",
   "a Administração poderá ajustar o fluxo do pagamento financeiro ou mudar a forma de pagamento, bem como autorizar a antecipação de pagamento, sem a correspondente contraprestação, desde que haja interesse público justificado e concordância do contratado.",
   "os pedidos de reequilíbrio devem ser apreciados de acordo com a matriz de risco do contrato, que pode ter alocado o risco de índices pluviométricos acima da média história no contratado.",
   "caso o evento se enquadre na área econômica extraordinária e extracontratual, a Administração pode alterar unilateralmente o contrato, para reestabelecer o seu equilíbrio econômico-financeiro."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-024",
  "disciplina": "Direito Administrativo",
  "assunto": "Serviços públicos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 24",
  "enunciado": "A unidade responsável pela estruturação de concessões e parcerias público-privadas no Município de Campinas/ SP está estudando realizar a concessão, à iniciativa privada, da construção, manutenção e operação de 05 (cinco) unidades escolares, que deverão funcionar em tempo integral durante a semana e ser utilizadas nos finais de semana, pela comunidade, para prática de atividades de lazer, por um prazo de 35 anos. As contrapartidas do parceiro privado serão pagas integralmente pelo Município. Com base na situação hipotética e o disposto nas Leis no 8.987/95 e 11.079/04, é correto afirmar que",
  "alternativas": [
   "poderá prever a necessidade de constituição de sociedade de propósito específico, de acordo com a conveniência da Administração.",
   "se trata de uma concessão patrocinada.",
   "o projeto não pode ser executado dessa forma, pois o prazo máximo das concessões é de 30 anos.",
   "a contraprestação pública pode ser garantida pela instituição ou utilização de fundo especial previsto em lei.",
   "o projeto não pode ser implantado, pois a celebração de uma concessão de serviços públicos pressupõe, necessariamente, a cobrança de tarifas dos usuários dos serviços."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-025",
  "disciplina": "Direito Administrativo",
  "assunto": "Bens públicos e intervenção na propriedade",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 25",
  "enunciado": "Com relação à desapropriação, assinale a alternativa correta.",
  "alternativas": [
   "Apenas os Municípios e o Distrito Federal, no exercício de competência municipal, que possuem plano diretor podem utilizar a desapropriação urbanística.",
   "A expropriação confiscatória deve ser realizada mediante o pagamento de indenização em títulos da dívida agrária.",
   "Os bens inalienáveis não podem ser desapropriados.",
   "É um dos efeitos ordinários da declaração de utilidade do bem a imissão provisória, do expropriante, na posse.",
   "A adestinação é equivalente à tredestinação lícita e, portanto, sujeita à retrocessão."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-026",
  "disciplina": "Direito Administrativo",
  "assunto": "Agentes públicos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 26",
  "enunciado": "De acordo com a jurisprudência do Supremo Tribunal Federal, a respeito do registro da legalidade dos atos de admissão de pessoal e de registro de aposentadorias, pelos Tribunais de Contas, assinale a alternativa correta.",
  "alternativas": [
   "O Tribunal de Contas não pode apreciar a legalidade do registro de aposentadoria ou de pensão, quando o ato administrativo for executado em cumprimento à decisão judicial.",
   "O registro deve ser feito caso haja a nomeação para o provimento de cargo efetivo ou em comissão.",
   "A competência técnica do Tribunal de Contas, ao negar registro de admissão de pessoal, subordina-se à revisão pelo Poder Legislativo respectivo.",
   "Os Tribunais de Contas estão sujeitos ao prazo de 5 anos para o julgamento da legalidade do ato de concessão inicial de aposentadoria, reforma ou pensão, a contar da chegada do processo à respectiva Corte de Contas.",
   "Ao apreciar a legalidade do ato de concessão inicial de aposentadoria, o Tribunal de Contas deve observar o contraditório e a ampla defesa, antes de decidir sobre o assunto."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-027",
  "disciplina": "Direito Administrativo",
  "assunto": "Responsabilidade civil do Estado",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 27",
  "enunciado": "O Secretário de Segurança Urbana convocou uma reunião, em seu gabinete, para tratar dos limites de responsabilização do Município pela atuação da guarda municipal. Ele demonstrou preocupação com a repercussão de um incidente recente envolvendo a guarda civil, uma vez que há relatos de que agentes da guarda tentaram realizar a prisão em flagrante de assaltantes, o que resultou em tiroteio, causando lesões a civis e uma vítima fatal. Há, ainda, um fator agravante: os assaltantes estavam foragidos do sistema prisional estadual há três meses. O Secretário manifestou a intenção de adotar, no âmbito administrativo, o entendimento firmado pelo Superior Tribunal de Justiça sobre a matéria, buscando orientação quanto às respostas que poderá oferecer à imprensa, caso seja questionado. Diante desse contexto, Joana, Procuradora do Município presente à reunião, poderá afirmar que",
  "alternativas": [
   "o Estado, e não o Município, deve responder pelos danos causados, pois foram praticados por foragidos.",
   "o Município responde objetivamente pelos danos causados em função do tiroteio, independentemente da origem dos disparos.",
   "o Município só responderá pelos danos caso o projétil tenha partido de armas dos guardas civis.",
   "os guardas civis devem responder pessoalmente por esses atos.",
   "o Estado e o Município não precisarão indenizar os dependentes da vítima fatal, caso possua benefício previdenciário pela morte."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-028",
  "disciplina": "Direito Administrativo",
  "assunto": "Atos administrativos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 28",
  "enunciado": "O Prefeito do Município X pretende editar Decreto disciplinando o uso de calçadas por estabelecimentos comerciais que as utilizam para expor produtos e para bares e restaurantes que tenham a intenção de ocupar esses espaços com mesas e cadeiras, com fins comerciais. Com base na situação hipotética, o disposto na Lei de Introdução às Normas do Direito Brasileiro e a teoria do ato administrativo, é correto afirmar:",
  "alternativas": [
   "a edição de Decreto deve ser precedida de consulta pública.",
   "a consulta pública deve ser realizada e deverá ocorrer, preferencialmente, de forma presencial.",
   "por se tratar de espécie de ato administrativo e, portanto, incapaz de inovar na ordem jurídica, a edição do Decreto não pode ser precedida de consulta pública.",
   "o Decreto não pode dispor sobre esse assunto, por se tratar de matéria sujeita à reserva de lei.",
   "o Decreto pode tratar do assunto, caso esteja disciplinando regras básicas definidas em lei."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-029",
  "disciplina": "Direito Administrativo",
  "assunto": "Improbidade administrativa",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 29",
  "enunciado": "A respeito da improbidade administrativa, com base na jurisprudência dos Tribunais Superiores, assinale a alternativa correta.",
  "alternativas": [
   "É incabível o manejo de ação civil de improbidade administrativa exclusivamente contra o particular, sem a presença de agente público no polo passivo da demanda, ainda que se trate de integrante de organização privada que administra recursos públicos.",
   "A pessoa jurídica interessada não possui legitimidade para celebrar acordos de não persecução civil, pois se trata de competência privativa do Ministério Público.",
   "Atualmente, as ações de improbidade administrativa julgadas improcedentes ou extintas em razão da carência da ação não estão sujeitas ao reexame necessário, independentemente do valor da causa.",
   "O dolo só passou a ser necessário para a configuração da improbidade administrativa após o início da vigência da Lei no 12.320/21.",
   "A competência para julgar ação de improbidade proposta por Município contra ex-prefeito que não prestou contas de convênio federal será da Justiça Federal, ainda que não haja no processo a presença das pessoas jurídicas previstas no art. 109, I, da Constituição Federal."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-030",
  "disciplina": "Direito Administrativo",
  "assunto": "Poderes administrativos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 30",
  "enunciado": "A respeito do poder disciplinar, é correto afirmar que",
  "alternativas": [
   "está relacionado ao poder de avocar e delegar competências a autoridades hierarquicamente inferior.",
   "o seu exercício está sujeito ao princípio da tipicidade estrita.",
   "se confunde com o poder hierárquico.",
   "é exercido, em regra, contra indivíduos vinculados à Administração por uma relação de sujeição geral.",
   "é exercido também contra particulares com quem a Administração possui relações jurídicas de sujeição especial, como, por exemplo, os contratados."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-031",
  "disciplina": "Direito Tributário",
  "assunto": "Impostos em espécie",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 31",
  "enunciado": "Jerônimo, contribuinte de certo imposto lançado por homologação, olvidou-se de declarar ao Fisco determinada operação, ocorrida no dia 10 de janeiro de 2020, consequentemente, deixou de efetuar o pagamento do imposto referente àquela operação. Nessa situação hipotética, no que se refere ao crédito fiscal, é correto afirmar que",
  "alternativas": [
   "como nada há a homologar, o Fisco deverá realizar o lançamento de ofício até a data limite de 31 de dezembro de 2025, sob pena de decadência.",
   "o Fisco deverá realizar o denominado lançamento suplementar dentro do prazo de cinco anos, contados da data da operação, sob pena de decadência.",
   "o Fisco não mais poderá exigir o crédito correspondente à operação, haja vista a ocorrência da denominada homologação tácita, pela qual, na qualidade de credor, renunciou ao crédito a que teria direito.",
   "tratando-se de tributo lançado por homologação, o Fisco deverá realizar o lançamento suplementar dentro de cinco anos contados do fato gerador, sob pena de prescrição.",
   "a falta de pagamento do imposto implicará que seja considerado como não sendo integral, acarretando a necessidade do lançamento suplementar, a ser realizado no prazo de cinco anos, contados do fato gerador, sob pena da perda do direito material fiscal."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-032",
  "disciplina": "Direito Tributário",
  "assunto": "Crédito tributário",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 32",
  "enunciado": "Dentre as modalidades de extinção do crédito tributário, o Código Tributário Nacional prevê a compensação, observadas as regras que especifica. A esse respeito, é correto afirmar que",
  "alternativas": [
   "a concessão de tutela de evidência afasta a vedação de que a compensação não possa ser realizada antes do trânsito em julgado da decisão judicial.",
   "a ação declaratória de inexistência de relação jurídico tributária é o meio hábil para obter a compensação antes do trânsito em julgado da decisão judicial.",
   "no caso de tributo indevidamente recolhido, objeto de contestação pelo sujeito passivo, cuja inconstitucionalidade tenha sido declarada, não se impõe a vedação de que a compensação se realize, antes do trânsito em julgado da decisão judicial.",
   "o mandado de segurança constitui-se em ação adequada para o fim de obter a declaração do direito à compensação tributária.",
   "o mandado de segurança constitui-se em ação adequada para legitimar a compensação tributária com plenos efeitos retroativos."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-033",
  "disciplina": "Direito Tributário",
  "assunto": "Impostos em espécie",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 33",
  "enunciado": "No que diz respeito aos embargos do executado, em sede de execução fiscal, é correto afirmar que",
  "alternativas": [
   "eventuais exceções de suspeição, incompetência ou impedimento deverão ser arguidas em como preliminares e serão processadas e julgadas antes do julgamento dos embargos.",
   "a reconvenção e a compensação serão analisadas como preliminares e processadas e julgadas juntamente com os próprios embargos.",
   "tratando-se de execução por carta, os embargos serão oferecidos no Juízo deprecado, que os remeterá ao Juízo deprecante para instrução e julgamento, salvo quando tiverem por objeto vícios e irregularidades do próprio Juízo deprecado.",
   "o executado poderá oferecê-los no prazo de 30 dias contados da citação, oportunidade na qual poderá oferecer rol de até duas testemunhas ou, a critério do juiz, até o dobro desse limite.",
   "a garantia da execução constitui-se em exigência absoluta, condição sem a qual não são admissíveis os embargos do executado."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-034",
  "disciplina": "Direito Tributário",
  "assunto": "Crédito tributário",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 34",
  "enunciado": "Autoriza a lei que disciplina a matéria, que o procedimento da medida cautelar fiscal possa ser instaurado, após a constituição do crédito, inclusive quando já em curso a execução judicial da Dívida Ativa de qualquer dos entes federativos, bem como de suas respectivas autarquias. Todavia, em determinadas situações que especifica, o requerimento da medida independerá da prévia constituição do crédito tributário. Na hipótese de João ser seu devedor, a Fazenda Pública poderá requerer a medida cautelar, sem que o crédito tributário esteja constituído, caso João",
  "alternativas": [
   "se ausente ou tente se ausentar, tendo domicílio certo, com vistas a elidir o adimplemento da obrigação.",
   "possua débitos, inscritos ou não na Dívida Ativa, que somados ultrapassem trinta por cento do seu patrimônio conhecido.",
   "venha a contrair ou tentar contrair dívidas que comprometam a liquidez de seu patrimônio.",
   "aliene seus bens ou direitos sem proceder à devida comunicação ao órgão da Fazenda Pública competente, embora sabendo que tal comunicação seja exigível em virtude de lei.",
   "venha a intentar, sem ter domicílio certo, ausentar-se ou alienar os bens que possui."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-035",
  "disciplina": "Direito Tributário",
  "assunto": "Impostos em espécie",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 35",
  "enunciado": "Manoel e Antônio são coproprietários de um único imóvel urbano localizado em certo município no qual é exigível o Imposto sobre a Propriedade Predial e Territorial Urbana – IPTU. Por força de lei municipal, é concedida isenção do imposto para aposentados que não possuam outro imóvel, sendo certo que apenas Manoel apresenta tal condição. Na hipótese, a cobrança do valor do imposto deverá ser direcionada a",
  "alternativas": [
   "ambos os proprietários, em sua totalidade, porque, em razão da copropriedade, restará caracterizada a solidariedade tributária passiva que não comporta benefício de ordem.",
   "Antônio, pelo saldo, visto que a cota parte relativa a Manoel deverá ser excluída, por disposição expressa do Código Tributário Nacional.",
   "ambos os coproprietários, em sua totalidade, porque a condição de copropriedade impede que a isenção seja cindida.",
   "Antônio, em sua totalidade, visto que embora a isenção favoreça a Manoel, o valor do imposto não tem como ser cindido por se tratar de copropriedade.",
   "Antônio, pelo saldo, no caso da lei isentante municipal assim estabelecer, especificamente para os casos de copropriedade, haja vista que a competência territorial para conceder isenção é privativa do município."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-036",
  "disciplina": "Direito Tributário",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 36",
  "enunciado": "Aristides, no ano de 2022, praticou certa infração tributária. Na época, a legislação previa multa de 50% a ser aplicada no caso da prática da referida infração. Não havendo qualquer dúvida por parte do agente fiscal, quanto à prática da infração e seus correlatos, Aristides foi autuado em 2023, quando, por alteração legislativa, a multa punitiva havia sido reduzida para 40%. Aristides recorreu, tempestivamente, da autuação, em data na qual a legislação havia reduzido novamente a multa para 30%. Em 2025, nova modificação legislativa alterou a multa para 20% e assim permanece atualmente. Sabendo que o recurso de Aristides ainda está pendente de julgamento, é correto afirmar que, no caso de não provimento, a multa a ser aplicada a Aristides será de",
  "alternativas": [
   "20%, com base na legislação vigente na pendência do julgamento do recurso.",
   "20%, sob a justificativa de ser, em qualquer caso, mais benéfica ao infrator.",
   "30%, com base na legislação vigente à data da interposição do recurso.",
   "50%, com base na legislação vigente à data da prática da infração.",
   "40%, com base na legislação vigente à data da autuação."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-037",
  "disciplina": "Direito Tributário",
  "assunto": "Princípios e imunidades",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 37",
  "enunciado": "Determinados pela Constituição Federal, dentre os princípios gerais, o Sistema Tributário Nacional deve observância ao princípio da",
  "alternativas": [
   "singularidade.",
   "pluralidade.",
   "economicidade.",
   "complexidade.",
   "simplicidade."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-038",
  "disciplina": "Direito Tributário",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 38",
  "enunciado": "Nos termos determinados pela Constituição Federal, acerca das contribuições sociais e de intervenção no domínio econômico, é correto afirmar que",
  "alternativas": [
   "é vedada, na forma da lei, a equiparação das pessoas naturais, destinatárias das operações de importação, com as pessoas jurídicas.",
   "não incidem sobre a importação de produtos estrangeiros ou serviços.",
   "as hipóteses em que incidirão uma única vez é matéria destinada à lei complementar.",
   "podem ter alíquotas ad valorem, tendo por base a unidade de medida adotada.",
   "têm incidência sobre as receitas decorrentes de exportação."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-039",
  "disciplina": "Direito Tributário",
  "assunto": "Impostos em espécie",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 39",
  "enunciado": "No que se refere ao Imposto sobre a Propriedade Predial e Territorial Urbana – IPTU, a Constituição Federal",
  "alternativas": [
   "autoriza a aplicação de alíquotas diferentes para imóveis cujo uso seja residencial ou comercial.",
   "impede a aplicação de alíquotas diferenciadas com base na localização do imóvel, por ofensa ao princípio da isonomia tributária.",
   "impede a progressividade do imposto em razão do valor do imóvel, por ofensa à capacidade contributiva.",
   "veda a atualização da sua base de cálculo pelo Poder Executivo, com base em critérios estabelecidos por lei municipal, por ofensa ao princípio da estrita legalidade.",
   "veda a progressividade do imposto no tempo com finalidade punitiva, em qualquer caso, por caracterizar confisco."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-040",
  "disciplina": "Direito Tributário",
  "assunto": "Impostos em espécie",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 40",
  "enunciado": "Acerca do ISS – Imposto Sobre Serviços, conforme estatuído pela Lei Complementar no 116/2003, é correto afirmar que",
  "alternativas": [
   "incide sobre o valor dos depósitos bancários, o principal, juros e acrescimentos moratórios quando relativos a operações de crédito realizadas por instituições financeiras.",
   "tem por fato gerador as prestações de serviços constantes da lei, que dependem da atividade preponderante do prestador e da denominação do serviço prestado.",
   "não incide sobre os serviços prestados mediante a utilização de bens e serviços públicos explorados economicamente mediante autorização, permissão ou concessão, ainda quando remunerados por tarifa paga pelo usuário final.",
   "incide sobre as exportações e serviços para o exterior do País, quanto aos serviços desenvolvidos no Brasil, cujo resultado aqui se verifique, salvo quando o pagamento for feito por residente no exterior.",
   "incide sobre o serviço proveniente do exterior do País ou cuja prestação se tenha iniciado no exterior do País."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-041",
  "disciplina": "Direito Tributário",
  "assunto": "Impostos em espécie",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 41",
  "enunciado": "Quando desempenhado pelo órgão competente nos limites da lei aplicável, com observância do processo legal e tratando-se de atividade a que a lei tenha como discricionária, sem abuso ou desvio de poder, o exercício regular do poder de polícia é de ser remunerado por receita proveniente de",
  "alternativas": [
   "imposto, porque sua utilização é considerada divisível, ou seja, destinada a cada indivíduo.",
   "imposto, porque sua utilização é considerada específica, ou seja, pode ser identificada.",
   "contribuição especial, porque o produto de sua arrecadação é destinado à segurança pública.",
   "taxa, porque constitui uma das modalidades de fato gerador do tributo.",
   "imposto, porque sua utilização é considerada universalizada, ou seja, por toda a sociedade."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-042",
  "disciplina": "Direito Tributário",
  "assunto": "Impostos em espécie",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 42",
  "enunciado": "Na repartição das receitas tributárias, pertence aos municípios 25% do produto da arrecadação do ICMS – imposto sobre operações relativas à circulação de mercadorias e sobre prestações de serviços de transporte interestadual e intermunicipal e de comunicação. Nesse sentido, a parcela creditada segundo o critério constitucional que considera a proporção do valor adicionado nas operações relativas à circulação de mercadorias e nas prestações de serviços realizadas nos territórios municipais será, no mínimo, de",
  "alternativas": [
   "65%.",
   "50%.",
   "35%.",
   "80%.",
   "22,5%."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-043",
  "disciplina": "Direito Tributário",
  "assunto": "Impostos em espécie",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 43",
  "enunciado": "De acordo com matéria objeto de Súmula dos Tribunais Superiores, assinale a alternativa correta no que diz respeito ao Imposto sobre operações de circulação de mercadoria e sobre as prestações de serviço de transporte interestadual ou de comunicação – ICMS ou ao Imposto Sobre a prestação de Serviços – ISS.",
  "alternativas": [
   "O fornecimento de concreto, por empreitadas, para construção civil, preparado no trajeto até a obra em betoneiras acopladas a caminhões, é operação de circulação de mercadoria, sujeitando apenas à incidência do ICMS.",
   "A base de cálculo do ISS incide apenas sobre a taxa de agenciamento quando o serviço prestado por sociedade empresária de trabalho temporário for de intermediação, devendo englobar os valores dos salários e encargos sociais dos trabalhadores por ela contratados nas hipóteses de fornecimento de mão de obra.",
   "A prestação de serviço de composição gráfica, personalizada e sob encomenda, quando envolva fornecimento de mercadorias, está sujeita ao ICMS e ao ISS.",
   "O ISS não incide sobre o valor dos serviços de assistência médica, incluindo-se neles as refeições, os medicamentos e as diárias hospitalares.",
   "É constitucional a incidência do ISS nas operações de locação de bens móveis, mas inconstitucional a incidência do imposto na operação de arrendamento mercantil de coisas móveis."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-044",
  "disciplina": "Direito Tributário",
  "assunto": "Crédito tributário",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 44",
  "enunciado": "Dentre as causas relacionadas ao crédito tributário, aquela que, por lei, pode autorizar a autoridade administrativa a concedê-la, por despacho fundamentado, para atender a hipótese de erro ou ignorância escusáveis do sujeito passivo quanto à matéria de fato é a",
  "alternativas": [
   "isenção.",
   "anistia.",
   "remissão.",
   "moratória.",
   "transação."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-045",
  "disciplina": "Direito Tributário",
  "assunto": "Crédito tributário",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 45",
  "enunciado": "De acordo com disposição expressa do Código Tributário Nacional, na hipótese de pagamento indevido, a ação anulatória da decisão administrativa que denega a restituição prescreve em",
  "alternativas": [
   "três anos, contados da reforma da decisão condenatória.",
   "cinco anos, contados da extinção do crédito tributário.",
   "três anos, contados da anulação da decisão condenatória.",
   "cinco anos, contados do pagamento indevido.",
   "dois anos, contados da ciência da decisão."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-046",
  "disciplina": "Direito Processual Civil",
  "assunto": "Recursos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 46",
  "enunciado": "O prefeito do município X recebeu mandado de pagamento, em ação monitória, para o qual foi concedido o prazo de 15 (quinze) dias para apresentação de embargos. A Advocacia Pública foi cientificada pelo prefeito e apresentou embargos à ação monitória no prazo de 30 (trinta) dias após o recebimento do mandado pelo prefeito. O juiz sentenciou o feito, decretando a procedência da ação monitória, considerando o município revel, tendo em vista a suposta perda de prazo. O município apresentou embargos de declaração que não foram conhecidos. Os embargos de declaração foram reiterados, considerados protelatórios, ensejando na aplicação de multa. Acerca do caso hipotético, pode-se corretamente afirmar:",
  "alternativas": [
   "a ação monitória não é cabível contra a Administração Pública, razão pela qual a decisão judicial que a considerou procedente é nula de pleno direito.",
   "a citação foi realizada de forma correta, tendo em vista que o prefeito é a única autoridade competente para receber citações em ações ajuizadas contra o município.",
   "o membro da Advocacia Pública deverá ser responsabilizado, tendo em vista que a apresentação de embargos à monitória intempestivos configura conduta culposa que enseja o dever de pagar perdas e danos, conforme preceito expresso do Código de Processo Civil.",
   "inobstante o entendimento de que os embargos de declaração reiterados foram protelatórios, o recurso cabível da Fazenda Pública municipal não pode ser condicionado ao pagamento da multa decorrente da reiteração dos embargos que somente deverá ser recolhida ao final.",
   "a decretação de revelia está correta, tendo em vista que o prazo para apresentação de embargos na ação monitória é de 15 (quinze) dias, não se aplicando o prazo em dobro da Fazenda Pública."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-047",
  "disciplina": "Direito Processual Civil",
  "assunto": "Tutela provisória",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 47",
  "enunciado": "Tendo em vista o entendimento atual do Superior Tribunal de Justiça acerca da estabilização da tutela antecipada, é correto afirmar:",
  "alternativas": [
   "a ausência de apresentação de recurso de agravo de instrumento da decisão que defere a antecipação de tutela antecedente resulta em estabilização desta, mesmo que tenha sido apresentada contestação pelo réu.",
   "demonstrado que a medida deferida não se caracteriza como antecipação de tutela satisfativa de caráter antecedente, tendo, na verdade, apenas a finalidade de assegurar o resultado útil do processo, não tem aplicação a técnica da estabilização da tutela antecedente.",
   "a estabilização da tutela provisória também se aplica à tutela da evidência, se comprovado documentalmente, de forma cabal, o direito do requerente, dispensada, nesse caso, a caução.",
   "o direito de rever, reformar ou invalidar a tutela antecipada estabilizada extingue-se após 3 (três) anos, contados o trânsito em julgado da decisão que extinguiu o processo.",
   "é vedada a estabilização de liminares satisfativas, em razão da irreversibilidade da medida que impossibilita o retorno ao status quo ante."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-048",
  "disciplina": "Direito Processual Civil",
  "assunto": "Competência",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 48",
  "enunciado": "Assinale a alternativa correta com relação à reconvenção sucessiva.",
  "alternativas": [
   "Não é vedada pelo sistema processual, condicionando-se o seu exercício, todavia, ao fato de que a questão que justifica a propositura da reconvenção sucessiva tenha surgido na contestação ou na primeira reconvenção.",
   "É expressamente admitida pelo ordenamento jurídico positivo, fundada no princípio da economia processual, em razão da apresentação da reconvenção da outra parte.",
   "É vedada pelo ordenamento jurídico positivo, tendo em vista o princípio da razoável duração do processo.",
   "Não tem guarida no ordenamento jurídico, tendo em vista que, se o autor possui pretensão contra o réu, deveria tê-la apresentado na petição inicial, não podendo se utilizar da reconvenção sucessiva para ampliar o objeto da lide.",
   "Poderá ser aceita pelo juiz se comprovada a boa-fé do reconvinte sucessivo, a concordância do réu convindo, bem como a competência do juízo para todas as matérias apresentadas."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-049",
  "disciplina": "Direito Processual Civil",
  "assunto": "Recursos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 49",
  "enunciado": "Em uma ação foram cumulados dois pedidos, A e B, autônomos e independentes, contra o mesmo réu. Após oferecida a contestação, sem que tenha se adentrado na fase instrutória, o juízo de primeiro grau reconheceu a prescrição da pretensão em relação a ambos os pleitos e, então, julgou-os improcedentes. Interposta a apelação pelo autor, o tribunal concluiu que ambos os pedidos não estariam prescritos. O pedido A não poderia ser analisado sem a produção de provas. Entretanto, em relação ao pedido B, a prova documental acostada aos autos era suficiente para seu julgamento. Nesse caso, o Tribunal deverá",
  "alternativas": [
   "julgar antecipadamente o mérito relativo ao pedido B, remetendo, após, a ação para o juiz de primeiro grau para presidir a instrução necessária ao julgamento do pedido A.",
   "julgar ambos os pedidos, declarando a preclusão do direito da parte interessada de apresentar provas em relação ao pedido A.",
   "remeter a ação para o juiz de primeiro grau para que seja realizada a instrução relativa ao pedido A, devendo-se aguardar a conclusão desta para julgamento, no tribunal, dos pedidos A e B.",
   "converter o julgamento em diligência, para que seja realizada a instrução no tribunal, necessária ao julgamento do pedido A, devendo, após, julgar os pedidos A e B conjuntamente.",
   "remeter a ação para o juiz de primeiro grau para que seja realizada a instrução relativa ao pedido A, devendo ocorrer, em primeira instância, o julgamento antecipado do pedido B."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-050",
  "disciplina": "Direito Processual Civil",
  "assunto": "Provas",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 50",
  "enunciado": "Acerca das provas, assinale a alternativa correta.",
  "alternativas": [
   "A parte pode se recusar a exibir documento em juízo se a publicidade puder ocasionar desonra a seus parentes consanguíneos ou afins até o quarto grau.",
   "A confissão realizada pelo mandatário não prejudica o mandante, mesmo constando da procuração o poder de confessar, por ser um ato de natureza personalíssima.",
   "A nota escrita pelo credor em qualquer parte de documento representativo de obrigação, ainda que não assinada, faz prova em benefício do devedor.",
   "No depoimento pessoal, tendo em vista o princípio da oralidade, a parte não poderá consultar escritos anteriormente preparados, mesmo notas breves, sob o argumento de que objetivam completar esclarecimentos.",
   "Dados representados por imagem ou som gravados em arquivos eletrônicos não poderão constar da ata notarial."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-051",
  "disciplina": "Direito Processual Civil",
  "assunto": "Sentença e coisa julgada",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 51",
  "enunciado": "O município X foi condenado numa ação de obrigação de pagar quantia certa que tinha como único fundamento legal a Lei no Y/2022. A sentença foi proferida em 05/01/2022, tendo transitado em julgado no dia 08/03/2022. No dia 28/03/2025, o Supremo Tribunal Federal declarou, em sede de controle concentrado de constitucionalidade, a Lei no Y/2022 inconstitucional, não realizando qualquer modulação dos efeitos da decisão. Acerca do caso hipotético, pode-se corretamente afirmar:",
  "alternativas": [
   "a decisão do Supremo Tribunal Federal em nada afeta a decisão condenatória proferida contra a Fazenda Pública Municipal, tendo em vista a existência de coisa julgada material não mais sujeita à ação rescisória.",
   "a Fazenda Pública Municipal poderá alegar a inexigibilidade do título decorrente de coisa julgada inconstitucional, em sede de cumprimento de sentença.",
   "deverá, a Fazenda Pública Municipal, ajuizar ação rescisória, cujo prazo prescricional de 2 (dois) anos deve ser contado do dia do trânsito em julgado da decisão que declarou inconstitucional a Lei no Y/2022.",
   "a decisão do Supremo Tribunal Federal torna a decisão proferida contra a Fazenda Pública Municipal uma coisa julgada inconstitucional que pode ser declarada nula de pleno direito a qualquer tempo.",
   "deverá, a Fazenda Pública Municipal, ajuizar ação rescisória, cujo prazo decadencial de 2 (dois) anos deve ser contado do dia do trânsito em julgado da decisão que declarou inconstitucional a Lei no Y/2022."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-052",
  "disciplina": "Direito Processual Civil",
  "assunto": "Recursos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 52",
  "enunciado": "Tendo em vista o entendimento atual do Superior Tribunal de Justiça, acerca do recurso especial, é correto afirmar:",
  "alternativas": [
   "é admissível recurso adesivo na apelação, no recurso extraordinário, no recurso especial, sendo admissível, também, a interposição de agravo interno na forma adesiva.",
   "interposto recurso especial principal e adesivo, e decidido o primeiro sem ingresso no mérito, deve o recurso adesivo ser conhecido.",
   "o recurso adesivo não poderá ser interposto pelo autor da demanda indenizatória, julgada procedente, quando arbitrado, a título de danos morais, valor inferior ao que era almejado, pois ausente a sucumbência material.",
   "o recurso adesivo não fica limitado à matéria tratada no recurso principal, podendo impugnar capítulo diverso da decisão.",
   "o recurso adesivo segue a sorte do principal, entretanto, uma vez inadmitido o recurso principal, como não é possível que o recorrente adesivo recorra dessa decisão se o recorrente principal permanecer inerte, nesta hipótese o recurso adesivo deve ser conhecido."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-053",
  "disciplina": "Direito Processual Civil",
  "assunto": "Recursos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 53",
  "enunciado": "Tendo em vista o entendimento do Superior Tribunal de Justiça, assinale a alternativa correta sobre os embargos de declaração.",
  "alternativas": [
   "Nos casos em que o órgão colegiado julga matéria submetida à sistemática da repercussão geral, não é admitida a oposição de embargos de declaração para atribuir-lhes efeitos modificativos, anular o acórdão embargado e determinar a devolução dos autos ao Tribunal de origem para exercer juízo de conformação após o julgamento do paradigma.",
   "Os segundos embargos de declaração estão restritos ao argumento da existência de vícios no acórdão proferido nos primeiros aclaratórios, pois, em virtude da preclusão consumativa, é descabida a discussão acerca da decisão anteriormente embargada.",
   "É vedado, em embargos de declaração, salvo em matéria de ordem pública, ampliar as questões veiculadas no recurso para incluir teses que não foram anteriormente suscitadas, por configurar inovação recursal e revelar falta de prequestionamento, pois o cabimento dessa espécie recursal restringe-se às hipóteses em que existe vício no julgado.",
   "Os embargos de declaração suspendem o prazo para interposição de outros recursos, além do respectivo acórdão embargado, possuindo, assim, efeitos ultraprocessuais, para o fim de suspender o prazo em relação a outros acórdãos em demais incidentes processuais.",
   "São incabíveis embargos de declaração para, em caráter excepcional, adequar o acórdão embargado à orientação firmada no âmbito de repercussão geral reconhecida pelo Supremo Tribunal Federal e de recurso julgado sob o rito dos repetitivos."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-054",
  "disciplina": "Direito Processual Civil",
  "assunto": "Recursos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 54",
  "enunciado": "Caso o Tribunal local profira acórdão em desacordo com tese firmada em recurso especial repetitivo julgado pelo Superior Tribunal de Justiça, deverá, a parte interessada,",
  "alternativas": [
   "apresentar agravo interno, se presentes os pressupostos recursais, pois não cabe reclamação em razão da não observância de tese firmada em recurso especial repetitivo.",
   "apresentar reclamação contra o acórdão diretamente ao Superior Tribunal de Justiça, no prazo para a apresentação do recurso especial ou extraordinário, pois o eventual trânsito em julgado da decisão impede o conhecimento da reclamação.",
   "apresentar reclamação contra o acórdão perante o Tribunal local, no prazo para a apresentação do recurso especial ou extraordinário, pois o eventual trânsito em julgado da decisão impede o conhecimento da reclamação.",
   "escolher entre a apresentação de recurso especial ou reclamação, aplicando-se o princípio da fungibilidade, para a preservação da tese definida pelo Superior Tribunal de Justiça.",
   "apresentar, concomitantemente, a reclamação e o recurso especial, este visando evitar o trânsito em julgado da decisão que desrespeitou a tese firmada em recurso repetitivo, sob pena de não conhecimento da reclamação."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-055",
  "disciplina": "Direito Processual Civil",
  "assunto": "Prazos",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 55",
  "enunciado": "Considerando a atual disciplina legal e o entedimento da Jurispondência, assinale a alternativa correta acerca do mandado de segurança coletivo.",
  "alternativas": [
   "Os efeitos da coisa julgada decorrentes do mandado de segurança coletivo não beneficiarão o impetrante a título individual se não requerer a desistência de seu mandado de segurança no prazo de 60 (sessenta) dias a contar da ciência comprovada da impetração da segurança coletiva.",
   "O mandado de segurança coletivo pode ser impetrado por associação legalmente constituída e em funcionamento há, pelo menos, 1 (um) ano, em defesa de direitos líquidos e certos da totalidade, ou de parte, dos seus associados, na forma dos seus estatutos e desde que pertinentes às suas finalidades, sendo necessário, para tanto, autorização especial.",
   "No mandado de segurança coletivo, a liminar só poderá ser concedida após a audiência do representante judicial da pessoa jurídica de direito público, que deverá se pronunciar no prazo de 72 (setenta e duas) horas.",
   "No mandado de segurança coletivo, a sentença fará coisa julgada limitadamente aos membros do grupo ou categoria substituídos pelo impetrante.",
   "O mandado de segurança coletivo é instrumento apto à defesa dos interesses coletivos, difusos e individuais homogêneos."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-056",
  "disciplina": "Direito Processual Civil",
  "assunto": "Competência",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 56",
  "enunciado": "Tendo em vista a jurisprudência do Superior Tribunal de Justiça, assinale a alternativa correta sobre os juizados especiais.",
  "alternativas": [
   "Não se admite a impetração de mandado de segurança perante o Tribunal Regional Federal para o exercício do controle de competência dos Juizados Especiais Federais, tendo em vista a competência da Turma Recursal.",
   "É da competência dos Juizados Especiais Federais e dos Juizados Especiais da Fazenda Pública a defesa de direitos ou interesses difusos e coletivos exercida por meio de ações propostas individualmente pelos seus titulares ou substitutos processuais.",
   "Quando as Turmas de diferentes Estados derem a lei federal interpretações divergentes, é cabível o pedido de uniformização dirigido ao Superior Tribunal de Justiça que deve ser objeto de prévio juízo de admissibilidade na Turma Recursal.",
   "Não é possível submeter ao rito dos Juizados Especiais Federais as causas que envolvem fornecimento de medicamentos/tratamento médico, mesmo que o valor seja de até 60 salários mínimos, se ajuizadas pelo Ministério Público ou pela Defensoria Pública em favor de pessoa determinada.",
   "Compete ao Superior Tribunal de Justiça decidir os conflitos de competência entre juizado especial federal e juízo federal da mesma seção judiciária."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-057",
  "disciplina": "Direito Processual Civil",
  "assunto": "Provas",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 57",
  "enunciado": "Tendo em vista o entendimento do Supremo Tribunal Federal, assinale a alternativa correta acerca da legitimidade para a propositura da ação direta de inconstitucionalidade.",
  "alternativas": [
   "As federações sindicais qualificam-se como entidades de classe de âmbito nacional, tendo legitimidade ativa para a propositura de ação direta de inconstitucionalidade.",
   "A associação, para ter legitimidade para a propositura de ação direta de inconstitucionalidade, tem que demonstrar o seu caráter nacional, mediante compravação da presença efetiva de associados em, pelo menos, sete estados-membros.",
   "A propositura da ação direta de inconstitucionalidade pelo Conselho Federal da Ordem dos Advogados do Brasil independe de comprovação de pertinência temática.",
   "Se ocorrer a perda da representação do partido político autor da ação direta de inconstitucionalidade, essa deve ser julgada extinta sem julgamento do mérito, tendo em vista a ilegitimidade da parte autora.",
   "Os estados-membros da Federação estão no rol dos legitimados a agir como sujeitos processuais em sede de controle concentrado de constitucionalidade, podendo, inclusive, intervir como terceiros subjetivamente interessados no feito."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-073",
  "disciplina": "Direito Ambiental",
  "assunto": "Unidades de conservação",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 73",
  "enunciado": "O Sistema Nacional de Unidades de Conservação da Natureza – SNUC, regido pela Lei no 9.985/2000, tem, entre outros, o objetivo de",
  "alternativas": [
   "assegurar a participação efetiva das populações locais na criação, implantação e gestão das unidades de conservação.",
   "proporcionar meios e incentivos para atividades de pesquisa científica, estudos e monitoramento ambiental.",
   "prover os recursos naturais e artificiais importantes à subsistência de populações tradicionais, respeitada a valorização da cultura nacional.",
   "garantir às populações tradicionais cuja subsistência dependa da utilização de recursos naturais existentes no interior das unidades de conservação meios de subsistência alternativos ou a justa indenização pelos recursos perdidos.",
   "contribuir para a preservação da diversidade biológica e dos recursos naturais, no território nacional e nos territórios jurisdicionais."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-074",
  "disciplina": "Direito Ambiental",
  "assunto": "Responsabilidade ambiental",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 74",
  "enunciado": "A empresa química Flota Ltda. realizou uma descarga não autorizada de efluentes perigosos em um curso-d’água, resultando em danos ambientais significativos. O inquérito revelou que essa decisão foi tomada pelo conselho de administração da empresa, com a intenção de minimizar as despesas operacionais. À luz desse contexto e de acordo com a legislação ambiental brasileira, assinale a alternativa correta.",
  "alternativas": [
   "A empresa Flota Ltda. pode incorrer em responsabilidade criminal, mas somente no caso de a legislação estadual específica permitir a penalização de pessoas jurídicas.",
   "Somente os conselheiros da empresa Flota Ltda. que estiveram envolvidos na decisão podem assumir responsabilidade criminal, pois a legislação nacional não sanciona pessoas jurídicas com penalidades criminais.",
   "A responsabilidade criminal da empresa Flota. Ltda depende de uma condenação administrativa prévia, pois a legislação ambiental determina o esgotamento dos meios administrativos antes do processo criminal.",
   "Tanto a empresa Flota Ltda. quanto os diretores responsáveis podem incorrer em responsabilidade criminal, desde que a infração tenha sido executada em benefício da pessoa jurídica.",
   "A empresa Flota Ltda. não pode incorrer em responsabilidade criminal, pois somente pessoas físicas podem ser responsabilizadas criminalmente por infrações ambientais."
  ],
  "correta": 3
 },
 {
  "id": "campinas25-proc-075",
  "disciplina": "Direito Ambiental",
  "assunto": "Princípios e noções gerais",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 75",
  "enunciado": "O Direito Ambiental Brasileiro é baseado em princípios fundamentais que orientam a interpretação e a implementação de normas legais relativas à proteção do meio ambiente. À luz desses princípios, assinale a alternativa correta.",
  "alternativas": [
   "O princípio da precaução é aplicável somente nos casos em que a certeza científica em relação aos danos ambientais é estabelecida.",
   "O princípio da informação estabelece que apenas órgãos governamentais têm o dever de fornecer informações ambientais à sociedade, não sendo exigida transparência por parte de empresas e empreendimentos privados.",
   "O princípio da função socioambiental da propriedade delineia que o direito à propriedade pode ser restringido quando sua utilização inflige danos ao meio ambiente, garantindo assim a proteção ambiental em benefício coletivo da comunidade.",
   "O princípio da participação popular estipula que somente órgãos governamentais e organizações ambientais devidamente registrados podem expressar opiniões e participar de processos de tomada de decisão sobre questões ambientais.",
   "O princípio do poluidor-pagador afirma que a restituição por danos ao meio ambiente só pode ser buscada após o estabelecimento da culpa por parte da entidade responsável pelo dano."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-076",
  "disciplina": "Direito Ambiental",
  "assunto": "Princípios e noções gerais",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 76",
  "enunciado": "A Lei no 9.605/1998 trata, entre outros assuntos, das disposições sobre a cooperação internacional no campo da proteção ambiental. Sobre o tema, assinale a alternativa correta.",
  "alternativas": [
   "O Brasil só poderá prestar cooperação internacional em matéria ambiental quando houver acordo específico com o país solicitante, não sendo possível a colaboração sem a existência de um tratado bilateral.",
   "A cooperação internacional é restrita a questões ambientais envolvendo produção de prova e exame de objetos e lugares.",
   "A solicitação de cooperação internacional deve ser dirigida diretamente ao Ministério do Meio Ambiente, que é responsável pelo processo.",
   "O sistema de comunicação estabelecido para facilitar o intercâmbio de informações ambientais deve ser exclusivamente utilizado para transmitir dados entre os órgãos judiciários de diferentes países, não abrangendo outros tipos de órgãos ou entidades.",
   "O Brasil poderá prestar cooperação internacional sem custos para o país solicitante, incluindo a produção de provas, exames de objetos e lugares e outras formas de assistência previstas pela legislação, desde que não infrinja a soberania nacional, a ordem pública e os bons costumes."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-078",
  "disciplina": "Direito Civil",
  "assunto": "Pessoas naturais e direitos da personalidade",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 78",
  "enunciado": "Ana e Bruno são irmãos e proprietários de um imóvel comercial no centro da cidade. Precisando de dinheiro, decidem vendê-lo para Carlos por R$ 200.000,00. No contrato, ambos os irmãos comprometem-se solidariamente a entregar o imóvel livre de quaisquer ônus e impedimentos. Alguns dias depois, descobre-se que Ana, no momento da assinatura do contrato, estava sob o efeito de forte medicação, que prejudicava sua capacidade de entendimento e manifestação de vontade. Diante da situação hipotética, é correto afirmar que o negócio jurídico celebrado",
  "alternativas": [
   "é anulável, sendo certo que a anulabilidade depende do julgamento por sentença para ter efeito.",
   "pode ser declarado anulável de ofício pelo juiz.",
   "pode ser anulado em até 4 (quatro) anos contados da data de sua celebração.",
   "é nulo, sendo certo que a nulidade aproveita a qualquer interessado.",
   "é nulo, mas pode ser confirmado pelas partes, ressalvado direito de terceiro."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-079",
  "disciplina": "Direito Civil",
  "assunto": "Responsabilidade civil",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 79",
  "enunciado": "Lucas é médico e possui um seguro de responsabilidade civil profissional contratado com a seguradora ABC, que cobre eventuais indenizações decorrentes de erros médicos, até o limite de R$ 500.000,00 por sinistro. Durante um procedimento cirúrgico, Lucas comete um erro que resulta em sequelas permanentes para o paciente, o qual ingressa com uma ação judicial contra o médico, pleiteando R$ 400.000,00 por danos morais e materiais. Após a condenação, Lucas aciona sua seguradora para que esta arque com a indenização, conforme previsto na apólice. O prazo de um ano para que Lucas acione a seguradora ABC deve ser contado da data",
  "alternativas": [
   "da citação para responder à ação de indenização proposta pelo paciente prejudicado.",
   "do pagamento da indenização ao paciente, ainda que sem anuência da seguradora ABC.",
   "da ciência das sequelas permanentes do paciente.",
   "do procedimento cirúrgico realizado.",
   "da sentença que condenou Lucas ao pagamento da indenização."
  ],
  "correta": 0
 },
 {
  "id": "campinas25-proc-080",
  "disciplina": "Direito Civil",
  "assunto": "Obrigações",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 80",
  "enunciado": "Pedro e Marcos contraíram juntos uma dívida de R$ 30.000,00 junto ao Banco XPTO, assumindo responsabilidade solidária pelo pagamento. No entanto, para substituir a obrigação anterior, Pedro propõe ao Banco XPTO uma nova obrigação, na qual se compromete a pagar sozinho o valor devido, mas de forma parcelada e com novos prazos e condições. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "Se Pedro se tornar insolvente, o Banco XPTO tem direito a ação regressiva contra Marcos, independentemente da demonstração de má-fé.",
   "Em regra, a novação não extingue eventuais garantias dadas por Pedro e Marcos.",
   "Somente sobre os bens de Pedro subsistem as preferências e garantias do crédito novado, e Marcos fica por esse fato exonerado.",
   "É necessário que o Banco XPTO demonstre o ânimo de novar a obrigação de forma expressa para que se forme a nova obrigação.",
   "Para que ocorra a novação é necessário o consentimento de Marcos."
  ],
  "correta": 2
 },
 {
  "id": "campinas25-proc-081",
  "disciplina": "Direito Civil",
  "assunto": "Sucessões",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 81",
  "enunciado": "Matilde contratou um seguro de vida e indicou sua irmã Clotilde como beneficiária. No ato da contratação, Matilde omitiu, de má-fé, que havia sido diagnosticada com uma doença cardíaca grave. Três anos depois, Matilde faleceu em decorrência dessa doença. Quando Clotilde solicitou o pagamento da indenização, a seguradora recusou-se a indenizá-la sob a alegação de omissão de informações essenciais no momento da contratação. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "Clotilde tem direito à indenização integral, pois a seguradora não pode se recusar a pagar o benefício com base em uma omissão que não foi detectada na contratação.",
   "A seguradora pode negar a indenização automaticamente, mesmo sem comprovar a má-fé, desde que a omissão de Matilde influencie na aceitação do seguro ou no cálculo do prêmio.",
   "A recusa da seguradora é inválida, pois, como Matilde pagou os prêmios regularmente por mais de dois anos, a omissão perde relevância e o seguro deve ser pago.",
   "A seguradora não pode negar o pagamento, mas pode reduzir o valor da indenização proporcionalmente ao risco não informado, ainda que tenha havido má-fé de Matilde.",
   "A recusa da seguradora somente será válida se ficar demonstrado que Matilde agiu com má-fé ao omitir a doença preexistente no momento da contratação."
  ],
  "correta": 4
 },
 {
  "id": "campinas25-proc-082",
  "disciplina": "Direito Civil",
  "assunto": "Sucessões",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 82",
  "enunciado": "Carlos é proprietário de um terreno na cidade de Campinas, onde construiu uma casa térrea de 80 m2, com uma piscina e uma churrasqueira. Sua sobrinha, Júlia, deseja construir sua própria moradia, mas não possui recursos para adquirir um terreno. Para ajudá-la, Carlos decide ceder a Júlia o direito de construir sobre a laje de sua casa, garantindo a ela um direito real sobre a nova unidade habitacional. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "Eventual ruína da casa de Carlos implica extinção do direito real de laje, ainda que a casa seja reconstruída imediatamente.",
   "As despesas necessárias à conservação e à fruição da piscina e da churrasqueira serão partilhadas entre Carlos e Júlia, na proporção que venha a ser estipulada em contrato.",
   "Com a constituição da laje, Júlia passa a ter participação proporcional na piscina e na churrasqueira, bem como passa a ter uma fração ideal do terreno.",
   "Júlia responderá pelos encargos e tributos que incidirem sobre a sua unidade, bem como pelo valor proporcional das áreas da piscina e da churrasqueira.",
   "Júlia poderá ceder a superfície de sua construção para a instituição de um sucessivo direito real de laje, ainda que sem autorização expressa de Carlos, desde que respeitadas as posturas edilícias e urbanísticas vigentes."
  ],
  "correta": 1
 },
 {
  "id": "campinas25-proc-083",
  "disciplina": "Direito Civil",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · Prefeitura de Campinas · Procurador do Município I · Questão 83",
  "enunciado": "Tatiana, sobrinha do Prefeito do Município Z, deseja abrir uma pequena cafeteria e, para isso, precisa de uma licença municipal de funcionamento. Ela protocola o pedido junto à Prefeitura, apresentando todos os documentos exigidos. O prazo legal para a análise do pedido é de 30 dias, mas, passados 45 dias, Tatiana não recebe nenhuma resposta da Prefeitura. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "Tatiana deve ingressar com uma ação judicial para obrigar a Prefeitura a analisar seu pedido, pois a ausência de resposta não gera efeitos jurídicos automáticos.",
   "Tatiana não pode iniciar suas atividades enquanto não receber uma resposta expressa da Prefeitura, pois a aprovação tácita não é reconhecida na legislação brasileira.",
   "Como a Prefeitura não respondeu dentro do prazo estabelecido, a licença é considerada automaticamente concedida por aprovação tácita, e Tatiana pode abrir sua cafeteria legalmente.",
   "A aprovação tácita não se aplica ao caso de Tatiana, uma vez que ela é sobrinha do prefeito.",
   "A aprovação tácita só se aplica a atividades de baixo risco, independentemente da relação de parentesco, e como Tatiana abrirá uma cafeteria, ela pode operar sem necessidade de resposta formal."
  ],
  "correta": 3
 },
 {
  "id": "arespcj25-proc-011",
  "disciplina": "Direito Constitucional",
  "assunto": "Poder Judiciário",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 11",
  "enunciado": "Tendo em vista o entendimento do Supremo Tribunal Federal acerca das competências municipais, assinale a alternativa correta.",
  "alternativas": [
   "Considerando a competência de regular a ocupação do solo urbano, é legítima a previsão constante de legislação municipal que impede a instalação de estabelecimentos comerciais do mesmo ramo em determinada área.",
   "Em decorrência do princípio da livre iniciativa, não poderá o município fixar o horário de funcionamento de estabelecimento comercial.",
   "Cabe aos municípios promover o licenciamento ambiental das atividades ou empreendimentos que possam causar impacto ambiental de âmbito local.",
   "Não compete aos municípios legislar sobre a obrigatoriedade de instalação de hidrômetros individuais nos edifícios e condomínios.",
   "A definição do tempo máximo de espera de clientes em filas de instituições bancárias não pode ser objeto de disciplina pela legislação municipal."
  ],
  "correta": 2
 },
 {
  "id": "arespcj25-proc-012",
  "disciplina": "Direito Constitucional",
  "assunto": "Organização do Estado",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 12",
  "enunciado": "Acerca da intervenção, assinale a alternativa correta.",
  "alternativas": [
   "A intervenção da União no Estado, com a finalidade de prover a execução de ordem ou decisão judicial, independe de apreciação prévia ou posterior do Congresso Nacional e, se essa medida bastar ao restabelecimento da normalidade, será instrumentalizada por meio de decreto que limitar-se-á a suspender a execução do ato impugnado.",
   "Se a finalidade da intervenção for assegurar a observância do princípio constitucional do sistema representativo, é necessária, no prazo de vinte e quatro horas, a ratificação do decreto de intervenção pelo Congresso Nacional, devendo ocorrer a convocação extraordinária, também no prazo de vinte e quatro horas, se ele não estiver funcionando.",
   "Para a garantia do livre exercício do Poder Judiciário, a intervenção deve ser objeto de solicitação pelo Supremo Tribunal Federal que será analisada pelo Congresso Nacional em até 24 horas, quando então, por meio de decreto legislativo, poderá sustar o ato ocasionador que gera coação aos membros do Poder Judiciário.",
   "Cessados os motivos da intervenção, as autoridades afastadas de seus cargos voltarão a assumi-los, mediante assinatura de termo de ajustamento de conduta, a ser celebrado com a Procuradoria Geral da República, com eficácia de título executivo judicial, desde que homologado judicialmente.",
   "A suspenção do pagamento da dívida fundada por mais de dois anos consecutivos, não ocorrendo hipótese de caso fortuito ou força maior, é fundamento para a intervenção da União no Estado, mediante decreto do Presidente da República, que especificará a amplitude, o prazo e as condições de execução e que será submetido à apreciação do Congresso Nacional no prazo de quarenta e oito horas."
  ],
  "correta": 0
 },
 {
  "id": "arespcj25-proc-013",
  "disciplina": "Direito Constitucional",
  "assunto": "Poder Judiciário",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 13",
  "enunciado": "Acerca dos Tribunais de Contas Municipais, pode-se corretamente afirmar que",
  "alternativas": [
   "os Tribunais de Contas Municipais podem ser criados mediante emenda à Constituição Estadual, nos municípios com mais de 300.000 (trezentos mil) habitantes.",
   "os Tribunais de Contas municipais existentes na data da promulgação da Constituição Federal deveriam ter sido extintos, tendo em vista a vedação constitucional expressa de criação de cortes de contas municipais.",
   "a Constituição da República impede que os municípios criem os seus próprios tribunais de contas municipais, mas permite que os Estados-membros, mediante autônoma deliberação, instituam órgão estadual denominado Conselho ou Tribunal de Contas dos municípios.",
   "o parecer prévio, emitido pelo órgão competente sobre as contas que o prefeito deve anualmente prestar, só deixará de prevalecer por decisão de três quintos dos membros da Câmara Municipal.",
   "o Tribunal de Contas Municipal deverá assinar prazo para que o órgão ou entidade adote as providências necessárias ao exato cumprimento da lei, se verificada ilegalidade e, se não se não atendido, poderá sustar os contratos administrativos ilegais."
  ],
  "correta": 2
 },
 {
  "id": "arespcj25-proc-014",
  "disciplina": "Direito Constitucional",
  "assunto": "Organização do Estado",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 14",
  "enunciado": "Acerca da criação de municípios, pode-se corretamente afirmar que",
  "alternativas": [
   "para a criação de municípios, basta a edição de lei estadual, obedecidos os requisitos previstos em lei complementar estadual e consulta prévia, mediante plebiscito, às populações diretamente interessadas.",
   "como providência prévia à criação de municípios, deve-se editar lei complementar estadual, realizar os estudos de viabilidade municipal, apresentados e publicados na forma da lei, bem como edição de lei ordinária federal ratificando a proposta de criação do município.",
   "a consulta prévia, mediante referendo, da população interessada pode ser dispensada se a proposta de criação do município decorrer de iniciativa popular, bem como houver os estudos da viabilidade municipal.",
   "tendo em vista a não edição da lei complementar prevista na Constituição Federal, os Estados estão impedidos iniciar novos processos de emancipação municipal, sendo inconstitucionais as leis estaduais que permitam a criação de novos municípios.",
   "tendo em vista o princípio da autonomia dos entes federativos, a lei federal não é requisito para a criação de novos municípios, desde que realizado estudo de viabilidade municipal, autorização legislativa estadual e referendo da população interessada."
  ],
  "correta": 3
 },
 {
  "id": "arespcj25-proc-015",
  "disciplina": "Direito Constitucional",
  "assunto": "Poderes Legislativo e Executivo",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 15",
  "enunciado": "A Câmara de Vereadores aprovou uma emenda à Lei Orgânica do município que criou, para todos os servidores municipais, o direito à licença prêmio. Tendo em vista o caso hipotético, pode-se afirmar corretamente que",
  "alternativas": [
   "a emenda é constitucional, tendo em vista que a Lei Orgânica, a Constituição do município, pode tratar de qualquer assunto, inclusive de direitos de servidores públicos.",
   "caso tenha sido prevista fonte de custeio do direito concedido, a emenda à Lei Orgânica do município é constitucional.",
   "desde que compatível com o previsto na Constituição Estadual sobre o assunto, a emenda à Lei Orgânica é constitucional.",
   "a normatização de direitos dos servidores públicos em Lei Orgânica do município, por meio de emenda, é inconstitucional por afrontar a iniciativa privativa do chefe do Poder Executivo.",
   "é inconstitucional a emenda à Lei Orgânica, tendo em vista que o direito à licença prêmio, por se tratar de cômputo de tempo de trabalho fictício, é vedada pela Constituição Federal."
  ],
  "correta": 3
 },
 {
  "id": "arespcj25-proc-016",
  "disciplina": "Direito Administrativo",
  "assunto": "Poderes administrativos",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 16",
  "enunciado": "É seu sintoma “qualquer traço, interno ou externo, direto, indireto ou circunstancial que revele a distorção da vontade do agente público ao editar o ato, praticando-o não por motivo de interesse público, mas por motivo privado” (José Cretella Junior). Essa concepção doutrinária, pertinente aos poderes e deveres do administrador público, se refere ao",
  "alternativas": [
   "abuso de poder.",
   "ato putativo.",
   "ato inexistente.",
   "excesso de poder.",
   "desvio de poder."
  ],
  "correta": 4
 },
 {
  "id": "arespcj25-proc-017",
  "disciplina": "Direito Administrativo",
  "assunto": "Organização administrativa",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 17",
  "enunciado": "No tocante ao controle judicial da administração pública, assinale a alternativa que contempla corretamente o entendimento do Supremo Tribunal Federal a respeito da possibilidade ou não de ajuizamento de ação direta de inconstitucionalidade (ADI) em face de decreto do Chefe do Poder Executivo.",
  "alternativas": [
   "É cabível em face de decreto quando este é um ato regulamentar contra legem.",
   "Não é cabível em face de decreto do Executivo, independentemente de sua natureza.",
   "É cabível em face de decreto quanto este ofende a Constituição Federal indiretamente.",
   "É cabível em face de decreto quando este regulamenta lei federal e não desborda dos seus limites.",
   "É cabível em face de decreto quando não há lei e o ato ofende a Constituição Federal."
  ],
  "correta": 4
 },
 {
  "id": "arespcj25-proc-018",
  "disciplina": "Direito Administrativo",
  "assunto": "Organização administrativa",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 18",
  "enunciado": "Assinale a alternativa correta a respeito das agências reguladoras.",
  "alternativas": [
   "É uma entidade da administração indireta criada pelo direito brasileiro e que corresponde à figura jurídica da empresa pública.",
   "Elas não se confundem com as agências executivas, sendo aquelas de caráter operacional e estas exercem controle e fiscalização.",
   "Sua natureza é de autarquia de regime especial, são dotadas de personalidade de direito privado.",
   "Têm por características o poder de editar normas de caráter geral e autonomias decisória, administrativa e econômico-financeira.",
   "A escolha e investidura de seus dirigentes se dá pela mesma forma que ocorre no modelo de autarquias federais."
  ],
  "correta": 3
 },
 {
  "id": "arespcj25-proc-019",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 19",
  "enunciado": "A pessoa jurídica denominada “Mundo Saudável”, que atua na área da preservação do meio ambiente, pretende qualificar-se como organização social (OS), nos termos do que estabelece a Lei no 9.637/1998. Nessa situação hipotética, considerando o que dispõe a referida legislação, é coreto afirmar que “Mundo Saudável”",
  "alternativas": [
   "poderá qualificar-se como OS, desde que, entre outros requisitos, não tenha fins lucrativos, comprove atuação na mesma atividade por pelo menos 10 anos e não tenha excedentes financeiros nesse período.",
   "não poderá ser autorizada a qualificar-se como OS, uma vez que a sua atividade na área de preservação do meio ambiente não está prevista na Lei como finalidade apta a obter a qualificação.",
   "deve comprovar, entre outras exigências, as atribuições do Conselho de Administração para dispor sobre a aprovação dos estatutos, a extinção da entidade e a eleição da sua diretoria, que não poderá ser remunerada.",
   "poderá, se qualificada, celebrar contrato de gestão, que, após aprovação do Conselho de Administração, será submetido ao ministro de Estado ou autoridade supervisora da área correspondente à atividade fomentada.",
   "deverá apresentar conselho de administração estruturado nos termos que dispuser o respectivo estatuto, que deverá ser composto em sua maioria de membros natos representantes do Poder Público."
  ],
  "correta": 3
 },
 {
  "id": "arespcj25-proc-020",
  "disciplina": "Direito Administrativo",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 20",
  "enunciado": "Considerando o disposto na Lei Federal no 9.790/1999, atendidas as demais exigências legais, seria uma hipótese válida de Termo de Parceria quando celebrada pelo poder público com uma",
  "alternativas": [
   "escola privada dedicada ao ensino formal não gratuito.",
   "cooperativa cujo objetivo social é a promoção da assistência social.",
   "organização sem fins lucrativos com objetivo social da promoção do voluntariado.",
   "entidade cujo objetivo social é comercializar planos de saúde e assemelhados.",
   "organização social que atua formalmente na defesa e conservação do meio ambiente."
  ],
  "correta": 2
 },
 {
  "id": "arespcj25-proc-021",
  "disciplina": "Direito Administrativo",
  "assunto": "Processo administrativo",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 21",
  "enunciado": "Considerando o disposto na Lei Federal no 9.784/1999, assinale a alternativa correta a respeito do impedimento e da suspeição no âmbito do processo administrativo.",
  "alternativas": [
   "É motivo de suspeição a atuação em processo administrativo de servidor ou autoridade que tenha interesse direto ou indireto na matéria.",
   "É vedada a atuação em processo administrativo de servidor que esteja litigando administrativamente com o cônjuge de interessado no processo.",
   "O servidor que incorrer em suspeição deve comunicar o fato à autoridade competente, abstendo-se de atuar até a decisão sobre o fato.",
   "Pode ser arguido o impedimento de servidor que tenha amizade íntima ou inimizade notória com algum dos interessados ou com os respectivos cônjuges.",
   "O indeferimento de alegação de impedimento ou suspeição poderá ser objeto de recurso, com efeito suspensivo."
  ],
  "correta": 1
 },
 {
  "id": "arespcj25-proc-022",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 22",
  "enunciado": "Em determinado procedimento licitatório, a Administração convocou regularmente o licitante vencedor para assinar o respectivo termo de contrato, dentro do prazo e nas condições estabelecidas no edital de licitação, mas ele não atendeu à convocação. Nessa situação hipotética, a Lei no 14.133/2021 estabelece que",
  "alternativas": [
   "o referido licitante deve ser desclassificado e serão convocados os licitantes remanescentes, para a celebração do contrato nas condições propostas pelo licitante vencedor.",
   "o referido licitante será desclassificado e serão convocados os licitantes remanescentes, para a celebração do contrato no valor mínimo constante do edital da licitação.",
   "não haverá prorrogação do prazo de convocação e serão convocados os licitantes remanescentes para negociação, com vistas à obtenção de preço melhor, mesmo que acima do preço do adjudicatário.",
   "o prazo de convocação poderá ser prorrogado 1 (uma) vez, por igual período, mediante solicitação do licitante durante seu transcurso, devidamente justificada, se o motivo for aceito pela Administração.",
   "o referido licitante ficará sujeito às sanções legais pela desistência, ainda que tácita, e o procedimento licitatório será cancelado, devendo ser aberta nova licitação, da qual o licitante desistente não poderá participar."
  ],
  "correta": 3
 },
 {
  "id": "arespcj25-proc-023",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 23",
  "enunciado": "A legislação brasileira que rege os contratos administrativos estabelece, como regra, que o instrumento de contrato é obrigatório nas licitações, mas permite que, em determinadas situações, a Administração possa substituí-lo por outro instrumento hábil. Assim, nos termos da Lei no 14.133/2021, é correto afirmar que algumas dessas situações legalmente autorizadas, nesse sentido seriam,",
  "alternativas": [
   "compras, serviços e obras fornecidos por empresas brasileiras de pequeno porte ou microempresas que, no ano-calendário de realização da licitação, ainda não tenham celebrado contratos com a administração pública.",
   "compras com entrega imediata e integral dos bens adquiridos e dos quais não resultem obrigações futuras, inclusive quanto à assistência técnica, independentemente de seu valor.",
   "contratos que tenham por objeto operação de crédito, interno ou externo, e gestão de dívida pública, incluídas as contratações de agente financeiro e a concessão de garantias relacionadas a esses contratos.",
   "contratação rápida e informal com a administração de pequenas compras ou o de prestação de serviços de pronto pagamento, independentemente do valor a ser contratado.",
   "contratação de obras, bens e serviços cujo contrato original tenha expirado por conta de seu vencimento e não haja tempo hábil para a sua prorrogação formal, sendo necessária a contratação de urgência."
  ],
  "correta": 1
 },
 {
  "id": "arespcj25-proc-024",
  "disciplina": "Direito Administrativo",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 24",
  "enunciado": "Uma determinada organização da sociedade civil, com base na Lei no 13.019/2014, propôs um plano de trabalho à administração pública que envolve a transferência de recursos financeiros. Com base na situação hipotética, é correto afirmar que essa proposta",
  "alternativas": [
   "é permitida pela Lei e, se aceita, deverá ser formalizada por meio de termo de fomento.",
   "não poderá ser aceita, pois a proposta somente pode ser feita pelos conselhos de políticas públicas.",
   "é permitida pela Lei e, se aceita, deverá ser formalizada por meio de termo de colaboração.",
   "não poderá ser aceita, uma vez que a Lei veda a transferência de recursos financeiros para organização da sociedade civil.",
   "é permitida pela Lei e, se aceita, deverá ser formalizada por meio de uma PPP (Parceria Pública-Privada)."
  ],
  "correta": 0
 },
 {
  "id": "arespcj25-proc-025",
  "disciplina": "Direito Administrativo",
  "assunto": "Serviços públicos",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 25",
  "enunciado": "Considerando o disposto na Lei Federal no 11.445/2007, com redação dada pela Lei no 14.026/2020, sobre a cobrança pela prestação do serviço público de drenagem e manejo de águas pluviais urbanas, é correto afirmar que",
  "alternativas": [
   "os fatores de produtividade dos serviços serão medidos pelas entidades reguladoras, sendo vedada na sua definição a utilização de indicadores de outras empresas do setor.",
   "é vedado proceder ao cálculo da cobrança do serviço público baseado no nível de renda da população da área atendida, sob pena de violação do princípio da isonomia.",
   "os reajustes de tarifas de serviços públicos de saneamento básico, para proprietários de lotes, serão realizados observando-se o intervalo mínimo de 18 (dezoito) meses.",
   "a ocorrência de fatos não previstos no contrato, fora do controle do prestador do serviço, ainda que afetem o equilíbrio econômico-financeiro, não justificam a revisão tarifária.",
   "a cobrança dos serviços deve levar em conta, em cada lote urbano, os percentuais de impermeabilização e a existência de dispositivos de amortecimento ou de retenção de água de chuva."
  ],
  "correta": 4
 },
 {
  "id": "arespcj25-proc-026",
  "disciplina": "Direito Administrativo",
  "assunto": "Agentes públicos",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 26",
  "enunciado": "Segundo o entendimento do Supremo Tribunal Federal, a norma legal que veda aos servidores titulares de cargo efetivo de agências reguladoras o exercício de outra atividade profissional é",
  "alternativas": [
   "inconstitucional, independentemente do cargo, por violar o princípio do livre exercício da profissão.",
   "constitucional, ressalvados os cargos de gestão operacional de empresa e de direção político-partidária.",
   "inconstitucional, excluídos os cargos de gestão operacional de empresa e de direção político-partidário.",
   "inconstitucional, inclusive para cargo de gestão operacional de empresa e de direção político-partidária.",
   "constitucional, inclusive para cargo de gestão operacional de empresa e de direção político-partidária."
  ],
  "correta": 4
 },
 {
  "id": "arespcj25-proc-027",
  "disciplina": "Direito Administrativo",
  "assunto": "Processo administrativo",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 27",
  "enunciado": "A Lei Federal no 12.846/2013 (que dispõe sobre a responsabilização administrativa e civil de pessoas jurídicas pela prática de atos contra a administração pública, nacional ou estrangeira) estabelece que a autoridade máxima de cada órgão ou entidade pública poderá celebrar acordo de leniência com as pessoas jurídicas responsáveis pela prática dos atos previstos nessa Lei que colaborem efetivamente com as investigações e o processo administrativo. Nesse sentido, a respeito desse acordo, é correto afirmar que",
  "alternativas": [
   "a pessoa jurídica deve cooperar plena e permanentemente com as autoridades, ainda que não admita sua participação no ilícito.",
   "os seus efeitos serão estendidos às pessoas jurídicas do mesmo grupo econômico, se firmado o acordo em conjunto, respeitadas as condições nele estabelecidas.",
   "na hipótese de rejeição da proposta do acordo de leniência, ela importará em reconhecimento da prática do ato ilícito investigado.",
   "em caso de descumprimento do acordo de leniência, a pessoa jurídica somente poderá celebrar novo acordo de leniência após um ano, se apresentadas novas provas.",
   "a celebração do acordo de leniência não tem o condão de interromper o prazo prescricional dos atos ilícitos previstos na Lei."
  ],
  "correta": 1
 },
 {
  "id": "arespcj25-proc-028",
  "disciplina": "Direito Administrativo",
  "assunto": "Improbidade administrativa",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 28",
  "enunciado": "Em determinado processo judicial de improbidade administrativa, regida pela Lei no 8.429/1992, o réu, antes da contestação, procura o representante do Ministério Público, autor da ação, para uma solução consensual para o caso. Nessa situação hipotética, é correto afirmar que",
  "alternativas": [
   "poderão as partes requerer ao juiz a interrupção do prazo para a contestação, por prazo não superior a 90 (noventa) dias.",
   "a Lei veda qualquer espécie de transação, acordo ou conciliação nas ações de improbidade administrativa.",
   "poderá ser feito o acordo na ação, o que implicará no afastamento de eventual responsabilidade cível ou criminal decorrente dos mesmos fatos.",
   "o acordo somente poderia ser feito por proposta do Ministério Público no curso da investigação, mas não após o ajuizamento da ação.",
   "poderão as partes celebrar o acordo, que deverá ser submetido ao juiz, mas nenhum prazo processual poderá ser interrompido."
  ],
  "correta": 0
 },
 {
  "id": "arespcj25-proc-029",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 29",
  "enunciado": "Alberto, com base na Lei no 12.527/2001, solicitou o acesso à determinada informação a que tem direito perante um órgão público do Estado. Todavia, houve o indeferimento de acesso às informações solicitadas. Nessa situação hipotética, é correto afirmar que Alberto poderá interpor",
  "alternativas": [
   "reclamação contra a decisão, no prazo de 5 (cinco) dias a contar da sua ciência, perante a Procuradoria Geral do Estado.",
   "pedido de reconsideração da decisão, no prazo de 5 (cinco) dias a contar da sua ciência, perante a mesma autoridade que proferiu a decisão impugnada.",
   "pedido de reconsideração da decisão, no prazo de 10 (dez) dias a contar da sua ciência, perante a mesma autoridade que proferiu a decisão impugnada.",
   "recurso contra a decisão, no prazo de 10 (dez) dias a contar da sua ciência, perante à autoridade hierarquicamente superior à que exarou a decisão impugnada.",
   "revisão contra a decisão, no prazo de 10 (dez) dias a contar da sua ciência, perante à autoridade máxima do órgão público que proferiu a decisão impugnada."
  ],
  "correta": 3
 },
 {
  "id": "arespcj25-proc-030",
  "disciplina": "Direito Administrativo",
  "assunto": "Agentes públicos",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 30",
  "enunciado": "Considerando o teor das súmulas do STF relacionadas à temática sobre o servidor público, assinale a alternativa correta.",
  "alternativas": [
   "A existência de falta residual, não compreendida na absolvição pelo juízo criminal, não é motivo que possa permitir a punição administrativa do servidor público.",
   "Não é admissível, por ato administrativo ou mesmo por lei, restringir, em razão da idade, inscrição em concurso para cargo público.",
   "O direito ao auxílio-alimentação não se estende aos servidores inativos.",
   "É vedada a extinção de cargo cujo ocupante esteja no respectivo curso de estágio probatório.",
   "Não se aplica aos servidores públicos as regras do regime geral da previdência social sobre aposentadoria especial."
  ],
  "correta": 2
 },
 {
  "id": "arespcj25-proc-031",
  "disciplina": "Direito Processual Civil",
  "assunto": "Sujeitos do processo",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 31",
  "enunciado": "João ajuizou ação de indenização por desapropriação indireta contra a Fazenda Pública do Município de Boa Vista, alegando que parte de seu terreno foi ocupado por uma escola de ensino fundamental implantada pelo Município, sem pagamento de indenização. O Ministério Público foi intimado a atuar como fiscal da ordem jurídica. Designada audiência de conciliação, compareceram as partes, o conciliador e o representante do Ministério Público. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "O Ministério Público deve participar de todos os processos de desapropriação.",
   "No caso hipotético não é possível a celebração de negócio jurídico processual uma vez que a Fazenda Pública é parte no processo.",
   "João e a Fazenda Pública do Município de Boa Vista podem celebrar negócio jurídico processual que estabeleça a contagem dos prazos processuais em dias corridos.",
   "João e a Fazenda Pública deveriam ter celebrado negócio jurídico antes da realização da audiência de conciliação.",
   "Caso o negócio jurídico processual fosse realizado na vigência do Código de Processo Civil de 1973, ele não seria válido após a vigência do Código de Processo Civil de 2015, a não ser que houvesse ratificação expressa."
  ],
  "correta": 2
 },
 {
  "id": "arespcj25-proc-032",
  "disciplina": "Direito Processual Civil",
  "assunto": "Ações de família e procedimentos especiais",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 32",
  "enunciado": "Maria contratou o escritório de advocacia ABC advogados associados, representado por Adriano para ajuizar uma ação de reintegração de posse. Meses depois, contratou o escritório de advocacia XYZ advogados associados, representado por Bruno para ajuizar sua ação de divórcio. A ação de divórcio foi distribuída perante a 2a Vara de Família do Município Lago Verde, cuja juíza, Alessandra, é casada com Adriano. Diante da situação hipotética, considerando o atual entendimento do Supremo Tribunal Federal, é correto afirmar que Alessandra deve ser considerada",
  "alternativas": [
   "suspeita para julgar o caso.",
   "suspeita para julgar o caso apenas se restar comprovado interesse direto no resultado da ação.",
   "impedida para julgar o caso.",
   "apta para julgar o caso, desde que o seu marido se afaste provisoriamente do escritório de advocacia ABC durante o trâmite da ação de divórcio.",
   "apta para julgar o caso."
  ],
  "correta": 4
 },
 {
  "id": "arespcj25-proc-033",
  "disciplina": "Direito Processual Civil",
  "assunto": "Comunicação dos atos",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 33",
  "enunciado": "De acordo com o disposto no Código de Processo Civil, assinale a alternativa que corresponde a uma situação em que a citação será feita por meio eletrônico.",
  "alternativas": [
   "Carlos e Ana, casados sob o regime de comunhão parcial de bens, decidiram se divorciar. Carlos ajuizou ação de divórcio litigioso, pleiteando a partilha dos bens adquiridos durante o casamento e a regulamentação de visitas ao filho menor do casal.",
   "Enzo, de 10 anos de idade, sofreu danos materiais após um acidente de trânsito causado por Madalena. Enzo, representado por sua mãe, ajuizou ação de indenização contra Madalena.",
   "Aline propôs ação de indenização por danos morais contra a sua irmã Vanessa, ébria habitual, por diferir ofensas públicas a ela.",
   "Pedro ajuizou ação de cobrança em face de seu vizinho, Paulo, requerendo, justificadamente, a citação por oficial de justiça.",
   "Laura ajuizou ação de cobrança contra Marcos. No momento da citação, constatou-se que Marcos reside em zona rural sem serviço de entrega domiciliar de correspondência."
  ],
  "correta": 1
 },
 {
  "id": "arespcj25-proc-034",
  "disciplina": "Direito Processual Civil",
  "assunto": "Competência",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 34",
  "enunciado": "Acerca das modalidades de intervenção de terceiro, assinale a alternativa correta.",
  "alternativas": [
   "Na assistência simples, se a parte principal quiser reconhecer a procedência do pedido, desistir da ação, renunciar ao direito sobre o que se funda a ação ou transigir sobre direitos controvertidos, ela precisará de anuência do assistente.",
   "Na denunciação da lide, se o denunciante for vencedor, a ação de denunciação não terá o seu pedido examinado, sem prejuízo da condenação do denunciante ao pagamento das verbas de sucumbência em favor do denunciado.",
   "No chamamento ao processo, a citação daqueles que devam figurar em litisconsórcio passivo será requerida pelo réu a qualquer momento e deve ser promovida no prazo de 30 (trinta) dias.",
   "No incidente de desconsideração da personalidade jurídica, concluída a instrução e feito o saneamento do processo, o incidente será resolvido por sentença.",
   "No amicus curiae, caso haja participação de órgão federal, haverá alteração de competência para a Vara Federal competente."
  ],
  "correta": 1
 },
 {
  "id": "arespcj25-proc-035",
  "disciplina": "Direito Processual Civil",
  "assunto": "Ações de família e procedimentos especiais",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 35",
  "enunciado": "O Município de Alto Verde iniciou procedimento de desapropriação para construção de um parque público em área caracterizada como núcleo urbano informal, ocupada predominantemente por famílias de baixa renda. Durante o levantamento socioeconômico da região, constatou-se que, além das famílias registradas, havia alguns ocupantes que, embora não preenchessem o critério de baixa renda previsto na legislação, viviam em situação de extrema vulnerabilidade social em razão de doença grave e desemprego. Considerando a situação hipotética e o disposto no Decreto-Lei no 3.365, de 21 de junho de 1941, assinale a alternativa correta.",
  "alternativas": [
   "O cadastramento das famílias ocupantes da área pode ser feito a posteriori, desde que concluído antes da efetiva imissão provisória na posse.",
   "As medidas compensatórias são opcionais e podem ser ofertadas apenas após a desocupação da área, a critério do Município.",
   "O Município, ao reconhecer a vulnerabilidade fática dos ocupantes, poderá equipará-los às famílias de baixa renda para fins de concessão de medidas compensatórias.",
   "É obrigatória a indenização em dinheiro a todos os ocupantes, independentemente de sua situação socioeconômica.",
   "Não há necessidade de planejamento prévio para prever medidas compensatórias em casos de núcleos urbanos informais, bastando acordo posterior com os ocupantes."
  ],
  "correta": 2
 },
 {
  "id": "arespcj25-proc-036",
  "disciplina": "Direito Processual Civil",
  "assunto": "Sentença e coisa julgada",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 36",
  "enunciado": "O Município de Bela Vista celebrou contrato de compra e venda com a empresa Construção Total Ltda. para aquisição de materiais de construção destinados à reforma de escolas públicas. Após a entrega parcial dos materiais, o Município deixou de efetuar os pagamentos previstos em contrato, alegando dificuldades financeiras. Em resposta, a Construção Total Ltda. suspendeu novas entregas e notificou a Fazenda Pública Municipal para a quitação das parcelas vencidas, bem como para indenização pelos prejuízos decorrentes da rescisão parcial do contrato e das perdas comerciais associadas. Diante da situação hipotética, considerando o atual entendimento dos tribunais superiores, assinale a alternativa correta.",
  "alternativas": [
   "É possível de utilização de arbitragem pelo Município de Bela Vista para o caso em tela desde que haja previsão no edital ou no contrato.",
   "Uma eventual sentença arbitral contra o Município de Bela Vista estará sujeita à remessa necessária.",
   "A arbitragem envolvendo o Município de Bela Vista deverá ser sigilosa.",
   "A autoridade competente do Município de Bela Vista para a celebração de convenção de arbitragem é a mesma para a realização de acordos ou transações.",
   "A arbitragem poderá ser decidida por equidade."
  ],
  "correta": 3
 },
 {
  "id": "arespcj25-proc-037",
  "disciplina": "Direito Processual Civil",
  "assunto": "Execução e cumprimento de sentença",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 37",
  "enunciado": "O Município de Serra Verde ajuizou execução fiscal contra Marcelo, visando a cobrança de créditos tributários. Após a penhora de um imóvel de propriedade do executado e a frustração de duas praças para alienação do bem, o Município requereu sua adjudicação pelo valor da avaliação. Marcelo, citado pessoalmente no processo, não possui advogado constituído nos autos. Intimado por carta com aviso de recebimento, o executado permaneceu inerte durante o prazo legal. Considerando a situação hipotética narrada, assinale a alternativa correta.",
  "alternativas": [
   "A adjudicação somente poderá ocorrer se houver nova avaliação judicial do bem, independentemente do valor fixado na primeira avaliação.",
   "A ausência de advogado nos autos impede a intimação válida por carta com aviso de recebimento, devendo o juiz determinar a citação por edital.",
   "A adjudicação somente será considerada perfeita e acabada após o trânsito em julgado da decisão que a deferir.",
   "A adjudicação poderá ser deferida, sendo desnecessária nova avaliação, e será considerada perfeita e acabada com a assinatura do auto de adjudicação pelo juiz, adjudicatário, pelo escrivão ou chefe de secretaria.",
   "A ausência de manifestação do executado torna obrigatória a realização de hasta pública para alienação do bem antes da adjudicação."
  ],
  "correta": 3
 },
 {
  "id": "arespcj25-proc-038",
  "disciplina": "Direito Processual Civil",
  "assunto": "Recursos",
  "fonte": "VUNESP 2025 · ARES-PCJ · Procurador Jurídico · Questão 38",
  "enunciado": "Acerca dos efeitos dos recursos, assinale a alternativa correta.",
  "alternativas": [
   "O efeito translativo autoriza examinar o que não foi impugnado em sede recursal.",
   "Todos os recursos, exceto os embargos de declaração, possuem efeito devolutivo.",
   "O agravo de instrumento tem efeito suspensivo ex lege.",
   "Para ser reconhecido, o efeito expansivo da apelação deve ser apenas subjetivo.",
   "A apelação, em regra, tem efeito regressivo."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-001",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 1",
  "textoId": "tjsp25-esc-t1",
  "enunciado": "Com as informações do texto, conclui-se corretamente que Stephen Hawking",
  "alternativas": [
   "é celebrado pela sua colaboração para a ciência e para a matemática.",
   "é considerado um professor renomado devido a seu carisma e carinho.",
   "teve um papel insignificante no desenvolvimento da ciência e da matemática.",
   "contribuiu para Stephen Toope tornar-se um renomado professor.",
   "foi incapaz de garantir mais popularidade à ciência e à matemática."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-002",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 2",
  "textoId": "tjsp25-esc-t1",
  "enunciado": "A Universidade de Cambridge,         Stephen Hawking dedicou boa parte de suas contribuições, considera o renomado professor como uma inspiração          , quais deixa um legado indelével. De acordo com a norma-padrão, as lacunas da frase devem ser preenchidas, respectivamente, com:",
  "alternativas": [
   "a qual … à pessoas em geral … as",
   "à qual … a milhões de pessoas … às",
   "à que … às pessoas do mundo … as",
   "à qual … à muitas pessoas … às",
   "a qual … as muitas pessoas … às"
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-esc-003",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Semântica e reescrita",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 3",
  "textoId": "tjsp25-esc-t1",
  "enunciado": "Na frase do 2o parágrafo “Suas contribuições excepcionais para o conhecimento científico e a popularidade da ciência e da matemática deixaram um legado indelével”..., os termos destacados significam, correta e respectivamente:",
  "alternativas": [
   "brilhantes; permanente.",
   "relevantes; efêmero.",
   "prescindíveis; raro.",
   "excelentes; transitório.",
   "profícuas; transformador."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-004",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Concordância",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 4",
  "textoId": "tjsp25-esc-t1",
  "enunciado": "Assinale a alternativa que atende à norma-padrão de concordância verbal, de regência e de colocação pronominal.",
  "alternativas": [
   "A universidade e o mundo todo lembrarão de Stephen Hawking, o que é coerente ao seu perfil inspirador.",
   "Se lembrará a universidade e o mundo todo de Stephen Hawking, o que é coerente perante o seu perfil inspirador.",
   "A universidade e o mundo todo lembrar-se-ão de Stephen Hawking, o que é coerente com o seu perfil inspirador.",
   "Lembrarão-se de Stephen Hawking a universidade e o mundo todo, o que é coerente sobre o seu perfil inspirador.",
   "A universidade e o mundo todo se lembrará de Stephen Hawking, o que é coerente do seu perfil inspirador."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-esc-005",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Pontuação",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 5",
  "textoId": "tjsp25-esc-t1",
  "enunciado": "Assinale a alternativa que atende à norma-padrão de pontuação e de emprego de pronome.",
  "alternativas": [
   "Stephen Hawking contribuiu muito com a Universidade de Cambridge e era, uma inspiração para milhões de pessoas, deixando-as um legado indelével.",
   "Stephen Hawking que contribuiu muito com a Universidade de Cambridge, era uma inspiração para milhões de pessoas, deixando-lhes um legado indelével.",
   "Stephen Hawking, contribuiu muito com a Universidade de Cambridge, e era uma inspiração para milhões de pessoas, deixando-as um legado indelével.",
   "Stephen Hawking, que contribuiu muito com a Universidade de Cambridge, era uma inspiração para milhões de pessoas, deixando-lhes um legado indelével.",
   "Stephen Hawking contribuiu muito com a Universidade de Cambridge e era uma inspiração para milhões de pessoas, deixando-nas um legado indelével."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-esc-006",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 6",
  "textoId": "tjsp25-esc-t2",
  "enunciado": "As informações do editorial permitem inferir corretamente que",
  "alternativas": [
   "as autoridades governamentais vêm demonstrando certa fragilidade no combate à violência contra a mulher, razão pela qual os dados confirmam a presença do feminicídio de forma tão intensa.",
   "o fato de a questão da violência contra as mulheres ser uma responsabilidade da gestão pública significa que o tema deva deixar de ser tratado como algo também da esfera da moral e particular.",
   "a criação da Lei do Feminicídio, em 2015, foi um marco relevante no combate à violência contra a mulher, e, desde então, os estudos comprovam que não houve uma escalada dos casos.",
   "a realização do Agosto Lilás coincidiu com a divulgação do Mapa Nacional da Violência de Gênero, que comprova que as Leis Maria da Penha e do Feminicídio obtiveram êxito além do esperado.",
   "os problemas relativos ao combate à violência contra a mulher interessam a um grupo específico da sociedade, então, as autoridades governamentais desconhecem as necessidades desse grupo."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-007",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 7",
  "textoId": "tjsp25-esc-t2",
  "enunciado": "No texto, o assombro com a violência que vitima as mulheres aparece expresso em palavras por meio de um substantivo, um adjetivo e um advérbio, correta e respectivamente destacados nas passagens:",
  "alternativas": [
   "... as mulheres presas em relacionamentos violentos... (6o parágrafo) / ... diante do quadro alarmante. (5o parágrafo) / ... diariamente está na mira... (4o parágrafo)",
   "... há caminho longe desse horror... (6o parágrafo) / O bárbaro diagnóstico expõe a falha... (2o parágrafo) / Mas, infelizmente, a realidade cruel... (1o parágrafo)",
   "Um recorte mais amplo mostra... (3o parágrafo) / As estatísticas assustadoras não podem... (4o parágrafo) / ... há caminho longe desse horror... (6o parágrafo)",
   "... escancara a gravidade desse contexto. (3o parágrafo) / Esse roteiro de horror permanente... (3o parágrafo) / ... especialmente as polícias especializadas... (5o parágrafo)",
   "O bárbaro diagnóstico expõe a falha... (2o parágrafo) / Um recorte mais amplo mostra... (3o parágrafo) / ... ainda há muito a ser feito. (1o parágrafo)"
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-esc-008",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 8",
  "textoId": "tjsp25-esc-t2",
  "enunciado": "Na oração do 1o parágrafo “... a realidade cruel que envolve esse tipo de crime se mostra implacável...”, o termo destacado é antônimo de",
  "alternativas": [
   "arrojada.",
   "intolerante.",
   "compassiva.",
   "impassiva.",
   "exigente."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-esc-009",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Semântica e reescrita",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 9",
  "textoId": "tjsp25-esc-t2",
  "enunciado": "Com a realização do Agosto Lilás, o Brasil dedicou um mês para desenvolver campanhas de conscientização e combate à violência contra a mulher, celebrando a Lei Maria da Penha. Mas, infelizmente, a realidade cruel que envolve esse tipo de crime se mostra implacável e, em meio aos eventos, a divulgação do Mapa Nacional da Violência de Gênero comprova que ainda há muito a ser feito. (1o parágrafo) Os termos “Com”, “para”, “Mas” e “e” estabelecem, correta e respectivamente, relações de sentido de:",
  "alternativas": [
   "meio, conformidade, conclusão e oposição.",
   "modo, conformidade, oposição e conclusão.",
   "causa, consequência, adição e conclusão.",
   "modo, finalidade, conclusão e adição.",
   "meio, finalidade, oposição e adição."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-esc-010",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Conectivos e coesão",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 10",
  "textoId": "tjsp25-esc-t2",
  "enunciado": "Há uma relação de consequência e causa, nessa ordem, explicitada na passagem:",
  "alternativas": [
   "... desde a criação da Lei do Feminicídio, em 2015, o Brasil contabilizou 12.380 vítimas desse crime... (3o parágrafo)",
   "... o Estado, o Judiciário e as forças de segurança, especialmente as polícias especializadas, têm que executar ações de forma conjunta... (5o parágrafo)",
   "... 718 mulheres morreram em razão do gênero de janeiro a junho deste ano, conforme os registros de ocorrências. (2o parágrafo)",
   "... a divulgação do Mapa Nacional da Violência de Gênero comprova que ainda há muito a ser feito. (1o parágrafo)",
   "... o país apresentou média de quatro feminicídios e 187 estupros de mulheres por dia no primeiro semestre de 2025. (2o parágrafo)"
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-esc-011",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 11",
  "textoId": "tjsp25-esc-t3",
  "enunciado": "Da perspectiva apresentada pelo cronista, conclui-se corretamente que",
  "alternativas": [
   "brasileiros e cabo-verdianos são povos intensamente musicais, sendo estes caracterizados por expressarem por meio das canções o seu amor ao país em que vivem.",
   "memórias ancestrais encontram na música dos brasileiros e dos cabo-verdianos a forma de serem transportadas para o futuro, sendo a voz daqueles a mais celebrada.",
   "montanhas longínquas do interior de Santiago abrigam as tristezas do povo cabo-verdiano, que busca inspirações nas canções dos brasileiros para romper o silenciamento.",
   "todos os cabo-verdianos nutrem amor pela música, que passam a amar intensamente depois de nascerem e por meio da qual buscam expressar suas memórias.",
   "cantores como Cesária Évora e Orlando Pantera ratificam a superioridade de Cabo Verde em relação a outros países, principalmente o Brasil, cujo povo é bem musical."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-012",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 12",
  "textoId": "tjsp25-esc-t3",
  "enunciado": "Identifica-se termo empregado em sentido figurado, destacado em negrito, na passagem:",
  "alternativas": [
   "Um dos músicos mais celebrados da nação é Orlando Pantera, um cometa que viveu na terra... (2o parágrafo)",
   "O amor incondicional que nutrem pelo país e pelos seus ritmos não tem paralelo... (1o parágrafo)",
   "Embora se reconheça Cesária Évora como sendo a voz que revelou a alma do arquipélago... (2o parágrafo)",
   "A música continua a ser o passaporte da cultura cabo-verdiana no mundo. (2o parágrafo)",
   "... as gravações do disco que confirmaria aquilo que os habitantes da ilha de Santiago já sabiam... (3o parágrafo)"
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-013",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 13",
  "textoId": "tjsp25-esc-t3",
  "enunciado": "Considere as passagens:\n• \u0007O amor incondicional que nutrem pelo país e pelos seus ritmos não tem paralelo. (1o parágrafo)\n• \u0007Uma música catártica, crua e negra com a qual gerações novas se reconciliaram e aprenderam a reivindicar a sua herança africana. (2o parágrafo)\n• \u0007E um dos poucos que conseguiu transportar para a canção o sentir das gentes dos campos, os esquecidos, os seus ritmos e desejos. (3o parágrafo) No contexto em que estão empregados, os termos destacados significam, correta e respectivamente:",
  "alternativas": [
   "impingido; imutável; comunicar.",
   "consensual; intensa; remontar.",
   "ilimitado; perturbadora; restringir.",
   "irrestrito; libertadora; passar.",
   "hesitante; antiquada, levar."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-esc-014",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Concordância",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 14",
  "textoId": "tjsp25-esc-t3",
  "enunciado": "A concordância verbal está em conformidade com a norma-padrão em:",
  "alternativas": [
   "Orlando Pantera transpõem para a canção o sentir das gentes dos campos, os esquecidos.",
   "Para os cabo-verdianos, o país e os seus ritmos conta com um amor que não tem paralelo.",
   "Todos os momentos marcantes da história de Cabo Verde dispõe da presença da música.",
   "Em Cabo Verde, houveram artistas cujas músicas remetem às memórias ancestrais.",
   "São poucos que mantêm uma relação com o sentir das gentes, como Orlando Pantera."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-esc-015",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 15",
  "textoId": "tjsp25-esc-t3",
  "enunciado": "Considere as passagens:\n• \u0007... mas que se faz presente na língua que todos aprendem a falar desde o berço — ou melhor, a declamar e a cantar desde o ventre. (1o parágrafo)\n• \u0007... morreu no dia em que iniciaria, em Paris, as gravações do disco... (3o parágrafo) As vírgulas empregadas nas passagens transcritas apresentam o mesmo motivo de emprego, respectivamente, nas expressões destacadas em:",
  "alternativas": [
   "O que o cidadão pretende, por enquanto, é que se acelerem as principais obras urbanas. / Tudo que ele via naquele momento, na entrada de casa, era seus bons amigos chegando.",
   "Durante a conversa com leitores, o autor explorou grandes temas, a saber, política, liberdade e justiça. / O livro era um marco na história da editora que, bem famosa, seria reinaugurada.",
   "Ao ponderar sobre os negócios, no entanto, ele não sabia que havia informações obscuras. / Era preciso entender que, na condição precária do carro, um acidente era quase inevitável.",
   "Todos esperavam um reajuste no salário, por isso, já estavam fazendo planos com o dinheiro. / O rosto do rapaz estava marcado, de fato, por lágrimas, que sugeriam seu sofrimento.",
   "O livro que ele escreveu era muito ruim, isto é, nem deveria ter sido publicado. / Era preciso que a professora organizasse, na sala, um debate sobre o tema."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-esc-016",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 16",
  "enunciado": "Considere as informações:\n• \u0007Estigma          por mulheres asiáticas que pedem divórcio (https://www.terra.com.br/noticias, 31.08.2025. Adaptado.)\n• \u0007Quando, a energia elétrica caiu em praticamente toda a Península Ibérica, em Madri, era meio-dia e         . O que se seguiu a partir daí foi o que se espera em situações como essa: caos. (https://www.nexojornal.com.br, 30.04.2025. Adaptado.)\n• \u0007NASA trouxe para Terra         gramas de um tipo de asteroide que “pode ter acelerado o surgimento da vida” (https://expresso.pt/sociedade/ciencia, 27.09.2023. Adaptado) De acordo com a norma-padrão, as lacunas das frases devem ser preenchidas, respectivamente, com:",
  "alternativas": [
   "enfrentada … meia … duzentas e cinquenta",
   "enfrentado … meia … duzentos e cinquenta",
   "enfrentado … meio … duzentos e cinquenta",
   "enfrentados … meio … duzentas e cinquenta",
   "enfrentada … meio … duzentas e cinquenta"
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-esc-017",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a fé pública",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 17",
  "enunciado": "É crime, expressamente previsto no “caput” combinado com o inciso IV do art. 293 do CP, falsificar cautela de penhor emitida por entidade de direito público. Na hipótese de o documento de cautela ser legitimamente cancelado pela entidade, mediante a aposição de um carimbo, a conduta do sujeito que suprime tal carimbo, visando a uma nova utilização da cautela de penhor, é",
  "alternativas": [
   "típica e punida com a mesma pena, tendo em vista a equivalência das condutas de falsificar e suprimir.",
   "atípica, tendo em vista ausência de expressa previsão legal para a punição da supressão.",
   "típica e punida pelo próprio “caput” combinado com o inciso IV do art. 293 do CP, tendo em vista que a supressão também é considerada uma forma de falsificação.",
   "típica e punida pelo CP, tendo em vista que o bem jurídico também é atingido pela supressão.",
   "atípica, tendo em vista que não se pode admitir interpretação extensiva para que a supressão seja englobada pelo conceito de falsificação."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-esc-018",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a fé pública",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 18",
  "enunciado": "O crime de falsa identidade previsto no art. 307 do CP apenas é punível se",
  "alternativas": [
   "não constitui elemento de crime mais grave.",
   "cometido por funcionário público.",
   "cometido em conjunto por aquele a que se atribui falsa identidade e pelo terceiro que cede a própria identidade para utilização.",
   "causa prejuízo a terceiro.",
   "causa prejuízo à Administração Pública."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-019",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a Administração Pública",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 19",
  "enunciado": "Com relação ao crime previsto no art. 313-A do CP (inserção de dados falsos em sistema de informações), é correto afirmar que, para que o crime se configure,",
  "alternativas": [
   "é necessário que o funcionário efetivamente insira dados falsos, não caracterizando figura típica a facilitação para inserção.",
   "é necessário que haja efetivo dano a administrado, não caracterizando figura típica a mera intenção de causar dano.",
   "basta o mero fim de obtenção de vantagem indevida para si ou terceiro, não sendo necessário que o agente obtenha vantagem efetiva.",
   "é necessário que haja efetivo dano à Administração, não caracterizando figura típica a mera intenção de causar dano.",
   "é necessário que o funcionário efetivamente insira dados falsos, não caracterizando figura típica a exclusão de dados corretos."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-esc-020",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a Administração Pública",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 20",
  "enunciado": "O crime de condescendência criminosa caracteriza-se quando o funcionário público deixa de responsabilizar subordinado que cometeu infração no exercício do cargo ou, quando lhe falte competência, não leva o fato ao conhecimento da autoridade competente. Complementa a descrição da ação típica o elemento",
  "alternativas": [
   "“para satisfazer interesse pessoal”.",
   "“causando prejuízo ao serviço público”.",
   "“ainda que por reconhecida nobreza”.",
   "“mediante promessa de vantagem indevida”.",
   "“por indulgência”."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-esc-021",
  "disciplina": "Direito Processual Penal",
  "assunto": "Sujeitos do processo",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 21",
  "enunciado": "De acordo com o Código de Processo Penal, é correto afirmar que o juiz será considerado",
  "alternativas": [
   "suspeito se tiver aconselhado qualquer das partes.",
   "impedido se for credor ou devedor, tutor ou curador, de qualquer das partes.",
   "suspeito se tiver funcionado como juiz de outra instância, pronunciando-se, de fato ou de direito, sobre a questão.",
   "impedido se um parente seu (no caso, seu primo) responde a processo que tenha de ser julgado por qualquer das partes.",
   "suspeito se o seu cônjuge for diretamente interessado no feito."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-022",
  "disciplina": "Direito Processual Penal",
  "assunto": "Sujeitos do processo",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 22",
  "enunciado": "Sobre o tema “Do acusado e seu defensor”, é correto afirmar:",
  "alternativas": [
   "o acusado poderá realizar sua própria defesa, bastando, para tanto, possuir o grau de bacharel em Direito, sendo desnecessária sua inscrição na Ordem dos Advogados do Brasil.",
   "a falta de defensor público, dativo ou particular impedirá o processamento e o julgamento do acusado ausente; todavia, não impedirá o processamento e o julgamento do acusado foragido.",
   "quando nomeados pelo juiz, os advogados, como defensores dativos, têm a faculdade de declinar da nomeação, sendo desnecessário declarar o motivo da recusa.",
   "em caso de abandono do processo pelo defensor, cumulado com a não localização do acusado, o processo será sobrestado até a prisão do acusado.",
   "a constituição de defensor independerá de instrumento de mandato se o acusado o indicar por ocasião do interrogatório."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-esc-023",
  "disciplina": "Direito Processual Penal",
  "assunto": "Procedimentos",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 23",
  "enunciado": "Sobre a temática da citação judicial no processo penal, é correto afirmar:",
  "alternativas": [
   "a notificação judicial para o comparecimento de funcionário público em juízo, na condição de acusado, não deve ser endereçada ao próprio acusado, mas tão somente ao chefe da repartição a que pertence o funcionário acusado.",
   "o militar deve ser citado por intermédio do chefe do respectivo serviço.",
   "se o réu estiver preso, será requisitada a sua apresentação em juízo, no dia e hora designados, ao diretor do presídio onde se encontra recolhido, por isso desnecessária a citação pessoal do preso.",
   "se o réu não for encontrado, será citado por edital, com o prazo de 120 (cento e vinte) dias.",
   "não sendo encontrado o acusado, será procedida a citação por carta-convite."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-esc-024",
  "disciplina": "Direito Processual Penal",
  "assunto": "Procedimentos",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 24",
  "enunciado": "No tocante ao tema “instrução criminal – procedimento comum”, assinale a alternativa correta.",
  "alternativas": [
   "O procedimento será comum ordinário quando tiver por objeto crime cuja sanção máxima cominada seja inferior a 4 (quatro) anos de pena privativa de liberdade.",
   "Nos procedimentos ordinário e sumário, oferecida a denúncia ou queixa, o juiz, se não a rejeitar liminarmente, recebê-la-á e ordenará a citação do acusado para responder à acusação, por escrito, no prazo de 10 (dez) dias.",
   "Os processos que apurem a prática de crime hediondo ou violência contra a mulher terão prioridade de tramitação em todas as instâncias, desde que haja requerimento expresso do Ministério Público ou do(a) ofendido(a).",
   "O procedimento será comum sumário quando tiver por objeto crime cuja sanção máxima cominada for igual ou superior a 4 (quatro) anos de pena privativa de liberdade.",
   "O procedimento comum será ordinário, sumário, sumariíssimo e especial."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-esc-025",
  "disciplina": "Direito Processual Penal",
  "assunto": "Procedimentos",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 25",
  "enunciado": "Sobre os Juizados Especiais Criminais, assinale a alternativa correta.",
  "alternativas": [
   "Os embargos de declaração não interrompem o prazo para a interposição de recurso.",
   "Da decisão de rejeição da denúncia ou queixa caberá recurso em sentido estrito, que poderá ser julgado por turma composta de três juízes em exercício no primeiro grau de jurisdição, reunidos na sede do juizado.",
   "Da sentença caberá apelação, a qual será interposta no prazo de 15 (quinze) dias, contados da ciência da decisão pelo Ministério Público, pelo réu e seu defensor, por petição escrita, da qual constarão as razões e o pedido do recorrente.",
   "No recurso de apelação, a parte recorrida terá o prazo de 10 (dez) dias para oferecer sua resposta escrita.",
   "Os erros materiais não poderão ser corrigidos de ofício pelo juiz, motivo pelo qual a parte interessada deverá opor embargos de declaração no prazo de 3 (três) dias, contados da ciência da decisão."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-esc-026",
  "disciplina": "Direito Processual Civil",
  "assunto": "Execução e cumprimento de sentença",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 26",
  "enunciado": "Tom emprestou R$ 50.000,00 a Gael mediante a assinatura de uma nota promissória com vencimento no prazo 30 dias. Passado o prazo, Gael não realizou o pagamento, razão pela qual Tom ajuizou ação de execução de título extrajudicial requerendo a citação de Gael para pagar a dívida em 3 dias, sob pena de penhora de bens. Citado, Gael manteve-se inerte. O juiz então determinou a penhora do automóvel de Gael. O oficial de justiça compareceu à casa de Gael em um sábado, às 21h, para efetivar a diligência. Diante da situação hipotética, é correto afirmar que o ato processual é",
  "alternativas": [
   "nulo, pois ainda que possa ser realizado em finais de semana e feriados, deve ser realizado das 6 (seis) às 20 (vinte) horas.",
   "válido, por se tratar de ato que, por sua natureza, tem característica de urgente.",
   "válido, independentemente de autorização judicial.",
   "nulo, pois depende de autorização judicial específica para a realização fora do horário do expediente.",
   "nulo, pois deverá ser realizado em dias úteis."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-esc-027",
  "disciplina": "Direito Processual Civil",
  "assunto": "Ações de família e procedimentos especiais",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 27",
  "enunciado": "João, de 10 anos, representado por sua mãe, ajuíza ação de alimentos contra seu pai, Carlos, alegando que este não contribui regularmente para seu sustento. Nos autos, resta comprovado que a mãe arca sozinha com todas as despesas de João, enquanto Carlos possui emprego estável e renda mensal líquida de R$ 6.000,00. João requer o pagamento de R$ 30.000,00 pelos alimentos em atraso, bem como a fixação de alimentos mensais no valor de R$ 1.800,00. Em sentença, o juiz julga totalmente procedentes os pedidos de João. Diante da situação hipotética, sendo certo que a sentença ainda não transitou em julgado, assinale a alternativa correta.",
  "alternativas": [
   "Carlos poderá parcelar o valor dos alimentos em atraso, não podendo a parcela, somada ao valor mensal, ser superior R$ 3.000,00.",
   "Carlos terá o prazo de cinco dias para pagar o valor integral decidido em sentença.",
   "O juiz só poderá requerer o desconto em folha de pagamento caso Carlos atrase alguma parcela.",
   "Caso reste verificada conduta procrastinatória de Carlos, o juiz poderá, desde que mediante requerimento de João, dar ciência ao Ministério Público dos indícios da prática do crime de abandono material.",
   "João poderá executar desde logo os alimentos nos mesmos autos."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-028",
  "disciplina": "Direito Processual Civil",
  "assunto": "Recursos",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 28",
  "enunciado": "Helena contratou Arthur, advogado autônomo, para propor ação de indenização contra Karina. Realizada a instrução processual, a sentença foi julgada improcedente. Durante o prazo para interposição de apelação, Arthur veio a falecer. Diante da situação hipotética, é correto afirmar que o prazo para interposição da apelação",
  "alternativas": [
   "será suspenso, com prosseguimento de onde parou, após nomeação de novo advogado.",
   "será prorrogado automaticamente por mais 15 (quinze) dias.",
   "será interrompido, com prosseguimento de onde parou, após peticionamento de novo advogado.",
   "será restituído em proveito de Helena, contra quem começará a correr novamente depois da intimação.",
   "não se suspende nem se interrompe, devendo Helena ser diligente e constituir rapidamente novo advogado."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-esc-029",
  "disciplina": "Direito Processual Civil",
  "assunto": "Prazos",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 29",
  "enunciado": "Dona Maria, costureira autônoma, compareceu ao Juizado Especial Cível e, de forma oral, narrou que adquiriu uma máquina de costura da loja Retalhão pelo valor de 5 salários-mínimos. O equipamento apresentou defeito na primeira semana e, diante da recusa da loja em substituí-lo ou devolver o valor pago, Maria propôs ação requerendo a restituição do valor ou a entrega de um novo produto. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "Dona Maria deverá escolher entre a restituição do valor ou a entrega de um novo produto, uma vez que, nos juizados especiais, não é possível apresentar pedidos alternativos ou cumulados.",
   "Registrado o pedido de Dona Maria, independentemente de distribuição e autuação, a Secretaria do Juizado designará a sessão de conciliação com a loja Retalhão, a realizar-se no prazo de quinze dias.",
   "Caso a loja Retalhão comparecesse inicialmente junto com Dona Maria, a sessão de conciliação seria instaurada no prazo de até trinta dias, dispensados o registro prévio de pedido e a citação.",
   "Caso a loja Retalhão fosse citada e apresentasse pedido contraposto, este deveria ser indeferido por não ser permitido nos juizados especiais.",
   "Por ser o réu pessoa jurídica, Dona Maria deverá ser assistida por advogado, independentemente do valor da causa."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-esc-030",
  "disciplina": "Direito Processual Civil",
  "assunto": "Execução e cumprimento de sentença",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 30",
  "enunciado": "A Fundação Municipal de Cultura de Santa Aurora, vinculada ao Município de Santa Aurora, contratou a microempresa Luz & Som Ltda. – ME para fornecer equipamentos de iluminação para comemoração do aniversário da Fundação. O contrato previa o pagamento de 50 salários-mínimos. Apesar da execução integral do serviço, a Fundação deixou de efetuar o pagamento. Diante disso, a microempresa ajuizou ação de cobrança contra a Fundação perante o Juizado Especial da Fazenda Pública, atribuindo à causa o valor correspondente ao contrato. A sentença julgou a ação procedente. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "A sentença deverá ser anulada e o processo remetido para vara comum em razão das partes.",
   "Caso não seja apresentado recurso, a sentença será objeto de reexame necessário.",
   "Em que pese a Fundação seja pessoa jurídica de direito público, terá o prazo de 10 (dez) dias úteis para apresentar recurso contra a sentença.",
   "Por se tratar de causa proposta perante o Juizado Especial da Fazenda Pública, não se admite recurso, exceto para evitar dano de difícil ou incerta reparação.",
   "Se a sentença transitar em julgado, o pagamento será feito no prazo máximo de 30 (trinta) dias, contados da entrega da requisição do juiz à autoridade citada para a causa."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-esc-031",
  "disciplina": "Direito Constitucional",
  "assunto": "Controle de constitucionalidade",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 31",
  "enunciado": "O policial Severo foi chamado a atender um flagrante delito que o sujeito apelidado de Pernalonga estava cometendo dentro da casa deste. Chegando ao local do crime no final da tarde e evidenciada a prática de infração penal, Severo constatou que era hipótese de flagrante delito. Coincidentemente, o policial avistou em uma casa vizinha Carcará, criminoso foragido e que tinha mandado de prisão expedido por autoridade judicial. Diante da situação, face ao adiantado da hora, e, obviamente, não havendo consentimento dos moradores, pairou dúvidas acerca da possibilidade de adentrar nos domicílios de Pernalonga e Carcará para efetuar as prisões. Face a situação hipotética, é correto afirmar, de acordo com o disposto na Constituição de 1988, que",
  "alternativas": [
   "Severo pode ingressar no período noturno apenas na casa de Carcará, pois há ordem judicial a ser cumprida – mandado de prisão.",
   "Severo pode ingressar em ambas as casas para efetuar as prisões nos períodos diurno ou noturno.",
   "ainda que persistisse a situação de flagrante durante o período noturno, Severo somente poderia adentrar na casa de Pernalonga durante o dia para efetuar a prisão.",
   "a casa é asilo inviolável, não podendo Severo adentrar nas duas casas no período noturno, podendo entrar nas duas casas apenas no período diurno.",
   "Severo não pode ingressar na casa de Carcará no período noturno, mas pode ingressar na casa de Pernalonga uma vez caraterizada no momento do ingresso a situação de flagrante delito."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-esc-032",
  "disciplina": "Direito Constitucional",
  "assunto": "Direitos políticos",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 32",
  "enunciado": "A respeito das ações constitucionais, assinale a alternativa correta.",
  "alternativas": [
   "O autor da ação popular, inexistente situação de comprovada má-fé, bem como os impetrantes de habeas data não estão sujeitos ao pagamento de custas processuais.",
   "Mandado de segurança coletivo pode ser proposto por entidade sindical ou partido político com representação na assembleia legislativa.",
   "São gratuitas as ações de mandado de segurança e habeas corpus.",
   "Ocorrendo ilegalidade ou abuso de poder por autoridade pública que viole a liberdade de locomoção, a ação cabível será o mandado de segurança.",
   "Na ação popular, salvo comprovada má-fé, tanto o autor popular como o réu estarão isentos do pagamento de custas processuais e ônus sucumbenciais."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-033",
  "disciplina": "Direito Constitucional",
  "assunto": "Nacionalidade",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 33",
  "enunciado": "Joaquim, integrante da carreira diplomática portuguesa, prestando serviço em Angola, foi casado em primeiras núpcias com a atriz portuguesa Catarina, tendo nascido a filha Josefina. Posteriormente, Joaquim se separou e casou-se com Rúbia, tenista e brasileira naturalizada, tendo nascido da união a filha Sandra. Josefina e Sandra nasceram em Angola quando apenas o genitor estava a serviço de Portugal. Tendo interesse que as filhas sigam a carreira diplomática, mas pela República Federativa do Brasil, assinale a alternativa correta à luz das disposições da Constituição de 1988.",
  "alternativas": [
   "Josefina pode se tornar brasileira naturalizada se comprovar idoneidade moral e vier a residir por um ano na República Federativa do Brasil, sendo permitido seguir a carreira diplomática brasileira.",
   "Josefina e Sandra não podem ser consideradas brasileiras natas, não sendo, assim, permitido seguir a carreira diplomática brasileira.",
   "Caso Sandra tenha sido registrada na repartição competente brasileira em Angola, será considerada brasileira naturalizada, podendo seguir a carreira diplomática.",
   "Sandra poderá seguir a carreira diplomática brasileira, se vier a residir no Brasil e optar, em qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira.",
   "Josefina e Sandra podem seguir a carreira diplomática brasileira se adquirirem a nacionalidade brasileira e houver reciprocidade em favor dos brasileiros, exigida residência permanente no Brasil."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-esc-034",
  "disciplina": "Direito Constitucional",
  "assunto": "Administração Pública na CF",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 34",
  "enunciado": "O engenheiro Alípio foi admitido como servidor público concursado de autarquia estadual, tendo se efetivado. É correto afirmar, à luz do disposto na Constituição de 1988, que Alípio",
  "alternativas": [
   "não estará sujeito a teto remuneratório mensal máximo por ser servidor público da administração indireta estadual.",
   "estará sujeito ao limite remuneratório mensal máximo pago a título de subsídio ao Governador do Estado.",
   "caso instituído pelo estado-membro, poderá aderir a plano de previdência complementar na modalidade benefício definido, observado o limite máximo previsto para o regime geral da previdência social.",
   "estará sujeito ao teto remuneratório mensal máximo pago a título de subsídio aos Desembargadores do Tribunal de Justiça Estadual.",
   "poderá ter seus proventos de aposentadoria do regime próprio de previdência superiores ao limite máximo fixado pelo Regime Geral de Previdência Social, observadas as normas constitucionais relativas ao regime de previdência complementar."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-esc-035",
  "disciplina": "Direito Constitucional",
  "assunto": "Direitos e garantias fundamentais",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 35",
  "enunciado": "João trabalhava como empregado da empresa Alfa em regime ininterrupto de revezamento, sendo filiado ao respectivo sindicato. Através de negociação coletiva firmada pelos sindicatos representativos das categorias, foi fixada jornada superior a seis horas por turno, bem como acordada redução salarial. Tendo ocorrido a extinção do vínculo laboral recentemente, e pretendendo João ingressar com reclamação trabalhista para cobrança de diversas verbas em face da empresa, pode-se afirmar que a Constituição de 1988",
  "alternativas": [
   "não permite negociação coletiva estabelecendo redução salarial, mas permite mediante negociação coletiva a fixação de jornada superior a seis horas por turno, dispondo João do prazo máximo de 05 anos, após a extinção do contrato de trabalho, para ingressar com reclamação trabalhista.",
   "permite negociação coletiva estabelecendo redução salarial e aumento da jornada de trabalho, e João terá direito de ação quanto aos créditos resultantes da relação de trabalho com prazo prescricional de 10 anos após a data de extinção do contrato de trabalho.",
   "permite negociação coletiva estabelecendo a redução salarial, mas não permite negociação para fixação de jornada superior a seis horas por turno, e João deverá ingressar com reclamação trabalhista no prazo máximo de 02 anos após a extinção do contrato de trabalho.",
   "não autoriza negociação coletiva estabelecendo jornada superior a seis horas por turno, devendo a empresa indenizá-lo pelas horas extraordinárias, dispondo João do prazo máximo de 02 anos após a extinção do contrato de trabalho para ingressar com reclamação trabalhista.",
   "permite negociação coletiva fixando jornada superior a seis horas por turno e também redução salarial mediante convenção ou acordo coletivo, e João poderá ingressar com reclamação trabalhista no prazo máximo de 02 anos após a extinção do contrato de trabalho para a cobrança de verbas trabalhistas."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-esc-036",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 36",
  "enunciado": "João, servidor público do Estado de São Paulo, é um atleta de destaque em sua modalidade esportiva. Ele recebeu um convite para participar de duas competições importantes: (1) os Jogos Sul-Americanos, que acontecerão na Colômbia, onde representará o Brasil, conforme requisição formal da Confederação Brasileira de sua modalidade; e (2) o torneio interestadual, em Minas Gerais, no qual a equipe do clube esportivo que irá representar, baseada em São Paulo, irá competir com chances reais de pódio. O clube esportivo fez a solicitação de seu afastamento para o segundo caso. Supondo que João buscou a devida autorização junto à autoridade competente, é correto afirmar, com base no Estatuto dos Funcionários Públicos Civis do Estado de São Paulo (Lei no 10.261/1968), que o afastamento de João para participar",
  "alternativas": [
   "de ambas as competições será com prejuízo do vencimento ou remuneração, por se tratar de atividades esportivas não relacionadas diretamente às atribuições do cargo, independentemente de autorização da autoridade competente.",
   "dos Jogos Sul-Americanos será com prejuízo do vencimento ou remuneração, pois se trata de uma competição internacional.",
   "dos Jogos Sul-Americanos será sem prejuízo do vencimento ou remuneração, e o torneio interestadual de clubes será com prejuízo do vencimento ou remuneração, sempre mediante autorização do governador.",
   "dos Jogos Sul-Americanos será sem prejuízo do vencimento ou remuneração, e o torneio interestadual de clubes será igualmente sem prejuízo, em virtude da relevância esportiva.",
   "de ambas as competições será sem prejuízo do vencimento ou remuneração, desde que haja a devida autorização do governador."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-esc-037",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 37",
  "enunciado": "Maria, recém-aprovada em concurso público para o cargo civil no Governo do Estado de São Paulo, tomou posse em 15 de agosto de 2025. No entanto, em 10 de setembro de 2025, Maria sofreu um acidente doméstico e necessitou de repouso absoluto, impossibilitando sua entrada em exercício no prazo. No dia 12 de setembro de 2025, sua advogada protocolou um requerimento solicitando a prorrogação do prazo para início do exercício por mais 90 dias. Não houve qualquer pedido de licença por motivo de saúde por parte de Maria. A autoridade competente, avaliando o caso, concedeu a prorrogação solicitada para o início do exercício, porém, apenas até 14 de outubro de 2025. De acordo com o Estatuto dos Funcionários Públicos Civis do Estado de São Paulo (Lei no 10.261/1968) e com a situação hipotética descrita, é correto afirmar que",
  "alternativas": [
   "a autoridade competente agiu corretamente ao fixar o prazo para início do exercício em 14 de outubro, posto que o prazo regular é de 45 dias, postergável por mais 15.",
   "se, porventura, Maria não entrar em exercício dentro do prazo estabelecido, será considerada sem efeito a sua nomeação, sendo dispensado o ato de exoneração.",
   "se, porventura, Maria não entrar em exercício dentro do prazo estabelecido será exonerada do cargo.",
   "a autoridade competente agiu errado ao fixar o prazo limite, posto que a legislação não fixa prazo máximo para a prorrogação do início do exercício em cargo público.",
   "se, porventura, Maria não entrar em exercício dentro do prazo estabelecido nada ocorrerá, posto que o afastamento de Maria se deve por questão de saúde."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-esc-038",
  "disciplina": "Direito Administrativo",
  "assunto": "Agentes públicos",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 38",
  "enunciado": "De acordo com a Lei no 10.261/1968 (Estatuto dos Funcionários Públicos Civis do Estado de São Paulo), a reintegração de servidor público estadual é",
  "alternativas": [
   "o reingresso no serviço público, decorrente da decisão judicial passada em julgado, com ressarcimento de prejuízos resultantes do afastamento.",
   "feita para cargo do mesmo padrão de vencimento ou de igual remuneração, ressalvados os casos de reintegração a pedido.",
   "feita para cargo do mesmo padrão de vencimento ou superior, ainda que se trate de reintegração a pedido.",
   "considerada ato privativo do governador do Estado de São Paulo, após análise e parecer conclusivo do procurador-geral do Estado.",
   "o reingresso no serviço público, decorrente da decisão administrativa transitada em julgado, com ou sem ressarcimento de prejuízos resultantes do afastamento."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-039",
  "disciplina": "Direito Administrativo",
  "assunto": "Improbidade administrativa",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 39",
  "enunciado": "A empresa Construções Rápidas Ltda., uma construtora de médio porte com atuação predominante em projetos de infraestrutura básica em pequenos municípios do interior, foi processada por ato de improbidade administrativa, na modalidade de lesão ao erário, em razão de superfaturamento comprovado em contrato de pavimentação de vias urbanas com a Prefeitura Municipal de Y. Auditoria do Tribunal de Contas competente confirmou o dano ao patrimônio público. Durante a fase de fixação das sanções, a defesa da Construções Rápidas Ltda. demonstrou que a empresa é a principal empregadora da cidade, gerando centenas de postos de trabalho diretos e indiretos, e que sua falência, decorrente de uma sanção excessivamente severa, causaria um grave impacto social e econômico no município, com o fechamento de postos de trabalho, a interrupção de projetos em andamento e a perda de arrecadação de impostos. Com base na situação hipotética e nas disposições da Lei no 8.429/1992 (Lei de Improbidade Administrativa), assinale a alternativa correta.",
  "alternativas": [
   "A manutenção das atividades da pessoa jurídica é um critério a ser considerado na aplicação das sanções, mas apenas se o dano ao erário for de pequena monta e não houver dolo comprovado.",
   "A Lei de Improbidade Administrativa não permite que o juiz leve em consideração os efeitos econômicos e sociais na aplicação das sanções à pessoa jurídica, devendo focar na reparação integral do dano ao erário.",
   "A possibilidade de consideração pelo juiz dos efeitos econômicos e sociais das sanções sobre pessoas jurídicas apenadas nos termos da Lei de Improbidade Administrativa aplica-se exclusivamente às entidades sem fins lucrativos.",
   "Na fixação das sanções à empresa Construções Rápidas Ltda., o juiz deverá considerar os efeitos econômicos e sociais das penalidades, buscando viabilizar a manutenção das atividades da empresa, mesmo diante do superfaturamento.",
   "A preocupação com os efeitos econômicos e sociais das sanções é um critério que só pode ser invocado pela defesa da pessoa jurídica em fase recursal, após a fixação da pena em primeira instância."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-esc-040",
  "disciplina": "Direito Administrativo",
  "assunto": "Improbidade administrativa",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 40",
  "enunciado": "A Organização da Sociedade Civil Esperança Viva, pessoa jurídica de direito privado sem fins lucrativos, celebrou com a Prefeitura Municipal de X o instrumento jurídico apropriado para a gestão de um projeto social de atendimento a crianças e adolescentes em situação de vulnerabilidade, utilizando integralmente recursos provenientes do erário público municipal. Durante a execução do projeto, verificou-se que o Sr. João da Silva, presidente da Esperança Viva, em conluio com a Sra. Maria Souza, servidora pública municipal responsável pela fiscalização do termo de parceria, desviou parte dos recursos repassados pela prefeitura para fins pessoais, por meio da apresentação de notas fiscais falsas relativas a serviços nunca prestados. Tal conduta gerou um prejuízo significativo aos cofres públicos e comprometeu o atendimento às crianças e aos adolescentes beneficiados pelo projeto. Com base na situação hipotética e nas disposições da Lei no 8.429/1992 (Lei de Improbidade Administrativa), assinale a alternativa correta.",
  "alternativas": [
   "A Sra. Maria Souza é a única, no caso, que pode ser responsabilizada por ato de improbidade administrativa, pois a lei não alcança instituições sem fins lucrativos.",
   "O Sr. João da Silva, em razão de celebrar instrumento jurídico com a Administração e utilizar recursos de origem pública, sujeita-se às sanções da Lei de Improbidade Administrativa.",
   "A conduta do Sr. João da Silva configura meramente um ilícito civil, não estando abrangida pelas disposições da Lei de Improbidade Administrativa, que se restringe a atos dolosos praticados especificamente por agentes públicos diretos e equiparados.",
   "A Lei de Improbidade Administrativa não se aplica ao Sr. João da Silva, por não ser este considerado como agente público nos termos desta Lei.",
   "Somente a Organização da Sociedade Civil Esperança Viva pode ser responsabilizada, por ser a entidade que celebrou o instrumento jurídico, não podendo haver automática desconsideração da personalidade jurídica."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-esc-041",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 41",
  "enunciado": "João é servidor público municipal concursado e no momento ocupa a função de secretário Municipal de Obras e Serviços Públicos de uma pequena cidade. Aproveitando-se de sua posição, João solicitou e recebeu de um empresário local, que frequentemente participava das licitações do município, um “presente” de grande valor, a título de “ajuda de custo” para uma viagem particular que faria com sua família. Em troca, João agilizou e facilitou a aprovação de projetos do referido empresário na prefeitura, sem seguir os trâmites regulares, e inclusive “fechou os olhos” para algumas irregularidades que deveriam ser fiscalizadas por sua secretaria, garantindo que a empresa do empresário fosse sempre beneficiada em futuros contratos. Com base nesta situação hipotética, é correto afirmar que",
  "alternativas": [
   "João está sujeito, entre outras sanções, à perda dos bens ou valores acrescidos ilicitamente ao patrimônio, perda da função pública, suspensão dos direitos políticos por até 14 anos, pagamento de multa civil equivalente ao valor do acréscimo patrimonial.",
   "a simples demonstração de recebimento, por João, de vantagem oriunda de pessoa com interesse em decisão da Secretaria de Obras e Serviços Públicos é razão suficiente para a condenação por improbidade, sendo desnecessária a demonstração da conexão entre a vantagem recebida e a expectativa da prática de ato ilegal.",
   "ainda que a conduta de João possa, em tese, figurar como ato de improbidade que importa violação de princípio da Administração Pública, como agente político, não está João sujeito à Lei de Improbidade Administrativa (Lei no 8.429/1992), mas sim à lei de crimes de responsabilidade dos prefeitos.",
   "João não está sujeito a sanções com base na Lei de Improbidade Administrativa (Lei no 8.429/1992), pois as condutas descritas não se amoldam perfeitamente à tipologia fixada nesta lei, a qual exige correspondência direta entre a conduta descrita e a praticada para que se possa falar em improbidade, considerando-se o princípio da legalidade estrita.",
   "eventual não apresentação de ação civil por improbidade administrativa pelo Ministério Público, após análise em inquérito civil especialmente aberto para a apuração das condutas descritas no enunciado, tem como efeito o bloqueio da aplicação, pela própria Administração, de sanções disciplinares a João."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-051",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Razão, proporção e problemas",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 51",
  "enunciado": "Um encontro reúne 84 musicistas que são especialistas em piano ou violão, sendo que alguns são apenas violonistas, alguns são apenas pianistas e os demais que são pianistas e violonistas. Considerando apenas os musicistas com especialidade em um único instrumento, a razão entre o número dos que são pianistas e o número dos que são violonistas é igual a 4/7. Considerando as especialidades desses musicistas, a razão entre o número dos que são pianistas e o número dos que são violonistas é igual 7/10. O algarismo das unidades do número de musicistas nesse encontro que são violonistas, mas não são pianistas é",
  "alternativas": [
   "3.",
   "2.",
   "6.",
   "4.",
   "5."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-esc-052",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Porcentagem",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 52",
  "enunciado": "Sofia digitalizou todos os processos arquivados em um depósito em 33 dias. Nos primeiros 9 dias ela digitalizou 36% dos processos, concluindo 27 processos por dia e, nos demais dias, ela concluiu os demais processos, digitalizando N processos a cada dia. O algarismo das unidades de N é",
  "alternativas": [
   "6.",
   "5.",
   "7.",
   "4.",
   "8. ras c unho"
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-esc-054",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Médias",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 54",
  "enunciado": "Certo dia, em um treino de lances livres de uma equipe de basquetebol, apenas André e Carlos faltaram. Considerando os atletas presentes nesse treino, a média aritmética do número de lances livres convertidos foi igual a 48. No dia seguinte, André fez o treino sozinho e a média aritmética do número de lances livres convertidos pelos atletas que treinaram nesses dois dias foi igual a 50. Finalmente, no terceiro dia, Carlos fez o treino sozinho e a média aritmética do número de lances livres convertidos por todos os atletas dessa equipe nesses três dias foi igual a 49. Sabendo que André converteu 53 lances livres a mais do que Carlos, o número de atletas dessa equipe de basquetebol é igual a",
  "alternativas": [
   "19.",
   "18.",
   "17.",
   "20.",
   "16. R U N H O"
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-055",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "OneDrive e nuvem",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 55",
  "enunciado": "Ao usar o OneDrive com o MS-Windows 11, em sua configuração padrão, um arquivo da nuvem marcado como disponível localmente pode deixar de estar disponível localmente",
  "alternativas": [
   "se o servidor da nuvem for desligado acidentalmente.",
   "se a internet do servidor da nuvem ficar fora do ar por mais de dez minutos.",
   "em caso de queda da internet local, o que impede que ele seja atualizado e causa sua exclusão automática.",
   "por falta de espaço no dispositivo local, de modo que o arquivo pode ser excluído do dispositivo mesmo sem ação direta do usuário.",
   "caso o usuário local saia da sessão do Windows, fazendo com que o arquivo seja excluído e só volte a ser sincronizado no próximo login, automaticamente."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-esc-056",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Word",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 56",
  "enunciado": "Um usuário do MS-Word 365, em sua configuração padrão, recebeu um documento de texto contendo uma lista numerada de 1 a 5. No entanto, essa lista deveria ser numerada de 20 a 25. Para alterar a lista numerada conforme a necessidade, o usuário deve",
  "alternativas": [
   "clicar com o botão primário do mouse no número 5 da lista numerada e, no menu de contexto aberto, escolher a opção “Iniciar Numeração em...”, que abre a janela na qual pode ser colocado o número 20, para ajustar toda a lista.",
   "clicar com o botão secundário do mouse no número 5 da lista numerada e, no menu de contexto aberto, escolher a opção “Iniciar Numeração em...”, que abre a janela na qual pode ser colocado o número 20, para ajustar toda a lista.",
   "clicar com o botão secundário do mouse no número 1 da lista numerada e, no menu de contexto aberto, escolher a opção “Definir Valor de Numeração...”, que abre a janela na qual pode ser colocado o número 20, para ajustar toda a lista.",
   "clicar com o botão primário do mouse no número 1 da lista numerada e, no menu de contexto aberto, escolher a opção “Valor de Numeração...”, que abre a janela na qual pode ser colocado o número 20, para ajustar toda a lista.",
   "remover toda a lista item por item e iniciar uma nova lista escolhendo o botão Lista personalizada do grupo Lista da guia Inserir."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-esc-057",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Word",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 57",
  "enunciado": "Um escrevente criou um novo documento vazio por meio do MS-Word 365, em sua configuração padrão, e executou as ações a seguir, nesta ordem:\n1. Pressionou o botão sublinhado.\n2. Digitou a palavra TRIBUNAL.\n3. Pressionou a barra de espaços.\n4. Digitou a palavra DE.\n5. Pressionou o botão negrito.\n6. Pressionou a barra de espaços.\n7. Pressionou o botão itálico.\n8. Digitou a palavra JUSTIÇA.\n9. Pressionou o botão negrito.\n10. Pressionou a barra de espaços.\n11. Digitou a palavra DO.\n12. Pressionou a barra de espaços.\n13. Pressionou o botão sublinhado.\n14. Pressionou o botão itálico.\n15. Digitou a palavra ESTADO.\n16. Selecionou todo o parágrafo.\n17. Pressionou o botão sublinhado. Após todas as ações descritas, os números de palavras com formatação negrito, formatação itálico e formatação sublinhado são, correta e respectivamente,",
  "alternativas": [
   "1, 2 e 5.",
   "2, 1 e 5.",
   "1, 2 e 0.",
   "2, 2 e 5.",
   "2, 3 e 0."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-esc-060",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Correio eletrônico",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 60",
  "enunciado": "Observe a descrição do seguinte e-mail, denominado e-mail 1: De: A Para: B Cc: C Cco: D Assunto: manual O usuário B, ao receber o e-mail 1, clicou em Responder a Todos e enviou a resposta, que se tornou o e-mail 2. Todos os usuários que receberam o e-mail 2 clicaram em Responder a Todos e enviaram uma resposta. Considerando que todos os e-mails, desde o e-mail 1, foram enviados e recebidos com sucesso por meio do Gmail, em sua configuração padrão, assinale a alternativa que apresenta corretamente a quantidade de e-mails recebidos, respectivamente, pelos usuários A, B, C e D.",
  "alternativas": [
   "3, 4, 4 e 4.",
   "2, 3, 3 e 4.",
   "2, 2, 3 e 1.",
   "3, 2, 3 e 1.",
   "2, 3, 3 e 1."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-esc-061",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Internet e navegadores",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 61",
  "enunciado": "Um usuário do buscador www.google.com, em sua configuração padrão, deseja buscar páginas que contenham, simultaneamente, as três palavras seguintes no corpo da página: “segurança”, “dados” e “privacidade”. Assinale a alternativa que apresenta corretamente a expressão de busca que deve ser usada no buscador.",
  "alternativas": [
   "intext:segurança +dados +privacidade",
   "allintext:segurança dados privacidade",
   "intext:segurança * dados * privacidade",
   "“segurança dados privacidade”",
   "segurança +dados +privacidade"
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-esc-062",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Microsoft Teams",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 62",
  "enunciado": "Em um chat do MS-Teams, em sua configuração padrão, qual é o formato correto para citar um usuário (fulano) de modo que o Teams envie uma notificação automaticamente a esse usuário?",
  "alternativas": [
   "!fulano",
   "#fulano#",
   "#fulano",
   "@fulano",
   "&fulano"
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-esc-063",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Windows",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 63",
  "enunciado": "Um usuário abriu uma pasta local em seu computador, por meio do Explorador de Arquivos do MS-Windows 11, ambos na configuração padrão, e nela estavam somente os seguintes arquivos vazios: normas_sindicato.txt busca_indicios.txt indicativo_correto.txt Introducao.txt processo_inicial.txt Em seguida, usou a barra de pesquisa do Explorador de Arquivos na mesma pasta, para pesquisar nessa pasta pelo nome dos arquivos com o seguinte padrão de pesquisa: ind* Quanto aos arquivos retornados como resultado dessa pesquisa, é correto afirmar que",
  "alternativas": [
   "apareceram os arquivos busca_indicios.txt e indicativo_correto.txt, apenas.",
   "apareceram os arquivos normas_sindicato.txt, busca_indicios.txt, indicativo_correto.txt, Introducao. txt e processo_inicial.txt.",
   "apareceu o arquivo indicativo_correto.txt, apenas.",
   "apareceram os arquivos normas_sindicato.txt, busca_indicios.txt e indicativo_correto.txt, apenas.",
   "nenhum arquivo coincide com o padrão de pesquisa."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-064",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Lógica proposicional e argumentação",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 64",
  "enunciado": "Considere a proposição “Se estou correndo ou jogando futebol, então amanhã estarei de férias”. Uma negação lógica dessa proposição é equivalente a:",
  "alternativas": [
   "Se amanhã não estarei de férias, então não estou correndo e não estou jogando futebol.",
   "Ou estou correndo ou jogando futebol ou amanhã estarei de férias.",
   "Estou correndo ou jogando futebol, e amanhã não estarei de férias.",
   "Ou não estou correndo ou não estou jogando futebol ou amanhã não estarei de férias.",
   "Se não estou correndo ou não estou jogando futebol, então amanhã não estarei de férias."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-esc-065",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Sequências e padrões",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 65",
  "enunciado": "Considere a sequência A = (1, 4, 7, 10, 13, 16, 19, …), formada a partir de um padrão lógico. A partir da sequência A, foi formada a sequência B = (1, 4, 7, 1, 0, 1, 3, 1, 6, 1, 9, …). O 245o termo da sequência B é",
  "alternativas": [
   "8.",
   "4.",
   "0.",
   "5.",
   "7."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-esc-066",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Associação lógica e ordenação",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 66",
  "enunciado": "Em um restaurante, Ana, Eva, Bruno, Davi e Carla estavam sentados, nessa ordem, ao redor de uma mesa circular com cinco assentos. Em uma disposição circular, cada pessoa tem duas pessoas ao seu lado, uma do lado esquerdo e outra do lado direito; nessa mesa, ao lado esquerdo de Ana estava Eva. Após algum tempo, Fábio chegou para juntar-se ao grupo; todos se levantaram, cumprimentaram Fábio e os seis sentaram-se em uma mesa circular com seis assentos. Nessa nova disposição, ninguém se sentou ao lado das mesmas pessoas que estavam ao seu lado anteriormente; a pessoa que se sentou ao lado esquerdo de Davi não é a mesma pessoa que se sentou ao lado direito de Carla; a pessoa ao lado direito de Ana não é Davi; e Eva não se sentou ao lado de Carla. Nessa mesa com seis assentos, sentaram-se ao lado de Fábio, em alguma ordem,",
  "alternativas": [
   "Bruno e Davi.",
   "Carla e Eva.",
   "Ana e Carla.",
   "Davi e Ana.",
   "Eva e Bruno. R U N H O"
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-esc-067",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Lógica proposicional e argumentação",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 67",
  "enunciado": "As lojas matrizes A, B e C têm uma filial cada uma, que são, não necessariamente nessa ordem, as lojas D, E e F. A loja A tem 20 funcionários a mais do que sua filial, e a filial F tem um terço do número de funcionários de sua matriz. Os números de funcionários das lojas A, B e C são, respectivamente, 33, 24 e 42, e o total de funcionários dessas seis lojas é igual a 128. Sabendo que a filial E tem o mesmo número de funcionários de uma das outras duas filiais, o número de funcionários da loja C e sua filial excede o número de funcionários da loja A e sua filial em",
  "alternativas": [
   "8.",
   "5.",
   "6.",
   "4.",
   "7."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-esc-068",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Associação lógica e ordenação",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 68",
  "enunciado": "O professor de Educação Física viu que 5 de seus alunos disputaram uma corrida de 100 metros rasos, mas, como estava distante da pista, só conseguiu identificar que não houve empate em posição alguma, porém não soube dizer quem chegou em qual posição. Ao se aproximar dos alunos e perguntar quem havia vencido, obteve as seguintes respostas: Larson: Eu não venci a corrida. Leandro: Liam foi o terceiro colocado. Liam: Lorenzo chegou na frente de Larson. Lorenzo: Luciano foi o penúltimo colocado. Luciano: Lorenzo não venceu a corrida. Sabendo que os dois últimos colocados mentiram em suas respostas e que os três primeiros falaram a verdade, conclui-se que o terceiro colocado nessa corrida foi o",
  "alternativas": [
   "Leandro.",
   "Lorenzo.",
   "Liam.",
   "Luciano.",
   "Larson."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-esc-069",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Sequências e padrões",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 69",
  "enunciado": "Considere a sequência 200, 207, 209, 198, 205, 207, 196, 203, 205, 194, … Essa sequência tem alguns elementos que se repetem, como, por exemplo, o 205, que está nas posições 5 e 9, e alguns elementos que ocorrem apenas uma vez, como o 0 (zero), que se encontra na posição",
  "alternativas": [
   "312.",
   "292.",
   "295.",
   "301.",
   "323."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-esc-070",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Lógica proposicional e argumentação",
  "fonte": "VUNESP 2025 · TJSP · Escrevente Técnico Judiciário · Questão 70",
  "enunciado": "Considere as proposições p e q a seguir: p: É dia de verão. q: As pessoas estão felizes e os carrinhos de picolé estão vazios. Se o valor lógico de p → ∼q é falso, então tem valor lógico verdadeiro o que se afirma em:",
  "alternativas": [
   "ou não é dia de verão, ou as pessoas estão felizes e os carrinhos de picolé não estão vazios.",
   "ou é dia de verão, ou as pessoas estão felizes e os carrinhos de picolé estão vazios.",
   "não é dia de verão e as pessoas não estão felizes e os carrinhos de picolé não estão vazios.",
   "é dia de verão e as pessoas não estão felizes e os carrinhos de picolé não estão vazios.",
   "é dia de verão e as pessoas estão felizes e os carrinhos de picolé estão vazios. R U N H O"
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-sis-001",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 1",
  "textoId": "tjsp25-sis-t4",
  "enunciado": "De acordo com o texto, o regresso do Dr. Simão Bacamarte ao Brasil foi decorrência de",
  "alternativas": [
   "um estudo sobre fecundação humana a ser desenvolvido após o casamento, envolvendo orientações das universidades italianas e alemãs.",
   "um desacerto com el-rei, que lhe ofereceu postos de trabalhos pouco atrativos, não condizentes com sua formação e capacidade laborativa.",
   "um amor recente por uma viúva de Itaguaí, com a qual ele pretendia casar-se e, em breve, ter filhos robustos, sãos e inteligentes.",
   "uma vontade íntima de ser pai, o que só lhe seria significativo se pudesse casar com uma mulher que pudesse ser mãe rapidamente.",
   "uma deliberação pessoal pautada no desejo de dedicar-se ao estudo da ciência e na vontade de desenvolvê-lo em sua terra natal."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-sis-002",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 2",
  "textoId": "tjsp25-sis-t4",
  "enunciado": "Conforme exposto no texto, a escolha de D. Evarista da Costa e Mascarenhas como esposa por Dr. Simão Bacamarte seguiu critérios",
  "alternativas": [
   "ambíguos, ora relacionados aos aspectos fisiológicos e anatômicos, ora relacionados à compleição; um dos tios do estudioso aprovou a escolha, dada a beleza dela.",
   "subjetivos, centrados na perspectiva da formação de uma família com filhos sadios; um dos tios do estudioso, porém, condenou a escolha, pelo fato de ela ser viúva.",
   "objetivos, ligados à fisiologia e anatomia dela, favoráveis, segundo ele, à procriação; um dos tios do estudioso, porém, estranhou a escolha, devido à falta de beleza dela.",
   "políticos, necessários à permanência dele no Brasil, longe dos interesses de el-rei; um dos tios do estudioso, contrariado, desaprovou a escolha de uma moça de pouca beleza.",
   "financeiros, voltados ao interesse de aumento de bens, pelo fato de ela ser viúva de um juiz de fora; um dos tios do estudioso, satisfeito com isso, abençoou a escolha."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-sis-003",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 3",
  "textoId": "tjsp25-sis-t4",
  "enunciado": "Considere as passagens:\n• \u0007… e entregou-se de corpo e alma ao estudo da ciência… (3o parágrafo)\n• \u0007… D. Evarista era mal composta de feições… (3o parágrafo)\n• \u0007D. Evarista mentiu às esperanças do Dr. Bacamarte… (4o parágrafo) As informações apresentadas permitem, correta e respectivamente, as seguintes interpretações:",
  "alternativas": [
   "Simão Bacamarte lançou-se devotadamente ao estudo da ciência; D. Evarista não possuía beleza física; D. Evarista assentiu às esperanças do Dr. Bacamarte.",
   "Simão Bacamarte explorou cautelosamente o estudo da ciência; D. Evarista ocultava sua beleza física; D. Evarista aprovou as esperanças do Dr. Bacamarte.",
   "Simão Bacamarte dedicou-se inteiramente ao estudo da ciência; D. Evarista era desprovida de beleza física; D. Evarista frustrou as esperanças do Dr. Bacamarte.",
   "Simão Bacamarte trabalhou parcimoniosamente no estudo da ciência; D. Evarista se fazia bonita fisicamente; D. Evarista ocultou a verdade às esperanças do Dr. Bacamarte.",
   "Simão Bacamarte empenhou-se metodicamente ao estudo da ciência; D. Evarista era muito bonita fisicamente; D. Evarista furtou-se às esperanças do Dr. Bacamarte."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-sis-004",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Semântica e reescrita",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 4",
  "textoId": "tjsp25-sis-t4",
  "enunciado": "Sem prejuízo de sentido ao texto e em conformidade com a norma-padrão, a passagem do 3o parágrafo – Se além dessas prendas, […] D. Evarista era mal composta de feições, longe de lastimá-lo, agradecia-o a Deus, porquanto não corria o risco de preterir os interesses da ciência na contemplação exclusiva, miúda e vulgar da consorte. – está devidamente reescrita em:",
  "alternativas": [
   "Se além dessas prendas, […] D. Evarista era mal composta de feições, não o lastimava, tanto que agradecia-o a Deus, já que não corria o risco de preferir menos os interesses da ciência do que a contemplação exclusiva, miúda e vulgar da consorte.",
   "Se além dessas prendas, […] D. Evarista era mal composta de feições, não o lastimava, mas também agradecia-o a Deus, à medida que não corria o risco de subestimar dos interesses da ciência devido à contemplação exclusiva, miúda e vulgar da consorte.",
   "Se além dessas prendas, […] D. Evarista era mal composta de feições, não lastimava-o, pois agradecia-o a Deus, tanto que não corria o risco de trocar os interesses da ciência com a contemplação exclusiva, miúda e vulgar da consorte.",
   "Se além dessas prendas, […] D. Evarista era mal composta de feições, não lastimava-o, apesar de o agradecer a Deus, pois não corria o risco de substituir aos interesses da ciência pela contemplação exclusiva, miúda e vulgar da consorte.",
   "Se além dessas prendas, […] D. Evarista era mal composta de feições, não o lastimava, todavia agradecia-o a Deus, uma vez que não corria o risco de desprezar os interesses da ciência na contemplação exclusiva, miúda e vulgar da consorte."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-sis-005",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 5",
  "textoId": "tjsp25-sis-t4",
  "enunciado": "Há relação de antonímia entre termos em:",
  "alternativas": [
   "D. Evarista mentiu às esperanças do Dr. Bacamarte, não lhe deu filhos robustos nem mofinos. (4o parágrafo)",
   "… em Coimbra, regendo a universidade, ou em Lisboa, expedindo dos negócios da monarquia. (1o parágrafo)",
   "Um dos tios dele, caçador de pacas perante o Eterno, e não menos franco, admirou-se de semelhante escolha e disse-lho. (3o parágrafo)",
   "… o Dr. Simão Bacamarte, filho da nobreza da terra e o maior dos médicos do Brasil, de Portugal e das Espanhas. (1o parágrafo)",
   "A ilustre dama, nutrida exclusivamente com a bela carne de porco de Itaguaí, não atendeu às admoestações… (4o parágrafo)"
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-sis-006",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 6",
  "textoId": "tjsp25-sis-t5",
  "enunciado": "O editorial considera o filme Ainda Estou Aqui como uma obra",
  "alternativas": [
   "sóbria e sutil, já que Walter Salles, ao relacionar a história de Eunice Paiva e sua família com os dias de hoje, equilibrou razão e emoção, tornando a personagem de Fernanda Torres menos belicosa.",
   "manifesta de coragem, porque Walter Salles ousou trazer para a conjuntura atual o espírito combativo de Eunice Paiva não apenas para resguardar sua família como também para buscar justiça.",
   "cheia de emoção, por meio da qual Walter Salles expõe como se arrefeceram as energias de Eunice Paiva para cuidar da família e buscar justiça, situação que, por si só, dispensaria o prêmio do Oscar.",
   "importante na abordagem de um tema local, ainda que não tenha representatividade global, pois Walter Salles apresenta os desafios de Eunice Paiva para preservar a família e buscar a justiça.",
   "celebrada e universal, com a qual Walter Salles decide dar visibilidade à história de Eunice Paiva, destacando a forma como a sua sujeição ao sistema social garantiu a segurança de sua família."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-sis-007",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 7",
  "textoId": "tjsp25-sis-t5",
  "enunciado": "A referência à fala de Fernanda Torres em – Como destacou Fernanda Torres, atriz principal do filme, o fato de uma produção falada em português ter recebido três indicações ao Oscar – melhor filme, melhor atriz e melhor filme estrangeiro – já era um feito. (4o parágrafo) – tem como objetivo",
  "alternativas": [
   "reconhecer a atuação da atriz como um feito histórico.",
   "ratificar a relevância do filme no contexto do Oscar.",
   "confirmar o papel principal dela no filme premiado.",
   "enfatizar a importância do português nas artes.",
   "criticar a falta de indicação de prêmios ao Brasil."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-sis-008",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Semântica e reescrita",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 8",
  "textoId": "tjsp25-sis-t5",
  "enunciado": "A modalização discursiva no espectro da possibilidade ocorre em:",
  "alternativas": [
   "Já conquistamos cinco Copas do Mundo, mas nunca tivemos um Prêmio Nobel e até anteontem jamais havíamos levado um Oscar. (1o parágrafo)",
   "Dito isso, mesmo que não tivesse sido o primeiro filme brasileiro a conquistar um Oscar, Ainda Estou Aqui tem um significado extraordinário para o País… (3o parágrafo)",
   "Ancorado na atuação impecável de Fernanda Torres, agora um talento internacionalmente reconhecido, o filme conseguiu […] retratar a vida de inúmeras famílias. (5o parágrafo)",
   "É muito provável que essa vitória atraia mais curiosidade no exterior sobre o cinema brasileiro e acalente os sonhos dos jovens diretores daqui. (2o parágrafo)",
   "Como destacou Fernanda Torres […], o fato de uma produção falada em português ter recebido três indicações ao Oscar […] já era um feito. (4o parágrafo)"
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-sis-009",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Concordância",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 9",
  "textoId": "tjsp25-sis-t5",
  "enunciado": "A concordância atende à norma-padrão em:",
  "alternativas": [
   "É muito provável que, com essa vitória e mais curiosidade no exterior sobre o cinema brasileiro, sejam acalentado os sonhos dos jovens diretores daqui.",
   "Os prêmios para Ainda Estou Aqui vêm mostrar que artistas e profissionais brasileiros nessa arte agora dispõem de mais maturidade para comover e divertir.",
   "O fato de ter ganhado o Oscar não significa que o Brasil se tornou uma potência capaz de concorrer com países que tem mais tradição na arte do cinema.",
   "Embora cinco Copas do Mundo já houvesse sido ganho, um Prêmio Nobel e um Oscar faltava ainda ao Brasil. Mas isso mudou no dia 02 de março de 2025.",
   "À medida que o filme passou a ganhar visibilidade, veio críticas positivas e prêmios no exterior, instalou-se no País emoções semelhante à de época de Copas do Mundo."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-sis-010",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Crase",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 10",
  "textoId": "tjsp25-sis-t5",
  "enunciado": "O uso do acento indicativo da crase e o emprego de pronome estão em conformidade com a norma-padrão em:",
  "alternativas": [
   "De uma parte à outra do Brasil, Ainda Estou Aqui foi conquistando as pessoas, que torciam por ele como se fosse Copa do Mundo e queriam ele como vencedor do Oscar.",
   "À críticas positivas e prêmios no exterior, seguiu-se um sentimento que as pessoas costumavam ver em época de Copas do Mundo e isso lhes empolgou.",
   "Ao decidir dar vida à história dos Paiva na atual conjuntura, Walter Salles provocou uma transformação do tema local, tornando-lhe em algo universal.",
   "Já conquistamos cinco Copas do Mundo, mas nunca chegamos à ter um Prêmio Nobel e até anteontem jamais havíamos levado um Oscar. Agora, porém, temos esse.",
   "O mundo rendeu-se à atuação impecável de Fernanda Torres, cujo talento fê-la internacionalmente reconhecida, garantindo-lhe prêmios e celebrações."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-sis-061",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Lógica proposicional e argumentação",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 61",
  "enunciado": "Sabe-se que é verdade que todos os irmãos de Karina são humoristas. Logo, é também, necessariamente, verdadeiro que",
  "alternativas": [
   "Karina não é humorista.",
   "se Carlos não é irmão de Karina, então ele é humorista.",
   "se Carlos não é irmão de Karina, então ele não é humorista.",
   "Karina é humorista.",
   "se Carlos não é humorista, então ele não é irmão de Karina."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-sis-062",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Lógica proposicional e argumentação",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 62",
  "enunciado": "Considere a seguinte afirmação: Em determinada autarquia, existe servidor que estudou na instituição M se, e somente se, estudou na instituição N. Uma negação lógica para a afirmação apresentada é: Em determinada autarquia,",
  "alternativas": [
   "todos os servidores ou estudaram na instituição M ou estudaram na instituição N.",
   "existe servidor que não estudou na instituição M ou não estudou na instituição N.",
   "todos os servidores não estudaram na instituição M e não estudaram na instituição N.",
   "existe servidor que estudou na instituição M e não estudou na instituição N.",
   "todos os servidores estudaram na instituição M e estudaram na instituição N."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-sis-063",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Lógica proposicional e argumentação",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 63",
  "enunciado": "As 4 afirmações apresentadas a seguir são todas verdadeiras:\nI. Valéria não é advogada.\nII. Se Eduardo é promotor de justiça, então Olavo não é juiz.\nIII. Se Olavo não é juiz ou Rosana não é médica, então Valéria é advogada.\nIV. Se Rosana não é médica, então Amanda não é engenheira e Marcela é enfermeira. Assinale a alternativa que apresenta uma conclusão, verdadeira, que decorre das 4 afirmações apresentadas:",
  "alternativas": [
   "Eduardo é promotor de justiça.",
   "Amanda é engenheira.",
   "Eduardo não é promotor de justiça.",
   "Marcela não é enfermeira.",
   "Amanda não é engenheira. R as c un h o"
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-sis-064",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Conjuntos",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 64",
  "enunciado": "Em um grupo de 990 internautas, sabe-se que 150 já utilizaram três redes sociais, P, Q e R. Sobre os que já utilizaram somente duas dessas redes sociais, sabe-se que 200 utilizaram as redes P e Q, 270, as redes P e R, e 250 utilizaram as redes sociais Q e R. Sabe-se, também, sobre esse grupo, que o número de internautas que já utilizaram somente a rede social P excede em 20 o número de internautas que já utilizaram somente a rede Q, e que o número de internautas que já utilizaram somente a rede R é menor em 40 do que o número de internautas que já utilizaram somente a rede social P. Se nesse grupo de internautas não há rede social já utilizada, além das três citadas, e que cada um deles já utilizou, pelo menos, uma das redes citadas, então é verdade que o número de internautas que já utilizaram somente a rede social",
  "alternativas": [
   "P corresponde ao dobro do número de internautas que já utilizaram somente a rede social Q.",
   "P corresponde ao triplo do número de internautas que já utilizaram somente a rede social R.",
   "Q corresponde à quinta parte do número de internautas que já utilizaram somente a rede social P.",
   "R corresponde à terça parte do número de internautas que já utilizaram somente a rede social Q.",
   "R corresponde à metade do número de internautas que já utilizaram somente a rede social P."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-sis-065",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Sequências e padrões",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 65",
  "enunciado": "Considere a seguinte sequência numérica α: α: 8, 18, 32, 50, 72, 98, 128, 162, … Tomados os algarismos que compõem os elementos da sequência α, na ordem em que aparecem, forma-se a sequência numérica β, identificada a seguir, em que as três primeiras posições múltiplas de cinco têm seus elementos sublinhados: β: 8, 1, 8, 3, 2, 5, 0, 7, 2, 9, 8, 1, 2, 8, 1, 6, 2, … Esses elementos sublinhados, na ordem em que aparecem em β, formam o número 291. Mantidas essas regularidades, o número formado pelos algarismos dos elementos que ocupam as posições 25a, 30a e 35a da sequência β é",
  "alternativas": [
   "456.",
   "687.",
   "904.",
   "830.",
   "123. R as c un h o"
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-sis-066",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a Administração Pública",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 66",
  "enunciado": "Imagine que determinado funcionário público, que tem o dever legal de expedir alvarás de soltura, ao perceber que a pessoa a ser solta é seu inimigo, posterga indevidamente a emissão do documento, prolongando a prisão por 5 dias. Diante desse fato, é correto afirmar que",
  "alternativas": [
   "se caracterizou crime de advocacia administrativa.",
   "se caracterizou crime de abandono de função.",
   "não se caracterizou qualquer crime, pois a conduta foi omissiva.",
   "se caracterizou crime de prevaricação.",
   "não se caracterizou qualquer crime, podendo ser apurado eventual desvio funcional."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-sis-067",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a Administração Pública",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 67",
  "enunciado": "O tipo penal do art. 344, do Código Penal, crime de coação no curso do processo, tem pena aumentada se a coação",
  "alternativas": [
   "causa prejuízo à Administração Pública.",
   "é acompanhada de violência.",
   "ocorre no curso de processo que envolva crime contra a dignidade sexual.",
   "ocorre no curso de processo penal.",
   "causa dano patrimonial."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-sis-068",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · TJSP · Analista de Sistemas Judiciário · Questão 68",
  "enunciado": "Considere que Oswaldo, ordenador de despesa no âmbito do Tribunal de Justiça do Estado X, deseja contratar, com a concordância de Otávio, gestor de TIC (Gestor de Tecnologia da Informação e Comunicação), um novo sistema para a gestão dos processos judiciais, chamado de Y-Proc. De acordo com os termos contratuais, o sistema custará R$ 900.000,00 (novecentos mil reais), há dependência tecnológica do fornecedor, e há cláusula proibindo o compartilhamento – oneroso e também o gratuito – da solução na Plataforma Digital do Poder Judiciário Brasileiro – PDPJ-Br. Com base na situação hipotética apresentada e no disposto na Resolução CNJ no 335/2020, assinale a alternativa correta.",
  "alternativas": [
   "Como o sistema Y-Proc custará menos de um milhãode reais, não há qualquer ilegalidade na sua contratação.",
   "É proibida a contratação do sistema Y-Proc e, caso a regra seja descumprida, Oswaldo poderá ser responsabilizado por improbidade administrativa, sem prejuízo da comunicação ao Tribunal de Contas respectivo.",
   "Se o sistema Y-Proc utilizar, preponderantemente, macrosserviços, autotenticação uniformizada e workflow, poderá ser usado pelo Tribunal de Justiça do Estado X.",
   "Se o sistema Y-Proc utilizar, obrigatoriamente, as tecnologias com código aberto (open source), ele pode ser usado pelo Tribunal de Justiça do Estado X.",
   "Se o contrato for celebrado, apenas Oswaldo poderá ser responsabilizado, já que é o ordenador de despesas. Otávio, por ser somente gestor de TIC, não tem responsabilidade disciplinar no caso."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-cont-001",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 1",
  "textoId": "tjsp25-cont-t6",
  "enunciado": "Em relação às manobras da Rússia no espaço aéreo polonês, o editorial posiciona-se de forma",
  "alternativas": [
   "defensora delas, pois entende os espaços aéreos como domínios sem restrição de circulação.",
   "contrária a elas, já que podem comprometer a segurança dos países-membros da Otan.",
   "ambígua quanto a elas, ora sugerindo que se contemporize o fato, ora defendendo a reação.",
   "desfavorável a elas, uma vez que os países-membros da Otan estão escalando a violência.",
   "indiferente a elas, ainda que entenda que a rotina de acusações entre os países é constante."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-cont-002",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Semântica e reescrita",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 2",
  "textoId": "tjsp25-cont-t6",
  "enunciado": "Considere as passagens:\n• \u0007A madrugada de 10 de setembro passado foi um divisor de águas...” (1o parágrafo)\n• \u0007Moscou acusou Varsóvia de disseminar “mitos”. (2o parágrafo) As informações destacadas significam, correta e respectivamente:",
  "alternativas": [
   "um evento de transformação; sofismar.",
   "um momento de tranquilidade; ofender.",
   "uma mudança já aguardada; recuar.",
   "uma situação sem êxito; fabular.",
   "uma alteração desejada; provocar."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-cont-003",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 3",
  "textoId": "tjsp25-cont-t6",
  "enunciado": "O termo destacado está empregado em sentido figurado em:",
  "alternativas": [
   "A madrugada de 10 de setembro passado foi um divisor de águas… (1o parágrafo)",
   "… reforçar o policiamento aéreo e deslocar barreiras... (3o parágrafo)",
   "… ao contrário da Polônia, que leva a ameaça russa a sério. (4o parágrafo)",
   "… a fim de expor velhas fissuras e, sobretudo, abrir novas. (2o parágrafo)",
   "Armar a Ucrânia e fortalecer a integridade da Otan… (5o parágrafo)"
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-cont-004",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Semântica e reescrita",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 4",
  "textoId": "tjsp25-cont-t6",
  "enunciado": "Considere a passagem do 4o parágrafo do texto: “O episódio serve de alerta a líderes europeus que continuam a tratar suas obrigações de defesa com tibieza, ao contrário da Polônia, que leva a ameaça russa a sério. A diretora de Relações Exteriores da União Europeia enunciou a verdade da qual muitos se esquivam...” Os termos destacados significam, correta e respectivamente:",
  "alternativas": [
   "coação; arrogância; depreciam.",
   "aviso; frouxidão; eximem.",
   "ameaça; rigor; orgulham.",
   "sinal; desinteresse; honram.",
   "atenção; zelo; afastam."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-cont-005",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 5",
  "textoId": "tjsp25-cont-t6",
  "enunciado": "No 3o parágrafo do texto, o sinal de dois-pontos é empregado três vezes para introduzir",
  "alternativas": [
   "síntese baseada nas informaçoes anteriores.",
   "retificação das informações anteriores.",
   "citação, com alusão a informações anteriores.",
   "detalhamento das informações anteriores.",
   "ênfase a informações opostas às anteriores."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-cont-006",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Conectivos e coesão",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 6",
  "textoId": "tjsp25-cont-t6",
  "enunciado": "De acordo com a norma-padrão e sem prejuízo ao sentido original da conjunção e do advérbio, o trecho destacado em “Vladimir Putin buscou testar tempo de resposta, interoperabilidade e nervos políticos da aliança, a fim de expor velhas fissuras e, sobretudo, abrir novas.” (2o parágrafo) admite a reescrita:",
  "alternativas": [
   "… à medida que se expunha velhas fissuras e, além disso, abrisse novas.",
   "… uma vez que se exporia velhas fissuras e, eventualmente, abriria novas.",
   "… conforme se expôs velhas fissuras e, porventura, pôde abrir novas.",
   "… enquanto se expuseram velhas fissuras e, ocasionalmente, abrirão novas.",
   "… para que se expusessem velhas fissuras e, principalmente, novas se abrissem."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-cont-007",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Semântica e reescrita",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 7",
  "textoId": "tjsp25-cont-t6",
  "enunciado": "Assinale a alternativa em que o sentido do termo destacado remete à ideia de “flagrante”.",
  "alternativas": [
   "O gesto deixou claro o que está em jogo: a credibilidade da defesa coletiva no coração da ordem euro-atlântica. (1o parágrafo)",
   "A estratégia é antiga, mas eficaz: avançar por meio de provocações ambíguas, negar responsabilidade… (2o parágrafo)",
   "Foi a primeira vez desde 1949 que aeronaves da aliança confrontaram armamentos russos em território aliado. (1o parágrafo)",
   "A investida na Polônia foi o ensaio de um desafio maior à segurança europeia e ao sistema internacional. (4o parágrafo)",
   "… continuam a tratar suas obrigações de defesa com tibieza, ao contrário da Polônia, que leva a ameaça russa a sério. (4o parágrafo)"
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-cont-008",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 8",
  "textoId": "tjsp25-cont-t6",
  "enunciado": "Considere as frases:\n• \u0007A estratégia é antiga, mas eficaz: avançar recorrendo      provocações ambíguas.\n• \u0007A Otan precisa provar que não se curvará    criação de uma nova “zona cinzenta” em seu firmamento.\n• \u0007O episódio serve de alerta    líderes europeus que continuam a tratar suas obrigações de defesa com tibieza.\n• \u0007Reagir com firmeza já não é escalar, é opor-se agressões. De acordo com a norma-padrão, as lacunas devem ser preenchidas, correta e respectivamente, com:",
  "alternativas": [
   "as … à … aqueles … as",
   "às … à … aqueles … à",
   "à … a … aqueles … a",
   "a … à … àqueles … às",
   "à … a … àqueles … à"
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-cont-009",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 9",
  "textoId": "tjsp25-cont-t7",
  "enunciado": "Em relação ao local onde as pessoas devem ficar depois de mortas, é correto afirmar que o narrador e Rita",
  "alternativas": [
   "defendem a ideia de que fiquem próximas dos familiares, seguindo o pensamento da viúva Noronha.",
   "expõem uma ruptura sobre a questão, uma vez que ele prefere seguir as orientações de seu cunhado.",
   "expressam diferentes opiniões, e ela acredita que os mortos devem estar próximos dos familiares.",
   "dispensam um posicionamento definitivo sobre a questão, embora ela sugira deixá-las onde faleceram.",
   "demonstram discordância do procedimento da viúva Noronha, que optou por trazer o marido de Lisboa."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-cont-010",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 10",
  "textoId": "tjsp25-cont-t7",
  "enunciado": "Considere a passagem do 3o parágrafo: “Não disse mais sobre este assunto, mas provavelmente tornará a ele, até alcançar o que lhe parece. Já meu cunhado dizia que era seu costume dela, quando queria alguma cousa.” Tendo por base a coesão, a coerência e a regência nominal, uma frase que traduz corretamente o ponto de vista expresso no texto é:",
  "alternativas": [
   "Rita é uma mulher admirável. Quanto anseia a algo, persegue seu objetivo até fazer ele tornar-se realidade.",
   "Rita é uma mulher perseverante. Quanto anseia por algo, persegue seu objetivo até fazê-lo tornar-se realidade.",
   "Rita é uma mulher resiliente. Quanto anseia algo, persegue seu objetivo até fazer ele tornar-se realidade.",
   "Rita é uma mulher insistente. Quanto anseia com algo, persegue seu objetivo até fazer torná-lo realidade.",
   "Rita é uma mulher inspiradora. Quanto anseia em algo, persegue seu objetivo até fazê-lo torná-lo realidade."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-cont-011",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 11",
  "textoId": "tjsp25-cont-t7",
  "enunciado": "Considere as passagens:\n• \u0007Na conversa de anteontem com Rita esqueceu-me dizer a parte relativa a minha mulher… (1o parágrafo)\n• \u0007... os mortos ficam bem onde caem… (1o parágrafo)\n• \u0007Outra cousa que não escrevi foi a alusão que ela fez à gente Aguiar, um casal que conheci a última vez que vim… (4o parágrafo) De acordo com a norma-padrão de regência, as passagens destacadas podem ser substituídas, respectivamente, por:",
  "alternativas": [
   "esqueci de; onde se dirigiram; que fui apresentado.",
   "esqueci; onde chegam; o qual fui apresentado.",
   "esqueci-me; onde estão; no qual fui apresentado.",
   "esqueci-me de; aonde vão; a que fui apresentado.",
   "esqueci de; aonde morrem; para o qual fui apresentado."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-cont-012",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Pronomes e colocação pronominal",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 12",
  "textoId": "tjsp25-cont-t7",
  "enunciado": "A colocação pronominal está de acordo com a norma-padrão em:",
  "alternativas": [
   "Rita não disse mais sobre aquele assunto, mas provavelmente o retomará em outras conversas.",
   "Celebrarão-se daqui a dez ou quinze dias as bodas de prata do casal Aguiar, conhecido de Rita.",
   "Minha mulher está enterrada em Viena, e Rita sugeriu que transportasse-a para o nosso jazigo.",
   "Me esqueceu dizer a parte relativa a minha mulher, na conversa de anteontem que tive com Rita.",
   "O marido da viúva Noronha estava em Lisboa, onde falecera, e ela não deixou-o enterrado lá."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-cont-023",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Inteligência artificial",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 23",
  "enunciado": "No MS-Office 365, os menus são elementos que possibilitam o acesso às funcionalidades de uso mais comum, por meio de acesso a diversas guias, como a",
  "alternativas": [
   "Exibir, destinada a apresentar as principais informações do arquivo, como datas de criação e alteração, proprietário, permissões, dentre outras.",
   "Inserir, que permite incorporar usuários com os quais o arquivo poderá ser compartilhado.",
   "Ajuda, que ativa automaticamente a ferramenta de inteligência artificial Copilot para auxiliar o usuário na elaboração de alguma atividade no seu arquivo.",
   "Arquivo, que permite salvar, abrir, imprimir documentos, bem como a exibição de suas informações relacionadas ao arquivo.",
   "Página Inicial, que posiciona o cursor na primeira página de um arquivo, planilha ou slide do arquivo que será editado."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-cont-024",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Word",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 24",
  "enunciado": "No aplicativo Word do MS-Office 365 (tendo como base a versão 2016, em português e em sua configuração padrão), um usuário digitou a seguinte frase em um documento: Grupo de participantes atuantes. Posteriormente, selecionou, na palavra “atuantes”, somente as letras “atu”, aplicando o efeito de fonte de texto oculto. Caso o recurso Mostrar Tudo esteja desativado, o que pode ser feito desativando-o por meio do botão (¶  –  símbolo de parágrafo) da guia Página Inicial, ou por meio do atalho de teclado Ctrl  +  Shift  +  8, essa frase ficará com a aparência:",
  "alternativas": [
   "Grupo de participantes atuantes.",
   "Grupo de participantes antes.",
   "Grupo de participantesantes.",
   "Grupo de participantes    antes.",
   "Grupo de participantes."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-cont-026",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Excel",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 26",
  "enunciado": "Um Contador Judiciário utilizou o MS-Office 365, e alterou uma planilha elaborada no Excel em seu computador. Posteriormente, tentou acessar o mesmo arquivo no seu smartphone por meio do OneDrive, constatando que as alterações realizadas no computador no arquivo não estavam presentes na versão do smartphone. Uma possível explicação para o ocorrido é:",
  "alternativas": [
   "a sincronização de arquivos por meio do OneDrive não foi assinada pelo usuário ou empresa, pois se trata de um recurso opcional, que deve ser assinado separadamente.",
   "o arquivo que foi alterado não se encontrava em uma pasta sincronizada do OneDrive.",
   "a sincronização permitida pelo OneDrive contempla microcomputadores e notebooks, não contemplando smartphones e tablets.",
   "como a sincronização por meio do OneDrive não é automática, provavelmente o usuário se esqueceu de selecionar a opção “Sincronizar” após concluir as alterações.",
   "o OneDrive permite a sincronização de arquivos do Word, não sendo possível sincronizar arquivos do Excel e do PowerPoint."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-cont-027",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Correio eletrônico",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 27",
  "enunciado": "O correio eletrônico possui diversas opções e recursos para o preparo e o envio de e-mails, como o",
  "alternativas": [
   "campo CCS, que permite o envio de uma mensagem com segurança, podendo ser lida por quem possui uma senha.",
   "anexo estendido, que permite o envio de arquivos com tamanho de até 1 GB.",
   "campo CCO (ou BCC), que torna oculto os anexos que estejam presentes no e-mail.",
   "campo Assunto, que é obrigatório, e se ele não for preenchido, será colocado automaticamente o texto “sem informação”.",
   "campo CCO (ou BCC), que não permite aos destinatários do e-mail ver quais outros endereços estão em cópia."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-cont-028",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Microsoft Teams",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 28",
  "enunciado": "Um usuário da denominada plataforma Microsoft Teams deseja reunir um grupo de pessoas para, por exemplo, trocar mensagens, fazer chamadas ou ainda registrar eventos. Dessa forma, considerando a utilização dessa plataforma, esse usuário deve criar um grupo de pessoas, utilizando, para tal finalidade, um botão com um ícone designado especificamente para esse objetivo, localizado no menu lateral, situado na parte esquerda dessa plataforma. O botão em questão possui a nomenclatura de",
  "alternativas": [
   "Chat.",
   "Calendário.",
   "Atividade.",
   "Equipes.",
   "Chamadas."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-cont-029",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Segurança da informação e LGPD",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 29",
  "enunciado": "Os três princípios básicos envolvidos na segurança da informação são confidencialidade, integridade e disponibilidade. É correto afirmar, especificamente, que o princípio da",
  "alternativas": [
   "integridade indica a necessidade de que os usuários da informação sejam mantidos anônimos.",
   "confidencialidade tem como objetivo determinar o custo que um vazamento de informações pode ocasionar à empresa.",
   "disponibilidade tem como meta prover o sistema com capacidades de auditoria no uso da informação.",
   "confidencialidade visa garantir que o acesso à informação seja restrito a seus usuários previamente autorizados.",
   "integridade apresenta como meta principal que se tenha disponível a informação no momento de sua necessidade."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-cont-030",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Inteligência artificial",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 30",
  "enunciado": "A Inteligência Artificial Generativa utiliza modelos de linguagem (LLMs – Large Language Models) para processamento de prompts em linguagem natural. Um fenômeno que pode ocorrer durante o uso dos LLMs é a alucinação. Assinale a alternativa que explica corretamente o fenômeno da alucinação.",
  "alternativas": [
   "É um processo no qual o LLM gera informações plausíveis, porém incorretas.",
   "É o mecanismo em que o LLM necessita extrair dados da rede.",
   "É um bloqueio de segurança contra conteúdo ofensivo durante uso do LLM.",
   "É um recurso dos LLMs para criar respostas mais adequadas ao interlocutor humano.",
   "É uma situação em que o LLM não apresenta nenhuma resposta ao prompt fornecido."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-cont-058",
  "disciplina": "Direito Administrativo",
  "assunto": "Serviços públicos",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 58",
  "enunciado": "O princípio da continuidade do serviço público é fundamental para a justificação da opção legislativa pela",
  "alternativas": [
   "exigência de licitação para a contratação de obras, bens e serviços.",
   "impenhorabilidade dos bens públicos de uso especial.",
   "impossibilidade de caducidade de concessão pública sem prévia indenização.",
   "proibição de realização de greve no serviço público.",
   "possibilidade de desapropriação de bens privados sem prévia indenização."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-cont-059",
  "disciplina": "Direito Administrativo",
  "assunto": "Improbidade administrativa",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 59",
  "enunciado": "A Secretaria Municipal de Cultura de uma cidade lançou um edital para a seleção de projetos artísticos que receberão apoio financeiro. O edital estabelece critérios claros de avaliação e uma comissão julgadora composta por especialistas internos e externos. Após a divulgação dos resultados preliminares, um dos artistas desclassificados procurou o Secretário Municipal de Cultura, alegando irregularidades no processo de avaliação, desrespeito aos critérios previstos no edital e exigindo a revisão de sua pontuação. O Secretário, ciente da possível repercussão de uma falha no processo de seleção dos projetos, mas também da autonomia técnica da comissão julgadora, instrui o Diretor do Departamento de Fomento Cultural (que é seu subordinado direto) a “reavaliar com especial atenção” o projeto do artista em questão, “considerando a importância de manter um bom relacionamento com a comunidade artística local e a lisura do processo de seleção”. O Diretor, por sua vez, convoca a comissão julgadora, subordinada à sua Diretoria, para uma reunião, na qual “sugere fortemente” que sejam verificados “pontos que talvez tenham sido negligenciados” na avaliação do projeto do artista desclassificado, sem, contudo, dar qualquer ordem direta para alteração da pontuação. É correto afirmar que, nesse caso, há um exemplo de",
  "alternativas": [
   "ato de improbidade administrativa.",
   "desvio de finalidade.",
   "abuso de poder.",
   "exercício do poder administrativo disciplinar.",
   "exercício legítimo do poder hierárquico."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-cont-060",
  "disciplina": "Direito Administrativo",
  "assunto": "Agentes públicos",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 60",
  "enunciado": "Em relação aos empregados de empresas estatais, é correto afirmar:",
  "alternativas": [
   "se contratados mediante concurso público, podem ser demitidos sem justa causa, desde que em virtude de situação de legítimo interesse da empresa devidamente motivada.",
   "adquirem a estabilidade após 2 (dois) anos de efetivo exercício no cargo público, após aprovação em avaliação de desempenho.",
   "são contratados pelo regime estatutário, sujeitando-se às regras de aposentadoria próprias dos servidores públicos.",
   "estão sujeitos ao mesmo regime jurídico aplicável aos empregados das empresas privadas na sua integralidade.",
   "são assim classificados apenas os admitidos em razão de concurso público, não se incluindo entre eles os ocupantes de cargo em comissão."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-cont-061",
  "disciplina": "Direito Administrativo",
  "assunto": "Serviços públicos",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 61",
  "enunciado": "Os subsídios públicos com a finalidade de atender ao princípio da modicidade tarifária nas concessões públicas",
  "alternativas": [
   "são vedados nas concessões públicas ordinárias, bem como nas concessões administrativas.",
   "podem ser implementados por iniciativa do concessionário, no curso da concessão, como forma de reequilibrar contrato deficitário em razão de queda de demanda dos usuários.",
   "são a regra geral nas concessões públicas ordinárias, sendo a sua admissão implícita em razão do princípio da supremacia do interesse público, independentemente de previsão no edital de licitação.",
   "são possíveis nas concessões públicas ordinárias, desde que haja previsão legal para a realização das subvenções, a possibilidade conste do edital e da minuta contratual.",
   "são possíveis apenas nas chamadas concessões especiais administrativas ou concessões especiais patrocinadas, consideradas formas de parceria público-privada."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-cont-062",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 62",
  "enunciado": "Um guarda civil municipal, durante a fiscalização de rotina, abordou um veículo estacionado em local proibido. Ao solicitar os documentos do motorista do carro parado, o agente público percebeu que ele estava visivelmente alterado e com sinais de embriaguez. O agente, seguindo o protocolo, o impediu de continuar dirigindo, solicitando o apoio de um guincho para a remoção do veículo do local proibido onde se encontrava. Enquanto aguardavam a chegada do guincho, que estava atrasado em relação ao tempo máximo previsto em lei municipal para a remoção de veículos, o agente e o motorista possivelmente embriagado presenciaram outro carro ultrapassar o sinal vermelho e cruzar a esquina em alta velocidade, perdendo o controle e batendo na lateral do carro que estava estacionado em local proibido. O motorista abordado pelo guarda civil alega que o dano que foi causado ao seu carro, que estava estacionado, deve ser imputado à ação do guarda, que o impediu de sair dirigindo. Sobre essa situação hipotética é correto afirmar, com base na legislação nacional, que",
  "alternativas": [
   "a responsabilidade civil do município depende da comprovação de elemento subjetivo, dolo ou culpa, do agente público, por se tratar de hipótese de responsabilidade civil subjetiva.",
   "eventual nexo causal entre a ação do agente público e o dano causado não é adequado para se falar em responsabilização do município, por ter sofrido interferência de ação ilícita de terceiro.",
   "a responsabilidade civil do município depende da comprovação de elemento subjetivo, dolo ou culpa, do agente público, por se tratar de hipótese de responsabilidade civil objetiva.",
   "a causa original da cadeia de eventos que levou aos danos sofridos pelo motorista abordado realmente foi a ação do agente público, o que leva inexoravelmente à responsabilidade do município.",
   "a responsabilidade civil do município no caso não decorre da ação do guarda civil, mas, sim, da demora do guincho em atender ao chamado dentro do tempo máximo previsto na legislação municipal para remoção."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-cont-063",
  "disciplina": "Direito Administrativo",
  "assunto": "Processo administrativo",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 63",
  "enunciado": "De acordo com a Lei Estadual no 10.177/1998, quando outros não estiverem previstos nesta Lei ou em disposições especiais, serão obedecidos os seguintes prazos máximos nos procedimentos administrativos:",
  "alternativas": [
   "5 (cinco) dias para expedição de notificação ou intimação pessoal.",
   "5 (cinco) dias para manifestações do particular ou providências a seu cargo.",
   "2 (dois) dias para autuação, juntada aos autos de quaisquer elementos, publicação e outras providências de mero expediente.",
   "10 (dez) dias para elaboração e apresentação de informes sem caráter técnico ou jurídico.",
   "15 (quinze) dias para elaboração e apresentação de pareceres de caráter técnico ou jurídico."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-cont-064",
  "disciplina": "Direito Administrativo",
  "assunto": "Princípios e conceitos",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 64",
  "enunciado": "São princípios constitucionais expressos da atividade de fiscalização contábil, financeira, orçamentária, operacional e patrimonial da Administração Pública no Brasil:",
  "alternativas": [
   "legalidade, legitimidade e economicidade.",
   "legalidade, moralidade e eficácia.",
   "transparência, profissionalismo e impessoalidade.",
   "publicidade, profissionalismo e legalidade.",
   "segregação de riscos, conservadorismo e legitimidade."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-cont-065",
  "disciplina": "Direito Constitucional",
  "assunto": "Organização do Estado",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 65",
  "enunciado": "É denominada de lock-out a greve dos empregadores, isto é, a situação em que as empresas empregadoras fecham as portas de seus estabelecimentos, impedindo a realização de qualquer trabalho, com o objetivo de obter concessões dos próprios trabalhadores ou do poder público. Sobre esse tema, com base na Constituição Federal, é correto afirmar:",
  "alternativas": [
   "o lock-out é permitido pela ordem constitucional brasileira apenas como meio de obter concessões dos trabalhadores, mas não do poder público.",
   "o direito de lock-out se aplica igualmente às empresas estatais, uma vez que a Constituição impõe a elas o mesmo regime jurídico aplicável às empresas privadas.",
   "enquanto o direito de greve dos trabalhadores aparece no capítulo constitucional relativo aos direitos coletivos, o lock-out aparece no relativo à ordem econômica e financeira.",
   "trata-se de um corolário do direito de greve dos trabalhadores, o qual se estende igualmente aos empregadores, por simetria.",
   "não existe no direito constitucional brasileiro um direito de greve dos empregadores (lock-out), mas apenas dos empregados, tanto no setor privado quanto no público."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-cont-066",
  "disciplina": "Direito Constitucional",
  "assunto": "Poder Judiciário",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 66",
  "enunciado": "Em um processo judicial, o juiz profere a sentença em sessão privada, na qual apenas os advogados das partes estão presentes. A decisão posteriormente publicada é sucinta e não traz de forma clara a conexão entre os fundamentos jurídicos apresentados pelo juiz e as conclusões da sentença. Com base na Constituição Federal, é correto afirmar que",
  "alternativas": [
   "não há compatibilidade entre a prolação de sentença na própria sessão de julgamento e posterior publicação da decisão.",
   "não há necessariamente invalidade na realização de sessão privada, limitada à participação dos advogados.",
   "o princípio da publicidade envolve apenas a ampla transparência da decisão e dos seus fundamentos, e não a conexão lógica entre estes.",
   "é possível a realização de sessão privada, sendo, porém, necessária a participação em todos os atos das partes do processo.",
   "a sentença não segue forma estrita, podendo trazer apenas os dispositivos da decisão, com sucinta referência à legislação que os fundamenta."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-cont-067",
  "disciplina": "Direito Constitucional",
  "assunto": "Organização do Estado",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 67",
  "enunciado": "A Secretaria da Fazenda de um determinado estado da Federação identificou erro na proposta orçamentária encaminhada à Assembleia Legislativa em relação às despesas previstas com o pagamento da dívida pública. O erro consistiu no acréscimo de um zero ao final do valor da dotação para pagamento da dívida externa, aumentando, portanto, a previsão do valor necessário para fazer frente aos compromissos financeiros do estado no ano seguinte. O secretário da Casa Civil, nesse cenário, sugere ao governador encaminhar mensagem à Assembleia Legislativa, com as necessárias correções do projeto. Nesse contexto, com base na Constituição Federal, é correto afirmar:",
  "alternativas": [
   "por se tratar de simples erro material, o ajuste pode ser realizado pela própria assessoria parlamentar do Poder Legislativo, mediante solicitação justificada da Secretaria da Fazenda encaminhada por ofício.",
   "o governador poderá alterar posteriormente o conteúdo da lei orçamentária aprovada, mediante decreto, por tratar a temática orçamentária de assunto inserido na competência regulamentar do Poder Executivo.",
   "a Assembleia Legislativa pode modificar diretamente, independentemente de solicitação do Poder Executivo, as dotações destinadas ao pagamento da dívida pública, destinando a sobra a outras despesas previstas no projeto.",
   "o governador poderá enviar mensagem à Assembleia Legislativa para propor modificação no projeto de lei orçamentária, desde que ainda não iniciada a votação, na comissão própria da assembleia para análise da proposta orçamentária, da parte cuja alteração é proposta.",
   "após o encaminhamento da proposta orçamentária, o Poder Executivo cessa a sua competência em relação ao tema até a aprovação ou rejeição final do projeto, não podendo fazer propostas de modificação mediante mensagem do chefe do Poder Executivo."
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-cont-068",
  "disciplina": "Direito Constitucional",
  "assunto": "Poderes Legislativo e Executivo",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 68",
  "enunciado": "A forma federativa de Estado implica o direito de participação das unidades federativas na formação da vontade política da União e da República Federativa do Brasil. Nesse sentido, se um conjunto de governadores decidir propor emenda constitucional para criação de novas vagas no Senado Federal, sendo uma para cada estado da Federação, a serem ocupadas, apenas essas novas vagas, mediante periódica escolha do governador do respectivo estado, homologada pela respectiva Assembleia Legislativa, é correto afirmar, com base na Constituição Federal, que tal proposta",
  "alternativas": [
   "seria inconstitucional, pois é vedada a emenda à Constituição com a finalidade de aumentar o número de parlamentares.",
   "seria inconstitucional, por veicular a abolição do voto direto no Brasil e a sua substituição pelo voto indireto.",
   "poderia ser proposta por mais da metade das Assembleias Legislativas das unidades da Federação, manifestando-se, cada uma, pela maioria relativa de seus membros.",
   "teria de receber o apoio de, no mínimo, 1/3 (um terço) da Câmara de Deputados e do Senado Federal para início de sua tramitação.",
   "poderia ser proposta diretamente por qualquer governador da Federação, na forma de proposta de emenda à Constituição."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-cont-069",
  "disciplina": "Direito Tributário",
  "assunto": "Responsabilidade tributária",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 69",
  "enunciado": "João, um empresário bem-sucedido, faleceu em 1o de janeiro de 2024, deixando uma grande fortuna, mas também algumas dívidas tributárias referentes ao ano de 2023, antes de sua morte. Ele era casado em regime de comunhão parcial de bens com Maria e tinha dois filhos, Pedro e Ana. Após o falecimento de João, iniciou-se o processo de inventário e partilha de seus bens. Durante a tramitação, a Fazenda Pública Estadual ajuizou uma execução fiscal para cobrar o Imposto sobre a Propriedade de Veículos Automotores (IPVA) de dois carros de luxo que estavam em nome de João, referente ao exercício de 2023, e o Imposto de Transmissão Causa Mortis e Doação (ITCMD) sobre os bens deixados. Aberto o inventário, o espólio de João foi o primeiro a ser acionado para o pagamento dos tributos devidos pelo de cujus até a data da abertura da sucessão (1o de janeiro de 2024), conforme o art. 131, III, do CTN. O inventariante, em nome do espólio, questionou a responsabilidade por parte das dívidas, alegando que o ITCMD é um imposto de transmissão e não é devido pelo de cujus. Após a partilha dos bens, que ocorreu em 15 de dezembro de 2024, verificou-se que o espólio não possuía bens suficientes para quitar integralmente todas as dívidas tributárias de João (IPVA de 2023). Os filhos, Pedro e Ana, receberam quinhões hereditários significativos, e Maria, como cônjuge meeira, recebeu sua meação. Nesse cenário, com base na legislação tributária nacional, é correto afirmar que",
  "alternativas": [
   "a alegação do inventariante está correta, pois o ITCMD é um imposto devido pelos herdeiros com incidência no momento da realização da partilha, e o espólio não possui responsabilidade relacionada a esse tributo, nem mesmo para sua administração e entrega dos bens sujeitos a ele, por meio da figura do inventariante.",
   "Pedro e Ana, como herdeiros, são solidariamente responsáveis pela totalidade dos débitos de IPVA de 2023, independentemente do montante dos quinhões que receberam na partilha, em razão da sucessão hereditária.",
   "o espólio de João é responsável pelo IPVA de 2023, e, após a partilha, Pedro e Ana, como sucessores, e Maria, como cônjuge meeira, respondem pelos débitos remanescentes do IPVA até o limite do valor de seus respectivos quinhões ou da meação.",
   "o espólio de João não pode ser responsabilizado pelo IPVA de 2023, uma vez que o fato gerador do imposto ocorreu antes da abertura da sucessão, cabendo a responsabilidade exclusiva aos herdeiros.",
   "Maria, como cônjuge meeira, não possui qualquer responsabilidade pelos débitos de IPVA de 2023, pois sua meação não se confunde com herança e, portanto, não é passível de cobrança por dívidas do de cujus."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-cont-070",
  "disciplina": "Direito Tributário",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 70",
  "enunciado": "Mário é servidor público municipal e participa do respectivo regime próprio de previdência social (RPPS), bem como de regime de previdência complementar facultativo (RPC) oferecido pela própria municipalidade onde trabalha, com contribuições incidentes sobre a parcela do seu salário que excede o teto do salário de contribuição do regime geral de previdência social (RGPS). Mário é também conselheiro fiscal em organização sem fins lucrativos, sem qualquer conflito de interesses ou de horários com o seu trabalho como servidor público, recebendo honorários mensais de R$ 4 mil pela função de conselheiro. Mário informou à organização sem fins lucrativos, mediante declaração, os seus vencimentos como servidor público e as respectivas contribuições previdenciárias sobre ele incidentes. Com base nessa situação hipotética e na legislação tributária nacional, em especial na Instrução Normativa RFB no 2.110/2022, é correto afirmar que Mário",
  "alternativas": [
   "está sujeito à cobrança adicional de contribuição ao RGPS sobre o valor dos seus honorários, independentemente das contribuições realizadas ao RPPS e ao RPC, por se tratar de vínculo de trabalho independente do vínculo como servidor público e em razão de os tetos de contribuição não se comunicarem.",
   "não é contribuinte obrigatório do RGPS, pois já recolhe contribuições facultativas sobre o que excede o teto de contribuição ao RGPS para o seu respectivo RPC.",
   "não é contribuinte obrigatório do RGPS, pois as organizações sem fins lucrativos estão fora do âmbito de aplicação da referida Instrução Normativa RFB no 2.110/2022.",
   "não está sujeito ao recolhimento de contribuição adicional ao RGPS, embora seja contribuinte obrigatório em relação à atividade de conselheiro fiscal, pois já recolhe para o RPPS acima do limite de contribuição ao RGPS.",
   "não é contribuinte obrigatório do RGPS, pois o valor dos seus honorários como conselheiro fiscal é inferior ao teto de isenção do RGPS."
  ],
  "correta": 0
 },
 {
  "id": "tjsp25-cont-071",
  "disciplina": "Direito Tributário",
  "assunto": "Crédito tributário",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 71",
  "enunciado": "Wesley está estudando a respeito da Escrituração Contábil Digital (ECD), conforme detalhamento contido na Instrução Normativa da RFB no 2.003/2021. A respeito dessa escrituração, é correto afirmar que",
  "alternativas": [
   "a assinatura da ECD para envio à Receita Federal do Brasil, a fim de garantir a autoria, a autenticidade, a integridade e a validade jurídica do documento digital, pode ser feita por qualquer meio de autenticação utilizado ordinariamente pela empresa para os seus negócios.",
   "compreende a versão digital dos livros contábeis Diário e seus auxiliares, quando houver; Razão e seus auxiliares, quando houver; e Balancetes Diários e Balanços, além de fichas de lançamento comprobatórias dos assentamentos neles transcritos.",
   "a obrigatoriedade da sua entrega se estende às empresas optantes pelo Simples Nacional, às instituições imunes nos termos da Constituição, bem como aos órgãos públicos, em relação aos tributos por eles retidos na fonte.",
   "a autenticação dos livros e documentos que integram a ECD das empresas mercantis será comprovada pelo recibo de entrega da ECD emitido pelo Sped ou por outra forma de autenticação, a critério das Juntas Comerciais.",
   "a ECD autenticada não pode ser substituída, ainda que contenha erros que não possam ser corrigidos por meio de lançamento contábil extemporâneo, por representar essa possibilidade uma fragilidade em relação à integridade da informação contábil."
  ],
  "correta": 1
 },
 {
  "id": "tjsp25-cont-072",
  "disciplina": "Direito Tributário",
  "assunto": "Reforma tributária",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 72",
  "enunciado": "A reforma da tributação sobre o consumo introduzida pela Emenda Constitucional no 132/2023 e pela Lei Complementar nº 214/2025 representa grande mudança no sistema tributário brasileiro. Nesse sentido, é correto afirmar que é importante pilar da nova sistemática tributária introduzida no ordenamento jurídico:",
  "alternativas": [
   "fim à possibilidade de sonegação por contribuintes e responsáveis tributários, pela imposição da sistemática de crédito financeiro, apenas passível de fruição após quitação do imposto devido na operação anterior.",
   "ampliação da cumulatividade do sistema, com a redução das hipóteses de creditamento pelos contribuintes no imposto sobre bens e serviços (IBS) em relação ao atual imposto sobre circulação de mercadorias e serviços (ICMS).",
   "aumento da complexidade do sistema por meio da substituição do imposto sobre serviços de qualquer natureza (ISS), tributo cumulativo e com alíquotas reduzidas, por tributo de natureza não cumulativa, com apuração de créditos e débitos.",
   "junção em um mesmo tributo da incidência sobre operações com mercadorias e operações com serviços, eliminando controvérsias acerca da competência tributária e da incidência do imposto sobre serviços (ISS), do imposto sobre produtos industrializados (IPI) e do imposto sobre mercadorias e serviços (ICMS).",
   "criação do Comitê Gestor do Imposto sobre Bens e Serviços, como mais um ente da Federação, acima de estados, do Distrito Federal e dos municípios, servindo à sua coordenação na aplicação da legislação tributária. Auditoria"
  ],
  "correta": 3
 },
 {
  "id": "tjsp25-cont-073",
  "disciplina": "Direito Tributário",
  "assunto": "Responsabilidade tributária",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 73",
  "enunciado": "Em uma reunião entre os três sócios de uma sociedade anônima, João e Maria manifestaram desconforto com as contas apresentadas por Miguel, sócio majoritário e administrador da companhia, alegando que as demonstrações contábeis não refletiriam adequadamente a posição patrimonial da companhia na data indicada nas demonstrações. Miguel, em sua defesa, afirmou que as demonstrações contábeis foram elaboradas por contadores habilitados e devidamente auditadas pelos auditores independentes, que apresentaram parecer sem ressalvas, o que conferiria certeza às demonstrações contábeis e invalidaria qualquer alegação de desconformidade dos sócios minoritários. A respeito dessa situação hipotética, é correto afirmar, com base nas normas técnicas de auditoria, que",
  "alternativas": [
   "o objetivo da auditoria de informações contábeis históricas é o de conferir certeza e segurança em relação aos números e à forma de apresentação dos relatórios contábeis auditados, conforme argumentado por Miguel.",
   "o fato de terem sido as demonstrações contábeis submetidas à auditoria independente, afasta a responsabilidade dos administradores por seus atos de gestão, independentemente da aprovação dos demais sócios.",
   "por não existir exigência legal de habilitação em contabilidade para a assunção de cargo de administrador no Brasil, eventual responsabilidade por incorreções nas demonstrações deve ser atribuída apenas ao auditor que emitiu parecer sem ressalvas.",
   "por não existir exigência legal de habilitação em contabilidade para a assunção de cargo de administrador em sociedade anônima no Brasil, eventual responsabilidade por incorreções nas demonstrações deve ser atribuída apenas ao contador que as assina.",
   "a auditoria das demonstrações contábeis não exime a administração ou os responsáveis pela governança das suas competências de elaboração e de supervisão da elaboração das demonstrações contábeis."
  ],
  "correta": 4
 },
 {
  "id": "tjsp25-cont-074",
  "disciplina": "Direito Tributário",
  "assunto": "Princípios e imunidades",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 74",
  "enunciado": "Sobre os tipos de auditoria, pode-se afirmar que",
  "alternativas": [
   "auditoria interna e controle interno são sinônimos, retratando, ambas as expressões, o setor da organização responsável pela verificação do cumprimento das políticas, normas e valores estabelecidos pelos responsáveis pela governança.",
   "as auditorias voltadas aos órgãos públicos não envolvem a verificação de informações contábeis, na medida em que esses órgãos não são obrigados à escrituração contábil nos mesmos moldes das organizações privadas.",
   "as melhores práticas de governança corporativa sugerem vinculação da área de auditoria interna diretamente ao Conselho de Administração, quando houver tal órgão, a fim de evitar conflitos de interesses e facilitar o seu trabalho.",
   "tanto a auditoria interna quanto a auditoria externa têm o mesmo grau de independência em relação à administração da companhia, na medida em que ambas devem seguir as normas técnicas e são remuneradas pela organização auditada.",
   "as auditorias governamentais seguem princípios e ritos específicos, decorrentes da chamada “Declaração de Lima”, não sofrendo influência das normas técnicas de auditoria aprovadas pelo Conselho Federal de Contabilidade."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-cont-075",
  "disciplina": "Direito Tributário",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 75",
  "enunciado": "Paulo está auditando as demonstrações contábeis da organização X quando se depara com possível equívoco no valor registrado em uma subconta contábil da organização. Após investigar mais a fundo, Paulo confirma o equívoco, mas observa que, ainda que este seja relevante no contexto da conta contábil da qual a subconta faz parte, não compromete o uso das informações contábeis por usuários internos ou externos da organização, não influenciando, portanto, negativa ou favoravelmente, as decisões econômicas dos usuários, tomadas com base nas demonstrações contábeis. Nesse contexto, e considerando as normas técnicas de auditoria, é correto afirmar que",
  "alternativas": [
   "a identificação deste equívoco, por ser de baixa relevância para usuários internos ou externos, não deve produzir nenhuma modificação no planejamento dos procedimentos de auditoria a serem realizados por Paulo.",
   "caso Paulo identifique que o equívoco tenha sido provocado por ato doloso da organização, estará diante de caso tratado pelas normas técnicas como “erro fraudulento”, acarretando a Paulo a obrigação de denunciar o caso às autoridades.",
   "Paulo pode considerar o equívoco como imaterial no contexto das demonstrações contábeis, considerando não ser o auditor responsável pela detecção de distorções que não sejam relevantes para as demonstrações contábeis como um todo.",
   "ao identificar o erro como de baixa relevância, Paulo deve considerar a possibilidade de ampliar os testes substantivos a serem realizados durante a auditoria, considerando a redução do risco de detecção verificado.",
   "o erro decorre do funcionamento dos controles internos, implantados na organização sob uma lógica de custos e benefícios, considerando-se os objetivos de lucro e os gastos envolvidos na ampliação dos controles."
  ],
  "correta": 2
 },
 {
  "id": "tjsp25-cont-076",
  "disciplina": "Direito Tributário",
  "assunto": "Responsabilidade tributária",
  "fonte": "VUNESP 2025 · TJSP · Contador Judiciário · Questão 76",
  "enunciado": "Pode-se dizer que a principal finalidade das chamadas matrizes de achados e matrizes de responsabilização no contexto das auditorias governamentais é:",
  "alternativas": [
   "servir como ferramenta para a elaboração do plano anual de auditoria, priorizando as áreas de maior risco identificadas durante o trabalho de campo.",
   "eximir a equipe de auditoria da responsabilidade pela fundamentação de seus achados, transferindo para os gestores a tarefa de comprovar a inexistência de irregularidades.",
   "permitir a quantificação monetária de todos os achados de auditoria, mesmo aqueles de natureza não financeira, para subsidiar a recuperação de valores indevidamente gastos.",
   "organizar e apresentar de forma clara e estruturada os achados da auditoria, relacionando-os às evidências coletadas e identificando os responsáveis pelas irregularidades ou deficiências encontradas.",
   "facilitar a comunicação dos resultados da auditoria aos órgãos de controle interno da entidade auditada, garantindo a confidencialidade das informações. Legislações Específicas"
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-001",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 1",
  "textoId": "mpsp25-prom-t8",
  "enunciado": "Ao analisar a aprovação do Projeto de Lei no 2.628/2022, o editorial deixa claro que ele",
  "alternativas": [
   "é um marco expressivo para a proteção da infância, ainda que originalmente contivesse falhas, corrigidas, e, na versão final, tenha deixado lacunas e ambiguidades.",
   "tem a chance de resolver satisfatoriamente a questão do uso das redes digitais, porque se trata de um documento amplamente discutido e analisado com cuidado.",
   "será de fácil implementação, porque sua votação rápida permitiu que falhas, lacunas e ambiguidades fossem devidamente analisadas e retiradas do texto final.",
   "impõe aos agentes públicos a responsabilidade com a proteção integral da infância, considerando que a família, na maioria das vezes, não sabe como fazê-lo.",
   "está eivado de problemas, uma vez que pode ser um marco regulatório ao qual falta suporte técnico e, além do mais, não conta com apoio da maioria da população."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-002",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 2",
  "textoId": "mpsp25-prom-t8",
  "enunciado": "Comparando-se as informações “... numa tramitação desnecessariamente atabalhoada...” (1o parágrafo) e “Mas a tramitação açodada...” (3o parágrafo), conclui-se corretamente que a tramitação do Projeto de Lei no 2.628/2022 foi",
  "alternativas": [
   "precipitada e entusiasmada.",
   "metódica e desestimulante.",
   "desordenada e acelerada.",
   "confusa e manipulada.",
   "rigorosa e conturbada."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-003",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Semântica e reescrita",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 3",
  "textoId": "mpsp25-prom-t8",
  "enunciado": "Na passagem do último parágrafo do texto “... nenhum texto legal substituirá a ‘aldeia inteira’ necessária para educar e proteger crianças.”, a expressão destacada corresponde a uma",
  "alternativas": [
   "sinédoque, reportando à ideia de que cabe ao ECA a proteção e a educação das crianças.",
   "metáfora, reportando a todos os responsáveis pela educação e proteção das crianças.",
   "sinestesia, reportando diferentes nuances como a sociedade educa e protege suas crianças.",
   "comparação, reportando aos grupos que privilegiam a educação e proteção das crianças.",
   "metonímia, reportando ao papel fundamental da família para educar e proteger as crianças."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-004",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Concordância",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 4",
  "textoId": "mpsp25-prom-t8",
  "enunciado": "Considere as seguintes passagens do texto:\n• \u0007“Esses desastres foram revertidos, felizmente, por pressão da oposição...” (2o parágrafo)\n• \u0007“Persistem conceitos vagos, como a exigência de evitar o ‘uso compulsivo’...” (3o parágrafo)\n• \u0007“... que concilie a proteção integral da infância com o respeito às liberdades.” (5o parágrafo) Em conformidade com a norma-padrão de concordância, as passagens transcritas admitem, respectivamente, as seguintes reescritas:",
  "alternativas": [
   "Reverteu-se esses desastres, felizmente, com pressão da oposição... / Trata-se de conceitos vagos, como a exigência de evitar o “uso compulsivo”... /... em que estejam conciliadas a proteção integral da infância e o respeito às liberdades.",
   "Reverteram-se esses desastres, felizmente, com pressão da oposição... / Há conceitos vagos, como a exigência de evitar o “uso compulsivo”... /... em que esteja conciliado a proteção integral da infância e o respeito às liberdades.",
   "Reverteu-se esses desastres, felizmente, com pressão da oposição... / Tratam-se de conceitos vagos, como a exigência de evitar o “uso compulsivo”... /... em que estejam conciliado a proteção integral da infância e o respeito às liberdades.",
   "Reverteram-se esses desastres, felizmente, com pressão da oposição... / Tratam-se de conceitos vagos, como a exigência de evitar o “uso compulsivo”... /... em que esteja conciliada a proteção integral da infância e o respeito às liberdades.",
   "Reverteram-se esses desastres, felizmente, com pressão da oposição... / Trata-se de conceitos vagos, como a exigência de evitar o “uso compulsivo”... / ... em que estejam conciliados a proteção integral da infância e o respeito às liberdades."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-005",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 5",
  "textoId": "mpsp25-prom-t8",
  "enunciado": "O termo destacado está empregado em sentido próprio em:",
  "alternativas": [
   "“Como se sabe, o diabo mora nos detalhes – mas também, às vezes, na falta deles.” (3o parágrafo)",
   "“Quase institucionalizou uma guerra de denúncias, abrindo a porta à censura privada.” (2o parágrafo)",
   "“... resta uma sensação de alívio por ter-se evitado um desastre.” (1o parágrafo)",
   "“O avanço regulatório sobre as plataformas não pode servir de pretexto...” (4o parágrafo)",
   "“... terá autonomia real, ou será capturada pelo governo de turno?” (3o parágrafo)"
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-006",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 6",
  "textoId": "mpsp25-prom-t8",
  "enunciado": "Considere as passagens:\n• \u0007“... resta uma sensação de alívio por ter-se evitado um desastre.” (1o parágrafo)\n• \u0007“A Câmara quase entregou um arcabouço que permitiria remoções indiscriminadas de conteúdo, sem ordem judicial...” (2o parágrafo)\n• \u0007“Persistem conceitos vagos, como a exigência de evitar o ‘uso compulsivo’...” (3o parágrafo)\n• \u0007“Como se sabe, o diabo mora nos detalhes – mas também, às vezes, na falta deles.” (3o parágrafo) No contexto em que estão empregadas, as expressões destacadas exprimem, correta e respectivamente, sentidos de:",
  "alternativas": [
   "causa; dúvida; conformidade; conformidade; adição.",
   "causa; possibilidade; exemplificação; conformidade; adição.",
   "modo; certeza; comparação; comparação; adversidade.",
   "modo; possibilidade; comparação; consequência; restrição.",
   "meio; dúvida; exemplificação; causa; consequência."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-007",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 7",
  "textoId": "mpsp25-prom-t8",
  "enunciado": "O Congresso aprovou o Projeto de Lei no 2.628/2022, e de “Estatuto da Criança e do Adolescente Digital”. A sociedade está ansiosa      sanção do Executivo. Espera-se que cada qual, no âmbito de sua função, zele infância com responsabilidade. De acordo com a norma-padrão, as lacunas do texto devem ser preenchidas, correta e respectivamente, com:",
  "alternativas": [
   "batizaram ele ... da ... com a",
   "batizaram-lhe ... com a ... pela",
   "batizaram-lhe ... na ... com a",
   "batizaram-no ... pela ... pela",
   "batizaram-no ... sob a ... da"
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-008",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Semântica e reescrita",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 8",
  "textoId": "mpsp25-prom-t8",
  "enunciado": "Considere as passagens:\n• \u0007“... e a interrupção de plataformas ficou restrita ao Judiciário.” (2o parágrafo)\n• \u0007“A exploração infantil nas redes é real e abjeta...” (4o parágrafo)\n• \u0007“Uma lei robusta é um começo.” (5o parágrafo) Em conformidade com a norma-padrão de ortografia e acentuação, as expressões destacadas podem ser substituídas, respectivamente, por:",
  "alternativas": [
   "suspensão; desprezível; com robustez.",
   "suspensão; desprezível; com robustêz.",
   "suspenção; despresível; com robustes.",
   "suspenção; despresivel; com robustez.",
   "suspensão; desprezível; com robustês."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-009",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Crase",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 9",
  "textoId": "mpsp25-prom-t8",
  "enunciado": "O uso do acento indicativo da crase está de acordo com a norma-padrão em:",
  "alternativas": [
   "Cabe à todas as pessoas a responsabilidade com a proteção dos menores: família, escola, instituições públicas e empresas.",
   "A aplicação de uma lei robusta exigirá que haja coragem para se proceder à uma correção de rumos, quando preciso.",
   "É preciso que as pessoas reconheçam que, em relação à solução de um problema, as leis, sozinhas, não vão resolvê-lo.",
   "O Congresso aprovou o Projeto de Lei no 2.628/2022, mas os deputados poderiam, de fato, ter chegado à um resultado melhor.",
   "O avanço regulatório sobre as plataformas não pode transferir culpas à quem não tem nem vai substituir a investigação criminal."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-010",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Pronomes e colocação pronominal",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 10",
  "textoId": "mpsp25-prom-t8",
  "enunciado": "Assinale a alternativa em que a colocação pronominal está em conformidade com a norma-padrão.",
  "alternativas": [
   "A tramitação açodada do Projeto de Lei no 2.628/2022 deixou lacunas e ambiguidades, pois facilmente identificam-se conceitos vagos nele.",
   "Se restringirá ao Judiciário a interrupção de plataformas, conforme modificações realizadas no texto original do Projeto de Lei no 2.628/2022.",
   "Exigirão-se vigilância, prudência e a coragem de corrigir rumos quando for preciso na aplicação de uma lei robusta de proteção aos menores.",
   "Tendo evitado-se um desastre pelos riscos incorridos numa tramitação desnecessariamente atabalhoada, resta agora uma sensação de alívio.",
   "O Brasil não deverá curvar-se às tentações do sentimentalismo e do voluntarismo, mas assumir que nenhum texto legal substituirá a “aldeia inteira”."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-011",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "MMC e MDC",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 11",
  "enunciado": "Tem-se 384 m de fio na cor azul, 552 m de fio na cor verde e 624 m de fio na cor vermelha. Esses fios deverão ser cortados em pedaços, todos de mesmo comprimento, o maior possível, sem sobras, para a execução de um determinado projeto. Após cortados, a soma da quantidade de pedaços de fios na cor vermelha com a quantidade de pedaços de fios na cor verde excederá a quantidade de pedaços na cor azul em",
  "alternativas": [
   "30.",
   "33.",
   "36.",
   "39.",
   "27."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-012",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Razão, proporção e problemas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 12",
  "enunciado": "Três pessoas compraram os produtos A, B e C em uma loja de departamentos, pagando x reais no preço unitário de A, y reais no preço unitário de B, e z reais no preço unitário de C. Uma delas comprou 5 unidades de A, 7 unidades de B e 9 unidades de C, pagando o total de R$ 1.540,00; a outra, comprou 7 unidades, 10 unidades e 13 unidades, respectivamente, dos produtos A, B e C, pagando o total de R$ 2.190,00. Se a terceira pessoa comprou uma unidade de cada um dos três produtos, então seu gasto total foi de",
  "alternativas": [
   "R$ 230,00.",
   "R$ 250,00.",
   "R$ 210,00.",
   "R$ 220,00.",
   "R$ 240,00. R u n h o"
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-013",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Associação lógica e ordenação",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 13",
  "enunciado": "Uma equipe de corrida de revezamento, composta por n atletas (n>1), percorreu uma distância total d, em quilômetros, da seguinte maneira:\n• \u0007o primeiro corredor percorreu um quilômetro, depois percorreu mais um sexto da distância que ainda restava e parou;\n• \u0007o segundo corredor partiu da posição em que o primeiro corredor parou, percorreu dois quilômetros, depois percorreu mais um sexto da distância que ainda restava e parou;\n• \u0007o terceiro corredor partiu da posição em que o segundo corredor parou, percorreu três quilômetros, depois percorreu mais um sexto da distância que ainda restava e parou;\n• \u0007e assim, sucessivamente, cada corredor da equipe se revezou até percorrerem a distância total d. Sabendo que cada corredor dessa equipe percorreu o mesmo número de quilômetros, então, pode-se afirmar que",
  "alternativas": [
   "n é um múltiplo de 3 e d é um número ímpar.",
   "n é um quadrado perfeito e d é um número múltiplo de 6.",
   "n é um múltiplo de 4 e d é um quadrado perfeito.",
   "n é um número primo e d é um quadrado perfeito.",
   "n é um número primo e d é um número par."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-014",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Médias",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 14",
  "enunciado": "Em um escritório com certo número de funcionários, a média dos salários, em setembro, era R$ 3.600,00. Em outubro, dois novos funcionários foram contratados em semanas diferentes. Na primeira semana de outubro, o primeiro funcionário foi contratado, de maneira que a média dos salários dos funcionários do escritório passou a ser R$ 3.500,00, e na terceira semana de outubro, o segundo funcionário foi contratado, fazendo com que a média dos salários mudasse para R$ 3.550,00. Sabendo que o salário do segundo funcionário contratado na terceira semana de outubro é R$ 1.150,00 a mais do que o salário do primeiro funcionário contrato na primeira semana de outubro, o número de funcionários do escritório após essas duas contratações passou a ser",
  "alternativas": [
   "13.",
   "11.",
   "9.",
   "8.",
   "15. R u n h o"
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-015",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Lógica proposicional e argumentação",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 15",
  "enunciado": "Uma negação lógica da afirmação: “Se todo acusado se diz inocente, então o culpado é mudo ou é mentiroso”, é",
  "alternativas": [
   "Todo acusado se diz inocente e o culpado não é mudo e não é mentiroso.",
   "Algum acusado se diz inocente ou o culpado não é mudo nem mentiroso.",
   "Algum acusado não se diz inocente e o culpado não é mudo nem mentiroso.",
   "Se o culpado não é mudo ou não é mentiroso, então algum acusado não se diz inocente.",
   "Todo acusado não se diz inocente e o culpado é mudo e é mentiroso."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-016",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Lógica proposicional e argumentação",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 16",
  "enunciado": "Considere verdadeiras as afirmações:\nI. Qualquer um que pratica esporte não é sedentário.\nII. Homens não sabem cozinhar.\nIII. Aqueles que não sabem cozinhar são sedentários. A alternativa que pode ser conclusão das afirmações anteriores é",
  "alternativas": [
   "Qualquer um que não pratica esporte é sedentário.",
   "Homens não praticam esporte.",
   "Aqueles que não sabem cozinhar são homens.",
   "Quem sabe cozinhar não é sedentário.",
   "Os sedentários não sabem cozinhar."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-017",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Contagem e probabilidade",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 17",
  "enunciado": "A senha de acesso a um computador é composta de quatro caracteres distintos. O primeiro é uma dessas três letras: F, G ou H. O segundo e terceiro caracteres podem ser, em qualquer ordem, dois dentre os números: 5, 6, 7, 8 ou 9. O quarto caractere é um dos quatro símbolos: *, $, % ou #. A probabilidade de uma dessas senhas: G68$ ou H57# ser a correta é um valor entre",
  "alternativas": [
   "1% e 1,5%",
   "2% e 2,5%",
   "1,5% e 2%",
   "2,5% e 3%",
   "0,5% e 1%"
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-018",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Sequências e padrões",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 18",
  "enunciado": "A sequência de números a seguir foi criada com um padrão lógico: 1,2,4,7,2,4,7,11,3,6,10,15,4,8,13,19,5,... Seja F o elemento da 53a posição, G o elemento da 71a posição e H o elemento da 82a posição, o valor que se obtém calculando: F + H – G é igual a",
  "alternativas": [
   "1.",
   "14.",
   "8.",
   "26.",
   "0. R u n h o"
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-023",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "OneDrive e nuvem",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 23",
  "enunciado": "Ao criar um link de compartilhamento da Área de Trabalho de um computador conectado ao Microsoft OneDrive 365, a opção que preserva as configurações de edição ou visualização, não permitindo alterá-las, é:",
  "alternativas": [
   "pessoas que você escolhe.",
   "qualquer grupo com o link (público).",
   "pessoas com acesso existente.",
   "qualquer pessoa com o link (público).",
   "pessoas da sua organização."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-024",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "PowerPoint",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 24",
  "enunciado": "Ao editar uma mensagem recém-enviada no Microsoft Teams, qual opção o usuário deve utilizar para anexar uma apresentação do PowerPoint à mensagem?",
  "alternativas": [
   "Mostrar opções de formatação.",
   "Ações e aplicativos.",
   "Emojis, GIFs e Adesivos.",
   "Anexar mensagem.",
   "Upload da nuvem."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-025",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Segurança da informação e LGPD",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 25",
  "enunciado": "A chamada “Lei Carolina Dieckmann”, sancionada em 2012, surgiu após um caso de grande repercussão envolvendo a atriz que teve fotos pessoais vazadas na internet. Qual conduta passou a ser considerada crime com a entrada em vigor da Lei no 12.737/2012?",
  "alternativas": [
   "Criar perfis falsos em redes sociais com nomes de celebridades.",
   "Utilizar redes Wi-Fi públicas sem pagar pelo serviço com ou sem senha de acesso.",
   "Fazer críticas ofensivas a figuras públicas em fóruns online.",
   "Compartilhar memes nas redes sociais sem autorização do autor.",
   "Invadir dispositivos eletrônicos alheios, com o objetivo de obter, adulterar ou destruir dados."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-026",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Segurança da informação e LGPD",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 26",
  "enunciado": "A Lei n o 13.709/2018, conhecida como Lei Geral de Proteção de Dados Pessoais (LGPD), estabelece regras para o tratamento de dados pessoais no Brasil, com o objetivo de proteger os direitos fundamentais de liberdade e privacidade. Com base na LGPD, assinale a alternativa que apresenta uma situação em que o tratamento de dados pessoais pode ocorrer independentemente do consentimento do titular.",
  "alternativas": [
   "Quando os dados, anonimizados, forem tratados exclusivamente para a realização de estudos por órgão de pesquisa.",
   "Quando o titular for menor de idade e os dados forem coletados diretamente de redes sociais públicas.",
   "Quando o tratamento envolver dados sensíveis para envio de conteúdo promocional.",
   "Quando os dados forem armazenados em banco de dados estrangeiro, fora da jurisdição brasileira.",
   "Quando o controlador deseja utilizar os dados pessoais para campanhas publicitárias de produtos de terceiros."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-027",
  "disciplina": "Direito Constitucional",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 27",
  "enunciado": "A respeito das concepções sociológica, jurídica e normativa da constituição, é correto afirmar:",
  "alternativas": [
   "a concepção nominativa da constituição, assim como a concepção jurídica, parte do pressuposto de que as regras constitucionais não são condicionadas historicamente, estando a sua aplicação justificada por integrar, formalmente, o ponto mais elevado da ordem jurídica.",
   "a concepção jurídica, na obra de Hans Kelsen, está relacionada à ideia de que a constituição possui uma estrutura formal, caracterizada por prescrever normas dotadas de um dever-ser, independentemente da justiça ou legitimidade do conteúdo.",
   "para a concepção sociológica de constituição, presente na obra de Ferdinand Lassale, a constituição de um país é formada a partir da soma dos fatores reais de poder, responsáveis pela estruturação do poder político do Estado, com uma preponderância do aspecto jurídico-formal da constituição.",
   "a concepção jurídica de constituição está diretamente ligada à ideia de que as constituições devem ser escritas, sintéticas e rígidas, pois a sua estrutura legal deve ser concisa, prevista em um documento escrito e dotada de superioridade hierárquica em relação às demais normas integrantes do sistema.",
   "a concepção sociológica reconhece que a constituição, apesar de condicionada historicamente, tem a capacidade de modificar a realidade por meio da eficácia jurídica das normas constitucionais."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-028",
  "disciplina": "Direito Constitucional",
  "assunto": "Organização do Estado",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 28",
  "enunciado": "Com base na Constituição Federal, assinale a alternativa correta.",
  "alternativas": [
   "A prática do racismo constitui crime hediondo, inafiançável e imprescritível, sujeito à pena de reclusão e detenção, nos termos da lei.",
   "A lei regulará a individualização da pena e adotará, dentre outras, as penas de privação de liberdade, banimento, multa e prestação social alternativa.",
   "Nenhuma pena passará da pessoa do condenado, sendo vedado estender a sucessores a obrigação de reparar o dano e a decretação do perdimento de bens.",
   "Aos autores, pertence o direito exclusivo de utilização, publicação ou reprodução de suas obras, transmissível aos herdeiros pelo tempo que a lei fixar.",
   "Não é admitido o uso de provas ilícitas, em processos penais, salvo em caso de prática de crime hediondo."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-029",
  "disciplina": "Direito Constitucional",
  "assunto": "Ministério Público e funções essenciais",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 29",
  "enunciado": "O Grupo de Atuação Especial de Combate ao Crime Organizado (GAECO), do estado X, em pareceria com a Polícia Federal e as Policiais Civis de cinco estados da federação, está planejando uma operação conjunta que terá como foco realizar prisões e buscas e apreensões de acusados de práticas de crimes contra crianças e adolescentes, em ambiente virtual. Dois dias antes da diligência, um grupo de promotores está realizando uma reunião de alinhamento com os agentes que participarão da operação para evitar a prática de atos incompatíveis com a Constituição Federal e que possam, no final, impactar a validade das provas coletadas. Considerando essa situação hipotética e o disposto na Constituição Federal, os promotores de justiça poderão corretamente afirmar:",
  "alternativas": [
   "as buscas e apreensões poderão ser iniciadas às 6h, em todo o Brasil, por ser o horário previsto na Constituição Federal para se considerar dia.",
   "as prisões e as buscas e apreensões poderão ser realizadas no período noturno, independentemente da natureza do crime, caso a decisão judicial seja omissa ao tratar do horário do cumprimento.",
   "durante as diligências, caso questionados, os policiais podem afirmar que os envolvidos somente serão considerados culpados após o trânsito em julgado da sentença penal condenatória e que as provas obtidas por meios ilícitos são inadmissíveis no processo.",
   "nos casos em que estejam envolvidos em potencial prática de crime hediondo, as prisões poderão ser feitas nas residências dos acusados, no período noturno, para evitar o risco de evasão.",
   "os policiais podem aproveitar as buscas e apreensões para inserir, de maneira oculta, escutas ambientais nas casas dos acusados, pois a coleta de informações dessa natureza não precisa, necessariamente, ser precedida de autorização judicial, quando relacionadas à prática de crime inafiançável."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-030",
  "disciplina": "Direito Constitucional",
  "assunto": "Ministério Público e funções essenciais",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 30",
  "enunciado": "O Ministério Público e a Polícia Civil do estado X têm atuado de maneira conjunta para apurar o uso de empresas de transporte rodoviário interestadual de passageiros e de administração de portos marítimos, fluviais e lacustres na realização de lavagem de dinheiro de recursos de origem ilícita, associada ao tráfico de drogas. Em determinado ponto da investigação, a autoridade policial entende ser necessário enviar ofício ao(s) órgão(s) governamental(ais) para obter a relação das empresas autorizadas a explorar, em regime de concessão, autorização ou permissão, os portos e os serviços de transporte. Com base na situação hipotética apresentada e considerando a competência constitucional para prestar os serviços, deve-se concluir que o ofício deve ser encaminhado ao órgão ou à entidade vinculado(a)",
  "alternativas": [
   "à União, para obtenção dos dados das empresas de transporte interestadual e para os estados, em relação aos portos.",
   "aos municípios em que sediadas as empresas, apenas.",
   "aos estados e Distrito-Federal em que sediadas as empresas, apenas.",
   "aos estados e Distrito-Federal, para obtenção dos dados das empresas que exploram os portos e para a União, para obtenção dos dados das empresas de transporte.",
   "à União, apenas."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-031",
  "disciplina": "Direito Constitucional",
  "assunto": "Poderes Legislativo e Executivo",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 31",
  "enunciado": "O Presidente da República propôs projeto de lei com o objetivo de criar cargos para professor universitário no âmbito da administração direta, extinguir cargos vagos de serviços técnico-administrativo e aumentar a remuneração de determinadas categorias do serviço público, vinculadas ao Poder Executivo. A partir da situação hipotética apresentada e do disposto na Constituição Federal, é correto afirmar:",
  "alternativas": [
   "o aumento de remuneração só pode ser proposto por parlamentares, pois os projetos de lei do poder executivo, em regra, não podem majorar despesas.",
   "a lei terá o início de sua discussão no Senado Federal e os temas tratados na proposição não podem ser objeto de lei de iniciativa popular.",
   "as matérias, pelo tema, devem ser objeto de projeto de lei complementar.",
   "a extinção dos cargos vagos pode ser feita por decreto e os parlamentares não podem propor lei tratando dos temas previstos na referida proposta.",
   "a criação e extinção de cargos não precisa ser tratada em lei, pois compete ao Poder Executivo dispor sobre a sua organização interna, por decreto."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-032",
  "disciplina": "Direito Constitucional",
  "assunto": "Poder Judiciário",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 32",
  "enunciado": "A respeito do Poder Judiciário, com base na Constituição Federal, assinale a alternativa correta.",
  "alternativas": [
   "Os juízes titular e substituto residirão na respectiva comarca, salvo autorização de dois terços dos membros do respectivo tribunal.",
   "A União, os estados e o Distrito Federal criarão justiça de paz, composta por juízes togados e com competência, na forma da lei, para promover mediações e conciliações, com o objetivo de reduzir o número de processos litigiosos no Poder Judiciário.",
   "É permitida a permuta de magistrados de comarca de igual entrância, quando for o caso, e dentro do mesmo segmento de justiça, vinculados a diferentes tribunais, ressalvados os juízes de segundo grau.",
   "Nos Tribunais de Justiça compostos de mais de 170 (cento e setenta) desembargadores em efetivo exercício, a eleição para os cargos diretivos será realizada entre os membros do tribunal pleno, por maioria absoluta e por voto direto e secreto, para um mandato de 2 (dois) anos, vedada mais de 1 (uma) recondução sucessiva.",
   "A atividade jurisdicional será ininterrupta, sendo permitida férias coletivas nos juízos e tribunais de segundo grau, no período de recesso forense, assegurada a manutenção de juízes em plantão permanente."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-033",
  "disciplina": "Direito Constitucional",
  "assunto": "Ministério Público e funções essenciais",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 33",
  "enunciado": "Considere que, no curso de uma investigação conduzida pelo Grupo de Atuação Especial de Combate ao Crime Organizado (GAECO), órgão vinculado ao Ministério Público e composto por membros da carreira, o Procurador-Geral de Justiça avocou, sem a concordância expressa dos integrantes do GAEGO, o processo e informou institucionalmente que o caso, a partir de daquele momento, passaria a ser de atribuição do Chefe da Instituição. Diante da situação hipotética relatada e segundo o disposto na Constituição Federal, é correto afirmar que a conduta do Procurador-Geral de Justiça é",
  "alternativas": [
   "inválida, por violar o princípio da independência funcional (promotor natural).",
   "inválida, por violar os princípios da impessoalidade e da moralidade.",
   "válida, por haver a concordância tácita dos membros do GAECO.",
   "válida, por ser compatível com o princípio da hierarquia.",
   "válida, pois está de acordo com o princípio da indivisibilidade."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-034",
  "disciplina": "Direito Constitucional",
  "assunto": "Ministério Público e funções essenciais",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 34",
  "enunciado": "Considere que há, no Ministério Público, inquérito civil em curso, cujo objeto é apurar a suposta omissão culposa de autoridades policiais na repressão a eventos produzidos pela empresa X, que tem como público-alvo adolescentes e jovens adultos. Há no inquérito a informação de que, nas festas, são comercializadas bebidas alcóolicas sem a checagem da idade dos jovens e que os policiais têm respondido a reclamações da vizinhança do local dos eventos com certo atraso, sob a justificativa de excesso de trabalho. Considerando essa situação hipotética e o disposto na Constituição Federal, é correto afirmar:",
  "alternativas": [
   "o inquérito civil não pode ter como desdobramento a apuração de eventuais práticas de ilícito penal, pois compete exclusivamente às autoridades policiais a realização de atos dessa natureza.",
   "o inquérito civil não pode ser instaurado pelo Ministério Público, pois a Constituição Federal reserva às autoridades policiais a atribuição para conduzir inquéritos civis e penais.",
   "o inquérito civil pode ter esse objeto, pois compete ao Ministério Público exercer o controle externo da autoridade policial e, portanto, avaliar a qualidade do trabalho desenvolvido pelos agentes de segurança.",
   "o Ministério Público pode conduzir a investigação no inquérito civil e, se concluir que há prática de atos ilícitos, propor ação civil pública, cuja legitimidade para ajuizamento é reservada exclusivamente à instituição.",
   "não cabe ao Ministério Público avaliar as justificativas apresentadas pelos policiais, pois apuração dessa natureza é reservada ao próprio Poder Executivo, que tem a competência para aplicar sanções disciplinares a seus agentes."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-039",
  "disciplina": "Direito Constitucional",
  "assunto": "Direitos e garantias fundamentais",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 39",
  "enunciado": "De acordo com a Declaração Universal dos Direitos Humanos de 1948, é correto afirmar:",
  "alternativas": [
   "salvo sem situação de guerra declarada, ninguém será submetido à tortura, nem a tratamento ou castigo cruel, desumano ou degradante.",
   "todo ser humano acusado de um ato delituoso tem o direito de ser presumido inocente até que seja proferida decisão judicial, ainda que sujeita a recurso, desde que no processo lhe tenham sido asseguradas todas as garantias necessárias à sua defesa.",
   "ninguém será arbitrariamente preso, detido ou exilado, ainda que pela prática de crime hediondo, na forma da lei.",
   "os Estados devem reconhecer aos seus cidadãos o direito ao remédio efetivo, nos tribunais nacionais, contra atos que violem os direitos fundamentais reconhecidos pela Constituição, podendo estender esses direitos aos estrangeiros, na forma da lei.",
   "ninguém poderá ser culpado por qualquer ação ou omissão que, no momento, não constituíam delito perante o direito nacional ou internacional, salvo se o ato for ofensivo à dignidade humana e a sua reprovabilidade for reconhecida por tribunal internacional, na forma da lei."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-040",
  "disciplina": "Direito Constitucional",
  "assunto": "Direitos e garantias fundamentais",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 40",
  "enunciado": "A respeito das garantias judiciais, previstas no Pacto de São José da Costa Rica, é correto afirmar:",
  "alternativas": [
   "o processo penal deve ser público, salvo no que for necessário para preservar os interesses da justiça.",
   "toda pessoa tem o direito de ser julgada em um processo que lhe assegure a possibilidade de apresentar recursos apreciados por outros dois órgãos colegiados, na forma da lei.",
   "toda pessoa tem o direito de ser assistida por um defensor ou de defender-se pessoalmente, salvo se renunciar expressamente a esse direito, na forma da lei.",
   "toda pessoa tem direito de ser indenizada conforme a lei, no caso de haver sido condenada em função de erro judicial, se esse decorrer da prática de ato doloso.",
   "o acusado absolvido por sentença passada em julgado não poderá ser submetido a novo processo pelos mesmos fatos, salvo se surgirem novas provas, na forma da lei."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-041",
  "disciplina": "Direito Constitucional",
  "assunto": "Direitos e garantias fundamentais",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 41",
  "enunciado": "Com base no Pacto San José da Costa Rica, assinale a alternativa correta com relação à estrutura e funcionamento da Corte Interamericana de Direitos Humanos.",
  "alternativas": [
   "Somente os Estados-Partes e os cidadãos dos países-membro têm direito de submeter caso à decisão da Corte.",
   "A Corte compor-se-á de sete juízes, nacionais dos Estados-Membros da Organização, e não deve haver, na Corte, dois juízes da mesma nacionalidade.",
   "Os Estados-Partes na Convenção devem se comprometer a envidar os melhores esforços para cumprir as decisões da Corte em todo caso em que forem partes, pois elas são desprovidas de eficácia executiva.",
   "Não se poderá exigir responsabilidade em tempo algum dos juízes da Corte, nem dos membros da Comissão, por votos e opiniões emitidos no exercício de suas funções, salvo se comprovada a prática de ato com erro grave.",
   "Os juízes da Corte serão eleitos por um período de três anos e só poderão ser reeleitos por duas vezes."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-042",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 42",
  "enunciado": "Considerando o disposto na Lei no 13.303/2016, a respeito dos contratos administrativos celebrados por empresas públicas e sociedades de economia mista, é correto afirmar:",
  "alternativas": [
   "a garantia prestada pelo contratado, por caução em dinheiro, será liberada ou restituída após a execução do contrato, no valor nominal depositado à época da celebração do ajuste.",
   "é vedado o contrato por prazo indeterminado, salvo por acordo entre as partes, com previsão contratual e desde que constante do respectivo edital.",
   "é obrigatória a prestação de garantia nas contratações de obras, serviços e compras, em modalidade previamente definida pela Administração.",
   "a redução a termo do contrato poderá ser dispensada para pequenas despesas de pronta entrega e pagamento das quais não resultem obrigações futuras ao ente contratante.",
   "caso o licitante vencedor, devidamente convocado, não assine o termo de contrato no prazo estabelecido, que não admite prorrogação, o licitante perderá o direito à contratação."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-043",
  "disciplina": "Direito Administrativo",
  "assunto": "Atos administrativos",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 43",
  "enunciado": "Ao analisar procedimento adotado por órgão público, com base nas suas atribuições estabelecidas pela Constituição Federal, na hipótese de o Tribunal de Contas verificar uma ilegalidade na prática de determinado ato administrativo, deverá a Corte de Contas",
  "alternativas": [
   "assinar prazo para que o órgão ou entidade adote as providências necessárias ao exato cumprimento da lei.",
   "sustar o ato impugnado e comunicar a sua decisão ao Ministério Público da Comarca competente.",
   "aplicar multa ao responsável pela prática do ato ilegal e solicitar a abertura do competente inquérito policial.",
   "intimar o servidor infrator para os devidos esclarecimentos, sob pena de decretação de sua prisão.",
   "ajuizar imediatamente a ação cabível contra o servidor infrator, a fim de buscar aplicar-lhe as devidas sanções."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-044",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 44",
  "enunciado": "Suponha que uma empresa pública, com o objetivo de evitar que determinados atos por ela praticados causem prejuízos ao patrimônio público e, consequentemente, sejam objeto de anulação, solicita um parecer jurídico prévio do Ministério Público, como órgão fiscalizador e controlador da Administração Pública, sobre a regularidade desses atos administrativos. Nessa situação hipotética, é correto afirmar que o Ministério Público",
  "alternativas": [
   "não poderá emitir parecer prévio sobre a regularidade dos atos, mas poderá exarar o parecer após a edição dos referidos atos.",
   "somente poderá emitir o parecer se houver previsão expressa, nesse sentido, na lei que criou a empresa pública.",
   "poderá emitir parecer prévio para a empresa pública, mas somente sob o aspecto da legalidade dos atos administrativos.",
   "poderá emitir o parecer, desde que se trate de atos que possam violar ou ameaçar direitos difusos e coletivos.",
   "não poderá emitir o parecer, uma vez que é vedado ao Ministério Público exercer a função de consultor jurídico de entidades públicas."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-045",
  "disciplina": "Direito Administrativo",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 45",
  "enunciado": "Considerando o que estabelece a Lei no 12.016/2009, assinale a alternativa correta a respeito do instituto do mandado de segurança.",
  "alternativas": [
   "Antes de notificar a autoridade impetrada para que preste as informações, o juiz ouvirá o representante do Ministério Público, que opinará, dentro do prazo improrrogável de 10 (dez) dias.",
   "Diferentemente do processo movido por um particular, quando o impetrante for o Ministério Público, os efeitos da medida liminar persistirão até o trânsito em julgado da sentença.",
   "Se o impetrante criar obstáculo ao normal andamento do processo, o Ministério Público poderá requerer a perempção ou caducidade da medida liminar judicialmente concedida.",
   "Caso o Ministério Público não profira o seu parecer no prazo legal, o juiz deverá renovar a vista dos autos ao parquet, pelo mesmo prazo, sendo nula a sentença prolatada sem o parecer do Ministério Público.",
   "Será desde logo denegada a segurança, quando não for o caso de mandado de segurança ou lhe faltar algum dos requisitos legais ou quando decorrido o prazo legal para a impetração."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-046",
  "disciplina": "Direito Administrativo",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 46",
  "enunciado": "No que diz respeito à responsabilidade da pessoa jurídica, prevista na Lei no 12.846/2013, nas hipóteses de fusão e incorporação que tenham sido legítima e legalmente realizadas, a responsabilidade da sucessora será",
  "alternativas": [
   "restrita à obrigação de pagamento de multa e de eventuais obrigações de fazer até a data da fusão ou incorporação.",
   "restrita à obrigação de pagamento de multa e reparação integral do dano causado, até o limite do patrimônio transferido.",
   "subsidiária em relação à da pessoa jurídica sucedida, sendo responsabilizada a sucessora apenas no caso de a sucedida não conseguir arcar com as suas obrigações.",
   "integral e solidária, sendo a sucessora responsável por todas as dívidas e obrigações originalmente impostas à pessoa jurídica sucedida.",
   "solidária com a da pessoa jurídica sucedida, incluindo as obrigações decorrentes de atos e fatos ocorridos até a data da fusão ou incorporação."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-047",
  "disciplina": "Direito Administrativo",
  "assunto": "Bens públicos e intervenção na propriedade",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 47",
  "enunciado": "Suponha que o Ministério Público tenha recebido reclamações de órgãos da sociedade civil sobre fatos graves que possam ensejar a propositura de uma ação civil pública. Uma vez instaurado o competente inquérito civil, com base nas informações obtidas sobre a questão, nos moldes do que dispõe a Lei no 7.347/1985, é correto afirmar:",
  "alternativas": [
   "na hipótese de o Ministério Público se convencer da procedência das reclamações que embasaram a abertura do inquérito civil, o órgão da sociedade civil denunciante deverá assinar em conjunto a petição inicial da ação civil pública.",
   "negadas informações ou documentos requisitados pelo Ministério Público para instruir o inquérito civil, em razão de a lei impor sigilo, o parquet deverá encaminhar ofício ao Poder Judiciário para que o juiz determine a sua requisição.",
   "o Ministério Público poderá requisitar, de qualquer organismo público ou particular, certidões, informações, exames ou perícias, no prazo que assinalar, o qual não poderá ser inferior a 30 (trinta) dias úteis.",
   "se o Ministério Público, esgotadas todas as diligências, convencer-se da inexistência de fundamento para a propositura da ação civil, promoverá, fundamentadamente, o arquivamento dos autos do inquérito civil.",
   "os autos do inquérito civil arquivados serão remetidos, sob pena de se incorrer em falta grave, no prazo de 30 (trinta) dias, ao Conselho Nacional do Ministério Público para o devido registro em seus arquivos."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-048",
  "disciplina": "Direito Administrativo",
  "assunto": "Atos administrativos",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 48",
  "enunciado": "Suponha que a área administrativa do Ministério Público tenha praticado um ato que é considerado ilegal, praticado com desvio de poder e prejudicial a um particular. Nessa situação hipotética, é correto afirmar que o referido ato",
  "alternativas": [
   "não se convalida e deverá ser anulado pela própria instituição.",
   "deverá ser mantido incólume até que eventuais interessados venham a questioná-lo perante o Poder Judiciário.",
   "deverá ser revogado pela instituição assim que a autoridade competente dele tomar ciência.",
   "não poderá ser anulado pelo próprio Ministério Público, devendo este buscar a invalidação junto ao Poder Judiciário.",
   "poderá ser anulado pela própria instituição, desde que obtida prévia autorização do procurador-geral de justiça."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-049",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 49",
  "enunciado": "Determinado órgão público celebrou um contrato de parceria público-privada no qual constaram as seguintes cláusulas: primeira, que o valor do contrato é de R$ 2.000.000,00 (dois milhões de reais); segunda, que o período de prestação do serviço é de 3 (três) anos; terceira, que a Administração Pública será a usuária direta do serviço. Nessa situação hipotética, considerando tão somente as informações apresentadas, nos termos do que reza a Lei no 11.079/2004, é correto afirmar que",
  "alternativas": [
   "a cláusula primeira é ilegal, mas a segunda e a terceira são legais.",
   "as cláusulas primeira e segunda são legais, mas a terceira é ilegal.",
   "as cláusulas primeira e segunda são ilegais, mas a terceira é legal.",
   "todas as cláusulas são ilegais.",
   "todas as cláusulas são legais."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-051",
  "disciplina": "Direito Administrativo",
  "assunto": "Improbidade administrativa",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 51",
  "enunciado": "O Ministério Público, após as devidas apurações, concluiu que o empresário Pedro, a servidora pública Maria, bem como a pessoa jurídica Delta, supostamente, teriam praticado atos que, em tese, poderiam ser enquadrados como de improbidade administrativa. Nessa situação hipotética, nos termos da Lei no 8.429/1992, é correto afirmar que",
  "alternativas": [
   "os diretores da Delta, via de regra, respondem pelo ato de improbidade imputado à pessoa jurídica.",
   "Delta estará sujeita às sanções da lei, desde que fique comprovada a culpa dos seus diretores.",
   "Pedro não estará sujeito às sanções da lei por não ser um agente público.",
   "Maria, se não agiu dolosamente, com fim ilícito, não estará sujeita às sanções da lei.",
   "o mero desempenho de competências públicas por parte de Maria é suficiente para ensejar sanção por improbidade administrativa."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-052",
  "disciplina": "Direito Penal",
  "assunto": "Teoria da pena",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 52",
  "enunciado": "Tendo em conta os princípios da legalidade e da irretroatividade, retratados nos artigos 1o e 2o, do Código Penal, assinale a alternativa correta.",
  "alternativas": [
   "A técnica legislativa da norma penal em branco, por representar flexibilização ao princípio da legalidade, não é admitida no ordenamento brasileiro.",
   "A lei escrita, formalmente elaborada pelo Poder Legislativo, ao lado de medidas provisórias, desde que aprovadas também pelo Poder Legislativo, são as únicas fontes de matéria de proibição penal.",
   "A analogia, por converter ilegitimamente o juiz em legislador, não é admitida como fonte do direito penal, ainda que seja para deslegitimar a punição.",
   "Em matéria penal, tal qual a retroatividade da lei mais benéfica, também a interpretação jurisprudencial mais favorável retroage, podendo ser invocada para rever a condenação, inclusive a já transitada em julgado.",
   "A revogação da lei penal incriminadora, por lei nova, se a proibição não restar proibida em dispositivo penal diverso, implica abolitio criminis."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-053",
  "disciplina": "Direito Penal",
  "assunto": "Teoria da pena",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 53",
  "enunciado": "Em vista de uma catástrofe natural, no dia 22.05.2024, publicou-se a Lei Federal X, com vigência pelo período em que perdurar a situação excepcional de calamidade pública, prevendo como crime a conduta de “negar, sem justo motivo, a cessão de embarcação, de qualquer natureza, da qual detêm a posse ou a propriedade, a equipes de socorro, para o resgate de pessoas ou animais em regiões alagadas”. Em 21.07.2024, superada a situação de calamidade pública, a Lei X foi expressamente revogada, pela Lei Y. Considerando que Mévio, no dia 28.05.2024, praticou a conduta tipificada como crime pela Lei X, é correto afirmar que ele",
  "alternativas": [
   "incorreu em crime e deverá ser responsabilizado, pois a Lei X, mesmo revogada produz efeitos sobre os fatos cometidos enquanto vigente, em virtude do princípio da ultratividade.",
   "incorreu em crime, mas a sua punibilidade é extinta, visto que a revogação da Lei X pela Lei Y configura abolitio criminis.",
   "incorreu em crime, mas a pena não poderá ser executada, uma vez que a Lei X, que tipificava a conduta, não mais está em vigor.",
   "não incorreu em qualquer crime, visto que a Lei X, de caráter excepcional, ao ser expressamente revogada pela Lei Y, perdeu o efeito de ultratividade.",
   "não incorreu em qualquer crime, visto que a Lei Y, ao revogar a Lei X, por seu caráter benéfico, retroage, beneficiando-o."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-054",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a pessoa",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 54",
  "enunciado": "Caio, no dia 20.04.2025, em um bar, após injusta provocação de Mévia, mulher trans, e sob o domínio de violenta emoção, quebrou uma garrafa de vidro e, com o objeto, golpeou-a, na região do pescoço. Mévia foi socorrida e, após permanecer na UTI, por quase um mês, faleceu no dia 18.05.2025. Mévia era Oficial de Justiça, circunstância desconhecida por Caio. Considerando que a condição da vítima de oficial de justiça implicou recrudescimento da punição dos crimes de homicídio somente em 06.05.2025, é correto afirmar que Caio praticou o crime de",
  "alternativas": [
   "feminicídio.",
   "lesão corporal, seguida de morte, incidindo a causa de aumento decorrente da condição da vítima de oficial de justiça.",
   "homicídio, qualificado pela condição de oficial de justiça da vítima.",
   "lesão corporal, seguida de morte, não incidindo a causa de aumento decorrente da condição da vítima de oficial de justiça.",
   "homicídio simples, com possibilidade de redução de pena, dada a injusta provocação da vítima."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-055",
  "disciplina": "Direito Penal",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 55",
  "enunciado": "Mévio, de 20 anos, com a intenção de transmitir doença sexualmente transmissível, que sabe ser portador, mantém relação sexual com Tícia. Tícia, contudo, não contraiu a doença. Tendo em vista a situação hipotética, é correto afirmar que Mévio praticou o crime de perigo de contágio",
  "alternativas": [
   "venéreo simples e, por ser menor de 21 anos, da data do fato, o prazo prescricional é reduzido pela metade.",
   "de moléstia grave, não incidindo a redução do prazo prescricional em razão da idade, por se tratar de crime sexual, praticado em detrimento de mulher.",
   "venéreo qualificado e, por ser menor de 21 anos, na data do fato, o prazo prescricional é reduzido pela metade.",
   "venéreo simples, não incidindo a redução do prazo prescricional em razão da idade, por se tratar de crime sexual, praticado em detrimento de mulher.",
   "de moléstia grave e, por ser menor de 21 anos, na data do fato, o prazo prescricional é reduzido, da metade."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-056",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a pessoa",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 56",
  "enunciado": "Caio foi condenado, por crime de lesão corporal praticado em detrimento de Mévia, por razão da condição feminina, a dois anos de reclusão. Considerando o trânsito em julgado da condenação, é correto afirmar que Caio",
  "alternativas": [
   "restará incapacitado para o exercício do poder familiar, desde que tal efeito tenha sido expressamente pleiteado pelo Ministério Público e motivadamente declarado na sentença.",
   "restará incapacitado para o exercício do poder familiar, desde que tal efeito tenha sido motivadamente declarado na sentença.",
   "não poderá ser nomeado em qualquer cargo, função pública ou mandato eletivo entre a data do trânsito em julgado até o cumprimento da pena, ainda que tal efeito não tenha sido motivadamente declarado na sentença.",
   "restará incapacitado para o exercício do poder familiar, desde que haja pedido expresso pelo Ministério Público, independente de declaração motivada, em sentença.",
   "não poderá ser nomeado para exercer cargo, função pública ou mandato eletivo entre a data do trânsito em julgado até o cumprimento da pena, desde que tal efeito tenha sido motivadamente declarado na sentença e expressamente pleiteado pelo Ministério Público."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-057",
  "disciplina": "Direito Penal",
  "assunto": "Teoria da pena",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 57",
  "enunciado": "Tendo em conta as regras constantes do Código Penal, sobre concurso de agentes, assinale a alternativa correta.",
  "alternativas": [
   "Mévia, logo após parir e em estado puerperal, matou o bebê. Caio, por auxiliá-la, incorrerá no crime de homicídio qualificado, incidindo ainda a circunstância agravante do crime ter sido praticado contra descendente.",
   "Caio, pelo roubo de celular, em conjunto com Mévio, menor de idade, será punido pelo crime de roubo, majorado pelo concurso de agentes.",
   "Tício e Mévio mataram Caio, filho de Tício. Tício e Mévio serão punidos, de forma agravada, em razão do crime ter sido praticado contra descendente.",
   "Tício, funcionário público, apropriou-se de bens da repartição, com o auxílio de Caio, que não era funcionário público, mas sabia da condição do comparsa. Caio será punido pelo crime de apropriação indébita e Tício por peculato.",
   "Mévio contratou Tício para matar o autor do estupro de sua filha. Tício matou a vítima, conforme o contratado, desconhecendo a motivação de Mévio. Tício e Mévio incorrerão no crime de homicídio privilegiado."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-058",
  "disciplina": "Direito Penal",
  "assunto": "Teoria da pena",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 58",
  "enunciado": "Com relação a ação penal privada, assinale a alternativa correta.",
  "alternativas": [
   "Para fins da contagem do prazo decadencial, exclui-se o dia do termo inicial, incluindo-se o dia do termo final.",
   "A decadência ao direito de queixa é possível tanto na ação penal exclusivamente privada quanto na ação penal privada subsidiária e, em ambas, acarretará a extinção da punibilidade.",
   "A renúncia ao direito de queixa pode ocorrer antes ou após a propositura da ação penal privada, implicando, em ambos os casos, a extinção da punibilidade.",
   "A renúncia ao direito de queixa pelo ofendido é irretratável, implicando extinção da punibilidade.",
   "A reparação do dano, nos crimes de ação penal privada, implicará extinção da punibilidade, independente da pena cominada."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-059",
  "disciplina": "Direito Penal",
  "assunto": "Teoria da pena",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 59",
  "enunciado": "Tendo em conta os crimes contra a saúde pública, previstos no Código Penal, assinale a alternativa correta.",
  "alternativas": [
   "O agente que vende produto destinado a fins terapêuticos, sem o registro no órgão de vigilância sanitária, quando exigível, ainda que não falsificado, corrompido, adulterado ou alterado, é punido de forma idêntica àquele que falsifica produto destinado a fins terapêuticos.",
   "O crime de infração de medida sanitária preventiva e o crime de omissão de notificação de doença são próprios.",
   "O crime de falsificação, corrupção, adulteração ou alteração de substância ou produto alimentício tem por objeto material bebidas, excluídas as alcóolicas.",
   "Com exceção dos crimes de infração de medida sanitária preventiva e omissão de notificação de doença, todos os demais admitem a modalidade culposa.",
   "O crime de emprego de processo ou de substância não permitida é norma penal em branco."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-060",
  "disciplina": "Direito Penal",
  "assunto": "Teoria da pena",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 60",
  "enunciado": "Marta e Caio eram amigos e trabalhavam na mesma empresa, há anos, exercendo idêntica função. Com a aposentadoria de um funcionário, ocupante de cargo superior e melhor renumerado, a empresa, para não ter que escolher um em detrimento do outro, decidiu aplicar uma prova, sendo promovido aquele que alcançasse a melhor pontuação. Caio, por acreditar que Marta se sairia melhor na prova, sabendo do relacionamento extraconjugal por ela mantido, exigiu que Marta pedisse demissão, para não realizar a prova, sob pena de revelar a traição ao marido. Marta, com medo de eventual revelação da traição ao marido, de fato, pediu demissão da empresa, mudando, inclusive, de cidade. Caio, por sua vez, com a saída de Marta, assumiu a vaga. Diante da situação hipotética, é correto afirmar que Caio incorreu no crime de",
  "alternativas": [
   "ameaça que, dada a condição da vítima ser mulher, é processado por ação penal pública incondicionada.",
   "extorsão, processável por ação penal pública incondicionada.",
   "ameaça, processável por ação pública incondicionada, em vista de praticada em âmbito laboral.",
   "constrangimento ilegal, processável por ação penal pública condicionada à representação.",
   "violência psicológica contra a mulher, processável por ação penal condicionada à representação."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-061",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra o patrimônio",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 61",
  "enunciado": "Com relação aos crimes contra o patrimônio, assinale a alternativa correta.",
  "alternativas": [
   "A obtenção de vantagem ilícita, em prejuízo de pessoa idosa (maior de 60 anos), mediante fraude, caracteriza o crime de estelionato contra pessoa vulnerável, processável por ação penal pública incondicionada.",
   "A subtração, mediante violência à pessoa, de cabos utilizados na transmissão de energia elétrica, caracteriza roubo qualificado.",
   "A oferta de ativos virtuais, com a intenção de obter vantagem ilícita, em prejuízo de terceiros, mediante fraude, caracteriza o crime de fraude com ativos virtuais, processável por ação penal pública condicionada à representação.",
   "A subtração, mediante violência à pessoa, de automóvel de unidade de agência de correio estabelecida em pequena cidade, comprometendo o serviço postal, caracteriza roubo qualificado.",
   "A destruição de coisa alheia, por motivo egoístico, caracteriza o crime de dano qualificado, processável por ação penal pública condicionada à representação."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-062",
  "disciplina": "Direito Penal",
  "assunto": "Legislação penal especial",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 62",
  "enunciado": "Tícia, maior, residente no exterior, aceitou a proposta feita por Caio, seu namorado, de retornar ao Brasil para trabalhar como stripper em sua boate. Caio pagou todas as despesas da viagem de Tícia, como combinado entre eles. Quando chegou no Brasil, Caio, no entanto, propôs a Tícia que ela também se relacionasse sexualmente com os clientes, e ela aceitou. Diante da situação hipotética, assinale a alternativa correta, levando em conta apenas a caracterização do crime de tráfico de pessoas.",
  "alternativas": [
   "A conduta de Caio é atípica, visto que Tícia é maior e anuiu às propostas, prestando consentimento, inexistindo fraude, coação, violência ou abuso.",
   "Caio incorreu no crime de tráfico de pessoas, majorado em razão da vítima ter sido introduzida no território nacional.",
   "Caio incorreu no crime de tráfico de pessoas, majorado em razão da relação doméstica, decorrente do namoro.",
   "A conduta de Caio é atípica, visto que o crime de tráfico de pessoas, para se caracterizar, exige pluralidade de vítimas.",
   "A conduta de Caio é atípica, visto que o crime de tráfico de pessoas se caracteriza pela saída da vítima do território nacional e não o contrário."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-063",
  "disciplina": "Direito Penal",
  "assunto": "Teoria da pena",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 63",
  "enunciado": "Tícia, maior, foi estrupada, tendo relatado o crime às autoridades policiais. Passados dois meses, Tícia, suspeitando de gravidez, decidiu fazer um teste. Já bastante fragilizada pela violência sexual, ao verificar que o teste de gravidez resultou positivo, Ticia, que sempre foi contrária ao aborto e acreditando não ser capaz de gerar e parir o fruto do estupro, decide atentar contra à própria vida, atirando-se do quinto andar do prédio onde residia. Tícia sobrevive à queda, mas acaba sofrendo um aborto. Diante da situação hipotética, é correto afirmar que Tícia",
  "alternativas": [
   "incorreu no crime de aborto provocado pela própria gestante, mas não será punida, aplicando-se a ela a causa excludente de ilicitude do aborto legal.",
   "incorreu no crime de aborto provocado pela própria gestante, não incidindo a causa excludente de ilicitude do aborto legal, aplicável apenas ao médico e não à gestante.",
   "incorreu no crime de aborto provocado pela própria gestante, na modalidade culposa.",
   "não incorreu no crime de aborto provocado pela própria gestante, vez que a interrupção de gestação no primeiro trimestre da gestação é atípica.",
   "não incorreu no crime de aborto provocado pela própria gestante, vez ausente o elemento subjetivo consistente na interrupção da gravidez."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-064",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a Administração Pública",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 64",
  "enunciado": "Tendo em conta o crime de corrupção ativa e o crime de corrupção ativa em transação comercial internacional, assinale a alternativa correta.",
  "alternativas": [
   "O crime de corrupção ativa em transação comercial internacional qualificada é punido de forma idêntica ao crime de corrupção ativa.",
   "No crime de corrupção ativa, ao contrário do crime de corrupção ativa em transação comercial internacional, não é possível a prática por interposta pessoa.",
   "Para efeitos penais, também é considerado funcionário estrangeiro quem, ainda que transitoriamente ou sem remuneração, exerce emprego em representações diplomáticas de país estrangeiro.",
   "No crime de corrupção ativa, incide aumento de pena se o ato de ofício é retardado ou omitido. Já na corrupção ativa em transação comercial internacional, o retardo ou a omissão do ato de ofício qualifica o crime.",
   "No crime de corrupção ativa, criminalizam-se as condutas de prometer e oferecer vantagem indevida a funcionário público. Já no crime de corrupção ativa em transação comercial internacional, criminaliza-se apenas a conduta de dar vantagem indevida."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-065",
  "disciplina": "Direito Penal",
  "assunto": "Teoria da pena",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 65",
  "enunciado": "A respeito dos dispositivos referentes à aplicação da pena, assinale a alternativa correta.",
  "alternativas": [
   "Na segunda fase da dosimetria da pena, o juiz não pode compensar integralmente a atenuante da confissão espontânea com a agravante da reincidência, ainda que não específica.",
   "Ainda que inexista expressa previsão quinquenal de maus antecedentes, o juiz pode deixar de promover o incremento da pena-base decorrente de condenação pretérita, quando demasiadamente distanciada no tempo.",
   "Para a exasperação da pena base, em decorrência da personalidade do réu, é indispensável estudo psíquico promovido por profissional da área de saúde.",
   "O comportamento da vítima, na dinâmica delitiva, se neutro ou menos culpável, pode ser valorado negativamente ao acusado, justificando a exasperação da pena base.",
   "As agravantes não se aplicam aos crimes culposos e nem aos crimes preterdolosos."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-066",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a fé pública",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 66",
  "enunciado": "Caio, advogado, namora Tícia. Tícia foi injuriada e difamada por Mévia. Orientada por Caio, Tícia lavra boletim de ocorrência contra Mévia, por crime contra a honra. Tícia, contudo, não quer propor queixa crime contra Mévia, pois prefere não passar por um processo penal, ainda que como vítima. Caio, não se conformando com a posição da namorada, no último dia do prazo decadencial, falsifica a assinatura de Tícia, em procuração por ele redigida, e propõe a queixa crime. Por um lapso, no entanto, a procuração acabou não sendo anexada à petição inicial. Diante da situação hipotética, é correto afirmar que Caio incorreu no crime de",
  "alternativas": [
   "falsidade ideológica.",
   "uso de documento falso.",
   "falsidade em documento público.",
   "falsidade em documento particular.",
   "falsa comunicação de crime."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-067",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a Administração Pública",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 67",
  "enunciado": "Tício, agente penitenciário, trabalha no setor que inspeciona os artigos, perecíveis ou não, que são enviados aos presos. No exercício dessa atividade, Tício conheceu Mévia, que visitava regularmente o pai, preso. Iniciado o namoro entre eles, passados seis meses, Mévia pediu a Tício que deixasse passar pela inspeção aparelho telefônico, que seria inserido dentro de um livro, para chegar ao pai, possibilitando o contato com a mãe que, por força de grave doença, estava impedida de realizar visitas. Tício, por um período, resistiu. Mas, com o agravamento da doença da sogra, acabou cedendo ao pleito, não inspecionando os produtos destinados ao pai da namorada, permitindo, assim, o ingresso do aparelho. Diante do caso hipotético, assinale a alternativa correta.",
  "alternativas": [
   "Tício praticou o crime de condescendência criminosa (art. 320, do CP).",
   "Tício praticou o crime de corrupção passiva (art. 317, do CP).",
   "Mévia praticou o crime previsto no art. 349-A, do CP, conhecido como favorecimento real impróprio.",
   "Mévia praticou o crime de corrupção ativa (art. 333, do CP).",
   "Mévia não praticou qualquer crime, visto a atipicidade da conduta."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-068",
  "disciplina": "Direito Penal",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 68",
  "enunciado": "Caio foi flagrado com 30 exemplares de cigarro eletrônico (vape), logo que cruzou a fronteira para o Brasil, vindo do Paraguai. Tício, por sua vez, foi flagrado com 200 maços de cigarro, também logo que cruzou a fronteira. Tício já tinha sido flagrado ingressando com cigarros clandestinos no País, por mais de uma vez. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "Caio e Tício praticaram o crime de contrabando, tentado.",
   "Caio praticou o crime de contrabando, tentado. Tício, em razão do princípio da insignificância, dada a quantidade de cigarros, não praticou qualquer crime.",
   "As condutas de Caio e Tício são atípicas, visto que a ambos, em vista da quantidade de cigarros, aplica-se o princípio da insignificância.",
   "Tício praticou o crime de contrabando, consumado. Caio não praticou qualquer crime, em vista do princípio da insignificância, dada a quantidade de cigarros eletrônicos apreendidos.",
   "Caio e Tício praticaram o crime de contrabando, consumado."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-069",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a Administração Pública",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 69",
  "enunciado": "Com relação aos crimes em licitações e contratos administrativos, é correto afirmar que",
  "alternativas": [
   "o crime de afastamento de licitante é classificado como crime de atentado e tem por meio de execução a violência, grave ameaça, fraude ou oferecimento de vantagem de qualquer tipo.",
   "o crime de perturbação de processo licitatório se caracterizará quando o agente, valendo-se de medida judicial que sabia indevida, obtém decisão suspensiva ou impeditiva, em caráter liminar.",
   "todos são próprios, pois exigem qualidade especial do autor, ainda que não necessariamente funcionário público.",
   "o crime de violação de sigilo em licitação exige elemento subjetivo especial.",
   "o crime de patrocínio de contratação indevida é condicionado à invalidação posterior, judicial ou pela própria administração, da licitação ou contratação patrocinada pelo agente."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-070",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a pessoa",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 70",
  "enunciado": "A respeito dos crimes contra a administração da justiça, assinale a alternativa correta.",
  "alternativas": [
   "Tício, advogado de defesa, ao oferecer dinheiro a uma testemunha para que não compareça à audiência de instrução, pratica o crime de falso testemunho.",
   "Tícia, vítima de crime de tentativa de homicídio praticado pelo afilhado, após o perdoar, ao auxiliá-lo na fuga, pratica o crime de favorecimento pessoal.",
   "Caio, ao assumir a autoria de contravenção, praticada por terceiro, pratica o crime de autoacusação falsa.",
   "Caio, ao oferecer dinheiro para que o perito faça afirmação falsa em laudo pericial, a ser juntado em processo judicial, pratica o crime de fraude processual.",
   "Tícia, ao colaborar com a fuga de Caio, adolescente, internado em razão de medida socioeducativa, pratica o crime de fuga de pessoa presa ou submetida à medida de segurança."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-071",
  "disciplina": "Direito Penal",
  "assunto": "Teoria da pena",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 71",
  "enunciado": "Tendo em conta os crimes contra o Estado Democrático de Direito, assinale a alternativa correta.",
  "alternativas": [
   "O crime de violência política, se praticado em detrimento de mulher, é qualificado.",
   "Os crimes contra a soberania nacional, para se caracterizarem, exigem elemento subjetivo especial.",
   "O crime de espionagem, quando há violação de sigilo funcional, é qualificado.",
   "Os crimes contra soberania nacional são próprios de funcionários públicos.",
   "Nos crimes contra as instituições democráticas e nos crimes contra o funcionamento das instituições democráticas no processo eleitoral, os meios de execução são apenas a violência e a grave ameaça."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-072",
  "disciplina": "Direito Processual Penal",
  "assunto": "Juiz das garantias",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 72",
  "enunciado": "De acordo com a Lei no 13.964/2019 (Pacote Anticrime), que incluiu os arts. 3o A a 3o F no Código de Processo Penal, o juiz das garantias é a figura responsável por",
  "alternativas": [
   "participar da investigação, conduzindo diligências e determinando a produção de provas.",
   "exercer a função de acusar, oferecendo a denúncia ou promovendo o arquivamento do inquérito policial.",
   "zelar pela legalidade da investigação criminal e decidir, quando necessário, sobre medidas cautelares que possam restringir direitos fundamentais do investigado.",
   "propor acordo de não persecução penal ou de colaboração premiada durante a fase investigatória.",
   "julgar o mérito da ação penal, inclusive proferindo sentença condenatória ou absolutória."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-073",
  "disciplina": "Direito Processual Penal",
  "assunto": "Juiz das garantias",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 73",
  "enunciado": "No âmbito das atribuições conferidas ao juiz das garantias durante a fase de investigação, assinale a alternativa correta.",
  "alternativas": [
   "Em caso de prisão em flagrante manifestamente ilegal, o juiz das garantias deverá relaxá-la, independente de prévia manifestação do Ministério Público.",
   "Na hipótese de investigado preso, poderá, de ofício, prorrogar, uma única vez, a duração do inquérito policial.",
   "Pode decretar prisão preventiva de ofício, nas hipóteses em que entendê-la necessária à garantia da ordem pública.",
   "Decidir sobre a produção antecipada de provas urgentes e não repetíveis, postergando o exercício do contraditório e da ampla defesa para a fase processual.",
   "Assegurar ao investigado e ao seu defensor o direito de acesso a todos os elementos informativos e provas produzidos na investigação, ainda que se refiram a diligências em andamento."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-074",
  "disciplina": "Direito Processual Penal",
  "assunto": "Inquérito policial",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 74",
  "enunciado": "No que tange ao regramento estabelecido pelo Código de Processo Penal sobre o inquérito policial, pode-se afirmar:",
  "alternativas": [
   "logo que tiver conhecimento da prática de uma infração penal, a autoridade policial deverá proceder à instauração do inquérito, independente da modalidade de ação penal cabível para a imputação.",
   "a autoridade policial necessita de autorização judicial para determinar a realização de exame de corpo de delito.",
   "uma vez ordenado o arquivamento do inquérito pelo juiz, não poderão as investigações ser retomadas pela autoridade policial, ainda que surjam provas novas.",
   "o inquérito policial deverá, como regra, ser concluído no prazo de 10 dias, se o indiciado estiver preso, e de 30, se estiver solto, salvo hipóteses legais de prorrogação.",
   "a autoridade policial pode mandar arquivar o inquérito quando entender ausentes indícios suficientes de autoria."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-075",
  "disciplina": "Direito Processual Penal",
  "assunto": "Ação penal",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 75",
  "enunciado": "Sobre a ação penal, à luz do Código de Processo Penal, assinale a alternativa correta.",
  "alternativas": [
   "A ação penal privada subsidiária da pública pode ser proposta imediatamente pelo ofendido, desde que manifeste interesse, independentemente da caracterização de inércia pelo Ministério Público.",
   "O perdão do ofendido, por se tratar de ato unilateral, independe de aceitação do querelado.",
   "A representação oferecida na ação penal pública condicionada é irretratável, produzindo efeitos definitivos desde o momento de sua apresentação à autoridade policial.",
   "O direito de oferecer queixa na ação penal privada decai em 6 meses, a contar da data da ocorrência do fato criminoso.",
   "A renúncia ao direito de queixa feita em relação a um dos autores do crime aproveita a todos os demais, em virtude do princípio da indivisibilidade da ação penal privada."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-076",
  "disciplina": "Direito Processual Penal",
  "assunto": "Acordo de não persecução penal",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 76",
  "enunciado": "Paulo, primário e de bons antecedentes, foi investigado pela prática de crime de estelionato simples (art. 171, caput, CP), cuja pena mínima é de 1 ano. Concluído o inquérito, o Ministério Público entende estarem presentes os requisitos legais do art. 28-A do Código de Processo Penal e propõe a Paulo um acordo de não persecução penal (ANPP). O juiz, ao receber o acordo firmado entre o Parquet e o investigado, entende que a medida é incabível, pois considera a conduta do imputado socialmente reprovável, e, por isso, rejeita o acordo. Com base nas disposições legais do Código de Processo Penal, assinale a alternativa correta.",
  "alternativas": [
   "O juiz deve verificar a legalidade, a voluntariedade e a adequação das condições do acordo, podendo deixar de homologá-lo se as considerar inadequadas, insuficientes ou abusivas, não lhe competindo substituir o juízo de conveniência do Ministério Público pela análise subjetiva da gravidade do delito.",
   "O ANPP somente pode ser proposto pela autoridade policial, cabendo ao Ministério Público homologar o acordo para posterior apreciação judicial.",
   "A vítima pode, por si só, impedir a celebração do ANPP ao manifestar oposição formal, vinculando a atuação do Ministério Público.",
   "O juiz agiu corretamente, pois possui competência para recusar o ANPP com base em juízo de valor sobre a gravidade abstrata do delito.",
   "O próprio juiz poderá reformular a proposta de acordo para, em seguida homologá-lo."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-077",
  "disciplina": "Direito Processual Penal",
  "assunto": "Competência",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 77",
  "enunciado": "De acordo com o Código de Processo Penal, tratando-se de crime à distância, em que a execução se inicia em um local do território nacional e a consumação ocorre em outro, a competência será determinada pelo",
  "alternativas": [
   "local onde for instaurado o inquérito policial.",
   "local no qual se produziu o resultado.",
   "domicílio ou residência do réu.",
   "lugar onde se iniciou a execução da infração penal.",
   "juízo do local onde se praticou o último ato de execução, ainda que o resultado tenha ocorrido em outro local."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-078",
  "disciplina": "Direito Processual Penal",
  "assunto": "Competência",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 78",
  "enunciado": "Durante investigação, apurou-se que Maura praticou um homicídio doloso consumado em Campinas/SP. Pouco antes do crime, sua comparsa Meire havia cometido receptação qualificada em Piracicaba/SP, utilizando um veículo roubado para assegurar a fuga de ambas. Além disso, verificou-se que, no homicídio, Maura e Meire agiram em coautoria, concorrendo diretamente para o resultado. Diante da situação, assinale a alternativa correta quanto à competência.",
  "alternativas": [
   "A reunião dos processos em caso de conexão ou de continência é sempre facultativa ao juiz, que pode optar pela separação mesmo sem justificativa específica.",
   "Há continência pelo concurso de agentes, mas a competência deve ser fixada pela prevenção, cabendo ao juízo que primeiro tiver contato com o processo.",
   "Havendo concurso de agentes no homicídio doloso, a hipótese é de continência, atraindo a reunião dos feitos perante o Tribunal do Júri da comarca de Campinas, competente para o julgamento do crime doloso contra a vida.",
   "Como se trata de crimes cometidos em comarcas distintas, cada processo deve ser julgado separadamente, para evitar conflito de competência.",
   "Trata-se de conexão instrumental, devendo os autos tramitar em Piracicaba, onde ocorreu a receptação."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-079",
  "disciplina": "Direito Processual Penal",
  "assunto": "Competência",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 79",
  "enunciado": "De acordo com o Código de Processo Penal, acerca do conflito de jurisdição, assinale a alternativa correta.",
  "alternativas": [
   "O conflito de jurisdição somente pode ser suscitado pelo Ministério Público ou pela parte interessada.",
   "Suscitado o conflito, o tribunal competente deverá resolvê-lo, sem a possibilidade de que as autoridades envolvidas prestem quaisquer informações.",
   "O conflito de jurisdição será resolvido pelo próprio juiz que primeiro tiver se declarado competente, dispensando, neste caso, a remessa ao tribunal.",
   "Em caso de conflito positivo, distribuído o feito, o relator deverá imediatamente suspender o andamento do processo.",
   "O conflito de jurisdição ocorre não apenas quando dois ou mais juízes se declaram competentes ou incompetentes para a mesma causa, mas também quando surge controvérsia sobre unidade de juízo, junção ou separação de processos."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-080",
  "disciplina": "Direito Processual Penal",
  "assunto": "Questões e processos incidentes",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 80",
  "enunciado": "Sobre a restituição de coisas apreendidas, de acordo com o Código de Processo Penal, pode-se afirmar:",
  "alternativas": [
   "o pedido de restituição será decidido pelo juiz, independente de oitiva do Ministério Público.",
   "mesmo quando não houver dúvida quanto ao direito do reclamante, a restituição de coisas apreendidas somente poderá ser deferida após o trânsito em julgado da sentença penal, sendo vedada antes da decisão final.",
   "as coisas apreendidas não poderão ser restituídas enquanto interessarem ao processo, salvo se o reclamante prestar caução idônea.",
   "a restituição de coisas apreendidas pode ser deferida de imediato, ainda antes do trânsito em julgado da sentença final, desde que não interessem ao processo e não haja dúvida sobre o direito do reclamante.",
   "em caso de dúvida sobre quem seja o verdadeiro dono da coisa apreendida, o juiz decidirá a controvérsia no próprio processo criminal, sem a necessidade de remeter as partes ao juízo cível."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-081",
  "disciplina": "Direito Processual Penal",
  "assunto": "Provas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 81",
  "enunciado": "Durante investigação criminal, policiais civis realizaram interceptação telefônica sem autorização judicial, obtendo diversas conversas entre Carlos e Raimundo envolvendo tráfico de drogas. Com base nesses diálogos, a Polícia descobriu o local do depósito dos entorpecentes, realizou busca e apreensão regularmente autorizada pelo juiz e apreendeu grande quantidade de drogas. No processo criminal, a defesa alegou que tanto as conversas interceptadas quanto as provas decorrentes da busca e apreensão seriam ilícitas. À luz do Código de Processo Penal, assinale a alternativa correta.",
  "alternativas": [
   "Tanto as conversas interceptadas quanto a droga apreendida são provas lícitas, pois a posterior autorização judicial convalida os atos investigatórios anteriormente praticados.",
   "As conversas interceptadas são provas ilícitas, e a apreensão da droga também é inválida, por configurar prova ilícita por derivação.",
   "As provas ilícitas podem ser excepcionalmente admitidas no processo penal, desde que indispensáveis à descoberta da verdade real.",
   "Embora a interceptação telefônica seja ilícita, a apreensão da droga é prova válida porque se enquadra na exceção legal da descoberta inevitável.",
   "As conversas interceptadas são provas ilícitas, mas a apreensão da droga é válida, pois foi realizada mediante decisão judicial prévia."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-082",
  "disciplina": "Direito Processual Penal",
  "assunto": "Inquérito policial",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 82",
  "enunciado": "De acordo com o Código de Processo Penal, em relação à cadeia de custódia, assinale a alternativa correta.",
  "alternativas": [
   "O registro de cadeia de custódia compreende todas as etapas pelas quais o vestígio passa, desde o seu reconhecimento até o seu descarte.",
   "A cadeia de custódia inicia-se somente após a conclusão do laudo pericial.",
   "O rompimento da cadeia de custódia não compromete a validade da prova, pois o Código de Processo Penal determina que, uma vez realizada a coleta do vestígio, dispensam-se as etapas posteriores de acondicionamento, transporte e armazenamento.",
   "A cadeia de custódia limita-se ao período em que o vestígio permanece sob guarda no órgão pericial, não abrangendo as etapas anteriores ou posteriores.",
   "A lei não estabelece etapas para a cadeia de custódia, cabendo à autoridade policial definir como será realizado o procedimento."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-083",
  "disciplina": "Direito Processual Penal",
  "assunto": "Sujeitos do processo",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 83",
  "enunciado": "Sobre os sujeitos do processo penal, de acordo com o regramento estabelecido pelo Código de Processo Penal, assinale a alternativa correta.",
  "alternativas": [
   "O corréu no mesmo processo poderá intervir como assistente do Ministério Público.",
   "A impossibilidade de identificação do acusado com o seu verdadeiro nome, ainda que certa a sua identidade física, impede o início da ação penal.",
   "Ao Ministério Público incumbe promover privativamente a ação penal pública, bem como fiscalizar a execução da lei.",
   "O juiz pode se dar por suspeito, mas, se não o fizer, as partes não poderão recusá-lo.",
   "A intervenção do Ministério Público restringe-se aos casos em que figure como parte acusadora, sendo dispensável a sua atuação como fiscal da aplicação da lei."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-084",
  "disciplina": "Direito Processual Penal",
  "assunto": "Inquérito policial",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 84",
  "enunciado": "Durante investigação criminal de crime de roubo simples, que possui previsão de pena de reclusão de 4 a 10 anos e multa, Manoel foi preso temporariamente por decisão judicial, a pedido da autoridade policial, pelo prazo inicial de 5 dias. Antes do término do prazo, o Ministério Público requereu a conversão da prisão temporária em preventiva com fundamento no art. 312 do Código de Processo Penal, alegando risco à instrução processual e à ordem pública. O pedido foi deferido pelo juiz. Na sequência, a defesa do imputado pleiteou a revogação da segregação cautelar, sustentando que o roubo não admite prisão temporária, que a preventiva não poderia ser decretada sem prévia oitiva da defesa e que a prisão temporária não comportaria prorrogação. Com base no Código de Processo Penal e na Lei no 7.960/89, assinale a alternativa correta.",
  "alternativas": [
   "O crime de roubo simples não se encontra no rol daqueles que admitem prisão temporária, razão pela qual a prisão inicial foi ilegal.",
   "A prisão temporária somente pode ser decretada mediante requerimento do Ministério Público, sendo vedada a representação pela autoridade policial.",
   "A prisão temporária, por sua natureza excepcional, não admite prorrogação.",
   "A prisão temporária tem cabimento no crime de roubo simples e, mesmo antes do término de seu prazo, pode ser decretada prisão preventiva, desde que presentes os requisitos do art. 312 do Código de Processo Penal.",
   "A decretação da prisão preventiva exige prévia manifestação da defesa, sob pena de violação ao contraditório."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-prom-085",
  "disciplina": "Direito Processual Penal",
  "assunto": "Provas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 85",
  "enunciado": "De acordo com a Lei no 9.296/1996, assinale a alternativa correta.",
  "alternativas": [
   "As gravações obtidas por meio de interceptação telefônica devem ser preservadas integralmente, não podendo ser destruídas, ainda que por decisão judicial, mesmo quando não interessarem à prova.",
   "A interceptação telefônica é inadmissível quando a prova puder ser feita por outros meios disponíveis.",
   "Não se admite, ainda que em caráter excepcional, a formulação verbal de pedido de interceptação telefônica.",
   "A interceptação telefônica é admitida para a investigação de crimes punidos com reclusão e, em algumas hipóteses, com detenção.",
   "A decisão judicial que autoriza a interceptação pode ser genérica, sem indicação da forma de execução, desde que haja fundadas razões."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-prom-086",
  "disciplina": "Direito Processual Penal",
  "assunto": "Competência",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 86",
  "enunciado": "Nos termos da Lei no 9.613/98, que dispõe sobre os crimes de “lavagem” ou ocultação de bens, direitos e valores, é correto afirmar:",
  "alternativas": [
   "a lei não prevê punição para a lavagem de dinheiro na forma tentada.",
   "o processo e julgamento dos crimes de lavagem de dinheiro são de competência exclusiva da Justiça Federal.",
   "o crime de lavagem de dinheiro somente se configura quando o agente pratica pessoalmente o crime antecedente.",
   "a lei apresenta um rol taxativo de crimes antecedentes para a configuração da lavagem de dinheiro.",
   "a lei admite a autonomia do crime de lavagem de dinheiro, que pode ser apurado e punido mesmo que não haja condenação pelo crime antecedente. RAS C UNHO Teoria Geral das Ciências Contábeis"
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-087",
  "disciplina": "Direito Processual Penal",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 87",
  "enunciado": "Determinada empresa apresentou em seu Balancete de Verificação, levantado em 31.12.2024, as seguintes contas e respectivos saldos, em R$: receita de serviços 162.360,00 \u0007impostos a recolher 27.018,00 custo dos serviços prestados 81.540,00 bens em operação 5.400,00 capital social 180.000,00 móveis e utensílios 16.200,00 contas a receber 54.810,00 contas a pagar 19.548,00 empréstimos a pagar (curto prazo) 14.400,00 \u0007adiantamento de clientes 2.700,00 \u0007impostos e contribuições a recuperar 5.868,00 depreciação acumulada 3.600,00 estoques de mercadorias 8.460,00 despesas administrativas 18.756,00 caixa e equivalentes de caixa 108.540,00 salários a pagar 34.668,00 veículos 144.720,00 Considerando essas informações, e desconsiderando incidência de impostos, após a apuração do resultado do exercício foi elaborado o Balanço Patrimonial, que apresentou, correta e respectivamente, no grupo relativo ao Capital Próprio, Capital de Terceiros, Ativo Circulante e Ativo Não Circulante, os seguintes valores, em R$:",
  "alternativas": [
   "242.064,00; 98.334,00; 177.678,00 e 162.720,00.",
   "242.064,00; 98.334,00; 171.810,00 e 168.588,00.",
   "244.764,00; 95.634,00; 177.678,00 e 166.320,00.",
   "244.764,00; 95.634,00; 171.810,00 e 168.588,00.",
   "244.764,00; 95.634,00; 171.810,00 e 162.720,00. RAS C UNHO"
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-prom-088",
  "disciplina": "Direito Processual Penal",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 88",
  "enunciado": "Considere o seguinte fato contábil: Uma empresa efetuou o pagamento antecipado de uma dívida junto ao fornecedor pela aquisição de suprimentos, no valor de R$ 36.000,00, obtendo um desconto de 5%. No registro desse fato, a empresa efetua o lançamento correspondente ao",
  "alternativas": [
   "valor de um crédito de R$ 36.000,00 em conta de capital de terceiros.",
   "reconhecimento de um débito em conta do passivo não circulante de R$ 34.200,00.",
   "reconhecimento de uma receita pelo valor do desconto obtido.",
   "valor de desconto obtido como uma despesa operacional.",
   "valor de um débito de R$ 36.000,00 em conta do ativo circulante."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-prom-089",
  "disciplina": "Direito Processual Penal",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 89",
  "enunciado": "Em conformidade com a legislação em vigor, a demonstração de lucros ou prejuízos acumulados discriminará as transferências para       , os dividendos, a parcela dos lucros        e o saldo ao       . Assinale a alternativa que preenche, correta e respectivamente, as lacunas do enunciado.",
  "alternativas": [
   "reservas do valor de debêntures emitidas ... incorporada aos fluxos de caixa ... fim do período",
   "reservas ... acrescida do dividendo por ação ... ajuste de tesouraria do resultado do exercício",
   "reversões de valor justo ... diminuída do dividendo por ação ... ajuste de exercícios anteriores",
   "reversões do valor residual ... do resultado do exercício ... fim do exercício",
   "reservas ... incorporada ao capital ... fim do período"
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-prom-090",
  "disciplina": "Direito Processual Penal",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista de Promotoria II · Questão 90",
  "enunciado": "Uma máquina foi adquirida e colocada em uso, em 01.06.2024, por R$ 162.000,00, com valor residual de 15% e vida útil de 10 anos. Em 31.12.2024, as despesas com depreciação foram de",
  "alternativas": [
   "R$ 9.450,00.",
   "R$ 6.885,00.",
   "R$ 9.180,00.",
   "R$ 8.032,50.",
   "R$ 3.471,40. RAS C UNHO"
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-001",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 1",
  "textoId": "mpsp25-aj-t9",
  "enunciado": "O editorial desenvolve a tese de que",
  "alternativas": [
   "a massa de salários em circulação mostra que o baixo patamar de desemprego está associado com melhores condições de vida da maioria dos trabalhadores brasileiros, o que se contrapõe a uma tendência mundial de “uberização”.",
   "a falta de critérios de análise para compor um retrato mais fiel do mundo do trabalho compromete o entendimento das relações entre desemprego e “uberização”, razão pela qual eles tendem a ser abandonados no Brasil.",
   "o gráfico do desemprego, que está em queda desde maio de 2021, revela a resiliência da oferta de emprego no Brasil e a superação da “uberização”, com novos postos de trabalho garantindo poder de compra aos cidadãos.",
   "o baixo patamar de desemprego deve ser analisado em função das condições de trabalho, uma vez que ele não reflete fielmente o pleno emprego, quando se considera a tendência mundial de precarização do emprego.",
   "a ideia de precarização do emprego parece ser falaciosa, uma vez que estudos, como o do professor da FGV Eaesp, sinalizam boas condições de oferta de emprego, com o mercado de trabalho em 2023 aquecido como em 2012."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-002",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 2",
  "textoId": "mpsp25-aj-t9",
  "enunciado": "Considere as passagens do texto:\n• \u0007Há alguns anos o emprego atravessa uma fase de precarização… (2o parágrafo)\n• \u0007O gráfico do desemprego […] não pode ser traduzido como um caminho firme ao pleno emprego, por mais auspiciosos que os dados possam parecer. (3o parágrafo) No contexto em que estão empregados, os termos destacados significam, correta e respectivamente:",
  "alternativas": [
   "transpassa; demonstrado; evidentes.",
   "intervém; explicado; propícios.",
   "sofre; interpretado; promissores.",
   "experimenta; simbolizado, sérios.",
   "vivencia; transposto; contundentes."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-003",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Semântica e reescrita",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 3",
  "textoId": "mpsp25-aj-t9",
  "enunciado": "Considere as passagens do texto:\n• \u0007A taxa de desemprego de 6,2% apurada pelo IBGE para o trimestre encerrado em maio não representa apenas o patamar mais baixo da série histórica da pesquisa, iniciada em 2012. O indicador reflete a mudança profunda de um mercado de trabalho marcado pela “uberização”… (1o parágrafo)\n• \u0007O gráfico do desemprego, em trajetória de queda desde o trimestre encerrado em maio de 2021, não pode ser traduzido como um caminho firme ao pleno emprego, por mais auspiciosos que os dados possam parecer. (3o parágrafo)\n• \u0007Um quadro distante do alvissareiro pleno emprego, já que, ao fim das contas, o saldo é a perda do poder de compra… (5o parágrafo) Sem prejuízo ao sentido original, as passagens admitem, correta e respectivamente, as reescritas:",
  "alternativas": [
   "O indicador reflete, apesar disso, a mudança profunda de um mercado de trabalho marcado pela “uberização”… / … mesmo que os dados possam parecer auspiciosos. /… enquanto, ao fim das contas, o saldo é a perda do poder de compra…",
   "O indicador reflete, além disso, a mudança profunda de um mercado de trabalho marcado pela “uberização”… / … uma vez que os dados possam parecer auspiciosos. /… portanto, ao fim das contas, o saldo é a perda do poder de compra…",
   "O indicador reflete, portanto, a mudança profunda de um mercado de trabalho marcado pela “uberização”… / … tanto que os dados possam parecer auspiciosos. /… embora, ao fim das contas, o saldo é a perda do poder de compra…",
   "O indicador reflete, ainda, a mudança profunda de um mercado de trabalho marcado pela “uberização”… / … se bem que os dados possam parecer auspiciosos. /… todavia, ao fim das contas, o saldo é a perda do poder de compra…",
   "O indicador reflete, também, a mudança profunda de um mercado de trabalho marcado pela “uberização”… / … ainda que os dados possam parecer auspiciosos. /… porque, ao fim das contas, o saldo é a perda do poder de compra…"
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-004",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 4",
  "textoId": "mpsp25-aj-t9",
  "enunciado": "O termo destacado está empregado em sentido figurado em:",
  "alternativas": [
   "…  é uma queda que deve ser relativizada, já que houve alta de 3,7% daqueles que trabalham como CNPJ, os autônomos da era da “pejotização”. (2o parágrafo)",
   "…  mas com empregos de menor qualidade e remunerações mais baixas mesmo para ocupações que demandam maior qualificação. (4o parágrafo)",
   "…  faz-se necessário o aperfeiçoamento dos critérios de análise para compor um retrato mais fiel do mundo do trabalho. (3o parágrafo)",
   "…  a massa de salários em circulação tenha renovado a máxima da série do IBGE, chegando a R$ 354,605 bilhões no trimestre terminado em maio. (5o parágrafo)",
   "A taxa de desemprego de 6,2% […] não representa apenas o patamar mais baixo da série histórica da pesquisa, iniciada em 2012. (1o parágrafo)"
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-005",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 5",
  "textoId": "mpsp25-aj-t9",
  "enunciado": "O país deve zelar     sua economia para que a população, ansiosa     felicidade, possa dedicar-se atividades profissionais que realmente sejam boas ofertas de emprego de qualidade e de boa remuneração     ela. De acordo com a norma-padrão, as lacunas da frase devem ser preenchidas, respectivamente, com:",
  "alternativas": [
   "por … de … às … a",
   "de … para … a … à",
   "à … por … à … a",
   "com … por … as … a",
   "em … de … às … à"
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-006",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Concordância",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 6",
  "textoId": "mpsp25-aj-t9",
  "enunciado": "A concordância verbal e a concordância nominal atendem à norma-padrão em:",
  "alternativas": [
   "O IBGE dispõe de dados bastante expressivos, os quais atestam que chega a 39,3 milhões o número de trabalhadores informais no País. Além disso, já fazem alguns anos que os empregos brasileiro e mundial atravessam uma fase de precarização.",
   "O IBGE dispõe de dados bastante expressivos, os quais atestam que se trata de 39,3 milhões de trabalhadores informais no País. Além disso, já faz alguns anos que os empregos brasileiro e mundial atravessam uma fase de precarização.",
   "O IBGE dispõem de dados bastante expressivos, os quais atestam que se tratam de 39,3 milhões de trabalhadores informais no País. Além disso, já têm alguns anos que os empregos brasileiro e mundial atravessa uma fase de precarização.",
   "O IBGE dispõem de dados bastantes expressivos, os quais atestam que chegam a 39,3 milhões o número de trabalhadores informais no País. Além disso, já são alguns anos que os empregos brasileiros e mundiais atravessam uma fase de precarização.",
   "O IBGE dispõe de dados bastantes expressivos, os quais atestam que existem 39,3 milhões de trabalhadores informais no País. Além disso, já são alguns anos que o emprego brasileiros e mundiais atravessa uma fase de precarização."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-aj-007",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Figuras e vícios de linguagem",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 7",
  "textoId": "mpsp25-aj-t9",
  "enunciado": "Identifica-se um vício de linguagem e uma figura de linguagem, respectivamente, em:",
  "alternativas": [
   "Se o poder de compra se manter corroído por uma inflação acima da meta, a queda no desemprego não significa felicidade. / O professor da FGV Eaesp chegou à conclusão de que não houve mudanças quanto às condições de trabalho no país.",
   "A “uberização” vai muito além da informalidade dos aplicativos de transportes, englobando inúmeras atividades criadas com a digitalização da economia. / Os dados confirmam que um indicador isolado não simboliza a economia como um todo.",
   "Em um mundo que vive sob novos parâmetros, é necessário o aperfeiçoamento dos critérios de análise para compor um retrato mais fiel do mundo do trabalho. / A perda de dinamismo do setor produtivo é uma bomba para a economia de qualquer país.",
   "A taxa de desemprego de 6,2% apurada pelo IBGE não representa apenas o patamar mais baixo da série histórica da pesquisa, iniciada há 13 anos atrás. / O país acordou para a necessidade urgente de se combater a inflação acima da meta.",
   "Uma mão na economia do país implica garantir dinamismo do setor produtivo, e investimento em setores tecnologicamente mais sofisticados. / Um óbice à felicidade da população é a perda do poder de compra devido a uma inflação acima da meta."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-008",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 8",
  "textoId": "mpsp25-aj-t9",
  "enunciado": "Assinale a alternativa que atende à norma-padrão de ortografia e acentuação.",
  "alternativas": [
   "O professor da FGV concluiu que o mercado de trabalho em 2024 não estava mal, mas com empregos de menor qualidade e remunerações aquêm do esperado.",
   "A inflação acima da meta é um impecilho para que a queda do desemprego represente felicidade para aquelas pessoas que têm o sonho de uma vida melhor.",
   "O gráfico do desemprego, em trajetória decendente, não pode ser traduzido como um caminho ao pleno emprego no qual não se vê dificuldade alguma.",
   "A precarização do emprego discrimina os trabalhadores que, embora apoiem as mudanças, esperam que as vantagens advindas não sejam privilégios de poucos.",
   "Muitos crêem que, num mundo sob novos parâmetros, é preciso aperfeiçoar os critérios de análise afim de compor um retrato mais fiel do mundo do trabalho."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-011",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Excel",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 11",
  "enunciado": "Considere a fórmula inserida na célula C2 de uma planilha Microsoft Excel 365, na sua configuração padrão: =SE(A2=\"One-Drive\";B2-500*10%;B2-400*5%) Assumindo que todas as células da planilha estão formatadas na categoria Moeda em reais com duas casas decimais, assinale a alternativa que apresenta o resultado da fórmula se A2 contém \"One Drive\" e B2 contém o valor R$ 4.000,00.",
  "alternativas": [
   "R$ 50,00",
   "R$ 3.950,00",
   "R$ 20,00",
   "R$ 4.000,00",
   "R$ 3.980,00"
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-012",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Microsoft Teams",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 12",
  "enunciado": "Carlos está participando de uma reunião em grupo no Microsoft Teams 365, em sua configuração original, onde nenhuma tela está sendo compartilhada, mas o grupo está trocando mensagens no chat dessa reunião. De repente, Carlos recebe uma mensagem no chat privado de uma pessoa que não está participando dessa reunião. Assinale a alternativa correta que indica o que Carlos poderá fazer para responder a essa mensagem, sem sair ou interromper a conversa em grupo em que se encontra no momento.",
  "alternativas": [
   "Alternar para a tela principal do Teams, clicar no ícone “Chat” fora da conversa em grupo que está em andamento e abrir a conversa recém-recebida da outra pessoa.",
   "Alternar para a tela principal do Teams, clicar no ícone “Chat” da conversa em grupo que está em andamento e responder à mensagem recebida de outra pessoa.",
   "Clicar em “Nova reunião” para criar um espaço separado e incluir o usuário que enviou a mensagem no chat privado.",
   "Aguardar o fim da videoconferência em andamento, pois não é possível alternar entre chats enquanto uma videoconferência está em andamento.",
   "Clicar em “Nova reunião” e procurar o usuário que enviou a mensagem no chat privado."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-013",
  "disciplina": "Direito Constitucional",
  "assunto": "Ministério Público e funções essenciais",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 13",
  "enunciado": "Mariana é promotora de justiça e está analisando inquérito civil que tem por objeto a apuração da regularidade de condutas praticadas por guardas municipais. O procedimento foi instaurado por iniciativa da Defensoria Pública do Estado, que relata a prática de supostos abusos na realização de prisões em flagrantes durante o período noturno, com o ingresso em residências sem o consentimento prévio dos moradores ou autorização judicial. O caso é apresentado por Mariana à Thelma, analista jurídica, que, após análise, deverá apresentar sua opinião jurídica sobre o processo. Com base na Constituição Federal e na jurisprudência do Supremo Tribunal Federal, Thelma poderá afirmar, de maneira correta, que a entrada dos agentes é",
  "alternativas": [
   "permitida, desde que haja a certeza da prática de crime.",
   "autorizada apenas em situações de violência doméstica, devendo ser posteriormente relatada e justificada à autoridade policial competente.",
   "proibida, pois o ingresso de agentes públicos em residências, no período noturno, deve ser precedido de autorização judicial.",
   "permitida, caso haja indícios mínimos da existência de situação de flagrante delito, a ser posteriormente justificada.",
   "proibida, pois apenas agentes de segurança pública podem realizar diligências, com fins criminais, em residências."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-014",
  "disciplina": "Direito Constitucional",
  "assunto": "Controle de constitucionalidade",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 14",
  "enunciado": "A distinção entre normas formal e materialmente constitucionais, para parte da doutrina, traz consigo alguns desafios, pois a indicação do que deva ser o objeto de uma Constituição varia de acordo com a percepção de cada um sobre o papel do Estado, o modo como ele deve ser estruturado e se relacionar com a sociedade. A respeito da classificação das constituições e normas constitucionais, no sistema jurídico brasileiro, é correto afirmar que",
  "alternativas": [
   "as normas formalmente constitucionais também formam o corpo da Constituição brasileira, que é rígida, e se submetem ao procedimento diferenciado de mudança.",
   "as normas constitucionais da antiga Constituição são recepcionadas pela nova Constituição, quando materialmente compatíveis com a nova ordem constitucional.",
   "as constituições não escritas adotam, em regra, como parâmetro para o controle de constitucionalidade, as normas formalmente constitucionais.",
   "as normas previstas no ADCT não estão no mesmo nível hierárquico das demais normas constitucionais.",
   "o constituinte brasileiro adotou o modelo de constituição-garantia (estatutária), de modo que integram o núcleo material da constituição prioritariamente os direitos fundamentais de primeira dimensão."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-015",
  "disciplina": "Direito Constitucional",
  "assunto": "Ministério Público e funções essenciais",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 15",
  "enunciado": "Suponha que é ano de eleições municipais e que o Ministério Público está realizando um conjunto de diligências para apurar a regularidade do processo eleitoral. Para tanto, solicita à Justiça Eleitoral informações sobre a participação de agentes públicos como candidatos a cargos eletivos. Para subsidiar a análise do alto volume de informações, os Promotores de Justiça designados para os casos solicitam que os analistas jurídicos façam um primeiro exame dos documentos e apontem as situações que conflitam com a Constituição Federal. Com base na situação hipotética e no disposto na Constituição Federal, os analistas jurídicos devem considerar regular a situação em que",
  "alternativas": [
   "militar com mais de dez anos de serviço seja candidato a vereador, desde que, antes do pleito, passe para a inatividade.",
   "esposo da chefe do Poder Executivo municipal seja candidato a prefeito, caso a sua esposa não tenha direito à reeleição por ter ocupado o mesmo cargo por dois mandatos consecutivos.",
   "ocupante de cargo em comissão, sem nacionalidade brasileira, seja candidato a vereador.",
   "maior de setenta anos, ocupante de cargo em comissão, afaste-se do cargo no prazo previsto constitucionalmente e seja candidato a prefeito.",
   "ocupante do cargo de prefeito seja candidato à reeleição pela segunda vez consecutiva."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-016",
  "disciplina": "Direito Constitucional",
  "assunto": "Ministério Público e funções essenciais",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 16",
  "enunciado": "Considere que, em um município do Estado de São Paulo, a Secretaria de Saúde emitiu nota técnica, direcionada a seus profissionais, contendo orientação sobre os procedimentos a serem adotados em caso de recusa de tratamento médico por questões de convicção religiosa. Segundo a nota, o paciente testemunha de Jeová, quando maior e capaz, tem o direito de recusar procedimento que envolva transfusão de sangue, com base na autonomia individual e na liberdade religiosa, e, como consequência, faz jus aos procedimentos alternativos disponíveis no Sistema Único de Saúde (SUS), podendo, se necessário, recorrer a tratamento fora de seu domicílio. Parte dos servidores, preocupados com potenciais processos de responsabilização pelos órgãos de fiscalização profissional, encaminharam denúncia ao Ministério Público. O analista jurídico responsável pela análise do caso, com base na jurisprudência do Supremo Tribunal Federal e na Constituição Federal, deve concluir que a nota",
  "alternativas": [
   "estará correta, caso seja demonstrada a existência concreta de disponibilidade orçamentária para custear a sua implantação.",
   "está incorreta, pois o direito à vida não pode ser sujeito ao processo de ponderação.",
   "está correta, devendo a opção pelo tratamento alternativo ser tomada de forma livre, consciente e informada das consequências.",
   "está correta e abrange também o poder de pais não autorizarem, por liberdade religiosa, tratamentos médicos de filhos menores.",
   "está incorreta na parte em que trata do custeio de serviços médicos em locais alternativos."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-018",
  "disciplina": "Direito Constitucional",
  "assunto": "Ministério Público e funções essenciais",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 18",
  "enunciado": "Thiago e Tatiana, pais de Maria, estão preocupados, pois, há algum tempo, procuram um local, na rede pública de ensino, para matricular a sua filha em período integral e garantir que possam ambos trabalhar regularmente, mas não há vagas nas creches municipais. A família não pode arcar com os custos de vincular a criança a um estabelecimento particular, motivo pelo qual procuram o Ministério Público, que propõe uma ação civil pública para que seja concedida uma vaga, em creche, para a criança. Com base na situação hipotética, na Constituição Federal e na jurisprudência do Supremo Tribunal Federal, é correto afirmar que",
  "alternativas": [
   "a vaga não deve ser concedida, pois a Constituição Federal assegura o direito à educação infantil, na rede pública, a partir dos 05 anos de idade.",
   "para a vaga ser concedida, é necessária a comprovação de que o Poder Público possui disponibilidade orçamentária para a execução do serviço.",
   "a vaga só pode ser concedida caso fique efetivamente comprovado que Thiago e Tatiana não possuem recursos para custear o serviço.",
   "a vaga só poderá ser concedida caso comprovadas a desídia ou a ineficiência da Administração Pública.",
   "a vaga deve ser concedida, pois o Poder Público tem o dever jurídico de dar efetividade integral às normas constitucionais sobre acesso à educação básica, que não está condicionado, no caso, à existência de efetiva disponibilidade financeira."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-019",
  "disciplina": "Direito Constitucional",
  "assunto": "Ministério Público e funções essenciais",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 19",
  "enunciado": "A respeito das regras constitucionais que disciplinam a estrutura e a atuação do Ministério Público, com base na Constituição Federal e na jurisprudência do Supremo Tribunal Federal, assinale a alternativa correta.",
  "alternativas": [
   "O Ministério Público tem por função institucional exercer o controle externo da atividade policial, na forma de lei complementar, bem como de requisitar a instauração de inquérito policial, indicados os fundamentos jurídicos de suas manifestações.",
   "A prerrogativa de os membros do Ministério Público se sentarem no mesmo plano e à direita dos magistrados nas audiências, nos processos em que atuam como parte, ofende o princípio constitucional da isonomia.",
   "Os Ministérios Públicos dos Estados e do Distrito Federal não têm legitimidade para propor e atuar em recursos e meios de impugnação de decisões judiciais em trâmite no STF e no STJ, oriundos de processos de sua atribuição, em função das atribuições institucionais do MPF nos Tribunais Superiores.",
   "Integram as funções institucionais do Ministério público a promoção, exclusiva, da ação penal pública e a defesa judicial dos direitos e interesses subjetivos dos indígenas que demonstrem hipossuficiência econômica, na forma da lei.",
   "Os membros do Ministério Público possuem a garantia da vitaliciedade, que lhes assegura o direito de não serem demitidos do cargo, salvo por decisão judicial transitada em julgado ou do Conselho Nacional do Ministério público."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-020",
  "disciplina": "Direito Constitucional",
  "assunto": "Ministério Público e funções essenciais",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 20",
  "enunciado": "Considere que a Lei Complementar do Estado X estabeleceu que, para escolher o Procurador-Geral de Justiça, o Governador do Estado deve ter por base lista tríplice a ser formada por Procuradores de Justiça e por Promotores de Justiça de entrância final que estejam no primeiro quinto do quadro geral de antiguidade da carreira, tenham mais de 35 (trinta e cinco) anos de idade e 15 (quinze) anos de carreira, a serem comprovados na data de registro da candidatura. Com base na situação hipotética, no disposto na Constituição Federal e na jurisprudência do Supremo Tribunal Federal, é correto afirmar que",
  "alternativas": [
   "a norma é inválida, pois os limites à autonomia do chefe do Poder Executivo precisam estar previstos na Constituição Federal.",
   "a norma só seria válida se o seu conteúdo estivesse inserido em regra prevista na Constituição Estadual.",
   "a norma é válida, pois só haveria inconstitucionalidade caso o universo dos potenciais integrantes da lista tríplice fosse restrito aos Procuradores de Justiça.",
   "é válida a estipulação de critérios adicionais à composição da lista tríplice para a escolha do chefe do Ministério Público estadual, desde que a eleição se dê entre membros da carreira.",
   "a indicação de apenas uma parcela de promotores de justiça infringe o princípio da isonomia."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-022",
  "disciplina": "Direito Constitucional",
  "assunto": "Ministério Público e funções essenciais",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 22",
  "enunciado": "Considere que o Ministério Público foi notificado, pelo Tribunal de Contas do Estado, sobre o resultado de processo de tomada de contas especial contra gestor público municipal que resultou na aplicação de multa simples, pela inobservância das normas de Direito Financeiro. Com base na situação hipotética, na Constituição Federal e na jurisprudência do Supremo Tribunal Federal, o agente público responsável por analisar a notificação deve concluir que a legitimidade para promover o processo de cobrança da penalidade é",
  "alternativas": [
   "do município prejudicado.",
   "do Estado a que está vinculado o Tribunal de Contas.",
   "do Ministério Público Federal.",
   "do Ministério Público Estadual.",
   "do próprio Tribunal de Contas."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-aj-023",
  "disciplina": "Direito Administrativo",
  "assunto": "Princípios e conceitos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 23",
  "enunciado": "Sobre os conceitos de Direito Administrativo, de função administrativa, de atividade administrativa, bem como sobre seus objetivos, é correto afirmar que:",
  "alternativas": [
   "o Direito Administrativo atualmente encontra-se intimamente vinculado à noção de serviço público, com origem no Direito Administrativo germânico.",
   "a atividade administrativa somente pode ser caracterizada de forma residual, isto é, como aquela que abarca tudo o que não é atividade legislativa ou judicial.",
   "influenciado pelo fenômeno da constitucionalização, atualmente se sustenta que o principal objetivo do Direito Administrativo é a satisfação dos direitos fundamentais.",
   "a atividade administrativa é o conjunto de prerrogativas e competências estatais, já a função administrativa é o exercício concreto da função administrativa.",
   "o conceito de Direito Administrativo é de definição evidente e objetiva, considerando as fronteiras bem demarcadas das funções estatais na Administração Pública contemporânea."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-024",
  "disciplina": "Direito Administrativo",
  "assunto": "Princípios e conceitos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 24",
  "enunciado": "Sobre a aplicação do princípio da legalidade no Direito Administrativo contemporâneo, é correto afirmar que:",
  "alternativas": [
   "a vinculação positiva da lei seria exigida apenas para as atuações administrativas ablativas, isto é, naqueles casos que restringem ou extinguem direitos fundamentais.",
   "quando o Estado gera comodidades para a coletividade, sem a necessidade do uso do poder de império, a legalidade deve ser lida na acepção de vinculação positiva.",
   "o princípio da legalidade representa hoje para os administradores públicos mero recurso político-retórico, considerando-se o processo de desregulação.",
   "o princípio da legalidade implica na ideia de que o administrador público nada pode fazer que não esteja expressamente autorizado em lei em sentido estrito.",
   "a existência dos chamados “decretos autônomos” é uma prova da superação da ideia de legalidade no"
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-025",
  "disciplina": "Direito Administrativo",
  "assunto": "Princípios e conceitos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 25",
  "enunciado": "A Administração Pública organiza-se por meio de diferentes estratégias e mecanismos, visando a maior eficiência do Estado, bem como o atendimento aos demais princípios que regem a Administração. Nesse contexto, a respeito da descentralização administrativa, assinale a alternativa correta.",
  "alternativas": [
   "É formalizada por meio de contrato de gestão ou termo de parceria, independentemente de ser implementada por outorga, delegação ou desconcentração, visando a maior flexibilidade na execução das atividades.",
   "Tem como principal objetivo a transferência total da responsabilidade e do controle da atividade para a entidade descentralizada, eximindo o ente central de qualquer fiscalização posterior.",
   "Apresenta-se sob duas formas distintas, sendo a primeira a outorga, instrumentalizada por meio de lei na qual a entidade destinatária recebe a titularidade e a execução da atividade, e a segunda, a chamada delegação, que decorre de contrato ou ato administrativo descentralizando-se apenas a execução da atividade.",
   "Diferencia-se da desconcentração pelo fato de que esta última implica a criação de uma nova pessoa jurídica, enquanto a descentralização sempre ocorre dentro da mesma pessoa jurídica.",
   "Concentra-se principalmente na delegação de competências por meio de convênios, mantendo a titularidade da atividade com a entidade central, sem previsão de outorga por lei."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-026",
  "disciplina": "Direito Administrativo",
  "assunto": "Organização administrativa",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 26",
  "enunciado": "São entidades da Administração Indireta no Direito Administrativo Brasileiro:",
  "alternativas": [
   "autarquias, empresas públicas, sociedades de economia mista, fundações públicas, associações públicas e organizações da sociedade civil sem fins lucrativos.",
   "autarquias, empresas públicas, sociedades de economia mista, fundações públicas, associações públicas e organizações sociais.",
   "empresas públicas, sociedades de economia mista, fundações públicas, empresas privadas controladas pelo Estado e organizações sociais civis de interesse público.",
   "autarquias, empresas públicas, sociedades de economia mista, fundações públicas, subsidiárias das empresas estatais e empresas privadas controladas pelo Estado.",
   "autarquias, empresas públicas, sociedades de economia mista, fundações privadas, organizações da sociedade civil sem fins lucrativos e organizações sociais."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-027",
  "disciplina": "Direito Administrativo",
  "assunto": "Poderes administrativos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 27",
  "enunciado": "Analise as seguintes afirmações sobre os poderes administrativos e assinale a alternativa correta.",
  "alternativas": [
   "O poder hierárquico é o poder-dever de rever os próprios atos, decorrendo diretamente do princípio da legalidade, e é irrenunciável.",
   "O poder regulamentar é exercido de forma autônoma pelo Poder Executivo para criar novas obrigações e proibições, sem a necessidade de prévia autorização legal.",
   "O poder discricionário confere ao administrador ampla liberdade para atuar, o que significa que seus atos, via de regra, não estão sujeitos a controle judicial.",
   "O poder disciplinar é inerente à Administração Pública e manifesta-se apenas na aplicação de sanções a servidores públicos, não abrangendo, por exemplo, contratos administrativos.",
   "O poder de polícia administrativa abrange a fiscalização, prevenção e repressão de atividades que possam comprometer o interesse público, limitando direitos individuais em benefício da coletividade."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-028",
  "disciplina": "Direito Administrativo",
  "assunto": "Processo administrativo",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 28",
  "enunciado": "Em determinada prefeitura, o Secretário Municipal de Urbanismo, após regular processo administrativo, fazendo uso do seu poder discricionário estabelecido pela lei, autorizou a edificação de um imóvel em área específica do território municipal. Ocorre que, antes da referida edificação do imóvel pelo interessado, sobreveio nova lei municipal, transformando a área em questão em área de preservação permanente (APP) e proibindo a realização de qualquer edificação no local. Considerando a situação hipotética e os princípios do Direito Administrativo, assinale a alternativa correta.",
  "alternativas": [
   "A superveniência da lei, implica a anulação do ato de autorização da edificação por perda de seu objeto, devendo a Administração Pública emitir um novo ato para formalizar essa situação.",
   "O ato discricionário de autorização, uma vez que sua finalidade se tornou ilegal pela nova lei aprovada, teve sua eficácia extinta pela caducidade, não sendo necessário novo ato administrativo para declarar a extinção.",
   "O ato de autorização é anulável, pois expedido em contrariedade à legislação vigente no momento da sua expedição e considerando a supremacia do interesse particular em matéria de direito de propriedade.",
   "O ato de autorização de edificação sendo sempre um ato vinculado, não pode ser revogado nem convalidado, mesmo diante da mudança da situação fática, permanecendo válido e eficaz até sua execução ou expressa anulação judicial.",
   "A revogação da autorização previamente concedida é um ato discricionário, pois a decisão de autorizar ou não autorizar, na vigência da lei anterior, estava sujeita à conveniência e à oportunidade do Secretário, cabendo a ele avaliar a melhor solução para o caso."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-aj-029",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 29",
  "enunciado": "Com base na Lei no 14.133/2021, identifique o conceito fundamental no campo das licitações públicas relacionado à definição a seguir e assinale a alternativa correta. “Procedimento seletivo prévio à licitação, convocado por meio de edital, destinado à análise das condições de habilitação, total ou parcial, dos interessados ou do objeto”.",
  "alternativas": [
   "Pré-qualificação.",
   "Credenciamento.",
   "Registro de preços.",
   "Pré-habilitação.",
   "Diálogo competitivo."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-030",
  "disciplina": "Direito Administrativo",
  "assunto": "Bens públicos e intervenção na propriedade",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 30",
  "enunciado": "A respeito do regime jurídico dos bens públicos no Direito Administrativo brasileiro, assinale a alternativa correta.",
  "alternativas": [
   "A inalienabilidade dos bens públicos é absoluta e abrange todas as espécies de bens, sendo vedada qualquer forma de alienação ou constituição de direito real de garantia sobre eles, independentemente de autorização legislativa, como forma de proteção ao interesse público.",
   "A desafetação de um bem público é um ato discricionário que independe, via de regra, de lei específica, podendo ser realizada por simples ato administrativo, desde que motivado pelo interesse público.",
   "A imprescritibilidade dos bens públicos impede que o Estado adquira por usucapião bens de particulares, em razão da simetria jurídica que rege as relações patrimoniais.",
   "A impenhorabilidade dos bens públicos decorre do princípio da supremacia do interesse público, visando assegurar a continuidade dos serviços públicos essenciais, e levando a execução judicial de dívidas do Estado a ser realizada por meio de precatórios ou requisições de pequeno valor.",
   "Os bens dominicais, por integrarem o patrimônio disponível do Estado, podem ser objeto de oneração, como a constituição de hipoteca, desde que haja prévia autorização judicial e se observe o interesse público."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-031",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a pessoa",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 31",
  "enunciado": "Mévia e Tício foram namorados, por 5 anos. Mévia terminou a relação, por ter conhecido e se apaixonado por outra pessoa. Tício não se conformava com o término e, diagnosticado com depressão, todos os dias, durante meses, mandava mensagem para Mévia, dizendo que a vida sem ela perdera a graça. Mévia, sabendo da condição de saúde mental de Tício, manteve-se silente durante todo o tempo. Mas, um dia, irritada com as mensagens, que estavam causando instabilidade em seu atual relacionamento, Mévia envia a Tício a seguinte resposta: “se a vida perdeu a graça, de que vale viver? Seja homem ao menos uma vez! Coloque fim em seu sofrimento e pare de me infernizar! Eu até vou a seu enterro e faço uma homenagem póstuma!” Tício visualizou a mensagem, respondendo com “Ok”. Passados dois dias, Tício se joga da janela do prédio de sua casa. Por sorte, Tício cai em cima da carroceria de um caminhão, lotado de colchão, que passava na rua no exato momento da queda. Tício não sofreu qualquer lesão. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "Mévia não incorreu em qualquer crime, visto que o tipo penal de induzimento, instigação ou auxílio a suicídio e automutilação, para se configurar, exige que da conduta de instigar, induzir ou auxiliar advenha, no mínimo, lesão de natureza grave.",
   "Mévia, em tese, incorreu no crime de induzimento, instigação ou auxílio a suicídio e automutilação, que se configura com a conduta de induzir, instigar ou auxiliar, independentemente do resultado.",
   "Mévia, em tese, incorreu no crime de induzimento, instigação ou auxílio a suicídio e automutilação, na modalidade tentada, vez que a morte não se concretizou, por circunstância alheia a sua vontade.",
   "Mévia não incorreu em qualquer crime, visto que o tipo penal de induzimento, instigação ou auxílio a suicídio e automutilação, para se configurar, exige que da conduta de instigar, induzir ou auxiliar advenha, no mínimo, lesão de natureza leve.",
   "Mévia, em tese, incorreu no crime de induzimento, instigação ou auxílio a suicídio e automutilação, na figura qualificada, dada a relação afetiva, entre a vítima e o autor."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-aj-032",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra o patrimônio",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 32",
  "enunciado": "Caio namora Mévia. Caio, sabendo que os pais de Mévia guardam dinheiro e joias em casa, instiga e convence a namorada a furtar os objetos. Caio, embora não pratique nenhum ato de execução, planeja toda a ação, dirigindo toda a empreitada criminosa. Mévia furta os objetos do cofre, entregando a Caio que, ao tentar vender as joias, acabou preso, confessando o crime, bem como a participação da namorada. Diante da situação hipotética, e considerando que os pais de Mévia possuem menos de 60 anos, assinale a alternativa correta.",
  "alternativas": [
   "Caio e Mévia praticaram o crime de furto qualificado, pela coautoria, aplicando-se a eles a escusa absolutória prevista para os crimes patrimoniais.",
   "Caio e Mévia praticaram o crime de furto qualificado, pela coautoria, não se aplicando a eles a escusa absolutória prevista para os crimes patrimoniais, expressamente afastada, em caso de concurso de agentes.",
   "Mévia praticou o crime de furto simples, aplicando-se a ela a escusa absolutória, prevista para os crimes patrimoniais. Caio praticou o crime de receptação, tentado.",
   "Mévia praticou o crime de furto qualificado, pela coautoria, aplicando-se a ela a escusa absolutória prevista para os crimes patrimoniais. Caio praticou o crime de receptação qualificada, tentado.",
   "Caio praticou o crime de furto qualificado, pela coautoria, agravado pela circunstância de comandar e dirigir a empreitada criminosa, não se aplicando a ele a escusa absolutória prevista para os crimes patrimoniais."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-033",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a pessoa",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 33",
  "enunciado": "Mévia, atleta campeã em provas de natação, está na praia, junto com o marido e o filho, de 5 anos, que não sabe nadar. Em um determinado momento, ela percebe um jovem se afogando. Para salvar o jovem, ela deixa o filho aos cuidados do pai e entra no mar. Mévia salva o jovem, mas, ao retornar para areia e perguntar pelo filho, o pai se dá conta de que a criança não estava na areia, brincando ao lado do guarda-sol. A criança, então, é localizada, de cabeça para baixo, dentro do buraco, que ela própria tinha cavado, enquanto brincava na areia. Socorrida, a criança, infelizmente, não sobrevive. Tendo em conta o caso hipotético, assinale a alternativa correta.",
  "alternativas": [
   "Mévia e o pai não praticaram qualquer crime, pois a morte da criança decorreu de uma fatalidade, não sendo causada pelos pais.",
   "Mévia e o pai praticaram o crime de homicídio culposo, por omissão imprópria, aplicando-se a eles o perdão judicial humanitário.",
   "O pai praticou o crime de homicídio culposo, por omissão imprópria, aplicando-se a ele o perdão judicial humanitário.",
   "O pai praticou o crime de abandono de incapaz, qualificado pelo resultado morte, aplicando-se a ele o perdão judicial humanitário.",
   "Mévia e o pai praticaram o crime de abandono de incapaz, qualificado pelo resultado morte, aplicando-se a eles o perdão judicial humanitário."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-034",
  "disciplina": "Direito Penal",
  "assunto": "Teoria do crime",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 34",
  "enunciado": "Caio, em um bar, ingere grande quantidade de bebida alcoólica. Após consumo excessivo e voluntário de álcool, ele se torna completamente embriagado, a ponto de não ter mais controle sobre suas ações. Nesse estado de completa embriaguez, Caio se envolve em uma discussão acalorada com outro frequentador do bar e, sem qualquer motivo razoável, desfere um soco que resulta em lesões corporais graves na vítima. Considerando que Caio estava completamente incapaz de compreender a ilicitude de seu ato, no momento que desferiu o soco, devido à embriaguez, é correto afirmar que ele será considerado",
  "alternativas": [
   "inimputável devido à embriaguez completa e não responderá criminalmente pelo delito.",
   "imputável, mas terá atenuada a pena pelo crime cometido, em razão de sua culpabilidade diminuída, pela embriaguez completa.",
   "imputável e responderá pelo crime cometido, sem qualquer redução de pena.",
   "imputável e será responsabilizado, pelo crime praticado, a título de culpa.",
   "semi-imputável e poderá ter a pena diminuída, em até 2/3."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-035",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a Administração Pública",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 35",
  "enunciado": "A respeito dos crimes contra a liberdade pessoal, é correto afirmar que o crime de",
  "alternativas": [
   "perseguição é processável por ação penal condicionada à representação, exceto quando praticado contra a mulher, em razão da condição do sexo feminino.",
   "ameaça é processável por ação penal condicionada à representação, exceto quando praticado contra a mulher, em razão da condição do sexo feminino e pessoa idosa.",
   "violência psicológica, se cometido mediante o uso de inteligência artificial, com alteração da imagem da vítima, é qualificado.",
   "intimidação sistemática pode ser praticado mediante violência física e psicológica e, quando realizado por meio da rede de computadores, é qualificado.",
   "tráfico de pessoas é comum, podendo ser praticado por qualquer pessoa, tornando-se qualificado, quando praticado por funcionário público no exercício de suas funções."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-036",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a Administração Pública",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 36",
  "enunciado": "Com relação aos crimes contra a administração pública, assinale a alternativa correta.",
  "alternativas": [
   "Seprônia, funcionária da prefeitura, ao ceder a pedido de particular, deixando de apreender mercadoria indevidamente comercializada em barraca, na rua, incorre no crime de corrupção passiva.",
   "Caio, funcionário público, ao deixar a porta do armário aberta, propositalmente, para que Mévio subtraia insumos da repartição pública, incorre no crime de peculato culposo.",
   "Mévia, ao se opor a execução da ordem de despejo, pelo oficial de justiça, algemando-se à grade do portão, incorre no crime de resistência.",
   "Tícia, funcionária pública recém-empossada, ao deixar de praticar ato de ofício, por ignorância, incorre no crime de prevaricação.",
   "Tício, agente fiscal, ao exigir contribuição social que acredita devida, embora não seja, incorre no crime de concussão."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-037",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a Administração Pública",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 37",
  "enunciado": "Tendo em vista o crime de falso testemunho ou falsa perícia e o crime de coação no curso do processo, assinale a alternativa correta.",
  "alternativas": [
   "Há previsão de causa de aumento de pena, quando as condutas incriminadas são praticadas em processo que envolve crime contra a dignidade sexual, tanto no crime de falso testemunho ou falsa perícia quanto no crime de coação no curso do processo.",
   "O crime de coação no curso do processo, para se caracterizar, exige a finalidade especial de favorecer interesse próprio ou alheio.",
   "O crime de coação no curso do processo não se caracteriza se a violência ou ameaça for empregada para o fim de favorecer interesse em procedimento investigativo criminal e juízo arbitral.",
   "O crime de falso testemunho ou falsa perícia e o crime de coação no curso do processo são próprios, exigindo qualidade especial do autor.",
   "O crime de falso testemunho não se caracteriza se a afirmação falsa for feita em procedimento investigativo criminal e juízo arbitral."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-aj-038",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a fé pública",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 38",
  "enunciado": "Tício, após fazer a proposta de locação de uma casa, aceita pelo locador do imóvel, a fim de comprovar renda, altera o seu contracheque, aumentando o valor de seu salário mensal. Ele entrega o documento falsificado a Mévio, corretor de imóvel que, sem perceber a falsificação, inicia a confecção do contrato, para assinatura. Quando da data da assinatura do contrato, o locador, no entanto, desiste da locação. Mévio, pela desistência da locação, aciona o locador, judicialmente, para receber o valor da comissão, pela intermediação da locação, que entendia devida. Mévio instrui a ação, com todo o processo de locação, inclusive o contracheque, falsificado e apresentado por Tício. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "Tício cometeu o crime de falsificação de documento público, uma vez que o contracheque, para fins penais, é equiparado a documento público.",
   "Mévio praticou o crime de uso de documento falso ao instruir a ação judicial com o contracheque falsificado.",
   "Tício e Mévio não praticaram qualquer crime. Mévio, pela ausência de dolo e, Tício, em razão do contrato de locação não ter se formalizado.",
   "Tício cometeu o crime de falsidade ideológica, pois alterou a verdade sobre fato juridicamente relevante, em documento particular.",
   "Tício cometeu o crime de falsificação de documento particular."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-039",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra a pessoa",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 39",
  "enunciado": "Tício, não aprovado em concurso público, reputando o insucesso à existência das cotas para pessoas portadoras de deficiência, gravou e divulgou, nas redes sociais, vídeo afirmando que cargos públicos não podem ser preenchidos por pessoas portadoras de deficiência, devido à inequívoca incapacidade para o desempenho de função pública. No vídeo, Tício sugeriu ao Estado a instituição de bolsa invalidez, como política social, deixando os empregos e cargos públicos a pessoas “normais”, com capacidade para desempenhar as atividades a eles inerentes, com eficiência. Diante do caso hipotético, Tício, em tese, incorreu no crime de",
  "alternativas": [
   "injúria, previsto na lei que define os crimes resultantes de preconceito de raça ou cor.",
   "discriminação ou preconceito, previsto na lei que define os crimes resultantes de preconceito de raça ou cor.",
   "discriminação à pessoa em razão de sua deficiência, previsto na lei que institui o Estatuto da Pessoa com Deficiência.",
   "obstar inscrição em concurso público ou acesso a qualquer cargo ou emprego público, previsto na lei que dispõe sobre o apoio às pessoas portadoras de deficiência.",
   "impedir ou obstar o acesso a qualquer cargo da Administração Direta ou Indireta, previsto na lei que define os crimes resultantes de preconceito de raça ou cor."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-040",
  "disciplina": "Direito Penal",
  "assunto": "Crimes contra o patrimônio",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 40",
  "enunciado": "Seprônia, delegada de polícia, lavrou auto de apreensão de Tício, adolescente conduzido à delegacia pela prática de ato infracional análogo ao crime de roubo, com arma de fogo. Seprônia, contudo, por desídia, deixa de proceder à imediata comunicação da apreensão do menor à família. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "Seprônia, se condenada pela prática de crime previsto na Lei de Abuso de Autoridade e no Estatuto da Criança e do Adolescente, perderá o cargo, ainda que não seja reincidente.",
   "Seprônia, em tese, praticou crime de prevaricação, previsto no Código Penal.",
   "Seprônia, em tese, praticou crime previsto na Lei de Abuso de Autoridade e no Estatuto da Criança e do Adolescente, em concurso.",
   "Seprônia, em tese, praticou crime previsto no Estatuto da Criança e do Adolescente.",
   "Seprônia, em tese, praticou crime previsto na Lei de Abuso de Autoridade."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-041",
  "disciplina": "Direito Penal",
  "assunto": "Teoria da pena",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 41",
  "enunciado": "Tendo em conta a lei de crimes ambientais, assinale a alternativa correta.",
  "alternativas": [
   "A pena do crime de abuso ou maus tratos a animais será aumentada de um sexto a um terço quando se tratar de gato ou cachorro.",
   "O resultado morte do animal é circunstância qualificadora do crime de abuso ou maus tratos a animais.",
   "A experiência dolorosa ou cruel em animal vivo não configura o crime de abuso e maus tratos a animais, quando realizada para fins didáticos ou científicos e inexistam outras alternativas.",
   "Com exceção do crime de provocar perecimento de espécimes da fauna aquática, pela emissão de efluentes ou carreamento de materiais, inexiste crime culposo contra a fauna.",
   "É crime contra a fauna a destruição de ninho de espécime silvestre, ainda que causada por negligência ou imperícia."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-042",
  "disciplina": "Direito Penal",
  "assunto": "Legislação penal especial",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 42",
  "enunciado": "É considerado hediondo",
  "alternativas": [
   "o roubo, qualificado pelo resultado lesão corporal grave, qualquer que seja a idade da vítima.",
   "o crime de tráfico de pessoas, qualquer que seja a idade da vítima.",
   "o crime de posse ou porte ilegal de arma de fogo de uso permitido e proibido.",
   "o crime de sequestro e cárcere privado, qualquer que seja a idade da vítima.",
   "o crime de favorecimento da prostituição ou qualquer outra forma de exploração sexual, qualquer que seja a idade da vítima."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-043",
  "disciplina": "Direito Processual Penal",
  "assunto": "Ação penal",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 43",
  "enunciado": "Considerando a situação hipotética de que no curso de ação penal de rito comum ordinário, após recebida a denúncia, mas antes do início da instrução, sobrevenha alteração de legislação processual penal. Nesse caso, é correto afirmar que a alteração",
  "alternativas": [
   "aplicar-se-á ao processo em curso, anulando-se os atos anteriormente praticados.",
   "não se aplicará ao processo em curso, tendo em vista que a legislação processual penal a ser aplicada é a vigente na data do oferecimento da denúncia ou queixa.",
   "não se aplicará ao processo em curso, tendo em vista que a legislação processual penal a ser aplicada é a vigente na data do fato criminoso.",
   "não se aplicará ao processo em curso, tendo em vista que a legislação processual penal a ser aplicada é a vigente na data do recebimento da denúncia ou queixa.",
   "aplicar-se-á ao processo em curso."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-044",
  "disciplina": "Direito Processual Penal",
  "assunto": "Inquérito policial",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 44",
  "enunciado": "Assinale a alternativa que apresenta o requisito indispensável para início do inquérito policial no caso de crime cuja ação penal é pública condicionada.",
  "alternativas": [
   "Individualização do indiciado.",
   "Requisição do Ministério Público.",
   "Exame de corpo de delito.",
   "Representação da vítima.",
   "Indicação de rol de testemunhas."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-045",
  "disciplina": "Direito Processual Penal",
  "assunto": "Inquérito policial",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 45",
  "enunciado": "De acordo com o CPP, ao término do inquérito policial por crime de ação penal pública, caso a vítima não concorde com seu arquivamento, poderá,",
  "alternativas": [
   "diante da inércia, mas dentro do prazo prescricional, propor ação penal privada subsidiária da pública.",
   "no prazo de 30 (trinta) dias do recebimento da comunicação, submeter a matéria à revisão da instância competente do órgão ministerial.",
   "no prazo de 120 (cento e vinte) dias, propor ação autônoma de impugnação, a fim de pleitear o direito líquido e certo de ver o ofensor criminalmente processado.",
   "diante da inércia, mas dentro do prazo prescricional e decadencial, propor queixa-crime.",
   "apenas, valer-se da esfera cível, tendo em vista que tal desfecho não admite qualquer irresignação."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-aj-046",
  "disciplina": "Direito Processual Penal",
  "assunto": "Ação penal",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 46",
  "enunciado": "No que concerne à competência para processo e julgamento dos crimes de ação penal privada, assinale a alternativa correta de acordo com o CPP.",
  "alternativas": [
   "Será competente o juiz que primeiro tomar conhecimento do fato, sob livre eleição do ofendido.",
   "Determina-se, exclusivamente, pelo domicílio do ofendido.",
   "Determina-se, exclusivamente, pelo local da infração.",
   "Determina-se, exclusivamente, pelo domicílio do réu.",
   "O querelante poderá preferir o foro de domicílio ou da residência do réu, ainda quando conhecido o lugar da infração."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-047",
  "disciplina": "Direito Processual Penal",
  "assunto": "Inquérito policial",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 47",
  "enunciado": "Assinale a alternativa correta no que concerne à suspeição e impedimento das autoridades policiais que presidem inquéritos, nos termos determinados pelo CPP.",
  "alternativas": [
   "Não se poderá opor suspeição às autoridades policiais nos atos do inquérito, mas deverão elas declarar-se suspeitas quando ocorrer motivo legal.",
   "O impedimento não poderá ser reconhecido de ofício pela própria autoridade, sendo necessária prévia alegação escrita de parte interessada.",
   "A alegação de suspeição da autoridade policial, no sistema acusatório e nas ações penais de iniciativa pública, é matéria decidida pelo órgão de acusação, ou seja, pelo Ministério Público.",
   "Não aceitando a suspeição, a autoridade mandará autuar em apartado a petição, dará sua resposta dentro em 3 (três) dias e, em seguida, determinará sejam os autos da exceção remetidos ao juiz a quem competir o julgamento.",
   "A oposição de impedimento suspende o trâmite do inquérito policial, salvo para diligências cautelares ou urgentes, a critério da autoridade."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-048",
  "disciplina": "Direito Processual Penal",
  "assunto": "Provas",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 48",
  "enunciado": "“O juiz formará sua convicção pela livre apreciação da prova produzida em contraditório judicial, não podendo fundamentar sua decisão exclusivamente nos elementos informativos colhidos na investigação…” Referida afirmação, segundo o CPP,",
  "alternativas": [
   "está parcialmente correta, tendo em vista a adoção do sistema tarifário de sopesamento das provas.",
   "está correta e completa, não se admitindo qualquer ressalva.",
   "está parcialmente correta, tendo em vista que se ressalvam as provas cautelares, não repetíveis e antecipadas.",
   "está parcialmente correta, tendo em vista que o juiz pode fundamentar a condenação exclusivamente na palavra da vítima.",
   "está incorreta, posto que os elementos colhidos na investigação devem ser desconsiderados quando da prolação da sentença."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-049",
  "disciplina": "Direito Processual Penal",
  "assunto": "Prisões e medidas cautelares",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 49",
  "enunciado": "São medidas cautelares diversas da prisão legal e expressamente previstas no CPP:",
  "alternativas": [
   "perdimento; recolhimento domiciliar no período noturno.",
   "prestação de serviços à comunidade; comparecimento periódico em juízo.",
   "internação provisória para inimputáveis; fiança.",
   "suspensão de direitos políticos; monitoração eletrônica.",
   "castração química; proibição de ausentar-se do país."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-050",
  "disciplina": "Direito Processual Penal",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 50",
  "enunciado": "Nos exatos termos do art. 382 do CPP, ensejam a oposição de embargos de declaração em face de sentença apenas:",
  "alternativas": [
   "obscuridade, contradição, omissão ou erro material.",
   "obscuridade, contradição ou omissão.",
   "contradição ou obscuridade.",
   "obscuridade, ambiguidade, contradição ou omissão.",
   "omissão ou contradição."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-051",
  "disciplina": "Direito Processual Penal",
  "assunto": "Inquérito policial",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 51",
  "enunciado": "Faz coisa em julgada no juízo cível ou impede a propositura da ação civil, a sentença penal que",
  "alternativas": [
   "absolver o acusado, decidindo que o fato imputado não constitui crime.",
   "reconhecer ter sido o ato praticado em estado de necessidade.",
   "julgar extinta a punibilidade.",
   "absolver o acusado, em qualquer hipótese.",
   "determinar o arquivamento do inquérito policial."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-aj-052",
  "disciplina": "Direito Processual Penal",
  "assunto": "Recursos e ações impugnativas",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 52",
  "enunciado": "Assinale a alternativa que traz duas características do recurso de apelação contra sentença condenatória do Tribunal do Júri que, cumuladas, podem levar à atribuição de efeito suspensivo ao referido recurso.",
  "alternativas": [
   "Crime cometido sem violência ou grave ameaça e primariedade do apelante.",
   "Votação não unânime quanto a quesito essencial e excesso de prazo para formação da culpa.",
   "Pleitear reforma de sentença superior a 20 anos e levantar questão substancial, que pode resultar em anulação da sentença.",
   "Interposição por acusado primário e levantar questão substancial, que pode resultar em redução da pena para patamar inferior a 15 (quinze) anos de reclusão.",
   "Não ter propósito meramente protelatório e levantar questão substancial, que pode resultar em absolvição."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-053",
  "disciplina": "Direito Processual Penal",
  "assunto": "Acordo de não persecução penal",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 53",
  "enunciado": "O instituto que, por não possuir expressa vedação de aplicação em favor do agressor nos crimes praticados no âmbito de violência doméstica ou familiar ou praticados contra a mulher por razões da condição de sexo feminino, pode, em tese, ser aplicado é:",
  "alternativas": [
   "acordo de não persecução penal.",
   "composição civil dos danos com respectiva extinção da punibilidade.",
   "suspensão condicional do processo.",
   "aplicação imediata de pena não privativa de liberdade, conhecida como “transação penal”.",
   "suspensão condicional da pena."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-054",
  "disciplina": "Direito Processual Penal",
  "assunto": "Sujeitos do processo",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 54",
  "enunciado": "Veda-se expressamente a aplicação dos benefícios da Lei no 9.099/95 ao acusado do crime de lesão corporal culposa de trânsito, de acordo com o art. 291 do CTB, na seguinte hipótese:",
  "alternativas": [
   "estar o acusado com Carteira Nacional de Habilitação suspensa ou cassada.",
   "não ser o acusado portador de Carteira Nacional de Habilitação.",
   "estar o acusado transitando em veículo com péssimo estado de conservação.",
   "estar o acusado transitando em velocidade superior à máxima permitida para a via em 50 km/h.",
   "evadir-se o acusado do local do acidente."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-055",
  "disciplina": "Direito Civil",
  "assunto": "Pessoas jurídicas",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 55",
  "enunciado": "Henrique, médico, decide criar uma fundação destinada ao financiamento de pesquisas científicas sobre doenças raras. Para tanto, lavra escritura pública, destinando bens imóveis e valores mobiliários à Fundação, e designa, expressamente, três professores universitários como responsáveis pela aplicação do patrimônio e elaboração do estatuto da fundação. Cento e oitenta dias depois, nenhum deles havia apresentado o estatuto. Diante da inércia, o Ministério Público Estadual promove, diretamente, a elaboração do estatuto. Após dois anos de funcionamento, o conselho deliberativo da fundação aprova, por maioria simples, a inclusão de finalidade religiosa entre os objetivos institucionais, desvirtuando o fim previsto originariamente. O novo estatuto é enviado ao Ministério Público para aprovação. Com base no disposto no Código Civil, assinale a alternativa correta.",
  "alternativas": [
   "O Ministério Público deverá denegar a proposta de alteração em razão do desvirtuamento da finalidade original da fundação, bem como pela ausência de quórum mínimo pela aprovação da alteração proposta.",
   "A atuação do Ministério Público na elaboração do estatuto é indevida, pois só se justifica se todos os nomeados formalmente renunciarem ao encargo.",
   "Mesmo tendo sido criada para ter finalidades científicas ou educacionais, é possível a inclusão de atividades religiosas entre seus fins.",
   "O estatuto da fundação poderá ser alterado por decisão da maioria simples dos membros gestores, desde que haja aprovação judicial posterior.",
   "A inércia dos nomeados para elaborar o estatuto impede a constituição da fundação, devendo o patrimônio ser incorporado a outra fundação com finalidade igual ou semelhante."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-056",
  "disciplina": "Direito Civil",
  "assunto": "Responsabilidade civil",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 56",
  "enunciado": "Lara, de 15 anos, estava passeando no shopping com suas amigas quando parte do teto desabou, causando diversas lesões, algumas inclusive com sequelas permanentes. Seus pais, Rodrigo e Camila, ingressaram em juízo com pedido de indenização por danos morais, alegando sofrimento psicológico intenso, prejuízo à rotina familiar e abalo emocional irreversível. O shopping contestou o pedido, sustentando que, como Lara sobreviveu, somente ela poderia pleitear indenização por dano moral, e que seus pais não tinham legitimidade, por ausência de vínculo direto com o evento danoso. Considerando o atual entendimento do Superior Tribunal de Justiça, é correto afirmar que Rodrigo e Camila",
  "alternativas": [
   "poderiam pleitear apenas dano material por ricochete sendo certo que o dano moral diz respeito apenas à pessoa afetada.",
   "podem pleitear indenização por danos morais reflexos, mesmo sem o falecimento de Lara.",
   "têm direito somente à reparação por prejuízos patrimoniais comprovados, sendo certo que Lara pode ser indenizada por danos extrapatrimoniais.",
   "não fazem jus à indenização, uma vez que o ordenamento jurídico brasileiro não reconhece o dano moral por ricochete, salvo nos casos expressamente previstos em lei, como acidentes de trânsito com óbito.",
   "devem demonstrar a dependência econômica entre eles e Lara para que tenham legitimidade para pleitear o dano moral por ricochete."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-aj-057",
  "disciplina": "Direito Civil",
  "assunto": "Direito das coisas",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 57",
  "enunciado": "Para a concessão da usucapião, além de outros requisitos, têm o requisito de",
  "alternativas": [
   "não ser superior a 250 m2 a usucapião especial familiar, especial coletiva e especial urbana.",
   "prazo de cinco anos a usucapião ordinária com prazo reduzido, especial coletiva e especial familiar.",
   "utilizar o imóvel como moradia a usucapião extraordinária e ordinária ambas com prazo reduzido e especial urbana.",
   "boa-fé a usucapião ordinária, especial urbana e especial rural.",
   "não possuir outro imóvel a usucapião extraordinária, especial coletiva e especial familiar."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-058",
  "disciplina": "Direito Civil",
  "assunto": "Sucessões",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 58",
  "enunciado": "Considere as seguintes situações hipotéticas: (i) Cristina foi adotada por Amadeu e Zileide e se apaixonou por Breno, filho biológico do casal, e com ele pretende se casar; (ii) Tânia, cujo marido faleceu há seis meses, pretende se casar com Samuel; (iii) Ronaldo, divorciado de Vanessa, já teve homologada a partilha de bens do casal, pretende se casar com Cláudia; e (iv) Eduardo, irmão do tutor de Maria, no exercício da tutela, pretende com ela se casar. Diante das situações hipotéticas apresentadas, assinale a alternativa que corresponde a uma pessoa suspensa e a uma pessoa impedida de casar, respectivamente.",
  "alternativas": [
   "Cristina e Tânia.",
   "Cristina e Ronaldo.",
   "Tânia e Ronaldo.",
   "Ronaldo e Eduardo.",
   "Eduardo e Cristina."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-059",
  "disciplina": "Direito Civil",
  "assunto": "Sucessões",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 59",
  "enunciado": "Após o falecimento de sua esposa, com quem tinha dois filhos pequenos, Renato estabeleceu nova união estável com Patrícia. Com o passar do tempo, o convívio entre Patrícia e as crianças tornou-se conflituoso. Renato, diante da dificuldade de lidar com a situação, passou a deixar os filhos sob os cuidados de vizinhos e, por fim, entregou-os a uma conhecida que vivia em outra cidade para que ela os adotasse. Essa entrega foi feita sem qualquer autorização judicial ou comunicação ao Ministério Público. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "A perda do poder familiar depende da prévia suspensão judicial do exercício pelo prazo mínimo de 12 (doze) meses.",
   "A entrega dos filhos a terceiros só caracterizaria hipótese de perda do poder familiar se houvesse sentença penal condenatória definitiva.",
   "A nova união estável de Renato, por si só, configura hipótese legal de extinção do poder familiar.",
   "Por meio de ato judicial, ocorrerá a perda do poder familiar.",
   "Ocorrerá a suspensão do poder familiar, que deverá ser requerida exclusivamente pelo Ministério Público."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-060",
  "disciplina": "Direito Civil",
  "assunto": "Família",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 60",
  "enunciado": "Daniela e Gustavo mantiveram união estável por mais de 10 anos, sem qualquer pacto formal sobre o regime de bens. Durante esse período, adquiriram diversos imóveis e mantiveram contas bancárias separadas. Após uma crise no relacionamento, firmaram instrumento particular reconhecendo a existência da união estável desde 2012, com cláusula específica elegendo o regime da separação convencional de bens, incluindo expressamente que os efeitos patrimoniais retroagiriam à data de início da convivência. Meses depois, motivados por uma crise no relacionamento, decidiram pela dissolução da união. Gustavo requereu judicialmente a partilha igualitária dos bens adquiridos desde 2012, e Daniela alegou que, diante do pacto firmado, os bens deveriam ser excluídos da comunhão, com base na retroatividade do regime da separação. Diante da situação hipotética e considerando o atual entendimento do Superior Tribunal de Justiça, assinale a alternativa correta.",
  "alternativas": [
   "A eleição do regime de bens na união estável tem efeitos ex nunc, sendo inválida a cláusula que determina retroatividade sem autorização judicial expressa.",
   "A retroatividade dos efeitos patrimoniais do pacto pode ser reconhecida judicialmente se houver comprovação de que todos os bens foram adquiridos com esforço exclusivo de uma das partes.",
   "A ausência de regime pactuado desde o início da união estável impede qualquer alteração posterior, sendo obrigatória a adoção da comunhão parcial de bens até o fim da convivência.",
   "O regime de bens na união estável, mesmo eleito posteriormente por contrato, retroage à data de início da convivência se houver concordância entre as partes.",
   "O pacto é plenamente válido em todos os seus termos, inclusive quanto à retroatividade dos efeitos patrimoniais, desde que firmado por escritura pública."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-061",
  "disciplina": "Direito Civil",
  "assunto": "Contratos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 61",
  "enunciado": "Juliana apresentou ao Cartório de Registro de Imóveis uma escritura pública de doação de um imóvel urbano, com cláusula de reversão. Rodrigo, o oficial, entendendo que a cláusula era redigida de forma imprecisa e poderia comprometer a segurança jurídica do registro, decidiu suscitar o procedimento de dúvida anotando a sua ocorrência à margem da prenotação no protocolo. Após certificar a prenotação e a suscitação da dúvida no título, rubricou todas as suas folhas e, em seguida, remeteu eletronicamente o título e as razões da dúvida diretamente ao juízo competente. Diante da situação hipotética, é correto afirmar que se Juliana",
  "alternativas": [
   "impugnar a dúvida, e a sentença for julgada procedente, ela, o Ministério Público e eventual terceiro interessado poderão interpor recurso apenas com efeito devolutivo.",
   "impugnar a dúvida e não forem requeridas diligências, o juiz proferirá decisão no prazo de 30 (trinta) dias, com base nos elementos constantes dos autos.",
   "impugnar a dúvida, o Ministério Público será obrigatoriamente ouvido no prazo de 10 (dez) dias.",
   "impugnar a dúvida, o julgamento for improcedente e houver o trânsito em julgado da decisão, Rodrigo deverá automaticamente proceder ao registro, declarando o fato na coluna de anotações do Protocolo.",
   "não impugnar a dúvida no prazo de 15 (quinze) dias, o registro será automaticamente cancelado."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-062",
  "disciplina": "Direito Civil",
  "assunto": "Pessoas naturais e direitos da personalidade",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 62",
  "enunciado": "Roberto é um indivíduo transgênero que, ao longo dos anos, passou por diversos processos de autoconhecimento e afirmação de identidade, até reconhecer-se como uma pessoa não binária, não se identificando nem como homem nem como mulher. Ao tentar retificar seu registro civil para que constasse nome neutro e gênero como “não binário”, deparou-se com resistência do cartório, que alegou inexistência de previsão legal específica para inclusão do gênero neutro nos assentos civis. Diante disso, Roberto ingressou com ação judicial. Intimado, o Ministério Público, de acordo com o atual entendimento do Superior Tribunal de Justiça, deverá se manifestar no sentido de que",
  "alternativas": [
   "a alteração de gênero é permitida apenas para transgêneros binários (homem/mulher).",
   "o princípio do livre desenvolvimento da personalidade e a cláusula geral de proteção à personalidade autorizam a retificação do registro civil para inclusão do gênero neutro, mesmo diante da lacuna legislativa.",
   "a retificação do registro civil para constar gênero neutro respeita a identidade autodeclarada da pessoa e tem por objetivo eliminar o campo de gênero.",
   "para o caso de pessoa não binária não basta a autodeterminação, sendo necessário relatório psicológico ou psiquiátrico.",
   "não é possível a retificação do registro civil para a inclusão de gênero neutro com base no livre desenvolvimento da personalidade, sendo necessário relatório médico para a retificação."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-aj-063",
  "disciplina": "Direito Processual Civil",
  "assunto": "Sentença e coisa julgada",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 63",
  "enunciado": "A empresa B enviou cobrança para a empresa A pela prestação dos serviços de pintura da sua sede. A empresa A ajuizou ação declaratória de inexistência de débito contra a empresa B, alegando que jamais contratou os serviços cobrados. Durante a fase instrutória, a empresa C, responsável por fornecer à empresa B os dados que embasaram a cobrança questionada, ingressou no feito como assistente simples da ré, temendo futura ação regressiva, e passou a atuar ativamente na defesa da validade da cobrança. Próximo ao encerramento da instrução, a empresa B tornou-se revel, não apresentou alegações finais e tampouco compareceu à audiência de instrução e julgamento. A sentença foi desfavorável à empresa B, declarando a inexistência da dívida. A empresa B não recorreu, e a decisão transitou em julgado. Meses depois, a empresa B propôs ação de regresso contra a empresa C, pleiteando indenização pelos prejuízos causados pela cobrança indevida. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "Em razão da revelia da empresa B, a empresa C será considerada sua substituta processual e, em caso de condenação do assistido, poderá discutir a justiça da decisão em ação posterior, se desconhecia a existência de provas das quais o assistido, por dolo ou culpa, não se valeu.",
   "A empresa C, por ter atuado como assistente, sujeita-se à coisa julgada formada entre as empresas A e B, não podendo, inclusive, discutir a justiça da decisão em processo anterior.",
   "A omissão da empresa B impede a substituição processual pela empresa C, exigindo autorização judicial expressa para tanto.",
   "Por se tratar de assistência simples e por haver revelia da empresa B, a empresa C não poderia ter apresentado recurso na ação principal em nome próprio.",
   "A empresa C poderá rediscutir a justiça da decisão anterior apenas se não tiver sido intimada pessoalmente da sentença."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-064",
  "disciplina": "Direito Processual Civil",
  "assunto": "Recursos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 64",
  "enunciado": "Lucas estava em um cruzamento quando um ônibus da empresa ABC colidiu com o seu veículo. Em razão do grave acidente, Lucas ficou uma semana internado em hospital e teve perda total em seu veículo. Já recuperado, ele ajuizou ação de indenização por danos morais e por danos materiais relativos à perda total do seu veículo. Citada, a empresa ABC apresentou contestação, e o juiz julgou a sentença totalmente procedente, condenando a empresa a pagar o valor dos danos morais, bem como os danos materiais relativos ao veículo. O trânsito em julgado da sentença ocorreu sem interposição de recursos. Dois anos depois, Lucas ingressou com nova ação contra a mesma empresa ABC, dessa vez pleiteando valores relativos à sua internação no hospital que não foram requeridos inicialmente por opção estratégica de sua defesa. Citada, a empresa ABC contestou, alegando coisa julgada e preclusão, sustentando que Lucas deveria ter pleiteado todos os danos no primeiro processo. Com base na situação hipotética e no atual entendimento do Superior Tribunal de Justiça, assinale a alternativa correta.",
  "alternativas": [
   "A nova ação de Lucas está acobertada pela coisa julgada, pois os danos materiais decorreram dos mesmos fatos tratados na primeira ação.",
   "A ausência de pedido expresso na primeira ação impede a rediscussão posterior, por configurar preclusão consumativa.",
   "A segunda ação só seria admissível se a primeira não tivesse transitado em julgado.",
   "É o caso de preclusão lógica, uma vez que, ainda que os pedidos sejam distintos, há identidade das partes e dos fatos.",
   "Não é o caso de preclusão, uma vez que o pedido foi omitido por opção ou estratégia processual."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-065",
  "disciplina": "Direito Processual Civil",
  "assunto": "Sujeitos do processo",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 65",
  "enunciado": "Júlio faleceu, e, durante o inventário de seus bens, o credor Antônio apresentou pedido de pagamento de dívida vencida e exigível no valor de R$ 60 mil, juntando documento assinado pelo falecido. Todas as partes concordaram com o pedido. Como o espólio não possuía dinheiro em conta bancária, o juiz determinou a separação de um imóvel de valor compatível para garantir o pagamento. No andamento do processo, Antônio requereu que, em vez da alienação judicial do imóvel, o bem fosse adjudicado diretamente a ele, para quitação do valor devido. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "O pedido de Antônio deve ser remetido às vias ordinárias, pois o juiz não pode decidir sobre adjudicação no inventário.",
   "O juiz poderá deferir a adjudicação do bem, desde que todas as partes concordem com o pedido.",
   "A adjudicação do bem a Antônio só pode ser deferida se o espólio não tiver bens móveis disponíveis.",
   "A adjudicação é cabível apenas se o valor do bem for idêntico ao valor da dívida.",
   "O juiz deve negar o pedido de adjudicação e determinar a alienação do bem como regra geral, independentemente da vontade das partes."
  ],
  "correta": 1
 },
 {
  "id": "mpsp25-aj-066",
  "disciplina": "Direito Processual Civil",
  "assunto": "Tutela provisória",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 66",
  "enunciado": "Marina ajuizou ação de guarda e regulamentação de visitas contra seu ex-companheiro, Rodrigo, em favor do filho deles, de 5 anos. A petição inicial foi protocolada com pedido de tutela provisória para suspensão imediata das visitas paternas, com fundamento em alienação parental. O juiz, após apreciar o pedido liminar, designou audiência de mediação e conciliação, citando Rodrigo com quinze dias de antecedência, sem cópia da petição inicial, mas com a informação de local, data e hora da audiência. Antes da audiência, o juiz indagou às partes e ao Ministério Público sobre risco de violência doméstica ou familiar e concedeu prazo para apresentação de provas. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "A participação do Ministério Público somente será obrigatória se houver indícios de violência doméstica ou familiar, tendo em vista que guarda e visitas podem ser objeto de autocomposição.",
   "A citação foi nula, pois Rodrigo não foi intimado com cópia da petição inicial, o que ofende o contraditório.",
   "Na audiência de mediação e conciliação, não é necessário que as partes estejam acompanhadas de seus advogados ou defensores públicos.",
   "Sendo ação de guarda e visitas, o juiz deveria aplicar o procedimento comum, pois não se trata de relação patrimonial passível de autocomposição.",
   "O juiz agiu corretamente ao indagar sobre risco de violência doméstica antes da audiência e ao conceder prazo para apresentação de provas."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-067",
  "disciplina": "Direito Processual Civil",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 67",
  "enunciado": "Romeu faleceu aos 72 anos, deixando bens imóveis e dinheiro em conta bancária. Não deixou testamento conhecido, e nenhum parente ou herdeiro foi localizado até o momento. Diante da situação hipotética, considerando a existência de credores contra Romeu, é correto afirmar que o juiz poderá autorizar a alienação de",
  "alternativas": [
   "objetos de uso pessoal, livros e obras de arte, antes da declaração de vacância, se forem valiosos e suficientes à satisfação dos débitos do falecido.",
   "todos os bens imóveis que ameaçarem ruína, mesmo sendo conveniente a sua reparação.",
   "todos os bens móveis.",
   "títulos e papéis de crédito, havendo fundado receio de depreciação.",
   "bens semoventes, quando empregados na exploração de alguma indústria."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-068",
  "disciplina": "Direito Processual Civil",
  "assunto": "Recursos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 68",
  "enunciado": "Carlos sofre de quadro demencial progressivo, com diagnóstico médico recente de doença de Alzheimer em estágio moderado. Mora sozinho, encontra-se sem rede de apoio e, nos últimos meses, passou a tomar decisões financeiras comprometedoras, como transferir recursos vultosos a pessoas desconhecidas. O Ministério Público, diante da situação, propõe ação de interdição, instruída com laudo médico particular e documentos bancários que demonstram risco à integridade patrimonial de Carlos. O juiz designa entrevista judicial com Carlos, mas ele não comparece por incapacidade de deslocamento, então o magistrado ouve-o em sua residência. Durante a tramitação do processo, Carlos não constitui advogado nem apresenta impugnação no prazo legal, tendo sido nomeado um curador especial. Em seguida, o juiz determina produção de prova pericial por equipe multidisciplinar, cujo laudo conclui pela necessidade de curatela parcial para atos patrimoniais e negociais. Por fim, o juiz, em sentença, decreta a interdição parcial, nomeia curador e fixa os limites da curatela. Diante da situação hipotética, assinale a alternativa correta.",
  "alternativas": [
   "O juiz não poderia decretar interdição parcial sem a concordância expressa de Carlos, pois essa modalidade exige manifestação de vontade válida.",
   "A falta de manifestação de Carlos impede o prosseguimento e exige a extinção do processo sem resolução de mérito, salvo se houver parente que possa intervir como assistente litisconsorcial.",
   "O Ministério Público é parte ilegítima para propor interdição se houver familiares vivos, ainda que inertes.",
   "A ausência de Carlos à entrevista autoriza sua oitiva no local onde estiver, sendo legítima a decretação da interdição parcial com base em prova pericial e demais elementos dos autos.",
   "A sentença de interdição parcial tem validade a partir da averbação no registro civil, independentemente de publicação."
  ],
  "correta": 3
 },
 {
  "id": "mpsp25-aj-069",
  "disciplina": "Direito Processual Civil",
  "assunto": "Recursos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 69",
  "enunciado": "Após a prolação de sentença desfavorável, a empresa XYZ opôs embargos de declaração, alegando omissão quanto a um dos pedidos formulados na petição inicial. Três dias depois do protocolo, mas ainda antes do julgamento dos embargos, a empresa protocolou pedido de desistência dos embargos, que foi homologado judicialmente. Passados dez dias da homologação da desistência, a empresa XYZ interpôs apelação da sentença. O Ministério Público, intimado nos autos como fiscal da ordem jurídica, manifestou-se pela ocorrência de preclusão temporal, alegando que o prazo para apelar não foi interrompido pelos embargos, pois o pedido de desistência foi homologado. Diante da situação hipotética, considerando o entendimento do Superior Tribunal de Justiça, assinale a alternativa correta.",
  "alternativas": [
   "Os embargos de declaração interrompem o prazo recursal para todas as partes do processo, e posterior desistência não interfere nesse efeito.",
   "A homologação da desistência dos embargos de declaração reinicia o prazo recursal para todas as partes, inclusive o Ministério Público, independentemente de quem recorreu.",
   "A desistência dos embargos de declaração impede o reconhecimento da interrupção do prazo recursal para quem desistiu, de modo que a apelação interposta após o prazo original é intempestiva.",
   "Havendo desistência dos embargos de declaração, o prazo para apelação continua a ser contado de onde parou, caracterizando suspensão do prazo recursal.",
   "A interposição dos embargos de declaração, ainda que seguida de desistência, interrompe o prazo recursal, reabrindo novo prazo de 15 (quinze) dias para apelação a partir da homologação."
  ],
  "correta": 2
 },
 {
  "id": "mpsp25-aj-070",
  "disciplina": "Direito Processual Civil",
  "assunto": "Sujeitos do processo",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 70",
  "enunciado": "Acerca das técnicas de distinção (distinguishing) e superação (overruling), utilizadas em sede de precedentes judiciais, assinale a alternativa correta.",
  "alternativas": [
   "As normas sobre fundamentação adequada quanto à distinção e superação e sobre a observância somente dos argumentos submetidos ao contraditório são aplicáveis a todo o microssistema de formação de precedentes.",
   "O precedente vinculante não será seguido quando o juiz ou o tribunal distinguir o caso sob julgamento, dispensando-se a fundamentação quando o distinguishing ocorrer por meio de órgão colegiado.",
   "Cabe ao juiz identificar os fundamentos determinantes ou demonstrar a existência de distinção no caso em julgamento ou a superação do entendimento, sempre que uma das partes invocar jurisprudência, precedente ou enunciado de súmula.",
   "A realização da distinção compete ao órgão jurisdicional de origem do precedente invocado.",
   "A decisão que aplica a tese jurídica firmada em julgamento de casos repetitivos precisa enfrentar os fundamentos já analisados na decisão paradigma."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-093",
  "disciplina": "Direitos Humanos e Acessibilidade",
  "assunto": "Direitos humanos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 93",
  "enunciado": "A respeito do Sistema Interamericano, assinale a alternativa correta.",
  "alternativas": [
   "O Sistema Interamericano tem como principal instrumento a Convenção Americana de Direitos Humanos de 1949, que criou a Comissão e a Corte Interamericana de Direitos Humanos.",
   "A Convenção Americana de Direitos Humanos, em sua redação original, enunciou de forma específica diversos direitos sociais, culturais e econômicos e conta hoje com apenas 19 Estados-partes.",
   "Uma das maiores críticas à Convenção Americana de Direitos Humanos é a ausência de um aparato de monitoramento e implementação dos diversos direitos nela consagrados.",
   "Um Estado parte da Convenção pode não aceitar a competência da Comissão para examinar comunicações encaminhadas por indivíduos denunciando violações a direitos humanos contra ele próprio, em virtude da soberania garantida a cada ente.",
   "A Comissão Interamericana de Direitos Humanos é integrada por sete membros, eleitos pela Assembleia Geral por um período de quatro anos, podendo ser reeleitos apenas uma vez."
  ],
  "correta": 4
 },
 {
  "id": "mpsp25-aj-094",
  "disciplina": "Direitos Humanos e Acessibilidade",
  "assunto": "Direitos humanos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 94",
  "enunciado": "A respeito do Sistema Único de Assistência Social (SUAS), é correto afirmar que",
  "alternativas": [
   "ele tem como um dos seus objetivos estabelecer as responsabilidades dos entes federativos na organização, regulação, manutenção e expansão das ações de assistência social.",
   "o SUAS tem como um dos principais objetivos integrar a rede pública de serviços, programas, projetos e benefícios de assistência social, o que não se aplica à rede privada, diante do seu caráter eminentemente público.",
   "ele é considerado um sistema que, apesar de ser centralizado na União, conta com a participação dos demais entes federados que a ele aderirem expressamente.",
   "atua com o objetivo exclusivo de proteger a família, a infância e a velhice, evitando a dispersão de ações em áreas de responsabilidade de outros setores da assistência social.",
   "compete à instância decisória da Política Nacional de Assistência Social normatizar e padronizar o emprego e a divulgação da identidade visual do SUAS."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-095",
  "disciplina": "Direitos Humanos e Acessibilidade",
  "assunto": "Direitos humanos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 95",
  "enunciado": "Em relação à discriminação estrutural e à discriminação institucional, assinale a alternativa correta.",
  "alternativas": [
   "A discriminação institucional pode ser caracterizada tanto por ações comissivas, como omissivas.",
   "Diferentemente da discriminação estrutural, a discriminação institucional ocorre abertamente, podendo ser atribuída às atitudes de indivíduos específicos, confundindo-se com o sentido tradicional atribuído ao termo discriminação.",
   "Um ponto convergente entre a discriminação estrutural e a institucional, é que ambas se caracterizam inexoravelmente pela clara intenção de discriminar.",
   "Em decorrência do conceito de discriminação institucional, a doutrina predominante assegura que ela assume uma única forma, qual seja, a da discriminação direta.",
   "Conceitualmente, a discriminação institucional origina-se de relações assimétricas de poder dentro das instituições públicas, não tendo qualquer relação com as instituições privadas."
  ],
  "correta": 0
 },
 {
  "id": "mpsp25-aj-096",
  "disciplina": "Direitos Humanos e Acessibilidade",
  "assunto": "Direitos humanos",
  "fonte": "VUNESP 2025 · MPSP · Analista Jurídico do Ministério Público · Questão 96",
  "enunciado": "Suponha que Jorge é plenamente capaz, tem setenta e cinco anos, está com câncer bucal e com dificuldades de locomoção, em razão da sua idade avançada. Ele começou o tratamento da sua doença na rede privada de saúde e estava em internação domiciliar, no entanto, por problemas financeiros, precisou cancelar o seu plano de saúde e buscou atendimento no SUS – Sistema Único de Saúde. Com base na situação hipotética apresentada e no disposto na Lei no 8.080/1990, é correto afirmar:",
  "alternativas": [
   "como Jorge tem mais de setenta anos, ainda que no âmbito do Sistema Único de Saúde não haja previsão de internação domiciliar, o município em que ele reside deverá custear sua internação domiciliar, para que não ocorra retrocesso no direito fundamental à dignidade humana.",
   "é possível que haja a internação domiciliar de Jorge no âmbito do SUS, o qual depende de indicação médica, com expressa concordância dele e de sua família.",
   "como compete à direção estadual do SUS coordenar e, prioritariamente, executar as ações e serviços de saúde bucal, Jorge deverá primeiro procurar uma entidade hospitalar estadual.",
   "já que Jorge ainda não tem oitenta anos, não há previsão de atendimento e internação domiciliar no âmbito do SUS, devendo ele se dirigir até a unidade básica de saúde para realizar o tratamento da sua enfermidade.",
   "em que pese a situação enfrentada por Jorge, a saúde bucal não está mais incluída no campo de atuação do SUS."
  ],
  "correta": 1
 },
 {
  "id": "spcine24-aj-001",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Interpretação de texto",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 1",
  "textoId": "spcine24-aj-t10",
  "enunciado": "Segundo as informações do texto, 2024 é um ano relevante para o cinema nacional por",
  "alternativas": [
   "exibir três filmes com mais de 1 milhão de espectadores cada um, recorde que foi ultrapassado só no ano de eclosão da pandemia.",
   "resgatar a Lei de Cotas de Telas, responsável por estabelecer o número mínimo de 212 filmes nacionais a serem exibidos nos cinemas neste ano.",
   "alcançar, ainda em setembro, a meta de faturamento do ano todo, com renda de 142 milhões de reais, maior do que a receita conjunta dos últimos quatro anos.",
   "representar uma recuperação de audiência e faturamento em relação aos últimos quatro anos, com os melhores números de bilheteria desde a pandemia de covid-19.",
   "apresentar recorde histórico de público, uma vez que os números de bilheteria, em setembro deste ano, já ultrapassavam a marca de 7,4 milhões de espectadores."
  ],
  "correta": 3
 },
 {
  "id": "spcine24-aj-002",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Regência",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 2",
  "textoId": "spcine24-aj-t10",
  "enunciado": "Leia os trechos a seguir:\n• \u0007“  Mesmo antes do fim do ano, os dados são animadores.” (2o parágrafo)\n• \u0007“ Em termos de renda, 2024 já é o melhor ano desde a eclosão da pandemia de covid-19.” (3o parágrafo) Considerando o sentido com que foram empregados nos trechos, os termos destacados têm como sinônimo e antônimo, respectivamente:",
  "alternativas": [
   "favoráveis; término.",
   "prósperos; declaração.",
   "consoladores; origem.",
   "consternadores; situação.",
   "inusitados; cessação."
  ],
  "correta": 0
 },
 {
  "id": "spcine24-aj-003",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Figuras e vícios de linguagem",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 3",
  "textoId": "spcine24-aj-t10",
  "enunciado": "Em relação ao emprego de sentido próprio ou figurado das palavras, é correto afirmar que, no trecho do",
  "alternativas": [
   "1o parágrafo “2024 caminha para entrar para a história”, o verbo “caminha” foi empregado em sentido próprio, com significado de “avançar”, “seguir”.",
   "1o parágrafo “o termo retomada entrou em cena”, a expressão “entrar em cena” foi empregada em sentido próprio, referindo-se a termo próprio do cinema.",
   "2o parágrafo “… chegaram às telonas 281 produções”, o substantivo “telonas” foi empregado em sentido próprio, significando “a arte cinematográfica”.",
   "3o parágrafo “filmes que atraíram uma multidão”, o substantivo “multidão” foi empregado em sentido figurado para se referir a um grupo de pessoas.",
   "5o parágrafo “O filme, que faturou o prêmio de Melhor Roteiro”, o verbo “faturou” foi empregado em sentido figurado, com significado de “ganhar”."
  ],
  "correta": 4
 },
 {
  "id": "spcine24-aj-004",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 4",
  "textoId": "spcine24-aj-t10",
  "enunciado": "No trecho do 5o parágrafo “... o que não ocorre desde 1999, com Central do Brasil, também de Walter Salles.”, a expressão destacada refere-se ao fato de",
  "alternativas": [
   "um filme brasileiro ganhar o Oscar de Melhor Filme Estrangeiro.",
   "o Brasil concorrer ao Oscar na categoria de Melhor Filme Estrangeiro.",
   "Walter Salles concorrer como melhor diretor na premiação do Oscar.",
   "Walter Salles não ter lançado nenhum outro filme depois de Central do Brasil.",
   "um filme brasileiro ganhar o prêmio de Melhor Roteiro no Festival de Veneza."
  ],
  "correta": 1
 },
 {
  "id": "spcine24-aj-005",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 5",
  "textoId": "spcine24-aj-t10",
  "enunciado": "No trecho “Se, de um lado, as produções parecem ter atraído mais público, houve também a retomada da Lei de Cotas de Telas” (4o parágrafo), os termos destacados indicam, correta e respectivamente,",
  "alternativas": [
   "condição e inclusão.",
   "concessão e oposição.",
   "condição e oposição.",
   "concessão e igualdade.",
   "consequência e inclusão."
  ],
  "correta": 0
 },
 {
  "id": "spcine24-aj-006",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Pontuação",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 6",
  "textoId": "spcine24-aj-t10",
  "enunciado": "Assinale a alternativa em que o trecho “A legislação, que dispõe sobre o número mínimo de filmes brasileiros que devem ser exibidos nos cinemas, voltou a entrar em vigor no último mês de julho.” (4o parágrafo) está reescrito conforme o emprego adequado de preposição e pontuação.",
  "alternativas": [
   "No último mês de julho, voltou a entrar em vigor a legislação sob o número mínimo de filmes brasileiros, a serem exibidos nos cinemas.",
   "No último mês de julho, voltou a entrar em vigor, a legislação perante o número mínimo de filmes brasileiros a serem exibidos nos cinemas.",
   "Voltou a entrar em vigor, no último mês de julho, a legislação a respeito do número mínimo de filmes brasileiros a serem exibidos nos cinemas.",
   "Voltou, a entrar em vigor, no último mês de julho a legislação contra o número mínimo de filmes brasileiros a serem exibidos nos cinemas.",
   "Voltou a entrar em vigor, no último mês de julho a legislação ante o número mínimo de filmes brasileiros, a serem exibidos nos cinemas."
  ],
  "correta": 2
 },
 {
  "id": "spcine24-aj-007",
  "disciplina": "Língua Portuguesa e Raciocínio Analítico",
  "assunto": "Concordância",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 7",
  "textoId": "spcine24-aj-t10",
  "enunciado": "O trecho “Ao todo, já foram exibidos 212 títulos nacionais nos cinemas. O número tende a crescer, com as estreias de Passagrana e de Silvio.” (2o parágrafo) está corretamente reescrito conforme a norma-padrão de concordância e colocação pronominal em:",
  "alternativas": [
   "Já exibiu-se 212 títulos nacionais ao todo, mas, com as estreias Passagrana e de Silvio, ainda se aumentará mais esses números.",
   "Exibiu-se já 212 títulos nacionais ao todo, mas, com as estreias de Passagrana e de Silvio, ainda se aumentará mais esses números.",
   "Já se exibiram 212 títulos nacionais ao todo, mas, com as estreias Passagrana e de Silvio, ainda aumentar-se-ão mais esses números.",
   "Se exibiram já 212 títulos nacionais ao todo, mas, com as estreias de Passagrana e de Silvio, ainda aumentarão-se mais esses números.",
   "Exibiram-se já 212 títulos nacionais ao todo, mas, com as estreias de Passagrana e de Silvio, ainda se aumentarão mais esses números."
  ],
  "correta": 4
 },
 {
  "id": "spcine24-aj-011",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Lógica proposicional e argumentação",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 11",
  "enunciado": "Juliana praticou caminhada em quatro dias. A cada novo dia, Juliana caminhava o equivalente ao tempo gasto no dia anterior acrescido da terça parte desse tempo. No quarto dia, Juliana caminhou 64 minutos. É correto afirmar que o tempo total gasto nas caminhadas do primeiro e do segundo dia supera o tempo gasto na caminhada do terceiro dia em",
  "alternativas": [
   "15 minutos.",
   "16 minutos.",
   "18 minutos.",
   "20 minutos.",
   "21 minutos."
  ],
  "correta": 0
 },
 {
  "id": "spcine24-aj-012",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Porcentagem",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 12",
  "enunciado": "Um lojista de telefones celulares vendeu 41 aparelhos iguais do seguinte modo:\n• \u0007Preço inicial de R$ 2.000,00.\n• \u0007Cada vez que são vendidos dez aparelhos, o preço vigente é reduzido em 10%. Realizadas as vendas dos 41 aparelhos dessa maneira, o total arrecadado pelo lojista, com essas vendas, foi igual a",
  "alternativas": [
   "R$ 68.781,20.",
   "R$ 70.092,20.",
   "R$ 71.404,20.",
   "R$ 74.682,20.",
   "R$ 81.902,20."
  ],
  "correta": 1
 },
 {
  "id": "spcine24-aj-013",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Razão, proporção e problemas",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 13",
  "enunciado": "Uma fábrica produz os produtos A, B e C em três máquinas distintas. Cada unidade do produto A fica pronta em 4 minutos; cada unidade do produto B fica pronta em 7 minutos; e cada unidade do produto C fica pronta em 9 minutos, e as unidades prontas desses três produtos vão sendo deixadas próximo às respectivas máquinas. Essas máquinas iniciam a produção simultaneamente e cada vez que duas, ou mais, dessas máquinas aprontam seus respectivos produtos ao mesmo tempo, um funcionário coloca as unidades já produzidas, por essas duas máquinas, em uma embalagem comum, e o processo continua. Trabalhando dessa maneira e imediatamente após a produção da 25a unidade do produto A, é correto afirmar que não estão embaladas em embalagem comum uma quantidade total de produtos igual a",
  "alternativas": [
   "6.",
   "7.",
   "8.",
   "9.",
   "10. r u n h o"
  ],
  "correta": 3
 },
 {
  "id": "spcine24-aj-014",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Associação lógica e ordenação",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 14",
  "enunciado": "Um produtor publicitário tem à sua disposição os tempos de 1 hora 12 minutos, 56 minutos, 1 hora e 28 minutos, 48 minutos, e 1 hora e 4 minutos, para a divulgação de um produto. Ele quer dividir todos esses tempos em períodos, de mesma duração, de modo a ter o menor número de períodos de tempo possível. Realizada a divisão dessa maneira, o número total de períodos de tempo que esse produtor obterá é igual a",
  "alternativas": [
   "36.",
   "37.",
   "41.",
   "48.",
   "53."
  ],
  "correta": 2
 },
 {
  "id": "spcine24-aj-015",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Razão, proporção e problemas",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 15",
  "enunciado": "Paulo tem duas filhas: Laura e Manuela. A soma das idades dos três é 81 anos. A razão entre a soma das idades de Laura e Manuela e a idade de Paulo é 11/16, e a razão entre as idades das filhas é 6/5. Com essas informações, é correto afirmar que a diferença entre as idades das filhas de Paulo é de",
  "alternativas": [
   "8 anos.",
   "6 anos.",
   "5 anos.",
   "4 anos.",
   "3 anos."
  ],
  "correta": 4
 },
 {
  "id": "spcine24-aj-016",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Porcentagem",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 16",
  "enunciado": "Um depósito mantém estocados 240 unidades do produto A e 382 unidades do produto B. O gerente vai comprar o mesmo número de unidades do produto A e do produto B para aumentar o estoque. A condição é que, após essa compra, a quantidade de unidades do produto B, em estoque, seja 40% maior do que a quantidade do produto A em estoque. O gerente deverá comprar um número de unidades de cada produto que pertence ao intervalo entre",
  "alternativas": [
   "104 e 111.",
   "111 e 118.",
   "118 e 125.",
   "125 e 132.",
   "132 e 139."
  ],
  "correta": 1
 },
 {
  "id": "spcine24-aj-017",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Razão, proporção e problemas",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 17",
  "enunciado": "Um reservatório de água, inicialmente vazio, possui a capacidade de 16 400 litros. Nesse reservatório, estão instaladas 5 torneiras, com mesma vazão, que são utilizadas para enchê-lo. Certo dia, foram abertas, ao mesmo tempo, 2 dessas torneiras para começar a encher o tanque, e verificou-se que, após 45 minutos, o tanque já tinha sido preenchido com 1 800 litros. Nesse momento, foram abertas as outras 3 torneiras e, desse modo, as 5 torneiras juntas terminaram de encher o tanque em mais",
  "alternativas": [
   "2 horas e 6 minutos.",
   "2 horas e 13 minutos.",
   "2 horas e 18 minutos.",
   "2 horas e 21 minutos.",
   "2 horas e 26 minutos. r u n h o"
  ],
  "correta": 4
 },
 {
  "id": "spcine24-aj-018",
  "disciplina": "Raciocínio Lógico-Matemático",
  "assunto": "Contagem e probabilidade",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 18",
  "enunciado": "Em uma modalidade esportiva, o torneio é realizado com partidas de cada participante jogando contra todos os outros em três turnos: uma vez no seu estádio, outra vez no estádio do adversário, e uma terceira vez em um estádio neutro. No torneio de 2024, foram realizadas, ao todo, 408 partidas. O número de participantes do torneio, em 2024, foi um número entre",
  "alternativas": [
   "6 e 10.",
   "10 e 14.",
   "14 e 18.",
   "18 e 20.",
   "20 e 24."
  ],
  "correta": 2
 },
 {
  "id": "spcine24-aj-021",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Excel",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 21",
  "enunciado": "Por meio do Explorador de Arquivos do MS-Windows 10, ambos em configuração padrão, um usuário acessou uma pasta local em seu computador, chamada projeto_especial, contendo diversos arquivos de diferentes formatos, sendo formatos de áudio, de vídeo, de texto simples, planilhas eletrônicas com listagens de custos do projeto, apresentações de slides, entre outros. Em seguida, para criar um arquivo de formato Zip com alguns desses arquivos, o usuário selecionou os arquivos desejados e, com o botão secundário do mouse, clicou em um dos arquivos selecionados e escolheu, no menu de contexto que se abriu, a opção       , seguida da opção       . Assinale a alternativa que preenche, correta e respectivamente, as lacunas do enunciado.",
  "alternativas": [
   "Criar ... pasta compactada",
   "Criar ... arquivo zip",
   "Arquivos ... compactar",
   "Enviar para ... arquivo zip",
   "Enviar para ... Pasta compactada"
  ],
  "correta": 4
 },
 {
  "id": "spcine24-aj-022",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Word",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 22",
  "enunciado": "Para preparar um documento no MS-Word 2016, em sua configuração padrão, representando um dossiê contendo a história de um artista, um usuário iniciou um novo documento vazio, e executou as seguintes ações: Digitou o texto do primeiro parágrafo. Pressionou o botão Centralizar. Digitou Enter. Digitou o texto do segundo parágrafo. Pressionou o botão Negrito. Digitou Enter. Digitou o texto do terceiro parágrafo. Pressionou o botão Justificar. Digitou Enter. Digitou o texto do quarto parágrafo. Pressionou o botão Itálico. Digitou Enter. Digitou o texto do quinto parágrafo. Pressionou o botão Negrito. Após todas as ações descritas, o número de parágrafos centralizados e o número de parágrafos cujo texto aparece em negrito são, respectivamente,",
  "alternativas": [
   "1 e 2.",
   "2 e 2.",
   "2 e 3.",
   "3 e 2.",
   "3 e 3."
  ],
  "correta": 2
 },
 {
  "id": "spcine24-aj-024",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "PowerPoint",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 24",
  "enunciado": "Ao preparar uma apresentação por meio do MS-PowerPoint 2016, em sua configuração padrão, um usuário criou 6 slides, numerados de 1 a 6, sem nenhuma animação. Configurou os slides 1 e 4 como ocultos. Iniciou a apresentação por meio do atalho F5. Em seguida, pressionou a tecla Enter, seguida de Seta para a direita, depois PgDn e, por fim, Seta para Cima. Após todas essas ações mencionadas, é correto afirmar que a apresentação",
  "alternativas": [
   "estará exibindo o slide de número 6.",
   "estará exibindo o slide de número 5.",
   "estará exibindo o slide de número 4.",
   "estará exibindo o slide de número 3.",
   "terá sido finalizada."
  ],
  "correta": 1
 },
 {
  "id": "spcine24-aj-025",
  "disciplina": "Informática, IA e Inovação",
  "assunto": "Internet e navegadores",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 25",
  "enunciado": "Um usuário estava consultando informações sobre um artista em uma página da internet por meio do Google Chrome, versão 129, em sua configuração padrão. Resolveu adicionar a página aos favoritos. O atalho por teclado usado para salvar a página atual como um favorito é:",
  "alternativas": [
   "Ctrl + D",
   "Ctrl + F",
   "Ctrl + H",
   "Ctrl + J",
   "Ctrl + A"
  ],
  "correta": 0
 },
 {
  "id": "spcine24-aj-026",
  "disciplina": "Direito Constitucional",
  "assunto": "Poder Judiciário",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 26",
  "enunciado": "Considere que o Município de São Paulo celebrou contrato administrativo “guarda-chuva” com empresa pública municipal, que tem por objetivo o desenvolvimento de projetos na área de cultura e imagem-som, para a promoção da Cidade nacional e internacionalmente. O contrato define, em termos gerais, como será o relacionamento entre a empresa pública e a Administração Direta, autorizando o gestor público a emitir ordens de serviços para a empresa, que poderá desenvolver as suas atividades e ser remunerada ao final, com a entrega de produtos que comprovem a prestação dos serviços. Uma equipe técnica do Tribunal de Contas, ao apreciar o processo de contratação, considerou que o modelo não seria regular e, portanto, seria necessária a sua imediata anulação, com a recomendação de aplicação de sanção pessoal contra os agentes públicos signatários do contrato; sugestões que foram acatadas pelo órgão colegiado da Corte. Com base na situação hipotética e no disposto na Constituição Federal, é correto afirmar que",
  "alternativas": [
   "a decisão está correta, pois o Tribunal de Contas tem a competência para ordinariamente anular contratos administrativos, quando identifica a prática de irregularidades.",
   "a responsabilidade dos agentes públicos, pela prática dos ilícitos, pode ser imputada pela Corte e será objetiva, tendo como resultado a constituição de um título executivo extrajudicial.",
   "a decisão está incorreta, pois embora o Tribunal de Contas tenha a competência cautelar para suspender processos licitatórios, não dispõe, de acordo com a literalidade da Constituição Federal, de atribuição para anular diretamente contratos administrativos.",
   "a decisão está correta, pois o Tribunal de Contas tem o poder para aplicar sanções e anular diretamente contratos administrativos, sem que os processos precisem ser precedidos de contraditório e ampla defesa.",
   "a decisão está correta e a decisão da Corte que fixar a multa terá a natureza jurídica de título executivo judicial, cujo processo de cobrança deverá ser proposto pelo Ministério Público de Contas ou Estadual."
  ],
  "correta": 2
 },
 {
  "id": "spcine24-aj-027",
  "disciplina": "Direito Constitucional",
  "assunto": "Poderes Legislativo e Executivo",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 27",
  "enunciado": "Maria é empregada pública e, após preenchidos os requisitos legais e regular processo administrativo, passou a gozar de aposentadoria por tempo de contribuição. Muito feliz com a sua conquista, levou um bolo para a empresa, para comemorar com seus colegas de trabalho, pois pretendia cumular o salário com o valor dos proventos. João, analista jurídico da empresa, apesar de ter uma especial afeição por ela, entende que Maria não poderá continuar vinculada a empresa, pois o ato de aposentação se deu após o início de vigência da Emenda Constitucional no 103/2019, o que o leva a recomendar que o setor de recursos humanos promova o desligamento, o que é feito. Extremamente chateada, sentindo-se traída por todos e nutrindo um sentimento de injustiça, especialmente por saber que outros colegas na mesma situação se aposentaram há algum tempo e permaneceram exercendo suas funções, cumulando os proventos de aposentadoria e salário, decide procurar um advogado e propor reclamação trabalhista, para anular o ato de demissão, pedir o pagamento da remuneração relativa ao período em que esteve afastada do emprego, bem como indenização em danos morais. A ação foi distribuída na XX Vara do Trabalho de São Paulo/SP. Com base na situação hipotética e no disposto na Constituição Federal, é correto afirmar que",
  "alternativas": [
   "a ação foi proposta no juízo correto, pois a natureza do ato de demissão de empregado público está relacionada a sua relação de emprego, o que atrai a competência da Justiça do Trabalho para julgar a ação.",
   "a decisão da empresa está correta, pois a EC 103/2019 impõe o rompimento do vínculo de emprego que gerou o tempo de contribuição, mas isso não autoriza a estender a aplicação da regra constitucional para aposentadorias concedidas antes do início de vigência da modificação constitucional.",
   "a decisão da empresa está correta e todos os demais empregados da empresa, que tenham aposentadoria relacionada a tempo de contribuição obtido na instituição, deverão ser dela desvinculados, independentemente do momento em que realizado o ato de aposentação.",
   "a ação foi proposta no foro incorreto, pois as ações envolvendo empregados públicos devem ser apreciadas pela Justiça Comum. Além disso, Maria não pode ser contratada, pela mesma empresa, para ocupar um emprego em comissão.",
   "a decisão está incorreta e Maria deverá ser reintegrada, pois a aposentadoria por contribuição não é prevista na Constituição Federal como causa de extinção do vínculo de emprego. A decisão deve ser tomada, contudo, pela Justiça Comum."
  ],
  "correta": 1
 },
 {
  "id": "spcine24-aj-028",
  "disciplina": "Direito Constitucional",
  "assunto": "Direitos e garantias fundamentais",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 28",
  "enunciado": "A respeito do direito fundamental à imagem e as suas dimensões, assinale a alternativa correta.",
  "alternativas": [
   "O direito à imagem tem por objeto tanto a proteção da reputação ou da honra pessoal, como também a proteção de sua imagem física e de suas diversas manifestações.",
   "Na sua dimensão positiva, o direito à imagem implica em prestações de proteção do Estado, especialmente na esfera da organização e procedimento, além da proteção judiciária.",
   "A titularidade do direito à imagem, naquilo em que está em causa da representação da figura física de alguém, não é exclusiva de pessoas físicas.",
   "O direito à imagem pode ser violado pela captação, sem a devida autorização, de imagem física de alguém, bem como pela veiculação desautorizada, e não admite conciliação com outros direitos fundamentais.",
   "De acordo com a jurisprudência do STF, os familiares de vítima têm direito à indenização contra empresa jornalística que divulga imagens da vítima e do local do crime, sem os devidos cuidados de edição."
  ],
  "correta": 1
 },
 {
  "id": "spcine24-aj-029",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 29",
  "enunciado": "O Supremo Tribunal Federal, recentemente, considerou constitucional a contratação integrada do regime de execução indireta de obras e serviços de engenharia previsto no art. 9o da Lei no 12.462/2011, pelo qual o particular vencedor da licitação é incumbido (i) da elaboração e do desenvolvimento dos projetos básico e executivo, (ii) da execução de obras e serviços de engenharia, (iii) da montagem, (iv) da realização de testes, (v) da pré-operação e (vi) de todas as demais operações necessárias e suficientes para a entrega final do objeto. De acordo com a Corte, (ADI 4.645 e ADI 4.655) “a lógica subjacente a essa modalidade de contratação é a percepção de que a Administração Pública nem sempre é capaz de realizar o projeto básico a contento, a depender dos contornos ou objetivos da licitação, o que pode vir a prejudicar a própria higidez do contrato administrativo a ser licitado. A consequência da utilização da contratação integrada, em suma, é a criação de uma obrigação de resultado, privilegiando-se a fixação de fins sobre a indicação taxativa dos meios”. É correto afirmar que esse trecho da decisão está diretamente associado ao princípio constitucional da",
  "alternativas": [
   "Publicidade.",
   "Juridicidade.",
   "Moralidade.",
   "Eficiência.",
   "Supremacia do interesse público."
  ],
  "correta": 3
 },
 {
  "id": "spcine24-aj-030",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 30",
  "enunciado": "A Empresa de Cinema e Audiovisual de São Paulo (Spcine) foi comunicada que uma equipe de fiscalização do Tribunal de Contas do Município de São Paulo (TCM/SP) comparecerá a sua sede para levantar dados necessários para instruir procedimento de Tomada de Contas Especial e que deseja conversar com os gestores e fiscais de contratos da empresa. Para saber um pouco mais sobre o assunto, os empregados da Spcine procuram Joana, recém-empossada na função de Analista Jurídico, para sanar dúvidas. Com base na situação hipotética, Joana poderá afirmar que",
  "alternativas": [
   "os empregados não precisam responder questionamentos que sejam formulados na reunião, pois o Tribunal de Contas não possui a competência para controlar a Spcine, que, na condição de sociedade anônima, está essencialmente submetida aos mecanismos de controle interno da Administração.",
   "de acordo com o entendimento do Supremo Tribunal Federal, Joana deve orientar os empregados a fornecer informações sobre os contratos que estejam relacionados a atividade-meio da empresa, pois o controle do TCM/SP não abarca as operações que integram a sua atividade-fim.",
   "a fiscalização pode se debruçar sobre os contratos celebrados para o exercício da atividade-meio e da atividade-fim, desde que não impliquem interferência na gestão da empresa nem ingerência no exercício de suas competências ou na definição de políticas públicas.",
   "a Spcine somente não estaria sujeita ao controle do TCM/SP se exercesse atividade econômica em sentido, em regime de livre concorrência com o mercado.",
   "os empregados deverão fornecer os dados solicitados pela equipe do TCM/SP, que poderá apreciar a legalidade formal e material das contratações, mas não a sua legitimidade e economicidade."
  ],
  "correta": 2
 },
 {
  "id": "spcine24-aj-031",
  "disciplina": "Direito Administrativo",
  "assunto": "Atos administrativos",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 31",
  "enunciado": "A respeito da discricionariedade administrativa, assinale a alternativa correta.",
  "alternativas": [
   "De acordo com a Lei de Introdução às Normas do Direito Brasileiro, os valores jurídicos abstratos, ainda que positivados, não podem ser utilizados como base para o controle dos atos administrativos discricionários.",
   "O controle jurisdicional sobre os atos discricionários, em regra, não se restringe aos aspectos da legalidade, por ser autorizado que Poder Judiciário substitua o administrador definir, motivadamente e dentro da moldura normativa, qual a decisão mais conveniente ou oportuna para o atendimento do interesse público.",
   "A teoria dos motivos determinantes não deve ser utilizada para invalidar um ato discricionário na hipótese em que há uma pluralidade de motivos justificadores da edição do ato e eventualmente um deles seja ilícito, desde que não se contamine a substância do ato.",
   "O princípio da juridicidade não gera necessariamente restrições mais sensíveis à atuação do administrador e não acarreta a ampliação do controle judicial dos atos administrativos, por representar, esse tipo de leitura, ofensa ao princípio da separação dos poderes.",
   "Os atos administrativos discricionários emitidos pelo Poder Executivo que possuam vícios nos elementos de competência, finalidade e forma poderão ser revogados pelo Poder Judiciário."
  ],
  "correta": 2
 },
 {
  "id": "spcine24-aj-032",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 32",
  "enunciado": "A respeito do prazo de vigência dos contratos celebrados por empresas estatais, com base na Lei no 13.303/16, assinale a alternativa correta.",
  "alternativas": [
   "É vedado o contrato por prazo indeterminado.",
   "A duração dos contratos não excederá, em regra, 10 anos.",
   "A empresa pode, unilateralmente, alterar o prazo contratual nos casos de serviços de prestação continuada, desde que por período não superior a 25% do originalmente fixado.",
   "Na contratação que gere receita e no contrato de eficiência que gere economia para a Administração, os contratos serão de até 10 anos.",
   "Na contratação que previr a conclusão de escopo predefinido, a não realização do objeto dentro do prazo fixado importará na sua extinção ex officio."
  ],
  "correta": 0
 },
 {
  "id": "spcine24-aj-033",
  "disciplina": "Direito Administrativo",
  "assunto": "Organização administrativa",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 33",
  "enunciado": "A respeito do regime de pessoal das empresas públicas e sociedades de economia mista, assinale a alternativa correta.",
  "alternativas": [
   "Os empregados públicos, aprovados em concurso público, serão estáveis após três anos de efetivo exercício de suas funções.",
   "Convenção ou acordo coletivo não pode dispor sobre o salário de empregados públicos, pois cabe ao legislador fixar a remuneração de agentes públicos.",
   "O teto constitucional aplica-se às empresas estatais, independentemente do seu objeto e da necessidade de recursos do tesouro para o custeio de despesas com pessoal.",
   "A Lei no 13.303/16 vedou, expressamente, o recrutamento de pessoal para o desempenho de empregos em comissão.",
   "As empresas estatais podem utilizar a terceirização para o exercício de atividades-meio e fim, sem que essa prática, por si só, represente ofensa ao princípio do concurso público."
  ],
  "correta": 4
 },
 {
  "id": "spcine24-aj-034",
  "disciplina": "Direito Administrativo",
  "assunto": "Processo administrativo",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 34",
  "enunciado": "De acordo com a Lei no 14.141/2006, que trata do processo administrativo na Administração Pública Municipal, uma vez concluída a instrução do processo administrativo, a autoridade competente deverá decidir no prazo de",
  "alternativas": [
   "5 (cinco) dias úteis, permitida uma prorrogação devidamente justificada.",
   "10 (dez) dias, permitida a prorrogação.",
   "15 (quinze) dias, permitida a prorrogação devidamente justificada.",
   "15 (quinze) dias úteis, permitida uma prorrogação devidamente justificada.",
   "5 (cindo) dias, permitida a prorrogação."
  ],
  "correta": 2
 },
 {
  "id": "spcine24-aj-035",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 35",
  "enunciado": "Empresa de Cinema e Audiovisual de São Paulo (Spcine) tem a intenção de adquirir bens específicos, necessários para a execução de um curso que visa capacitar jovens a produzir conteúdo, com fins comerciais, para plataformas digitais. Para a execução do projeto, a equipe técnica inseriu no termo de referência da contratação que as câmeras e computadores a serem utilizados precisam ser de determinada marca. Com base na Lei no 13.303/16, é correto afirmar que a conduta",
  "alternativas": [
   "é expressamente vedada pela Lei.",
   "pode ser utilizada, para identificar o objeto como referência, hipótese em que será obrigatório inserir a expressão “ou similar ou de melhor qualidade”.",
   "não pode ser realizada sob a justificativa de ser necessária para a padronização do objeto.",
   "será válida quando o modelo se mostrar adequado a atender o objeto do contrato.",
   "pode ser realizada, pois está dentro do campo de liberdade da estatal apontar que os equipamentos idôneos para atender a sua necessidade."
  ],
  "correta": 1
 },
 {
  "id": "spcine24-aj-036",
  "disciplina": "Direito Administrativo",
  "assunto": "Licitações e contratos",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 36",
  "enunciado": "Considere que Maria, ativista do setor cultural, apresentou um pedido de acesso à cópia integral dos processos de contratação (licitação e contratos) da Empresa de Cinema e Audiovisual de São Paulo (Spcine) em que sejam empregados recursos obtidos pela empresa em convênio firmado com o Governo Federal, para o fomento de projetos cinematográficos em bairros periféricos da Cidade. Com base na situação hipotética e o disposto na Lei de Acesso à Informação (Lei no 12.527/11), é correto afirmar que",
  "alternativas": [
   "o pedido deve ser indeferido, pois as empresas públicas e sociedades de economia mista não se subordinam à Lei.",
   "o pedido deve ser deferido, salvo se, no processo, constar informação integral ou parcialmente sigilosa.",
   "para que o pedido seja processado, é necessário que Maria aponte, no formulário, os motivos que a levam a solicitar o acesso aos processos.",
   "o pedido de acesso deve ser deferido, mas pode ser que Maria tenha que arcar com os custos necessários para a reprodução de documentos, caso tenha esse interesse.",
   "o pedido deve ser indeferido, pois a empresa já possui a obrigação de disponibilizar, na sua página eletrônica, o acesso à cópia dos contratos que celebra."
  ],
  "correta": 3
 },
 {
  "id": "spcine24-aj-037",
  "disciplina": "Direito Civil",
  "assunto": "Pessoas naturais e direitos da personalidade",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 37",
  "enunciado": "As regras sobre a capacidade da pessoa são determinadas pela lei do país",
  "alternativas": [
   "de nascimento.",
   "de morte.",
   "de domicílio.",
   "de registro.",
   "em que praticados os atos relativos à capacidade."
  ],
  "correta": 2
 },
 {
  "id": "spcine24-aj-038",
  "disciplina": "Direito Civil",
  "assunto": "Outros temas",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 38",
  "enunciado": "Considere uma situação na qual dois motoristas, que não se conhecem, acabam colidindo com seus carros em um cruzamento. Tal situação corresponde a um",
  "alternativas": [
   "ato ilícito stricto sensu ou absoluto.",
   "ato ilícito relativo.",
   "ato ilícito invalidante.",
   "ato-fato ilícito.",
   "fato jurídico ilícito stricto sensu."
  ],
  "correta": 0
 },
 {
  "id": "spcine24-aj-039",
  "disciplina": "Direito Civil",
  "assunto": "Responsabilidade civil",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 39",
  "enunciado": "João estava caminhando em um parque quando foi abordado por dois policiais à paisana. Eles disseram que João parecia suspeito e, sem apresentarem mandado ou explicarem o motivo, algemaram-no e o levaram à delegacia. João, confuso, perguntou por que estava sendo detido, mas os policiais se recusaram a responder. Na delegacia, ele foi mantido em uma cela por várias horas sem qualquer explicação ou registro formal da prisão. Diante da situação hipotética, é correto afirmar que João",
  "alternativas": [
   "receberá o valor da indenização por danos morais fixado por tabelamento, não sendo possível a condenação por valor superior.",
   "receberá o valor da indenização, na conformidade das circunstâncias do caso, fixado equitativamente pelo juiz se não puder provar prejuízo material.",
   "poderá requerer indenização por ofensa à liberdade pessoal, desde que demonstre efetivo prejuízo material experimentado.",
   "deverá provar o prejuízo material ou moral para que possa receber indenização.",
   "deverá demonstrar a conduta, o dano, o nexo de causalidade e a culpa para receber indenização."
  ],
  "correta": 1
 },
 {
  "id": "spcine24-aj-040",
  "disciplina": "Direito Tributário",
  "assunto": "Impostos em espécie",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 40",
  "enunciado": "Dentre outras matérias, a Constituição Federal atribui à lei complementar dispor sobre normas gerais em matéria tributária de legislação tributária, especialmente sobre a definição de tratamento diferenciado e favorecido para as microempresas e empresas de pequeno porte, inclusive no que se refere à instituição de regimes especiais ou simplificados para os impostos sobre operações relativas à circulação de mercadoria e sobre prestações de serviço de transporte interestadual e de comunicação – ICMS, e para o imposto sobre bens e serviços de competência compartilhada entre os Estados, o Distrito Federal e os Municípios, além das contribuições que prevê. Caberá, ademais, à referida lei complementar a instituição de regime único de arrecadação dos impostos e contribuições dos entes tributantes. A esse respeito, é correto afirmar que",
  "alternativas": [
   "o regime será obrigatório para todos os contribuintes que preencham as condições e os requisitos nela estabelecidos, sob pena de ofensa ao princípio da isonomia tributária.",
   "condições diferenciadas de enquadramento por Estado não podem ser estabelecidas, sob pena de ofensa ao princípio da não discriminação tributária.",
   "a fiscalização dos impostos e das contribuições deverá ser descentralizada relativamente ao ente federado competente para o tributo, a fim de não caracterizar invasão de competência tributária.",
   "a distribuição da parcela de recursos pertencentes aos respectivos entes federados será imediata, vedada qualquer retenção ou condicionamento.",
   "é vedada a adoção de um cadastro único de contribuintes para fins de cobrança dos tributos relativos a cada ente tributante, por caracterizar invasão de competência tributária."
  ],
  "correta": 3
 },
 {
  "id": "spcine24-aj-041",
  "disciplina": "Direito Tributário",
  "assunto": "Impostos em espécie",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 41",
  "enunciado": "Os imóveis consistentes em pequenas glebas rurais são definidos por lei de acordo com sua localização em municípios, para fins de não incidência do imposto de competência da União, desde que sejam explorados pelo proprietário que não possua outro imóvel, por si só ou com sua família. Referida situação caracteriza uma",
  "alternativas": [
   "não incidência de fato.",
   "isenção qualificada.",
   "remissão total.",
   "anistia.",
   "imunidade específica."
  ],
  "correta": 4
 },
 {
  "id": "spcine24-aj-042",
  "disciplina": "Direito Tributário",
  "assunto": "Princípios e imunidades",
  "fonte": "VUNESP 2024 · SPCine · Analista Jurídico I · Questão 42",
  "enunciado": "O Código Tributário Nacional impõe o denominado sigilo fiscal ao vedar que a Fazenda Pública ou seus servidores divulguem informação obtida em razão do ofício sobre a situação econômica ou financeira do sujeito passivo ou de terceiros e sobre a natureza e o estado de seus negócios ou atividades, observadas as exceções que prevê. Dentre outras situações, o sigilo fiscal deverá ser aplicado quando se tratar de",
  "alternativas": [
   "imunidade tributária cujo beneficiário seja pessoa física.",
   "representações fiscais para fins penais.",
   "inscrições na Dívida Ativa da Fazenda Pública.",
   "moratória.",
   "parcelamento."
  ],
  "correta": 0
 }
];
