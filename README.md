# Pokemon Universe

[![version](https://img.shields.io/badge/version-0.1.0-blue?style=flat-square)](https://img.shields.io)
[![license: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)](./LICENSE)
[![deploy: Vercel](https://img.shields.io/badge/deploy-Vercel-black?style=flat-square)](https://vercel.com)

Bienvenido a Pokemon Universe — una web construida con Astro y React para explorar detalles de cartas, sets y estadísticas del universo Pokémon.

Este README detalla TODO lo necesario para entender, desarrollar, testear y desplegar el proyecto.

## Contenido

- Descripción general
- Características principales
- Stack tecnológico y dependencias clave
- Estructura del proyecto
- Scripts disponibles
- Instalación y desarrollo local (Windows / PowerShell)
- Producción y despliegue (Vercel)
- APIs y fuentes de datos
- Convenciones y decisiones arquitectónicas
- Cómo contribuir
- Contacto y licencia

## Descripción general

Pokemon Universe es un sitio informativo para aficionados a Pokémon. Provee visualizaciones, detalles de cartas (pokémon-tcg), métricas de mercado y componentes reutilizables. Está optimizado para ser desplegado como sitio estático y usa integraciones modernas como React dentro de Astro.

Público objetivo: desarrolladores, coleccionistas y fans que quieran explorar datos y tendencias de cartas Pokémon.

## Características principales

- Listado y filtrado de cartas Pokémon.
- Páginas de detalle por carta y por expansión.
- Visualizaciones de precio (trend, distribución) usando `recharts`.
- Páginas estáticas optimizadas (Astro) y componentes interactivos (React).
- Integración con `pokemon-tcg-sdk-typescript` para modelado de datos.
- Temas y utilidades con Tailwind CSS y componentes de `shadcn`.

## Stack tecnológico

- Framework principal: Astro (v5.x)
- UI: React (v19.x) integrado via `@astrojs/react`
- Estilos: Tailwind CSS
- Librerías y utilidades clave:
  - `pokemon-tcg-sdk-typescript` — cliente/definiciones para datos de cartas
  - `recharts` — gráficas y visualizaciones
  - `gsap` — animaciones
  - `lucide-react` — íconos
  - `atropos` — efectos 3D/tilt
  - `clsx`, `class-variance-authority` — utilidades de clases

Dependencias completas y versiones están en `package.json`.

## Estructura del proyecto (resumen)

Raíz del repositorio (las rutas están en `src/`):

- `public/` — activos estáticos (imágenes, fuentes)
- `src/pages/` — páginas y endpoints de Astro (ej. `index.astro`, rutas dinámicas)
- `src/layouts/` — layout principal (`Layout.astro`)
- `src/components/` — componentes React/ASTRO organizados por feature (UI, pokemon-card-data, ui-shadcn...)
- `src/styles/` — CSS global (Tailwind)
- `src/constant/` — constantes del sitio (ej. `site-info.ts`)
- `src/lib/` — utilidades y helpers (ej. `utils.ts`)
- `src/pages/api/` — endpoints server-side (ej. `currency-converter.ts`)
- `types/` — tipos TypeScript para respuestas y modelos

Una vista rápida de los directorios clave ya existentes:

`src/components/pokemon-card-data/` — contenedor de módulos que gestionan la presentación (stats, mercado, set, ataques, etc.)

## Scripts (extraídos de `package.json`)

- `pnpm dev` — Ejecuta el servidor de desarrollo de Astro.
- `pnpm build` — Construye la web para producción (carpeta `dist/`).
- `pnpm preview` — Previsualiza la build localmente.
- `pnpm astro` — Acceso a comandos del CLI de Astro.

Ejemplo de uso en PowerShell (desde la raíz del repo):

```powershell
pnpm install
pnpm dev
```

Nota: este proyecto usa pnpm como gestor (ver `pnpm-lock.yaml` y `pnpm-workspace.yaml`). Si prefieres `npm` o `yarn`, las tareas son similares, pero algunos lockers o scripts podrían requerir ajustes.

## Configuración local (Windows / PowerShell)

1. Instalar dependencias (pnpm recomendado):

```powershell
pnpm install
```

2. Iniciar servidor de desarrollo:

```powershell
pnpm dev
```

3. Construir para producción:

```powershell
pnpm build
pnpm preview
```

Si tu consola no reconoce `pnpm`, instala Node.js (v18+ recomendado) y luego instala pnpm globalmente:

```powershell
npm install -g pnpm
```

## Producción y despliegue

Este proyecto está configurado para ser desplegado en Vercel (ver `astro.config.mjs` que incluye el adaptador `@astrojs/vercel`). Recomendación de despliegue:

1. Conecta el repositorio a Vercel.
2. En Vercel, la build command por defecto será `pnpm build` y la carpeta de salida es la que Astro crea por defecto (`dist`).
3. Asegúrate de usar la versión de Node que soporte las dependencias (recomiendo Node 18+).

## APIs y fuentes de datos

- `pokemon-tcg-sdk-typescript` se usa para modelar y ayudar a consumir datos de cartas.
- Hay un endpoint local ejemplo en `src/pages/api/currency-converter.ts` para conversión de moneda.

Si planeas integrar una API externa (por ejemplo la API oficial de Pokémon o APIs de precios/mercado), documenta las variables de entorno necesarias y permisos en esta sección.

## Convenciones y decisiones arquitectónicas

- Astro para páginas estáticas y rutas; React para interactividad en componentes.
- Tailwind como framework de diseño y `shadcn` para patrones UI reutilizables.
- Código TypeScript cuando es crítico (tipos en `types/` y archivos `.ts/.tsx`).
- Alias de paths configurados por `components.json` (ej.: `components` -> `@/components`).

## Componentes y módulos destacados

- `src/components/pokemon-card-data/` — componentes que organizan data de cartas (Stats, Market, Set, Attacks).
- `src/components/ui-shadcn/` — implementación de componentes UI basados en shadcn.
- `src/components/pokemon-tcg/` — vistas específicas para grid y cartas (`PokemonCards.astro`, `PokemonGrid.astro`).

## Buenas prácticas para cambios

- Mantener componentes pequeños y reutilizables.
- Añadir tests o snapshots cuando se cambie la lógica de datos.
- Documentar nuevos endpoints en `src/pages/api/`.

## Cómo contribuir

1. Haz fork y crea una rama descriptiva: `feature/mi-nueva-funcion`.
2. Crea un PR describiendo claramente el cambio y por qué es necesario.
3. Asegúrate que los cambios visuales incluyan capturas o enlaces a previews.
4. Para cambios grandes, abre un issue antes de implementarlos para discutir el diseño.

Para las pautas detalladas de contribución, PR templates y checklist, consulta `CONTRIBUTING.md` en la raíz del repositorio.

## Problemas comunes y solución rápida

- Error: `pnpm` no encontrado — instala pnpm globalmente con `npm install -g pnpm`.
- Fallo en build por dependencias — verifica versiones Node (usar la versión recomendada) y limpia `node_modules` / lockfile si es necesario.

## Contacto y créditos

Información de contacto extraída del proyecto:

- Nombre del sitio: Pokemon Universe
- URL: https://pokeworld.com.co
- Email: iangelmanuel02@gmail.com
- Dirección: Barranquilla, Atlántico
- Twitter: @iangelmanuel

Si necesitas más información sobre el autor o quieres colaboración directa, usa el email anterior.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo `LICENSE` para el texto completo.
