// Contenedor de subcategorías activo y su padre
var lastItemsContainer = null;
var lastParent = null;
// — helper para sustituir marcadores por <img> —
function replaceMarkers(str) {
    if (typeof str !== 'string') return str;
    return str
        .replaceAll('[one-action]',    '<img src="icons/single_action.png"  class="action-icon" alt="1 acción">')
        .replaceAll('[two-actions]',   '<img src="icons/two_action.png"    class="action-icon" alt="2 acciones">')
        .replaceAll('[three-actions]', '<img src="icons/three_action.png"  class="action-icon" alt="3 acciones">')
        .replaceAll('[reaction]',      '<img src="icons/reaction.png"      class="action-icon" alt="reacción">')
        .replaceAll('[free-action]',   '<img src="icons/free_action.png"   class="action-icon" alt="acción libre">');
}
// COPIAR ↓
function add_quickref_item(parent, data, type) {
// Si cambiamos de sección (parent distinto), borramos el grupo anterior
if (parent !== lastParent) {
  lastItemsContainer = null;
  lastParent = parent;
}
  // 1) Si este objeto trae "header", abrimos nueva subcategoría
  if (data.header) {
    // Wrapper de sección
    var category = document.createElement("div");
    category.className = "category";
    parent.appendChild(category);

    // Título de subcategoría
    var h = document.createElement("div");
    h.className = "section-subheader";
    h.textContent = data.header;
    category.appendChild(h);

    // Creamos un grid para los ítems siguientes
    lastItemsContainer = document.createElement("div");
    lastItemsContainer.className = "item-group";
    category.appendChild(lastItemsContainer);

    // Salimos: este objeto no genera un item normal
    return;
  }

  // 2) Ítem normal: icono, título, descripción
  var icon     = data.icon     || "perspective-dice-six-faces-one";
  var subtitle = replaceMarkers(data.subtitle || "");
  var title    = replaceMarkers(data.title    || "[no title]");

  var item = document.createElement("div");
  item.className = "item itemsize";
  item.innerHTML = `
    <div class="item-icon iconsize icon-${icon}"></div>
    <div class="item-text-container text">
      <div class="item-title">${title}</div>
      <div class="item-desc">${subtitle}</div>
    </div>
  `;

  var style = window.getComputedStyle(parent.parentNode.parentNode);
  var color = style.backgroundColor;
item.onclick = function(e) {
  e.stopPropagation();            // evita que el click burbujee
  e.preventDefault();             // frena cualquier acción por defecto
  show_modal(data, color, type);  // tu modal sigue igual
};
  // 3) Dónde lo metemos: en la subcategoría activa o en el parent general
  var container = lastItemsContainer || parent;
  container.appendChild(item);
}

function show_modal(data, color, type) {
    $('#modal').find('.modal-tags, .modal-bullets').remove();
    var title     = replaceMarkers(data.title       || "[no title]");
    var subtitle  = replaceMarkers(data.description || data.subtitle || "");
    var bullets   = (data.bullets || []).map(b => replaceMarkers(b));
    var reference = replaceMarkers(data.reference   || "");
    type = type || "";
    color = color || "black"

    $("body").addClass("modal-open");
    $("#modal").addClass("modal-visible");
    $("#modal-backdrop").css("height", window.innerHeight + "px");
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").html(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").html(subtitle);
	// — INSERTAR TAGS EN EL MODAL —
// 2. Construir HTML de etiquetas
    // — Insertar las tags nuevas —
    var tagsHTML = "";
    if (data.tags && data.tags.length) {
        tagsHTML = '<div class="modal-tags">' +
            data.tags.map(function(tag) {
                return '<span class="tag" data-tooltip="' + tag.info + '">' +
                           tag.name +
                       '</span>';
            }).join('') +
        '</div>';
    }
    $("#modal-subtitle").html(tagsHTML);

    $("#modal-reference").text(reference);

    var bullets_html = bullets.map(function (item) { return "<p class=\"fonstsize\">" + item + "</p>"; }).join("\n<hr>\n");
    $("#modal-bullets").html(bullets_html);
}

function hide_modal() {
    $("body").removeClass("modal-open");
    $("#modal").removeClass("modal-visible");
	$('#modal').find('.modal-tags, .modal-bullets').remove();
}

function fill_section(data, parentname, type) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item, type);
    });
}

function init() {
    fill_section(data_movement, "basic-movement", "Acción basicas");
    fill_section(data_action, "basic-actions", "Acción basicas");
    fill_section(data_bonusaction, "basic-bonus-actions", "Acción basicas");
    fill_section(data_reaction, "basic-reactions", "Acciones de habilidad");
    fill_section(data_condition, "basic-conditions", "Condición");
    fill_section(data_environment_obscurance, "environment-obscurance", "Ambiente");
    fill_section(data_environment_light, "environment-light", "Ambiente");
    fill_section(data_environment_vision, "environment-vision", "Ambiente");
    fill_section(data_environment_cover, "environment-cover", "Ambiente");
	fill_section(data_rest, "basic-rest", "Descanso");
	fill_section(data_optional, "optional-actions", "Acción basicas");
	fill_section(data_exploration_general, "exploration-general", "Exploración general");
	fill_section(data_exploration_skill,   "exploration-skill",   "Exploración de habilidad");
	fill_section(data_Action_Starfinder2e,   "Action-Starfinder2e",   "Starfinder2e");
	

    var modal = document.getElementById("modal");
    modal.onclick = hide_modal;
}

$(window).load(init);
