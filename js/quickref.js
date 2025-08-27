function add_quickref_item(parent, data, type) {
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";

    var item = document.createElement("div");
    item.className += "item itemsize"
    item.innerHTML =
    '\
    <div class="item-icon iconsize icon-' + icon + '"></div>\
    <div class="item-text-container text">\
        <div class="item-title">' + title + '</div>\
        <div class="item-desc">' + subtitle + '</div>\
    </div>\
    ';

    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;

    item.onclick = function () {
        show_modal(data, color, type);
    }

    parent.appendChild(item);
}

function show_modal(data, color, type) {
    $('#modal').find('.modal-tags, .modal-bullets').remove();
    var title = data.title || "[no title]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    color = color || "black"

    $("body").addClass("modal-open");
    $("#modal").addClass("modal-visible");
    $("#modal-backdrop").css("height", window.innerHeight + "px");
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").text(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").text(subtitle);
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
    $("#modal-subtitle").after(tagsHTML);

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

	// Reemplazar marcadores en toda la página una vez que se montó todo:
  replaceActionMarkers(document.body);
}
function renderQuickRef() {
  // ... código que genera tu HTML ...

  // Al final, reemplazar marcadores por iconos
  replaceActionTags();
}

function replaceActionTags() {
// 1) Mapa de marcadores -> archivo de icono (rutas actuales)
// --- Sustitución de [one-action] -> <img src="..."> ---
const ACTION_ICON_SRC = {
  "[one-action]":  "icons/single_action.png",
  "[two-actions]": "icons/two_action.png",
  "[three-actions]":"icons/three_action.png",
  "[reaction]":    "icons/reaction.png",
  "[free-action]": "icons/free_action.png"
};

function replaceActionMarkers(root = document.body) {
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const t = node.nodeValue;
        if (!t || !t.includes("[")) return NodeFilter.FILTER_REJECT;
        for (const key in ACTION_ICON_SRC) {
          if (t.includes(key)) return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
      }
    }
  );

  const targets = [];
  while (walker.nextNode()) targets.push(walker.currentNode);

  targets.forEach(textNode => {
    const frag = document.createDocumentFragment();
    let remaining = textNode.nodeValue;

    while (remaining.length) {
      let nextKey = null;
      let nextIdx = Infinity;
      for (const key in ACTION_ICON_SRC) {
        const i = remaining.indexOf(key);
        if (i !== -1 && i < nextIdx) { nextIdx = i; nextKey = key; }
      }

      if (nextKey === null) {
        frag.appendChild(document.createTextNode(remaining));
        break;
      }

      if (nextIdx > 0) {
        frag.appendChild(document.createTextNode(remaining.slice(0, nextIdx)));
      }

      const img = document.createElement("img");
      img.src = ACTION_ICON_SRC[nextKey];
      img.alt = nextKey;
      img.className = "action-icon";
      img.decoding = "async";
      img.loading = "lazy";
      frag.appendChild(img);

      remaining = remaining.slice(nextIdx + nextKey.length);
    }

    textNode.parentNode.replaceChild(frag, textNode);
  });
}

$(window).load(init);

