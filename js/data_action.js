data_action = [
  {
    title: "Zancada (Stride)",
    icon: "single_action",
    subtitle: "Movimiento",
    description: "Te desplazas hasta tu velocidad usando el mismo tipo de movimiento que ya estás utilizando. Puedes usar la acción Zancada si estás bajo una condición que permita movimiento y no impida desplazarte.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "Puedes usar múltiples Zancadas en tu turno, cada una gastando una acción.",
      "Puedes intercalar Zancadas con otras acciones.",
      "Si una criatura tiene varias velocidades, puedes elegir cuál usar para esta Zancada."
    ]
  },
  {
    title: "Paso (Step)",
    icon: "single_action",
    subtitle: "Movimiento cuidadoso",
    description: "Te mueves 5 pies sin provocar reacciones que se activen por movimiento. Usar Paso no se ve afectado por terreno difícil, ya que solo recorres una distancia corta y cuidadosa.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "No puedes usar Paso si tu velocidad es 0.",
      "No puedes usar Paso para atravesar un espacio de un enemigo."
    ]
  },
  {
    title: "Golpear (Strike)",
    icon: "single_action",
    subtitle: "Ataque con arma o sin armas",
    description: "Realizas un ataque con un arma, una parte de tu cuerpo, o un conjuro que incluya un ataque. El ataque aplica todos los modificadores, bonificadores y penalizadores apropiados.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "El tipo de ataque (cuerpo a cuerpo o a distancia) depende del arma o efecto.",
      "Se aplica penalización por ataques múltiples si no es el primero de tu turno.",
      "Los Golpes pueden activar reacciones de los enemigos."
    ]
  },
  {
    title: "Lanzar conjuro (Cast a Spell)",
    icon: "variable_action",
    subtitle: "Concentración y componentes",
    description: "Lanzas un conjuro que conoces o tienes preparado. El coste en acciones depende de sus componentes (verbal, somático, material, de enfoque). Cada componente generalmente requiere una acción.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "Algunos conjuros requieren menos de una acción, otros hasta 3.",
      "Debes cumplir todos los requisitos indicados en el conjuro.",
      "Puedes sostener un conjuro si la descripción lo permite, gastando acciones en turnos posteriores."
    ]
  },
  {
    title: "Interactuar (Interact)",
    icon: "single_action",
    subtitle: "Manipular objeto o entorno",
    description: "Manipulas un objeto o el entorno, por ejemplo, empuñar un arma, abrir una puerta, recoger un objeto, guardar una poción, etc. Cualquier acción que requiera uso físico intencionado entra en esta categoría.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "Puede activar reacciones que respondan al rasgo Manipular.",
      "Algunas interacciones requieren pruebas de habilidad adicionales."
    ]
  },
  {
    title: "Alzar escudo (Raise a Shield)",
    icon: "single_action",
    subtitle: "Defensa",
    description: "Adoptas una postura defensiva con tu escudo, obteniendo su bonificador a la CA hasta el inicio de tu siguiente turno.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "Mientras el escudo esté alzado, puedes usar la reacción Bloqueo con escudo si la posees.",
      "No puedes alzar un escudo que no estés empuñando."
    ]
  },
  {
    title: "Buscar (Seek)",
    icon: "single_action",
    subtitle: "Percepción",
    description: "Examinas con atención un área o una criatura para localizar objetivos ocultos, trampas, pistas, o cualquier detalle relevante que no sea evidente a simple vista.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "Normalmente implica una tirada de Percepción contra la CD de Sigilo u ocultación.",
      "El área examinada puede ser un cono de 30 pies o una esfera de 15 pies a tu alrededor."
    ]
  },
  {
    title: "Ocultarse (Hide)",
    icon: "single_action",
    subtitle: "Sigilo",
    description: "Intentas evitar ser detectado por una criatura que no te esté observando directamente, usando cobertura o camuflaje.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "Requiere cobertura o estar oculto tras un obstáculo.",
      "Tiras Sigilo contra la Percepción pasiva del objetivo.",
      "Si tienes éxito, obtienes la condición Oculto o No detectado."
    ]
  },
  {
    title: "Amedrentar (Demoralize)",
    icon: "single_action",
    subtitle: "Intimidación",
    description: "Con una amenaza verbal o gestual, intentas debilitar la determinación de un oponente, infligiéndole miedo.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "Tiras Intimidación contra la Voluntad del objetivo.",
      "En éxito, el objetivo obtiene la condición Asustado 1; en crítico, Asustado 2."
    ]
  },
  {
    title: "Agarrar (Grapple)",
    icon: "single_action",
    subtitle: "Atletismo",
    description: "Intentas agarrar físicamente a una criatura para impedirle moverse libremente.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "Tiras Atletismo contra la Fortaleza del objetivo.",
      "En éxito, el objetivo queda Agarrado; en crítico, además queda Inmovilizado.",
      "Si fallas críticamente, quedas Prono."
    ]
  },
  {
    title: "Empujar (Shove)",
    icon: "single_action",
    subtitle: "Atletismo",
    description: "Empujas a una criatura para alejarla de ti o moverla en el entorno.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "Tiras Atletismo contra la Fortaleza del objetivo.",
      "En éxito, la mueves 5 pies; en crítico, 10 pies.",
      "Si fallas críticamente, caes Prono."
    ]
  },
  {
    title: "Derribar (Trip)",
    icon: "single_action",
    subtitle: "Atletismo",
    description: "Usas tu fuerza o técnica para hacer caer al suelo a una criatura.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "Tiras Atletismo contra la Fortaleza del objetivo.",
      "En éxito, el objetivo queda Prono.",
      "En fallo crítico, tú quedas Prono."
    ]
  },
  {
    title: "Prepararse (Ready)",
    icon: "two_actions",
    subtitle: "Definir disparador",
    description: "Preparas una acción simple que ejecutarás como reacción cuando se cumpla una condición que especifiques.",
    reference: "Pathfinder 2e SRD",
    bullets: [
      "Debes gastar 2 acciones para preparar 1 acción o acción libre.",
      "Cuando el disparador ocurra, gastas tu reacción para ejecutarla."
    ]
  }
];
