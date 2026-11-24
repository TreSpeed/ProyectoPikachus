# Design

## Context

See `proposal.md` for motivation and `specs/pokemon-gallery/spec.md` for observable requirements. The project currently contains OpenSpec files but no application source, framework, or build/test tooling.

## Goals / Non-Goals

**Goals:**
- Keep the app understandable and modular while using browser-native technology.
- Separate remote Pokémon data, local likes, and page rendering.
- Make network and browser-storage failures visible to the user.

**Non-Goals:**
- Add a frontend framework, state-management library, backend, or build pipeline.
- Add automatic retries, offline caching, or synchronization between browsers.

## Decisions

- **Use static HTML, CSS, and vanilla JavaScript modules.** This matches the small scope and avoids adding dependencies. Serve the page over a local HTTP server such as VS Code Live Server during development, since browser modules and API requests should not rely on opening the HTML file directly from disk.
- **Load the first 20 Pokémon from PokéAPI, then retrieve their detail records.** The list endpoint supplies names and detail URLs; detail records provide IDs, types, and image URLs. Request the detail records concurrently and treat an unsuccessful or incomplete API load as a gallery error rather than silently presenting a partial set. Prefer official artwork and fall back to the standard front sprite when artwork is unavailable.
- **Use a small separation of responsibilities.** Keep API access and response normalization, like persistence, and page startup/rendering in separate JavaScript modules. Use semantic HTML and a responsive CSS grid for the cards; expose each like control as a button whose pressed state is available to assistive technology.
- **Persist likes as Pokémon IDs in `localStorage`.** A single versioned key stores a JSON array, keeping saved state independent of card order and display text. Validate stored values when loading. If browser storage cannot be read or written, keep the current interaction usable where possible and show a notice that the like could not be restored or saved.
- **Treat Pokémon types as the initial “basic details.”** The source material does not define additional fields; types are useful on a compact card and are already available from the Pokémon detail endpoint. More stats can be added later without changing this MVP's data source.

## Risks / Trade-offs

- **PokéAPI or the user's network is unavailable** → Show the specified error state instead of leaving the gallery blank; the user can reload the page to try again.
- **Fetching 20 detail records adds requests and delays the first render** → Fetch them concurrently and retain a clear loading state until the set is ready.
- **`localStorage` is browser- and device-specific and can be disabled** → Explain storage failures; do not imply that likes sync or are durable when the browser rejects a write.
- **Opening the page directly from disk can prevent module loading or API access** → Document and use a local HTTP server for development and verification.
