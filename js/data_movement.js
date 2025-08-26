data_movement = [
  {
    title: "Zancada (Stride)",
    icon: "single_action",
    subtitle: "Movimiento",
    description: "Te mueves una distancia igual a tu velocidad usando el mismo tipo de movimiento que ya estés empleando. Puedes cambiar de dirección durante la Zancada siempre que se mantenga el mismo tipo de movimiento.",
    reference: "Pathfinder 2e SRD p.471",
    traits: ["movimiento"],
    bullets: [
      "Puedes realizar múltiples Zancadas en tu turno, cada una gastando una acción.",
      "Si dispones de varias velocidades, puedes elegir cuál usar para esta acción.",
      "No puedes Zancadear si tu velocidad es 0."
    ]
  },
  {
    title: "Golpear (Strike)",
    icon: "single_action",
    subtitle: "Ataque",
    description: "Realizas un ataque con un arma, una parte de tu cuerpo o un efecto que cuente como ataque. Aplica todos los modificadores, bonificadores y penalizadores pertinentes.",
    reference: "Pathfinder 2e SRD p.470",
    traits: ["ataque"],
    bullets: [
      "El tipo de ataque (cuerpo a cuerpo o a distancia) depende del arma o efecto.",
      "Se aplica la penalización por ataques múltiples a partir del segundo ataque en el mismo turno.",
      "Un Golpe puede activar reacciones de los enemigos."
    ]
  },
  {
    title: "Lanzar un conjuro (Cast a Spell)",
    icon: "variable_action",
    subtitle: "Concentración y componentes",
    description: "Lanzas un conjuro que conoces o que tienes preparado. El número de acciones requeridas depende de los componentes del conjuro: verbal, somático, material o de enfoque.",
    reference: "Pathfinder 2e SRD p.302",
    traits: ["concentración"],
    bullets: [
      "Cada componente normalmente requiere una acción para ejecutarse.",
      "Algunos conjuros requieren menos de una acción; otros, hasta tres.",
      "Debes cumplir con todos los requisitos indicados en la descripción del conjuro."
    ]
  },
  {
    title: "Paso (Step)",
    icon: "single_action",
    subtitle: "Movimiento cuidadoso",
    description: "Te mueves 5 pies sin provocar reacciones que se activen por movimiento.",
    reference: "Pathfinder 2e SRD p.470",
    traits: ["movimiento"],
    bullets: [
      "Ignora el terreno difícil para esa distancia.",
      "No puedes usar Paso si tu velocidad es 0.",
      "No puedes atravesar el espacio de un enemigo con esta acción."
    ]
  },
  {
    title: "Alzar un escudo (Raise a Shield)",
    icon: "single_action",
    subtitle: "Defensa",
    description: "Levantas un escudo que empuñas para obtener su bonificador a la CA hasta el inicio de tu siguiente turno.",
    reference: "Pathfinder 2e SRD p.472",
    traits: [],
    bullets: [
      "Mientras esté alzado, puedes usar la reacción Bloqueo con escudo si la tienes.",
      "No puedes alzar un escudo que no estés empuñando."
    ]
  }
];
