import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const assets = path.join(dist, 'assets');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(assets, { recursive: true });
fs.cpSync(path.join(root, 'public'), dist, { recursive: true });
fs.copyFileSync(path.join(root, 'src', 'index.css'), path.join(assets, 'app.css'));

await build({
  entryPoints: [path.join(root, 'src', 'main.jsx')],
  outfile: path.join(assets, 'app.js'),
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

const htmlPath = path.join(root, 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8')
  .replace('<script type="module" src="/src/main.jsx"></script>', '<link rel="stylesheet" href="./assets/app.css" />\n    <script type="module" src="./assets/app.js"></script>');

fs.writeFileSync(path.join(dist, 'index.html'), html);
fs.writeFileSync(path.join(dist, '.nojekyll'), '');
