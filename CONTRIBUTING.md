# Contribuir a Pokemon Universe

¡Gracias por querer contribuir! Aquí tienes una guía rápida para contribuir de forma eficiente y coherente.

## Flujo de trabajo recomendado

1. Haz fork del repositorio.
2. Crea una rama descriptiva basada en `master`:

   - feature: `feature/descripcion-corta`
   - fix: `fix/descripcion-corta`

3. Haz commits atómicos y con mensajes claros en inglés o español (ej. `feat: añadir componente PokemonCard`).
4. Abre un Pull Request hacia `master` con descripción del cambio, capturas si aplica y notas de testing.

## Requisitos antes de enviar un PR

- Asegúrate de que el proyecto compila y el servidor de desarrollo arranca (`pnpm dev`).
- Añade pruebas o snapshots cuando modifiques lógica crítica.
- Mantén la consistencia de estilo (usa Prettier si está configurado).

## Plantilla rápida de PR

Título: `tipo: resumen breve (issue#123)`

Descripción:

- ¿Qué problema resuelve este PR?
- ¿Cómo fue probado?
- Notas adicionales / capturas.

Checklist:

- [ ] Código formateado y lint pasado
- [ ] Build local verificada (`pnpm build`)
- [ ] No introduce warnings significativos

## Estilo de código

- Usa TypeScript/JSX/TSX donde corresponde.
- Prefiere componentes pequeños y reutilizables.
- Documenta funciones exportadas y componentes públicos con comentarios breves.

Si tienes dudas sobre un cambio grande, abre primero un _issue_ para discutir la solución antes de implementar.

Gracias por contribuir 👊
