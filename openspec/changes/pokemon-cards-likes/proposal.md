# Proposal

## Why

El proyecto necesita una primera experiencia web funcional para explorar Pokémon de forma visual y sencilla. Una galería de fichas con likes locales permite descubrir Pokémon y conservar una selección personal sin cuentas ni infraestructura de servidor.

## What Changes

- Crear una web-app que muestre los primeros 20 Pokémon obtenidos de PokéAPI en fichas con imagen, nombre y datos básicos.
- Permitir activar y quitar el like de cada ficha, conservando la selección en `localStorage` entre recargas en el mismo navegador.
- Mostrar estados de carga, error y lista vacía para que la experiencia sea comprensible cuando los datos no estén disponibles.
- Mantener el alcance inicial sin búsqueda, filtros, paginación, cuentas ni sincronización entre dispositivos.

## Capabilities

### New Capabilities
- `pokemon-gallery`: Explorar una selección de Pokémon en fichas y guardar likes localmente.

### Modified Capabilities
- Ninguna.

## Impact

- Proyecto web actualmente sin código de aplicación; se deberá crear la interfaz y su lógica en JavaScript vanilla.
- Dependencia de red con PokéAPI para obtener la lista e información de los primeros 20 Pokémon.
- Uso del almacenamiento local del navegador para persistir likes; no se requiere backend ni base de datos.
