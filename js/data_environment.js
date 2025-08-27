// Efectos de iluminación y oscuridad que imponen condiciones de ocultamiento
data_environment_obscurance = [
  {
    title: "Luz tenue",
    icon: "semi-closed-eye",
    subtitle: "Oculto",
    description: "Zona con iluminación tenue o brumosa. Las criaturas que dependen de la vista están ocultas.",
    reference: "Reglas básicas – Iluminación",
    bullets: [
      "Estado Oculto: los ataques, conjuros y pruebas de percepción contra ti tienen un 20% de probabilidad de fallo.",
      "Ejemplos: luz del ocaso, antorcha a distancia, bruma ligera."
    ]
  },
  {
    title: "Oscuridad",
    icon: "worried-eyes",
    subtitle: "No detectado",
    description: "Zona sin ningún tipo de luz. Las criaturas que dependen de la vista están no detectadas.",
    reference: "Reglas básicas – Iluminación",
    bullets: [
      "Estado No detectado: no puedes ser objetivo de ataques, conjuros o habilidades que requieran selección directa de objetivo.",
      "Ejemplos: tinieblas mágicas, cripta sin iluminación, escena cubierta por sombra total."
    ]
  }
];

// Tipos de iluminación y su efecto básico
data_environment_light = [
  {
    title: "Luz brillante",
    icon: "star-pupil",
    subtitle: "Visión normal",
    description: "Iluminación suficiente para ver con normalidad.",
    reference: "Reglas básicas – Iluminación",
    bullets: [
      "Todas las criaturas perciben el entorno sin penalizadores.",
      "Ejemplos: sol del mediodía, candiles, fuego abierto."
    ]
  },
  {
    title: "Luz tenue",
    icon: "semi-closed-eye",
    subtitle: "Oculto",
    description: "Iluminación insuficiente para ver con claridad, provoca ocultamiento.",
    reference: "Reglas básicas – Iluminación",
    bullets: [
      "Aplica la condición Oculto (20% de fallo).",
      "Une frontera entre luz brillante y oscuridad total."
    ]
  },
  {
    title: "Oscuridad",
    icon: "worried-eyes",
    subtitle: "No detectado",
    description: "Ausencia de luz, provoca no detección para quien dependa solo de la vista.",
    reference: "Reglas básicas – Iluminación",
    bullets: [
      "Aplica la condición No detectado.",
      "Solo visión en la oscuridad o verdadera permite contrarrestarlo."
    ]
  }
];

// Tipos de sentidos especiales de Pathfinder 2e
data_environment_vision = [
  {
    title: "Visión en penumbra",
    icon: "semi-closed-eye",
    subtitle: "Ver en luz tenue",
    description: "Permite ver en luz tenue como si fuera luz brillante.",
    reference: "Reglas básicas – Sentidos",
    bullets: [
      "Ignoras el ocultamiento de la luz tenue.",
      "En oscuridad, ves como si fuera luz tenue."
    ]
  },
  {
    title: "Visión en la oscuridad",
    icon: "blind",
    subtitle: "Ver en la oscuridad",
    description: "Permite ver en oscuridad como si fuera luz tenue.",
    reference: "Reglas básicas – Sentidos",
    bullets: [
      "Ignoras la condición No detectado en oscuridad.",
      "No distingues colores, solo tonos de gris."
    ]
  },
  {
    title: "Visión verdadera",
    icon: "eye-shield",
    subtitle: "Ver todo",
    description: "Percibes criaturas invisibles, ilusiones y en el Plano Etéreo.",
    reference: "Reglas básicas – Sentidos",
    bullets: [
      "Revelas ilusiones y cambiaformas automáticamente.",
      "Ves en el Plano Etéreo hasta el alcance de tu visión verdadera."
    ]
  },
  {
    title: "Percepción sísmica",
    icon: "one-eyed",
    subtitle: "Percibir vibraciones",
    description: "Detectas vibraciones en el suelo dentro de tu radio.",
    reference: "Reglas básicas – Sentidos",
    bullets: [
      "Puedes localizar criaturas a través de obstáculos sólidos.",
      "No permite distinguir detalles finos ni colores."
    ]
  },
  {
    title: "Olfato",
    icon: "nose",
    subtitle: "Percibir olores",
    description: "Detectas presencia y movimiento por el olor en un área limitada.",
    reference: "Reglas básicas – Sentidos",
    bullets: [
      "Útil para rastrear e identificar criaturas en proximidad.",
      "No distingue formas ni tamaños, solo proximidad y presencia."
    ]
  }
];

// Mapeo de “cobertura” a los estados de ocultamiento de PF2e
data_environment_cover = [
  {
    title: "Cobertura parcial",
    icon: "broken-shield",
    subtitle: "Oculto",
    description: "Un obstáculo cubre parte de tu cuerpo, otorgándote ocultamiento.",
    reference: "Reglas básicas – Cobertura",
    bullets: [
      "Estado Oculto: 20% de probabilidad de fallo en ataques y conjuros dirigidos a ti."
    ]
  },
  {
    title: "Cobertura total",
    icon: "shield",
    subtitle: "No detectado",
    description: "Un obstáculo te oculta completamente, impidiendo que te elijan como objetivo.",
    reference: "Reglas básicas – Cobertura",
    bullets: [
      "Estado No detectado: no puedes ser objetivo de ataques o efectos directos."
    ]
  }
];

// Flanqueo en combate cuerpo a cuerpo
data_environment_flanking = [
  {
    title: "Flanqueo",
    icon: "crossed-swords",
    subtitle: "Ventaja táctica",
    description: "Obtienes ventaja en tus ataques cuerpo a cuerpo cuando flanqueas a un enemigo junto a un aliado.",
    reference: "Reglas básicas – Flanqueo",
    bullets: [
      "Debes ocupar espacios opuestos y adyacentes al objetivo, junto a un aliado.",
      "No aplica contra criaturas que no pueden ser flanqueadas o que ocupan más de un espacio.",
      "Algunos talentos o efectos permiten flanquear sin la posición estándar."
    ]
  }
];
