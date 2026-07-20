---
name: frontend-showcase
description: Use when designing or implementing a high-quality React, TypeScript, and Vite product showcase, especially when the page needs an evidence-led visual story, deliberate motion, media fallbacks, or an original art direction.
---

# Frontend showcase

Use this skill to turn a product story into a polished, usable desktop showcase without confusing decoration for proof.

## Collect the visual contract

Ask for or infer only what is available: topic, audience, primary action, required sections, supplied assets and their provenance, critical interactions, mode, and desktop or responsive scope. Keep unavailable facts as explicit assumptions.

Choose one mode:

- **Signature:** read `references/source-fingerprint.md` and `references/signature-system.md`, then apply their transferable visual vocabulary without copying domain-specific motifs.
- **Adaptive:** read `references/adaptive-art-direction.md`; present 2–3 complete directions and wait for the user to select one before implementation.
- **Starter:** copy `templates/vite-showcase-starter`, then choose Signature or Adaptive before replacing its placeholder composition.

Always read `references/media-policy.md` before selecting media. Use supplied or licensed material first; generated material is illustrative and disclosed, never evidence.

## Build deliberately

Use React, TypeScript, and Vite. Read `references/react-vite-engineering.md` before implementing interactions, motion, media, or canvas work. Start with semantic document structure and a readable static state; add progressive enhancement only after it works without animation. Treat `prefers-reduced-motion` as a first-class final-state path.

Lead each section with the claim or evidence the reader needs next. Give each section one dominant headline and one primary action. Keep media and data readable over any background treatment.

## Finish and hand off

Read `references/acceptance.md` and complete its checks. Include the selected mode, tested viewport/scope, interaction results, fallback results, and media provenance in the handoff. Do not call the page complete while reduced motion, failed media, or disabled WebGL hides its meaning or primary action.
