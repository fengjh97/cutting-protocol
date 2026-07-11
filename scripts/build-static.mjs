import fs from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const publicDir = path.join(root, 'public');

const LOADERS = {
  '.css': 'empty', '.jpg': 'file', '.jpeg': 'file',
  '.png': 'file', '.svg': 'file', '.webp': 'file',
};

/* Build one app (entry + css + html) into `outDir` with its own asset copy. */
async function buildApp({ name, entry, css, html, outDir }) {
  const assets = path.join(outDir, 'assets');
  fs.mkdirSync(assets, { recursive: true });
  // copy static assets (sprites / scenes / fonts / char) into this app's tree
  if (fs.existsSync(publicDir)) fs.cpSync(publicDir, outDir, { recursive: true });

  const cssSrc = fs.readFileSync(path.join(root, 'src', css), 'utf8');
  const cssHash = createHash('sha256').update(cssSrc).digest('hex').slice(0, 8);
  const cssFile = `app-${cssHash}.css`;
  fs.writeFileSync(path.join(assets, cssFile), cssSrc);

  await build({
    entryPoints: { app: path.join(root, 'src', entry) },
    outdir: outDir,
    entryNames: 'assets/[name]-[hash]',
    bundle: true,
    minify: true,
    format: 'esm',
    jsx: 'automatic',
    loader: LOADERS,
    assetNames: 'assets/[name]-[hash]',
    publicPath: './',
    define: { 'import.meta.env.BASE_URL': '"./"' },
    logLevel: 'info',
  });

  const jsFile = fs.readdirSync(assets).find((f) => /^app-[a-z0-9]+\.js$/i.test(f));
  if (!jsFile) throw new Error(`[${name}] static build produced no app bundle`);

  const htmlOut = fs.readFileSync(path.join(root, html), 'utf8')
    .replace(
      new RegExp(`<script type="module" src="/src/${entry}"></script>`),
      `<link rel="stylesheet" href="./assets/${cssFile}" />\n    <script type="module" src="./assets/${jsFile}"></script>`,
    );
  fs.writeFileSync(path.join(outDir, 'index.html'), htmlOut);
  console.log(`[${name}] -> ${path.relative(root, outDir)}/  (css ${cssFile}, js ${jsFile})`);
}

// fresh dist
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

// pixel version at the site root (unchanged)
await buildApp({
  name: 'pixel', entry: 'main.jsx', css: 'pixel.css',
  html: 'index.html', outDir: dist,
});

// 3D version under /3d (coexists)
await buildApp({
  name: '3d', entry: 'main3d.jsx', css: 'glass.css',
  html: 'index3d.html', outDir: path.join(dist, '3d'),
});

fs.writeFileSync(path.join(dist, '.nojekyll'), '');
console.log('done.');
