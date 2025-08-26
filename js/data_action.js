// js/data_action.js
// ACCIONES BÁSICAS (COMUNES) de Pathfinder 2e
export default [
  {
    id: "zancada",
    name: "Zancada",
    actions: 1,
    traits: ["Movimiento", "Común"],
    category: "basicas-comunes",
    page: 471,
    icon: "icon-stride",
    description: [
      "Costo: 1 acción.",
      "Efecto: Te mueves hasta tu velocidad.",
      "Provoca reacciones de oportunidad cuando sales del alcance de una criatura enemiga.",
      "La velocidad se reduce por terreno difícil (cada 5 pies de terreno difícil cuestan 1 pie extra).",
      "No requiere prueba alguna: simplemente desplazas tu ficha."
    ]
  },
  {
    id: "golpear",
    name: "Golpear",
    actions: 1,
    traits: ["Ataque", "Común"],
    category: "basicas-comunes",
    page: 470,
    icon: "icon-strike",
    description: [
      "Costo: 1 acción.",
      "Efecto: Realizas un ataque con un arma o un ataque sin armas.",
      "Haz una tirada de ataque (1d20 + tu modificador de ataque) frente a la Clase de Armadura (CA) del objetivo.",
      "Si igualas o superas la CA, impactas y causas daño según tu arma o tu daño desarmado.",
      "Puedes dividir tus ataques entre distintos objetivos, si tienes más de un ataque por turno."
    ]
  },
  {
    id: "lanzar-hechizo",
    name: "Lanzar un hechizo",
    actions: "varies",
    traits: ["Magia", "Común"],
    category: "basicas-comunes",
    page: 302,
    icon: "icon-cast-spell",
    description: [
      "Costo: varía según el conjuro (normalmente 1‒3 acciones).",
      "Efecto: Lanzas un conjuro que has preparado o que conoces en tu repertorio.",
      "Aplica componentes (ver 'Componentes de conjuro'): verbal, somático y/o material.",
      "Algunos conjuros requieren concentración; cada vez que recibes daño debes hacer una salvación de Constitución para mantenerla.",
      "Los conjuros pueden tener efectos instantáneos, de duración o de área; consulta la ficha del conjuro para detalles."
    ]
  },
  {
    id: "paso",
    name: "Paso",
    actions: 1,
    traits: ["Movimiento", "Común"],
    category: "basicas-comunes",
    page: 470,
    icon: "icon-step",
    description: [
      "Costo: 1 acción.",
      "Efecto: Te mueves exactamente 5 pies sin provocar reacciones.",
      "Útil para reposicionarte cerca de aliados o esquivar protecciones de área enemigas.",
      "No puede usarse para atravesar terreno difícil gratis: paga el coste normal de Movimiento.",
      "No combina el movimiento de 'Paso' con otras acciones de movimiento."
    ]
  },
  {
    id: "alzar-escudo",
    name: "Alzar un escudo",
    actions: 1,
    traits: ["Manipulación", "Común"],
    category: "basicas-comunes",
    page: 472,
    icon: "icon-raise-shield",
    description: [
      "Costo: 1 acción.",
      "Efecto: Levantas o estabilizas tu escudo para ganar su bonificador a la CA.",
      "Aplica inmediatamente el bonificador de tu escudo a todas las tiradas de ataque enemigas contra ti.",
      "Si ya tienes el escudo alzado y no lo cambias de mano, mantenerlo no cuesta acciones adicionales.",
      "No puedes atacar con la mano que sostiene un escudo sin antes soltarlo (lo que sí provoca reacciones)."
    ]
  }
];
