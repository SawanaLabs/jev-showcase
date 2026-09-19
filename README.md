# Jev Field Notes

A source-linked showcase of real Jev builds, organized around one question: what decision does Jev own inside each workflow?

Live site: <https://waitlistsawana.github.io/jev-showcase/>

## Architecture

- Vite, React, and TypeScript
- shadcn `nova` preset on Base UI
- Tailwind CSS 4
- Case data stored in `src/data/cases.ts`
- Static production output in `dist/`
- GitHub Actions deployment to GitHub Pages

There is no API server, database, user account, analytics service, or scheduled content job. The repository is the content source of truth.

## Local development

```bash
pnpm install
pnpm dev
```

Vite serves the project at `/jev-showcase/` so local behavior matches the GitHub Pages subpath.

## Verification

```bash
pnpm test
pnpm lint
pnpm build
```

The tracer test covers combined text, category, and source filtering. Production builds also run TypeScript checks.

## Updating cases

Edit `src/data/cases.ts`. Each case should link to a primary source and keep author-reported metrics attached to a short evidence note. Do not turn a demo, mock deployment, or historical experiment into a production claim.

## Deployment

Every push to `main` runs `.github/workflows/deploy-pages.yml`. The workflow installs frozen dependencies, tests, builds, uploads `dist`, and deploys through GitHub Pages.

The Vite `base` value is `/jev-showcase/`. Change it if the repository name changes.

## License

MIT
