# Changelog

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y las versiones siguen [Semantic Versioning](https://semver.org/lang/es/).

## [Unreleased]

## [0.2.0] — 2026-11-09

Actualización a Node.js 26 (LTS), Astro 7 y dependencias exactas. La aplicación mantiene sus páginas y componentes.

### Changed

- **Node.js 26.13.0** (LTS) en `engines`, `.nvmrc` y CI; **pnpm 12.18.0** como `packageManager`.
- **Astro 7.4.8** y dependencias a su versión exacta más reciente.
- **TypeScript 6.0.3**.
- **Calidad**: ESLint 10.14.0 con `eslint-plugin-astro` y `typescript-eslint`. Scripts `check`, `sync`, `eslint`, `eslint:fix`, `prettier` y `prettier:check`. CI con `check`, `eslint`, `prettier:check` y `build`.
- Tipos de variante de `Badge` en lugar de `any`, en `PokemonStatsData.tsx` y `PokemonInfoCard.astro`.
- Formato aplicado a todo el proyecto con `.prettierrc` del proyecto.

### Fixed

- Import sin uso (`Layout`) eliminado en `PokemonCards.astro`.
- `@emnapi/core` y `@emnapi/runtime` fijados a `1.11.3` mediante `overrides` en `pnpm-workspace.yaml`.

### Notes

- El build necesita la API de pokemontcg.io, que consulta durante la generación de páginas. Durante la verificación de esta versión respondía `503`, así que el build no pudo completarse; repetir el build cuando la API esté disponible.

## [0.1.0]

Versión inicial.
