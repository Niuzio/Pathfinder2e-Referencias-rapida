// Iluminación
data_environment_light = [
  {
    title: "Luz brillante",
    icon: "star-pupil",
    subtitle: "Visión normal",
    description: "Iluminación suficiente para ver con claridad.",
    reference: "Reglas básicas – Iluminación",
    bullets: [
      "No impone penalizadores a la percepción.",
      "Ejemplos: sol del mediodía, antorcha a 10 pies."
    ]
  },
  {
    title: "Luz tenue",
    icon: "semi-closed-eye",
    subtitle: "Ligera ocultación",
    description: "Visibilidad reducida: antorchas a distancia, penumbra o bruma ligera.",
    reference: "Reglas básicas – Iluminación",
    bullets: [
      "Otorga el estado Oculto.",
      "La criatura debe superar una prueba plana CD 5 para designarte como objetivo."
    ]
  },
  {
    title: "Oscuridad",
    icon: "worried-eyes",
    subtitle: "Ocultamiento severo",
    description: "Ausencia de luz: noche sin luna, mazmorra a oscuras.",
    reference: "Reglas básicas – Iluminación",
    bullets: [
      "Otorga el estado No detectado.",
      "Antes de atacar, la criatura debe superar una prueba plana CD 10 para determinar tu posición."
    ]
  }
];

// Sentidos precisos
data_environment_vision = [
  {
    title: "Visión en la oscuridad",
    icon: "semi-closed-eye",
    subtitle: "Darkvision",
    description: "Permite ver en la oscuridad como si fuera luz tenue.",
    reference: "Reglas básicas – Sentidos especiales",
    bullets: [
      "Ignora los efectos de la oscuridad para ver.",
      "Solo distingue tonos de gris, no colores."
    ]
  },
  {
    title: "Visión verdadera",
    icon: "eye-shield",
    subtitle: "True Seeing",
    description: "Revela ilusiones, criaturas invisibles y presencias en el Plano Etéreo.",
    reference: "Reglas básicas – Sentidos especiales",
    bullets: [
      "Percibe criaturas e ilusiones de forma auténtica.",
      "No es afectada por invisibilidad ni ilusiones."
    ]
  }
];

// Sentidos imprecisos
data_environment_imprecise_senses = [
  {
    title: "Olfato",
    icon: "nose",
    subtitle: "Impreciso",
    description: "Detectas olores en un área limitada, sin localización exacta.",
    reference: "Reglas básicas – Sentidos especiales",
    bullets: [
      "Localiza criaturas por aroma, pero no su posición precisa.",
      "Útil para rastrear y detectar objetivos ocultos."
    ]
  },
  {
    title: "Percepción sísmica",
    icon: "one-eyed",
    subtitle: "Impreciso",
    description: "Percibes vibraciones a través del suelo en un radio determinado.",
    reference: "Reglas básicas – Sentidos especiales",
    bullets: [
      "Detecta criaturas u objetos en contacto con la superficie.",
      "No revela detalles finos ni posición exacta."
    ]
  }
];

// Cobertura
data_environment_cover = [
  {
    title: "Cobertura parcial",
    icon: "broken-shield",
    subtitle: "Cobertura media (½)",
    description: "Un obstáculo cubre parte de tu cuerpo.",
    reference: "Reglas básicas – Cobertura",
    bullets: [
      "Bonificador circunstancial +2 a la CA y a la salvación de Reflejos."
    ]
  },
  {
    title: "Cobertura de tres cuartos",
    icon: "cracked-shield",
    subtitle: "Cobertura (¾)",
    description: "Un obstáculo cubre la mayor parte de tu cuerpo.",
    reference: "Reglas básicas – Cobertura",
    bullets: [
      "Bonificador circunstancial +5 a la CA y a la salvación de Reflejos."
    ]
  },
  {
    title: "Cobertura total",
    icon: "shield",
    subtitle: "Cobertura total",
    description: "Un obstáculo oculta completamente tu cuerpo.",
    reference: "Reglas básicas – Cobertura",
    bullets: [
      "No puedes ser elegido directamente como objetivo de ataques o conjuros.",
      "Los efectos de área te afectan si estás dentro del área."
    ]
  }
];

// Flanqueo
data_environment_flanking = [
  {
    title: "Flanqueo",
    icon: "crossed-swords",
    subtitle: "Estado Desprevenido",
    description: "Cuando dos aliados flanquean a un enemigo, este queda desprevenido.",
    reference: "Reglas básicas – Flanqueo",
    bullets: [
      "Los aliados deben situarse en espacios adyacentes opuestos al objetivo.",
      "El enemigo recibe el estado Desprevenido mientras siga flanqueado.",
      "No funciona contra criaturas que no pueden ser flanqueadas."
    ]
  }
];

// Terreno y efectos ambientales
data_environment_terrain = [
  {
    title: "Terreno difícil",
    icon: "hiking",
    subtitle: "Movimiento ralentizado",
    description: "El terreno áspero o desordenado dificulta el movimiento.",
    reference: "Reglas básicas – Terreno difícil",
    bullets: [
      "Cada 5 pies de movimiento requiere 1 pie adicional de movimiento.",
      "No puedes correr ni saltar en terreno difícil."
    ]
  }
];
