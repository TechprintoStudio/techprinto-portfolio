<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Portfolio transitions, scroll reveals and tab indicator layouts use Framer Motion with reduced-motion support, so motion remains consistent and accessible.
- The R3F studio token is lazy-loaded behind ClientOnly; its material palette is read from CSS tokens, keeping browser-only rendering isolated and theme colors authoritative.
- In this standalone export, official brand imagery uses direct local image imports so Vite bundles it without a hosting-specific asset proxy; keep destination links independent from imagery.
