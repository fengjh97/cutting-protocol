import fs from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const assets = path.join(dist, 'assets');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(assets, { recursive: true });
const publicDir = path.join(root, 'public');
if (fs.existsSync(publicDir)) fs.cpSync(publicDir, dist, { recursive: true });

const css = fs.readFileSync(path.join(root, 'src', 'index.css'), 'utf8');
const cssHash = createHash('sha256').update(css).digest('hex').slice(0, 8);
const cssFile = `app-${cssHash}.css`;
fs.writeFileSync(path.join(assets, cssFile), css);

await build({
  entryPoints: { app: path.join(root, 'src', 'main.jsx') },
  outdir: dist,
  entryNames: 'assets/[name]-[hash]',
  bundle: true,
  minify: true,
  format: 'esm',
  jsx: 'automatic',
  loader: {
    '.css': 'empty',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.png': 'file',
    '.svg': 'file',
    '.webp': 'file',
  },
  assetNames: 'assets/[name]-[hash]',
  publicPath: './',
  define: {
    'import.meta.env.BASE_URL': '"./"',
  },
  logLevel: 'info',
});

const jsFile = fs.readdirSync(assets).find((file) => /^app-[a-z0-9]+\.js$/i.test(file));
if (!jsFile) throw new Error('Static build did not produce a fingerprinted app bundle');

const htmlPath = path.join(root, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8')
  .replace(
    '<script type="module" src="/src/main.jsx"></script>',
    `<link rel="stylesheet" href="./assets/${cssFile}" />\n    <script type="module" src="./assets/${jsFile}"></script>`,
  );

fs.writeFileSync(path.join(dist, 'index.html'), html);
fs.writeFileSync(path.join(dist, '.nojekyll'), '');
