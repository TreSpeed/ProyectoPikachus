# Spec Delta

## Purpose

Esta capacidad permite explorar una selección inicial de Pokémon mediante fichas visuales y guardar likes personales en el navegador.

## ADDED Requirements

### Requirement: Mostrar fichas de los primeros 20 Pokémon
El sistema SHALL obtener de PokéAPI los primeros 20 Pokémon y mostrar cada resultado en una ficha con nombre, imagen y tipo(s) disponible(s).

#### Scenario: Carga correcta de la galería
- **WHEN** PokéAPI devuelve los datos de los primeros 20 Pokémon
- **THEN** la galería muestra una ficha para cada Pokémon con su nombre, imagen y tipo(s) disponible(s)

### Requirement: Cambiar y conservar likes
El sistema SHALL permitir activar o quitar el like de cada Pokémon y conservar esa selección en el mismo navegador entre recargas de la página.

#### Scenario: Marcar y desmarcar un Pokémon
- **WHEN** el usuario activa o quita el like de una ficha
- **THEN** la ficha refleja inmediatamente el nuevo estado del like

#### Scenario: Restaurar likes tras recargar
- **WHEN** el usuario vuelve a abrir o recarga la página en el mismo navegador
- **THEN** las fichas muestran los likes guardados previamente

#### Scenario: El almacenamiento local no está disponible
- **WHEN** el navegador no permite guardar un cambio de like
- **THEN** la aplicación informa que ese cambio no persistirá tras una recarga

### Requirement: Comunicar estados de la galería
El sistema SHALL distinguir los estados de carga, error y resultado vacío de una galería con resultados.

#### Scenario: Esperar los datos
- **WHEN** la aplicación está solicitando datos a PokéAPI
- **THEN** informa que la galería está cargando

#### Scenario: Fallo al obtener datos
- **WHEN** la solicitud a PokéAPI falla o no se puede completar
- **THEN** la aplicación muestra un mensaje de error comprensible en lugar de una galería vacía sin explicación

#### Scenario: No hay resultados
- **WHEN** la respuesta de PokéAPI no contiene Pokémon
- **THEN** la aplicación informa que no hay Pokémon para mostrar
