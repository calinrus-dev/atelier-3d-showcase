# Origen y alcance de la muestra pública

[← Proyecto](../README.md)

## Qué se publica

Adaptación de un módulo real del producto: shortcuts.ts. Se conservan el mapa, keyChord, matches y bindingError. Se eliminan tipos TypeScript, traducción, React y persistencia; el texto español de las acciones queda literal. La página de laboratorio y las pruebas son nuevas.

[Inspeccionar la pieza](../samples/shortcuts.js). La primera publicación de estas muestras es del 28 de septiembre de 2026. Esa fecha no pretende representar la fecha de creación del producto ni actividad de desarrollo histórica.

## Qué puede comprobar otra persona

El código público, las pruebas y el workflow están en este mismo repositorio. Se pueden clonar, ejecutar y discutir. La procedencia desde archivos privados es una declaración del autor: un lector externo no tiene acceso a ese historial para contrastarla. Las adaptaciones se describen arriba para no confundir una muestra con el producto completo.

## Límites

No incluye edición 3D, persistencia de preferencias, licencias, exportación ni integraciones. El normalizador no es un gestor universal de IME/AltGr; las combinaciones que capture el sistema operativo pueden no llegar al navegador.

La publicación de estas piezas no abre el núcleo del producto. Las APIs internas, secretos, claves, datos de usuario, contenido comercial y demás implementaciones privadas quedan fuera.

## Derechos

Copyright © 2026 Calin Rus. Código visible para evaluación técnica. No se incorpora una licencia general de reutilización al producto privado.

## Referencia de arquitectura

[Arquitectura de Tauri](https://v2.tauri.app/concept/architecture/): contexto oficial sobre host nativo y WebView. La elección tecnológica no constituye por sí sola una medición de rendimiento.
