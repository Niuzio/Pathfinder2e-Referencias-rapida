// 1. Muestra el modal
function show_modal(data, color, type) {
  var title     = data.title     || "[no title]";
  var subtitle  = data.description || data.subtitle || "";
  var bullets   = data.bullets   || [];
  var reference = data.reference || "";
  type = type || "";
  color = color || "black";

  $("body").addClass("modal-open");
  $("#modal").addClass("modal-visible");
  $("#modal-backdrop").css("height", window.innerHeight + "px");
  $("#modal-container")
    .css("background-color", color)
    .css("border-color", color);

  $("#modal-title")
    .text(title)
    .append("<span class='float-right'>" + type + "</span>");
  $("#modal-subtitle").text(subtitle);
  $("#modal-reference").text(reference);

  var bullets_html = bullets
    .map(function(item) {
      return "<p class='fontsize'>" + item + "</p><hr>";
    })
    .join("\n");
  $("#modal-bullets").html(bullets_html);
}

// 2. Oculta el modal
function hide_modal() {
  $("body").removeClass("modal-open");
  $("#modal").removeClass("modal-visible");
}

// 3. Añade un item (ícono + texto + tags)
function add_quickref_item(parent, data, type) {
  var icon     = data.icon     || "perspective-dice-six-faces-one";
  var subtitle = data.subtitle || "";
  var title    = data.title    || "[no title]";

  // Construye las tags si vienen en data.tags
  var tagsHTML = "";
  if (data.tags && data.tags.length) {
    tagsHTML = '<div class="item-tags">' +
      data.tags.map(function(tag) {
        return '<span class="tag" data-tooltip="' +
               tag.info +
               '">' +
               tag.name +
               "</span>";
      }).join("") +
    "</div>";
  }

  // Crea el contenedor del item
  var item = document.createElement("div");
  item.className = "item itemsize";
  item.innerHTML =
    '<div class="item-icon iconsize icon-' + icon + '"></div>' +
    '<div class="item-text-container text">' +
      '<div class="item-title">' + title + "</div>" +
      '<div class="item-desc">'  + subtitle + "</div>" +
      tagsHTML +
    "</div>";

  // Color de fondo de la sección (para el modal)
  var style   = window.getComputedStyle(parent.parentNode.parentNode);
  var bgColor = style.backgroundColor;
  item.onclick = function() {
    show_modal(data, bgColor, type);
  };

  parent.appendChild(item);
}

// 4. Rellena cada sección con su array de datos
function fill_section(dataArray, parentId, type) {
  var parent = document.getElementById(parentId);
  dataArray.forEach(function(item) {
    add_quickref_item(parent, item, type);
  });
}

// 5. Inicializa todo
function init() {
  fill_section(data_movement,                "basic-movement",           "Movimiento");
  fill_section(data_action,                  "basic-actions",            "Acción básica");
  fill_section(data_bonusaction,             "basic-bonus-actions",      "Acción básica");
  fill_section(data_reaction,                "basic-reactions",          "Reacción");
  fill_section(data_condition,               "basic-conditions",         "Condición");
  fill_section(data_environment_obscurance,  "environment-obscurance",   "Ambiente");
  fill_section(data_environment_light,       "environment-light",        "Ambiente");
  fill_section(data_environment_vision,      "environment-vision",       "Ambiente");
  fill_section(data_environment_cover,       "environment-cover",        "Ambiente");
  fill_section(data_rest,                    "basic-rest",               "Descanso");
  fill_section(data_optional,                "optional-actions",         "Opcional");
  fill_section(data_exploration_general,     "exploration-general",      "Exploración");
  fill_section(data_exploration_skill,       "exploration-skill",        "Exploración");
  fill_section(data_Action_Starfinder2e,     "Action-Starfinder2e",      "Starfinder");

  // Cierra el modal al hacer clic fuera
  document.getElementById("modal").onclick = hide_modal;
}
/* Bloque de tags debajo de la descripción */
.item-tags {
  margin: 4px 0;
}

.item-tags .tag {
  display: inline-block;
  background-color: var(--section-color);
  color: #fff;
  border-radius: 3px;
  font-size: 0.75em;
  padding: 2px 6px;
  margin-right: 4px;
  position: relative;
  cursor: default;
}

/* Tooltip en hover */
.item-tags .tag:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.85);
  color: #fff;
  padding: 6px 8px;
  border-radius: 4px;
  white-space: pre-wrap;
  font-size: 0.75em;
  line-height: 1.2;
  z-index: 10;
  max-width: 200px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.item-tags .tag:hover::before {
  content: "";
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: rgba(0,0,0,0.85);
  z-index: 10;
}

window.onload = init;
