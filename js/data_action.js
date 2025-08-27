data_action = [
  {
    title: "Activar un objeto",
    icon: "variable_action",
    subtitle: "Manipular",
    description: "Llamas al efecto de un objeto activándolo de la forma adecuada.",
    reference: "PF2e SRD p.532",
    traits: ["manipular"],
    bullets: [
      "El número de acciones depende de las instrucciones del objeto.",
      "Puede activar efectos mágicos o mecánicos.",
      "Algunas activaciones requieren cumplir requisitos previos."
    ]
  },
  {
    title: "Prestar ayuda",
    icon: "single_action",
    subtitle: "Asistir en una tarea",
    description: "Realizas una prueba contra CD 20 para dar un bonificador de circunstancia a una prueba de habilidad o tirada de ataque de un aliado.",
    reference: "PF2e SRD p.471",
    traits: ["manipular"],
    bullets: [
      "En éxito: el objetivo gana +1 de circunstancia.",
      "En crítico: +2 (experto), +3 (maestro), +4 (legendario).",
      "El MJ puede modificar la CD según la tarea."
    ]
  },
  {
    title: "Retrasar",
    icon: "free_action",
    subtitle: "Ajustar tu turno",
    description: "Al comienzo de tu turno, decides esperar para actuar más tarde en la misma ronda.",
    reference: "PF2e SRD p.471",
    traits: [],
    bullets: [
      "Declaras la condición o momento en que actuarás.",
      "Cuando llegue el momento, gastas tu turno restante.",
      "Si no actúas antes de tu siguiente turno, pierdes las acciones no usadas."
    ]
  },
  {
    title: "Disipar",
    icon: "single_action",
    subtitle: "Concentración",
    description: "Acabas el efecto de un conjuro o de un objeto mágico mediante magia apropiada.",
    reference: "PF2e SRD p.305",
    traits: ["concentración"],
    bullets: [
      "Requiere conocer o tener acceso a magia capaz de anular el efecto.",
      "La CD depende del efecto a disipar.",
      "Puede usarse contra conjuros, efectos persistentes y activaciones de objetos."
    ]
  },
  {
    title: "Interactuar",
    icon: "single_action",
    subtitle: "Manipular",
    description: "Coges un objeto, abres una puerta, desenvainas un arma o realizas una acción física similar.",
    reference: "PF2e SRD p.470",
    traits: ["manipular"],
    bullets: [
      "Puede activar reacciones que respondan al rasgo Manipular.",
      "Algunas interacciones pueden requerir pruebas de habilidad."
    ]
  },
  {
    title: "Montar",
    icon: "single_action",
    subtitle: "Movimiento",
    description: "Te subes a una criatura más grande que tú para montarla o desmontarla.",
    reference: "PF2e SRD p.472",
    traits: ["movimiento"],
    bullets: [
      "Debes estar adyacente a la criatura.",
      "Se requiere una acción separada para desmontar.",
      "Montar a una criatura controlada por otro requiere su permiso."
    ]
  },
  {
    title: "Preparar",
    icon: "two_actions",
    subtitle: "Definir disparador",
    description: "Preparas para ejecutar una acción simple o gratuita en respuesta a un desencadenante específico.",
    reference: "PF2e SRD p.471",
    traits: ["concentración"],
    bullets: [
      "Debes gastar 2 acciones para preparar una acción.",
      "Especifica claramente el desencadenante y la acción.",
      "Reaccionas cuando se cumpla el desencadenante, antes de que continúe la secuencia."
    ]
  },
  {
    title: "Soltar",
    icon: "free_action",
    subtitle: "Manipular",
    description: "Sueltes algo que estás sujetando sin provocar reacciones.",
    reference: "PF2e SRD p.471",
    traits: ["manipular"],
    bullets: [
      "No consume acción si el MJ determina que es incidental.",
      "Puede utilizarse para dejar caer un arma antes de usar otra."
    ]
  },
  {
    title: "Mantener Conjuro / Activación",
    icon: "single_action",
    subtitle: "Concentración",
    description: "Extiendes el efecto de un conjuro o activación de objeto hasta el final de tu siguiente turno.",
    reference: "PF2e SRD p.304 / p.534",
    traits: ["concentración"],
    bullets: [
      "Debes haber lanzado o activado el efecto previamente.",
      "Algunos efectos especifican un límite de duración con Mantener.",
      "Interrumpir la concentración pone fin al efecto."
    ]
  },
  {
    title: "Ponerse a Cubierto",
    icon: "single_action",
    subtitle: "Defensa",
    description: "Te colocas tras una cobertura existente para ganar cobertura o mejorarla a cobertura superior.",
    reference: "PF2e SRD p.470",
    traits: [],
    bullets: [
      "Requiere estar adyacente a la cobertura.",
      "Otorga bonificadores a la CA y a salvaciones según el tipo de cobertura.",
      "Puede combinarse con la acción Esconderse si la cobertura lo permite."
    ]
  }
];
