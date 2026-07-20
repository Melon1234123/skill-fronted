# Acceptance

Before handoff, verify the selected visual contract rather than judging the page from code alone.

1. Run the Vite production build and the relevant tests.
2. Check the primary action and every keyboard-reachable critical interaction with keyboard and mouse.
3. Review desktop screenshots at the intended viewport and inspect the browser console for errors, failed media, and layout shift.
4. Enable reduced motion, block or fail the primary media, and disable WebGL when present. Confirm that content, hierarchy, and the primary action still work.
5. Check performance constraints: lazy below-the-fold media, bounded canvas work, no orphaned animation/listener/observer/RAF lifecycle, and readable loading states.
6. Record media provenance: supplied/licensed, generated (and clearly labelled as illustrative), or CSS/typographic. Never present generated media as evidence.

Completion means the story is readable with native scrolling and fallbacks, the evidence is legible before decoration, and the chosen signature or adaptive direction is implemented consistently.
