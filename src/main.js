import { renderMessage } from "./render.js";

const gallery = document.querySelector("#pokemon-gallery");

if (!(gallery instanceof HTMLOListElement)) {
  throw new Error("No se encontró la lista de la galería de Pokémon.");
}

renderMessage(gallery, "La galería está lista para mostrar Pokémon.");
