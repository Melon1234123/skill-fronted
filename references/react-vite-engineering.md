# React + Vite engineering

Keep four concerns separate:

- **Composition:** sections, semantic HTML, typography, tokens, and layout live in page and presentational components.
- **Interaction state:** navigation, selection, loading, and errors live in typed React state or a small feature hook.
- **Media:** load video, imagery, and data independently; provide a poster, accessible text, and a meaningful static state before media is ready.
- **Canvas/WebGL:** isolate it behind a small client component with a static CSS or image fallback. It must never be required to read the page.

Use React + TypeScript + Vite. Split a section into a component once it has its own state, media lifecycle, animation lifecycle, or testable behavior. Prefer native links, buttons, headings, and landmarks over div-based controls.

## Motion lifecycle

Create GSAP work inside a scoped context and return cleanup that reverts the context. Kill ScrollTriggers, disconnect observers, remove listeners, and cancel every `requestAnimationFrame` on unmount. Do not set a hidden animation state until the animation system has initialized; otherwise a failed import or disabled script can leave content invisible.

Treat `prefers-reduced-motion: reduce` as a complete presentation path: show final readable states, keep native scrolling, and omit nonessential transforms, parallax, and autoplay. Never use scroll hijacking, bounce, or perpetual decoration.

## Rendering budget and fallback

Cap WebGL pixel ratio (for example, `Math.min(devicePixelRatio, 1.5)`) and render only while visible or changing. Cap the animation loop at 30 FPS (or throttle updates to one frame per 33 ms) unless measurement shows a higher rate is necessary. Limit frame work, pause offscreen canvases, and release GPU resources during cleanup. If WebGL, media, or a dependency fails, keep the same content, hierarchy, and primary action in a static fallback.

Use `loading="lazy"` for below-the-fold images, reserve media dimensions to avoid layout shift, and avoid shipping large video in normal source commits. Report the provenance and role of every nontrivial media asset.
