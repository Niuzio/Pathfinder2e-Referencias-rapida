data_reaction = [
  // === REACCIONES BÁSICAS ===
  {
    title: "Ataque de oportunidad",
    icon: "crossed-swords",
    subtitle: "Reacción",
    description: "Golpeas a un enemigo que abandona tu alcance o realiza ciertas acciones a tu lado.",
    reference: "PHB, pg. 195",
    bullets: [
      "Activador: criatura enemiga que puedas ver sale de tu alcance o usa una acción con el rasgo manipular o movimiento.",
      "Realiza un ataque cuerpo a cuerpo contra la criatura provocadora.",
      "El ataque ocurre justo antes de que la criatura salga de tu alcance.",
      "No se provoca si la criatura se teletransporta o es movida por otro sin usar sus propias acciones.",
      "Rasgos: ataque"
    ]
  },
  {
    title: "Acción preparada",
    icon: "stopwatch",
    subtitle: "Reacción",
    description: "Ejecutas la reacción que especificaste cuando preparaste una acción.",
    reference: "PHB, pg. 193",
    bullets: [
      "Activador: el que definiste al preparar la acción.",
      "Realizas la acción o ataque indicado.",
      "Rasgos: preparación"
    ]
  },
  {
    title: "Lanzar un conjuro",
    icon: "magic-swirl",
    subtitle: "Reacción",
    description: "Lanzas un conjuro cuyo tiempo de lanzamiento sea de 1 reacción.",
    reference: "PHB, pg. 192",
    bullets: [
      "Activador: el que especifica el conjuro.",
      "Sigue las reglas generales de Lanzar un conjuro.",
      "Rasgos: conjuro"
    ]
  },

  // === HABILIDADES: ACROBACIAS ===
  {
    title: "Mantener el equilibrio",
    icon: "balance-scale",
    subtitle: "Acrobacias",
    description: "Te desplazas por una superficie estrecha o inestable sin caer.",
    reference: "Pantalla del Director – Acrobacias",
    bullets: [
      "Tirada: Acrobacias contra la CD indicada por el terreno.",
      "Éxito: avanzas sin caerte.",
      "Fracaso: caes o sufres el efecto del terreno.",
      "Rasgos: movimiento"
    ]
  },
  {
    title: "Pasar haciendo acrobacias",
    icon: "run",
    subtitle: "Acrobacias",
    description: "Te mueves a través del espacio de un enemigo esquivando con agilidad.",
    reference: "Pantalla del Director – Acrobacias",
    bullets: [
      "Tirada: Acrobacias contra la CD de Reflejos de la criatura.",
      "Éxito: atraviesas sin provocar ataques de oportunidad.",
      "Fracaso: tu movimiento termina.",
      "Rasgos: movimiento"
    ]
  },
  {
    title: "Escurrirse",
    icon: "door-open",
    subtitle: "Acrobacias",
    description: "Pasas por un espacio extremadamente estrecho.",
    reference: "Pantalla del Director – Acrobacias",
    bullets: [
      "Tirada: Acrobacias contra la CD del obstáculo.",
      "Éxito: avanzas lentamente.",
      "Fracaso: no avanzas.",
      "Rasgos: movimiento, entrenado"
    ]
  },
  {
    title: "Maniobrar en vuelo",
    icon: "feather",
    subtitle: "Acrobacias",
    description: "Ajustas dirección o estabilizas el vuelo.",
    reference: "Pantalla del Director – Acrobacias",
    bullets: [
      "Tirada: Acrobacias contra la CD indicada.",
      "Éxito: controlas tu vuelo.",
      "Fracaso: pierdes altitud o estabilidad.",
      "Rasgos: movimiento, entrenado"
    ]
  },

  // === ARCANOS ===
  {
    title: "Recordar conocimiento",
    icon: "book",
    subtitle: "Arcanos",
    description: "Recuerdas información mágica, criaturas, planos y fenómenos sobrenaturales.",
    reference: "Pantalla del Director – Arcanos",
    bullets: [
      "Tirada: Arcanos contra la CD de la información.",
      "Éxito: obtienes detalles precisos.",
      "Fracaso: no recuerdas nada útil.",
      "Rasgos: concentración, secreto"
    ]
  },
  {
    title: "Aprender un conjuro",
    icon: "hand-holding-magic",
    subtitle: "Arcanos",
    description: "Añades un conjuro arcano a tu repertorio o libro.",
    reference: "Pantalla del Director – Arcanos",
    bullets: [
      "Requiere acceso al conjuro y materiales.",
      "Tirada: Arcanos contra la CD del conjuro.",
      "Éxito: lo aprendes.",
      "Fracaso: pierdes materiales.",
      "Rasgos: concentración, exploración, tiempo libre, entrenado"
    ]
  },
  {
    title: "Identificar magia",
    icon: "sparkles",
    subtitle: "Arcanos",
    description: "Determinas propiedades mágicas de un objeto o efecto.",
    reference: "Pantalla del Director – Arcanos",
    bullets: [
      "Tirada: Arcanos contra la CD del efecto.",
      "Éxito: identificas propiedades y usos.",
      "Fracaso: no obtienes información.",
      "Rasgos: concentración, secreto, exploración, entrenado"
    ]
  },

  // === ARTESANÍA ===
  {
    title: "Reparar",
    icon: "hammer",
    subtitle: "Artesanía",
    description: "Arreglas un objeto dañado.",
    reference: "Pantalla del Director – Artesanía",
    bullets: [
      "Requiere herramientas apropiadas.",
      "Tirada: Artesanía contra la CD del objeto.",
      "Rasgos: manipular, entrenado"
    ]
  },
  {
    title: "Elaborar",
    icon: "anvil",
    subtitle: "Artesanía",
    description: "Fabricas un objeto siguiendo un plano o fórmula.",
    reference: "Pantalla del Director – Artesanía",
    bullets: [
      "Tiempo: varía según el objeto.",
      "Rasgos: manipular, tiempo libre, entrenado"
    ]
  },
  {
    title: "Identificar alquimia",
    icon: "vial",
    subtitle: "Artesanía",
    description: "Determinas las propiedades de un objeto alquímico.",
    reference: "Pantalla del Director – Artesanía",
    bullets: [
      "Rasgos: concentración, secreto, entrenado"
    ]
  },

  // === ATLETISMO ===
  {
    title: "Trepar",
    icon: "arrow-up",
    subtitle: "Atletismo",
    description: "Subes por superficies verticales o irregulares.",
    reference: "Pantalla del Director – Atletismo",
    bullets: [
      "Tirada: Atletismo contra la CD del terreno.",
      "Rasgos: movimiento"
    ]
  },
  {
    title: "Nadar",
    icon: "swimmer",
    subtitle: "Atletismo",
    description: "Te desplazas en el agua.",
    reference: "Pantalla del Director – Atletismo",
    bullets: [
      "Rasgos: movimiento"
    ]
  },
  {
    title: "Presa",
    icon: "grab",
    subtitle: "Atletismo",
    description: "Agarras a una criatura.",
    reference: "Pantalla del Director – Atletismo",
    bullets: [
      "Rasgos: ataque"
    ]
  },
  {
    title: "Empujar",
    icon: "hand",
    subtitle: "Atletismo",
    description: "Empujas a una criatura u objeto.",
    reference: "Pantalla del Director – Atletismo",
    bullets: [
      "Rasgos: ataque"
    ]
  },

  // === DIPLOMACIA ===
  {
    title: "Hacer una petición",
    icon: "hands-helping",
    subtitle: "Diplomacia",
    description: "Solicitas un favor o acción a alguien.",
    reference: "Pantalla del Director – Diplomacia",
    bullets: [
      "Rasgos: exploración"
    ]
  },
  {
    title: "Reunir información",
    icon: "search",
    subtitle: "Diplomacia",
    description: "Obtienes rumores o datos de una comunidad.",
    reference: "Pantalla del Director – Diplomacia",
    bullets: [
      "Rasgos: tiempo libre"
    ]
  },

  // === INTIMIDACIÓN
