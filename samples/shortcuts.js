// Adapted from the product module; see docs/PROVENANCE.md.
export const commands = [
  ["save", "Guardar", "Proyecto", "Ctrl+S"],
  ["undo", "Deshacer", "Proyecto", "Ctrl+Z"],
  ["redo", "Rehacer", "Proyecto", "Ctrl+Y"],
  ["duplicate", "Duplicar selección", "Edición", "Ctrl+D"],
  ["delete", "Eliminar selección", "Edición", "Delete"],
  ["rename", "Renombrar selección", "Edición", "F2"],
  ["select", "Seleccionar", "Edición", "Q"],
  ["move", "Mover pieza", "Edición", "M"],
  ["rotate", "Girar pieza", "Edición", "R"],
  ["scale", "Tamaño de pieza", "Edición", "E"],
  ["frame", "Centrar selección", "Cámara", "F"],
  ["fit", "Encuadrar todo", "Cámara", "0"],
  ["zoomIn", "Acercar", "Cámara", "+"],
  ["zoomOut", "Alejar", "Cámara", "-"],
  ["top", "Planta", "Cámara", "7"],
  ["front", "Vista frontal", "Cámara", "1"],
  ["perspective", "Perspectiva", "Cámara", "3"],
  ["walk", "Entrar / salir de Recorrer", "Cámara", "V"],
  ["library", "Mostrar biblioteca", "Interfaz", "B"],
  ["focus", "Concentración", "Interfaz", "Shift+F"],
  ["help", "Ayuda y atajos", "Interfaz", "F1"],
  ["palette", "Buscar acciones", "Interfaz", "Ctrl+K"],
  [
    "hierarchy",
    "Mostrar u ocultar el árbol",
    "Interfaz",
    "Ctrl+B",
  ],
]         ;

export const defaultBindings = Object.fromEntries(
  commands.map(([id, , , chord]) => [id, chord]),
)            ;

export function keyChord(e          ) {
  if (["Control", "Meta", "Alt", "Shift", "AltGraph"].includes(e.key))
    return "";
  let key = e.key.length === 1 ? e.key.toUpperCase() : e.key;
  if (e.code === "NumpadAdd" || key === "=") key = "+";
  if (e.code === "NumpadSubtract" || key === "_") key = "-";
  return [
    e.ctrlKey || e.metaKey ? "Ctrl" : "",
    e.altKey ? "Alt" : "",
    e.shiftKey && !["+", "-", "?"].includes(key) ? "Shift" : "",
    key,
  ]
    .filter(Boolean)
    .join("+");
}
export function matches(e          , id           , bindings          ) {
  const chord = keyChord(e);
  if (chord === bindings[id]) return true;
  if (bindings[id] !== defaultBindings[id]) return false;
  return (
    (id === "redo" && chord === "Ctrl+Shift+Z") ||
    (id === "delete" && chord === "Backspace") ||
    (id === "fit" && chord === "Home") ||
    (id === "help" && chord === "?")
  );
}
export function bindingError(
  id           ,
  chord        ,
  bindings          ,
)                {
  if (!chord) return "Pulsa una tecla con sus modificadores.";
  if (
    [
      "Escape",
      " ",
      "Space",
      "W",
      "A",
      "S",
      "D",
      "[",
      "]",
      "{",
      "}",
      "Home",
      "Backspace",
      "?",
      "Ctrl+Shift+Z",
    ].includes(chord) ||
    /Arrow|PageUp|PageDown|Tab/.test(chord)
  )
    return "Combinación reservada para navegación, texto o cancelación.";
  if (
    [
      "Alt+F4",
      "Ctrl+W",
      "Ctrl+R",
      "Ctrl+L",
      "Ctrl+T",
      "Ctrl+N",
      "Ctrl+Shift+W",
      "Ctrl+Shift+R",
      "F5",
      "F11",
      "F12",
    ].includes(chord)
  )
    return "Esta combinación pertenece al sistema o al navegador.";
  const conflict = commands.find(
    ([other]) => other !== id && bindings[other] === chord,
  );
  return conflict ? `Ya se usa para «${conflict[1]}».` : null;
}
