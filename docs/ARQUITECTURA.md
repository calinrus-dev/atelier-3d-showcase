# Atelier 3D / Diseño técnico

[← Inicio](../README.md)

## Contexto

Un editor de espacios y escenas 3D con materiales, recorridos y salidas de presentación, pensado para pasar de una propuesta a una experiencia navegable.

**Tecnologías asociadas al proyecto:** TypeScript · React · Rust · Tauri · WebGL.

## Mapa de responsabilidades

Este mapa conceptual organiza la explicación del producto; no representa endpoints, procesos desplegados ni contratos internos.

```mermaid
flowchart TD
    A["Editor y selección"] --> B["Escena y recursos"]
    B --> C["Visor de presentación"]
    C --> D["Salidas y archivos"]
```

## Una escena coherente

La propuesta editada y la presentación comparten una identidad de recursos.

## La visita comunica

Capítulos y puntos de interés ayudan a explicar el espacio.

## Límites verificables

La lectura geométrica no se presenta como certificación normativa.

## Rendimiento y dependencia

Mi criterio de trabajo es medir antes de optimizar: identificar el recorrido relevante, observar tiempo de respuesta y uso de recursos y comparar cambios con la misma carga. En sistemas nativos también me interesa la disposición de datos, la localidad de memoria y el trabajo repetido.

Local-first es una preferencia arquitectónica: conservar una experiencia útil y control sobre los datos en el dispositivo, e incorporar servicios externos cuando aporten una función concreta. Su alcance varía por proyecto; no implica que todas las integraciones de este caso funcionen sin conexión.

No se publican cifras de rendimiento sin un ensayo identificado. La evidencia específica disponible está en [Estado](ESTADO.md).

## Qué conviene demostrar después

- Ampliar flujos de edición y presentación.
- Mejorar evidencia de rendimiento con escenas controladas.
- Validar experiencias inmersivas en dispositivos concretos.
