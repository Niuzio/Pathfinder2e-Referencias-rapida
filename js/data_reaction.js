data_reaction = [
  { header: "Acrobacias (Destreza)" },
  {
    title: "Mantener el equilibrio",
    icon: "single_action",
    subtitle: "Acrobacias (Destreza) – No entrenado",
    description: "Te desplazas sobre terreno difícil, resbaladizo o estrecho intentando no caer.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Acrobacias contra la CD determinada por el terreno",
      "Éxito: avanzas sin caer; Fracaso: caes prone o sufres penalizador",
      "Rasgos: movimiento"
    ]
  },
  {
    title: "Pasar haciendo acrobacias",
    icon: "single_action",
    subtitle: "Acrobacias (Destreza) – No entrenado",
    description: "Te abres paso a través del espacio amenazado de un enemigo usando agilidad.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Acrobacias contra la CD de Reflejos del enemigo",
      "Éxito: atraviesas sin provocar ataques de oportunidad; Fracaso: tu movimiento termina",
      "Rasgos: movimiento"
    ]
  },
  {
    title: "Escurrirse",
    icon: "single_action",
    subtitle: "Acrobacias (Destreza) – Entrenado",
    description: "Sales de una sujeción o pasas por un espacio muy reducido usando destreza.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Acrobacias contra la CD del obstáculo",
      "Éxito: avanzas lentamente; Fracaso: no avanzas",
      "Rasgos: movimiento, entrenado"
    ]
  },
  {
    title: "Maniobrar en vuelo",
    icon: "single_action",
    subtitle: "Acrobacias (Destreza) – Entrenado",
    description: "Controlas tu trayectoria y altura mientras vuelas, sin caer.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Acrobacias contra la CD determinada por la situación de vuelo",
      "Éxito: cambias dirección o te estabilizas; Fracaso: pierdes altitud o estabilidad",
      "Rasgos: movimiento, entrenado"
    ]
  },

  { header: "Arcanos (Inteligencia)" },
  {
    title: "Recordar conocimiento",
    icon: "single_action",
    subtitle: "Arcanos (Inteligencia) – No entrenado",
    description: "Recuerdas información sobre magia arcana, criaturas mágicas, planos y fenómenos.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Arcanos contra la CD de la información",
      "Éxito: obtienes detalles precisos; Fracaso: no recuerdas nada",
      "Rasgos: concentración, secreto"
    ]
  },
  {
    title: "Aprender un conjuro",
    icon: "single_action",
    subtitle: "Arcanos (Inteligencia) – Entrenado",
    description: "Incorporas un conjuro arcano conocido a tu repertorio o libro de conjuros.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Arcanos contra la CD del nivel del conjuro",
      "Éxito: agregas el conjuro; Fracaso: pierdes materiales",
      "Rasgos: concentración, exploración, tiempo libre, entrenado"
    ]
  },
  {
    title: "Descifrar escritura",
    icon: "single_action",
    subtitle: "Arcanos (Inteligencia) – Entrenado",
    description: "Analizas y comprendes un texto arcano, oculto o cifrado.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Arcanos contra la CD del texto",
      "Éxito: comprendes el mensaje; Fracaso: no descifras nada",
      "Rasgos: secreto, exploración, entrenado"
    ]
  },
  {
    title: "Identificar magia",
    icon: "single_action",
    subtitle: "Arcanos (Inteligencia) – Entrenado",
    description: "Determinas la naturaleza y propiedades de un objeto, efecto o criatura mágica.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Arcanos contra la CD del objeto o efecto",
      "Éxito: identificas propiedades y usos; Fracaso: no obtienes info",
      "Rasgos: concentración, secreto, exploración, entrenado"
    ]
  },
  {
    title: "Pedir prestado un conjuro arcano",
    icon: "single_action",
    subtitle: "Arcanos (Inteligencia) – Entrenado",
    description: "Obtienes temporalmente un conjuro de otro lanzador arcano para una sola ejecución.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Requisito: acceso a un lanzador arcano",
      "Efecto: lanzas ese conjuro una vez",
      "Rasgos: concentración, exploración, entrenado"
    ]
  },

  // === ARTESANÍA ===
  {
    title: "Recordar conocimiento",
    icon: "single_action",
    subtitle: "Artesanía (Inteligencia) – No entrenado",
    description: "Recuerdas procesos, técnicas o materiales artesanales.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Artesanía contra la CD del tema",
      "Éxito: obtienes detalles útiles; Fracaso: no recuerdas nada",
      "Rasgos: secreto, concentración"
    ]
  },
  {
    title: "Reparar",
    icon: "exploration",
    subtitle: "Artesanía (Inteligencia) – No entrenado",
    description: "Restauras puntos de golpe a un objeto dañado usando herramientas adecuadas.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción exploratoria",
      "Tirada: Artesanía contra la CD del objeto",
      "Éxito: restaura puntos; Fracaso: sin efecto",
      "Rasgos: manipular"
    ]
  },
  {
    title: "Elaborar",
    icon: "exploration",
    subtitle: "Artesanía (Inteligencia) – Entrenado",
    description: "Construyes o fabricas un objeto siguiendo un plano o fórmula.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción exploratoria (tiempo libre requerido)",
      "Tirada: Artesanía contra la CD del objeto",
      "Éxito: creas el objeto; Fracaso: pierdes materiales",
      "Rasgos: manipular, tiempo libre, entrenado"
    ]
  },
  {
    title: "Identificar alquimia",
    icon: "single_action",
    subtitle: "Artesanía (Inteligencia) – Entrenado",
    description: "Analizas un objeto alquímico para descubrir sus propiedades.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Artesanía contra la CD del objeto alquímico",
      "Éxito: identificas efectos; Fracaso: sin información",
      "Rasgos: concentración, entrenado"
    ]
  },
  {
    title: "Obtener ingresos",
    icon: "exploration",
    subtitle: "Artesanía (Inteligencia) – Entrenado",
    description: "Ganas dinero trabajando con tus habilidades artesanales.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción exploratoria (tiempo libre requerido)",
      "Tirada: Artesanía contra una CD fija por nivel de demanda",
      "Éxito: obtienes más ganancias; Fracaso: obtienes menos",
      "Rasgos: tiempo libre, entrenado"
    ]
  },

  // === ATLETISMO ===
  {
    title: "Presa",
    icon: "single_action",
    subtitle: "Atletismo (Fuerza) – No entrenado",
    description: "Agarras y sujetas a una criatura usando tu fuerza.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Atletismo contra la CD de la criatura (Fortaleza)",
      "Éxito: la criatura queda agarrada; Fracaso: no la sujetas",
      "Rasgos: ataque"
    ]
  },
  {
    title: "Salto de altura",
    icon: "two_actions",
    subtitle: "Atletismo (Fuerza) – No entrenado",
    description: "Saltas verticalmente para superar un obstáculo.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 2 acciones",
      "Tirada: Atletismo contra la CD definida por el obstáculo",
      "Éxito: saltas la altura completa; Fracaso: saltas la mitad",
      "Rasgos: movimiento"
    ]
  },
  {
    title: "Salto de longitud",
    icon: "two_actions",
    subtitle: "Atletismo (Fuerza) – No entrenado",
    description: "Saltas horizontalmente para atravesar distancias.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 2 acciones",
      "Tirada: Atletismo contra la CD definida por el obstáculo",
      "Éxito: cubres la distancia completa; Fracaso: cubres la mitad",
      "Rasgos: movimiento"
    ]
  },
  {
    title: "Trepar",
    icon: "single_action",
    subtitle: "Atletismo (Fuerza) – No entrenado",
    description: "Escalas una superficie vertical o inclinada.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Atletismo contra la CD del terreno",
      "Éxito: asciendes tu velocidad; Fracaso: asciendes la mitad o caes",
      "Rasgos: movimiento"
    ]
  },
  {
    title: "Derribar",
    icon: "single_action",
    subtitle: "Atletismo (Fuerza) – No entrenado",
    description: "Haces que una criatura pierda el equilibrio y caiga prone.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Atletismo contra la CD de la criatura (Fortaleza)",
      "Éxito: derribas al objetivo; Fracaso: no lo derribas",
      "Rasgos: ataque"
    ]
  },
  {
    title: "Empujar",
    icon: "single_action",
    subtitle: "Atletismo (Fuerza) – No entrenado",
    description: "Desplazas a una criatura u objeto en una dirección específica.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Atletismo contra la CD de la criatura u objeto",
      "Éxito: desplazas 1,5 m; Fracaso: no lo mueves",
      "Rasgos: ataque"
    ]
  },
  {
    title: "Abrir a la fuerza",
    icon: "two_actions",
    subtitle: "Atletismo (Fuerza) – No entrenado",
    description: "Fuerzas una puerta, cofre u otro objeto cerrado.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 2 acciones",
      "Tirada: Atletismo contra la CD del objeto",
      "Éxito: lo abres; Fracaso: no lo abres",
      "Rasgos: ataque"
    ]
  },
  {
    title: "Nadar",
    icon: "single_action",
    subtitle: "Atletismo (Fuerza) – No entrenado",
    description: "Te desplazas por el agua usando tu fuerza y resistencia.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Atletismo contra la CD definida por la corriente/profundidad",
      "Éxito: avanzas tu velocidad; Fracaso: avanzas la mitad",
      "Rasgos: movimiento"
    ]
  },
  {
    title: "Desarmar",
    icon: "single_action",
    subtitle: "Atletismo (Fuerza) – Entrenado",
    description: "Quitas un objeto empuñado por una criatura o dispositivo.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Atletismo contra la CD de la criatura o del mecanismo",
      "Éxito: desarmas; Fracaso: no lo desarmas",
      "Rasgos: manipular, entrenado"
    ]
  },

  // === DIPLOMACIA ===
  {
    title: "Reunir información",
    icon: "exploration",
    subtitle: "Diplomacia (Carisma) – No entrenado",
    description: "Buscas rumores, noticias o datos hablando con otras personas.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción exploratoria",
      "Tiempo: mínimo 1 hora de interacción",
      "Tirada: Diplomacia contra la CD fijada por la fuente",
      "Éxito: obtienes información fiable; Fracaso: no consigues nada",
      "Rasgos: exploración"
    ]
  },
  {
    title: "Causar impresión",
    icon: "single_action",
    subtitle: "Diplomacia (Carisma) – No entrenado",
    description: "Generas una impresión inicial favorable o desfavorable en un objetivo.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Diplomacia contra la CD fijada por la situación",
      "Éxito: impactas tu imagen; Fracaso: no deja huella",
      "Rasgos: audible, lingüístico"
    ]
  },
  {
    title: "Pedir",
    icon: "single_action",
    subtitle: "Diplomacia (Carisma) – No entrenado",
    description: "Solicitas algo de manera cortés o persuasiva a otra criatura.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Diplomacia contra la CD fijada por la situación",
      "Éxito: consigues lo pedido; Fracaso: te niegan",
      "Rasgos: audible, lingüístico"
    ]
  },

  // === ENGAÑO ===
  {
    title: "Crear una distracción",
    icon: "single_action",
    subtitle: "Engaño (Carisma) – No entrenado",
    description: "Desvías la atención de un objetivo para ocultarte o evadirlo.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Engaño contra la CD de Percepción del objetivo",
      "Éxito: el objetivo se distrae; Fracaso: mantiene la atención",
      "Rasgos: audible, manipular, mental"
    ]
  },
  {
    title: "Imitar",
    icon: "single_action",
    subtitle: "Engaño (Carisma) – No entrenado",
    description: "Reproduces una voz, acento o sonido para engañar.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Engaño contra la CD del sonido objetivo",
      "Éxito: imitación creíble; Fracaso: suena forzado",
      "Rasgos: auditivo, lingüístico"
    ]
  },
  {
    title: "Mentir",
    icon: "single_action",
    subtitle: "Engaño (Carisma) – No entrenado",
    description: "Proporcionas información falsa con el fin de engañar.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Engaño contra la CD de Voluntad del objetivo",
      "Éxito: cree tu mentira; Fracaso: detecta el engaño",
      "Rasgos: audible, lingüístico, mental"
    ]
  },
  {
    title: "Fintar",
    icon: "single_action",
    subtitle: "Engaño (Carisma) – Entrenado",
    description: "Engañas a un oponente en combate para dejarlo desprevenido.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Engaño contra la CD de Percepción del objetivo",
      "Éxito: el siguiente ataque tiene ventaja; Fracaso: sin efecto",
      "Rasgos: mental, entrenado"
    ]
  },

  // === INTERPRETACIÓN ===
  {
    title: "Interpretar",
    icon: "single_action",
    subtitle: "Interpretación (Carisma) – No entrenado",
    description: "Realizas una actuación musical, teatral o artística.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Interpretación contra la CD fijada por la situación",
      "Éxito: cautivas a la audiencia; Fracaso: indiferencia",
      "Rasgos: auditivo, visual"
    ]
  },
  {
    title: "Obtener ingresos",
    icon: "exploration",
    subtitle: "Interpretación (Carisma) – Entrenado",
    description: "Ganas dinero actuando o interpretando ante un público.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción exploratoria",
      "Tiempo: mínimo 1 hora de actuación",
      "Tirada: Interpretación contra la CD fijada por la audiencia",
      "Éxito: obtienes más ganancias; Fracaso: menos",
      "Rasgos: exploración, entrenado"
    ]
  },

  // === INTIMIDACIÓN ===
  {
    title: "Demoralizar",
    icon: "single_action",
    subtitle: "Intimidación (Carisma) – No entrenado",
    description: "Infundes miedo o dudas en un objetivo mediante amenazas o presencia imponente.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Intimidación contra la CD de Voluntad del objetivo",
      "Éxito: el objetivo queda atemorizado; Fracaso: sin efecto",
      "Rasgos: audible, mental"
    ]
  },
  {
    title: "Obligar",
    icon: "single_action",
    subtitle: "Intimidación (Carisma) – Entrenado",
    description: "Impones tu voluntad para forzar a alguien a actuar bajo coacción.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Intimidación contra la CD de Voluntad del objetivo",
      "Éxito: el objetivo cede; Fracaso: resiste",
      "Rasgos: mental, entrenado"
    ]
  },

  // === LATROCINIO ===
  {
    title: "Escamotear objeto",
    icon: "single_action",
    subtitle: "Latrocinio (Destreza) – No entrenado",
    description: "Te llevas un objeto que alguien está sosteniendo sin que lo note.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Latrocinio contra la CD de Percepción del objetivo",
      "Éxito: sustraes sin que note; Fracaso: te descubre",
      "Rasgos: manipular"
    ]
  },
  {
    title: "Sustraer",
    icon: "single_action",
    subtitle: "Latrocinio (Destreza) – No entrenado",
    description: "Robas algo pequeño sin llamar la atención.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Latrocinio contra la CD de Percepción del entorno",
      "Éxito: robas sin ruido; Fracaso: provocas atención",
      "Rasgos: manipular"
    ]
  },
  {
    title: "Forzar cerradura",
    icon: "two_actions",
    subtitle: "Latrocinio (Destreza) – Entrenado",
    description: "Abres una cerradura sin llave usando herramientas especializadas.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 2 acciones",
      "Tirada: Latrocinio contra la CD de la cerradura",
      "Éxito: abres sin ruido; Fracaso: atascas o suena alerta",
      "Rasgos: manipular, entrenado"
    ]
  },
  {
    title: "Inutilizar mecanismo",
    icon: "two_actions",
    subtitle: "Latrocinio (Destreza) – Entrenado",
    description: "Desactivas un mecanismo o trampa usando destreza y herramientas.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 2 acciones",
      "Tirada: Latrocinio contra la CD del dispositivo",
      "Éxito: desactivas sin riesgo; Fracaso: activas la trampa",
      "Rasgos: manipular, entrenado"
    ]
  },

  // === MEDICINA ===
  {
    title: "Primeros auxilios",
    icon: "single_action",
    subtitle: "Medicina (Sabiduría) – No entrenado",
    description: "Proporcionas cuidados básicos para estabilizar y curar heridas menores.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Medicina contra la CD del daño sufrido",
      "Éxito: estabilizas o curas; Fracaso: sin efecto",
      "Rasgos: manipular, sanación"
    ]
  },
  {
    title: "Recordar conocimiento",
    icon: "single_action",
    subtitle: "Medicina (Sabiduría) – No entrenado",
    description: "Recuerdas información médica y biológica para diagnóstico.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción",
      "Tirada: Medicina contra la CD de la información",
      "Éxito: obtienes detalles clínicos; Fracaso: sin información",
      "Rasgos: secreto, general"
    ]
  },
  {
    title: "Tratar enfermedad",
    icon: "exploration",
    subtitle: "Medicina (Sabiduría) – Entrenado",
    description: "Ayudas a un paciente a resistir o recuperarse de una enfermedad.",
    reference: "Pantalla del Director – Acciones de Habilidad",
    bullets: [
      "Coste: 1 acción exploratoria",
      "Tirada: Medicina contra la CD de la enfermedad",
      "Éxito: mitigas síntomas o retarda avance." ,
      "Fracaso: sin efecto." ,
      "Rasgos: manipular, entrenado"
    ]
  } ,
  {
    title : "Forrajear" ,
    icon : "leaf" ,
    subtitle : "Naturaleza (entrenado: no)" ,
    description : "Recolectas alimento, agua o materiales del entorno." ,
    reference : "Pantalla del Director – Naturaleza" ,
    bullets : [
      "Tirada: Naturaleza contra la CD del terreno." ,
      "Éxito: obtienes recursos suficientes." ,
      "Fracaso: encuentras menos de lo necesario." ,
      "Rasgos: exploración"
    ]
  } ,
  {
    title : "Rastrear" ,
    icon : "paw" ,
    subtitle : "Naturaleza (entrenado: sí)" ,
    description : "Sigues rastros de criaturas u objetos." ,
    reference : "Pantalla del Director – Naturaleza" ,
    bullets : [
      "Tirada: Naturaleza contra la CD de las huellas." ,
      "Éxito: encuentras el objetivo." ,
      "Fracaso: te pierdes o avanzas mal." ,
      "Rasgos: exploración, entrenado"
    ]
  } ,
  {
    title : "Recordar conocimiento" ,
    icon : "eye" ,
    subtitle : "Ocultismo (entrenado: no)" ,
    description : "Recuerdas información sobre fenómenos mágicos o arcanos ocultos." ,
    reference : "Pantalla del Director – Ocultismo" ,
    bullets : [
      "Tirada: Ocultismo contra la CD de la información." ,
      "Éxito: obtienes detalles precisos." ,
      "Fracaso: no recuerdas nada útil." ,
      "Rasgos: concentración, secreto"
    ]
  } ,
  {
    title : "Recordar conocimiento" ,
    icon : "church" ,
    subtitle : "Religión (entrenado: no)" ,
    description : "Recuerdas información sobre dioses, rituales y dogmas." ,
    reference : "Pantalla del Director – Religión" ,
    bullets : [
      "Tirada: Religión contra la CD de la información." ,
      "Éxito: obtienes detalles precisos." ,
      "Fracaso: no recuerdas nada útil." ,
      "Rasgos: concentración, secreto"
    ]
  } ,
  {
    title : "Recordar conocimiento" ,
    icon : "university" ,
    subtitle : "Sociedad (entrenado: no)" ,
    description : "Recuerdas información sobre costumbres, leyes u organización social." ,
    reference : "Pantalla del Director – Sociedad" ,
    bullets : [
      "Tirada: Sociedad contra la CD de la información." ,
      "Éxito: obtienes detalles precisos." ,
      "Fracaso: no recuerdas nada útil." ,
      "Rasgos: concentración, secreto"
    ]
  } ,
  {
    title : "Esconderse" ,
    icon : "eye-slash" ,
    subtitle : "Sigilo (entrenado: no)" ,
    description : "Intentas ocultarte a la vista o al olfato." ,
    reference : "Pantalla del Director – Sigilo" ,
    bullets : [
      "Tirada: Sigilo contra la CD de Percepción." ,
      "Éxito: quedas oculto." ,
      "Fracaso: permaneces visible." ,
      "Rasgos: sigilo"
    ]
  } ,
  {
    title : "Avanzar sigilosamente" ,
    icon : "shoe-prints" ,
    subtitle : "Sigilo (entrenado: no)" ,
    description : "Te mueves sin producir ruido ni alertar a otros." ,
    reference : "Pantalla del Director – Sigilo" ,
    bullets : [
      "Tirada: Sigilo contra la CD auditiva de Percepción." ,
      "Éxito: no eres detectado al moverte." ,
      "Fracaso: produces ruido y alertas." ,
      "Rasgos: sigilo"
    ]
  } ,
  {
    title : "Sentir dirección" ,
    icon : "compass" ,
    subtitle : "Supervivencia (entrenado: no)" ,
    description : "Determinas los puntos cardinales sin herramienta especial." ,
    reference : "Pantalla del Director – Supervivencia" ,
    bullets : [
      "Tirada: Supervivencia contra la CD ambiental." ,
      "Éxito: sabes qué dirección tomar." ,
      "Fracaso: te desorientas." ,
      "Rasgos: exploración"
    ]
  } ,
  {
    title : "Subsistir" ,
    icon : "campground" ,
    subtitle : "Supervivencia (entrenado: sí)" ,
    description : "Usas tus conocimientos para sobrevivir en la naturaleza." ,
    reference : "Pantalla del Director – Supervivencia" ,
    bullets : [
      "Tiempo: varía según el entorno." ,
      "Tirada: Supervivencia contra la CD del terreno." ,
      "Éxito: localizas refugio, comida y agua." ,
      "Fracaso: sufres penalizadores ambientales." ,
      "Rasgos: tiempo libre, exploración, entrenado"
    ]
  } ,
  {
    title : "Forzar cerradura" ,
    icon : "lock-open" ,
    subtitle : "Juego de manos (entrenado: sí)" ,
    description : "Abres cerraduras sin llave." ,
    reference : "Pantalla del Director – Juego de manos" ,
    bullets : [
      "Requiere herramientas de ladrón." ,
      "Tirada: Juego de manos contra la CD de la cerradura." ,
      "Éxito: abres sin activar trampas." ,
      "Fracaso: no abres o activas la trampa." ,
      "Rasgos: manipular, entrenado"
    ]
  } ,
  {
    title : "Desactivar dispositivo" ,
    icon : "bomb" ,
    subtitle : "Juego de manos (entrenado: sí)" ,
    description : "Desarmes trampas u otros mecanismos explosivos." ,
    reference : "Pantalla del Director – Juego de manos" ,
    bullets : [
      "Requiere herramientas de ladrón." ,
      "Tirada: Juego de manos contra la CD del dispositivo." ,
      "Éxito: desactivas sin riesgo." ,
      "Fracaso: activas la trampa." ,
      "Rasgos: manipular, entrenado"
    ]
  } ,
  {
    title : "Robar" ,
    icon : "hand-back-fist" ,
    subtitle : "Juego de manos (entrenado: no)" ,
    description : "Sustraes un objeto de un objetivo sin que lo note." ,
    reference : "Pantalla del Director – Juego de manos" ,
    bullets : [
      "Tirada: Juego de manos contra la CD de Percepción del objetivo." ,
      "Éxito: sustraes el objeto sin que note." ,
      "Fracaso: te descubren." ,
      "Rasgos: manipular"
    ]
  } ,
  {
    title : "Interpretar" ,
    icon : "theater-masks" ,
    subtitle : "Interpretación (entrenado: no)" ,
    description : "Realizas una actuación artística para entretener o impresionar." ,
    reference : "Pantalla del Director – Interpretación" ,
    bullets : [
      "Tirada: Interpretación contra la CD fijada por la situación." ,
      "Éxito: logras entretener o impresionar." ,
      "Fracaso: no logras causar impacto." ,
      "Rasgos: performativo"
    ]
  }
];
