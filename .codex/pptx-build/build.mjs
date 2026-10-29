import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { Presentation, PresentationFile } from '@oai/artifact-tool';

const workspaceDir = 'C:/Users/diego/Desktop/Projects/Narez/landing';
const skillDir = 'C:/Users/diego/.codex/plugins/cache/openai-primary-runtime/presentations/26.1025.11240/skills/presentations';
const buildDir = path.join(workspaceDir, '.codex', 'pptx-build');
const outputDir = path.join(workspaceDir, 'entregables');
const draftPath = path.join(buildDir, 'draft.pptx');
const finalPath = path.join(outputDir, 'tarjetas-narez-editable.pptx');
const previewPaths = [1, 2, 3].map((n) => path.join(buildDir, 'slide-' + String(n).padStart(2, '0') + '.png'));
const fontFamily = 'Arial';

await fs.mkdir(buildDir, { recursive: true });
await fs.mkdir(outputDir, { recursive: true });
if (await fs.access(finalPath).then(() => true).catch(() => false)) {
  throw new Error('El archivo final ya existe; cambia el nombre de salida antes de exportar.');
}

const sourceLogo = await fs.readFile(path.join(workspaceDir, 'public', 'logo.svg'), 'utf8');
const C = {
  ink: '#0A0A0A',
  paper: '#F5F5F3',
  canvas: '#EEECE8',
  steel: '#496578',
  muted: '#657178',
  rule: '#CFD0CC',
  white: '#FFFFFF',
};

function logoSvg(color) {
  return sourceLogo.replaceAll('fill="black"', 'fill="' + color + '"');
}

function addText(slide, name, text, x, y, width, height, size, color, options = {}) {
  const shape = slide.shapes.add({
    geometry: 'textbox',
    name,
    position: { left: x, top: y, width, height },
    fill: 'none',
    line: { style: 'solid', fill: 'none', width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    typeface: fontFamily,
    fontSize: size,
    color,
    bold: Boolean(options.bold),
    alignment: options.align || 'left',
    verticalAlignment: options.valign || 'middle',
    wrap: options.wrap || 'none',
    autoFit: 'shrinkText',
    insets: 0,
  };
  return shape;
}

function addRect(slide, name, x, y, width, height, fill, options = {}) {
  return slide.shapes.add({
    geometry: options.radius ? 'roundRect' : 'rect',
    name,
    position: { left: x, top: y, width, height },
    fill,
    line: { style: 'solid', fill: options.stroke || 'none', width: options.strokeWidth || 0 },
    ...(options.radius ? { borderRadius: options.radius } : {}),
    ...(options.shadow ? { shadow: options.shadow } : {}),
  });
}

function addCurve(slide, name, x, y, width, height, commands, color = C.steel, lineWidth = 2) {
  return slide.shapes.add({
    geometry: 'custom',
    name,
    position: { left: x, top: y, width, height },
    fill: 'none',
    line: { style: 'solid', fill: color, width: lineWidth },
    customPaths: [{ width, height, commands }],
  });
}

function addFilledCurve(slide, name, x, y, width, height, commands, fill) {
  return slide.shapes.add({
    geometry: 'custom',
    name,
    position: { left: x, top: y, width, height },
    fill,
    line: { style: 'solid', fill: 'none', width: 0 },
    customPaths: [{ width, height, commands }],
  });
}

function addLogo(slide, name, color, x, y, width, height) {
  return slide.images.add({
    svg: logoSvg(color),
    alt: 'Símbolo vectorial oficial de Narez',
    position: { left: x, top: y, width, height },
  });
}

function addSlideHeader(slide, title, description, index) {
  slide.background.fill = C.canvas;
  addText(slide, 'brand-kicker', 'NAREZ  /  TARJETAS DE CONTACTO', 62, 32, 620, 24, 14, C.steel, { bold: true });
  addText(slide, 'option-index', index + '  /  03', 1080, 34, 138, 22, 14, C.muted, { bold: true, align: 'right' });
  addText(slide, 'option-title', title, 62, 70, 900, 56, 42, C.ink, { bold: true });
  addText(slide, 'option-description', description, 64, 132, 1040, 34, 18, C.muted);
  addRect(slide, 'header-rule', 62, 188, 1156, 1, C.rule);
  addText(slide, 'front-label', 'FRENTE', 70, 548, 510, 22, 13, C.muted, { bold: true });
  addText(slide, 'back-label', 'REVERSO', 690, 548, 510, 22, 13, C.muted, { bold: true });
}

function addContactBack(slide, opts) {
  const { x, y, dark, markColor, textColor, labelColor, compact = false } = opts;
  addLogo(slide, 'narez-symbol-back', markColor, x + 28, y + 23, 54, 32);
  addText(slide, 'narez-wordmark-back', 'NAREZ', x + 98, y + 24, 260, 32, 21, textColor, { bold: true });
  addRect(slide, 'contact-rule', x + 28, y + 66, 464, 2, dark ? C.steel : C.rule);
  const rows = [
    ['WEB', 'narez.pe'],
    ['WHATSAPP', '+51 907 896 723'],
    ['INSTAGRAM', '@narez.pe'],
  ];
  const rowStart = compact ? y + 92 : y + 96;
  const rowGap = compact ? 49 : 50;
  rows.forEach((row, i) => {
    const rowY = rowStart + i * rowGap;
    addText(slide, 'contact-label-' + i, row[0], x + 28, rowY, 115, 18, 12, labelColor, { bold: true });
    addText(slide, 'contact-value-' + i, row[1], x + 150, rowY - 1, 326, 26, 18, textColor, { bold: i === 1 });
  });
  addText(slide, 'tagline-back', 'Soluciones digitales con IA', x + 28, y + 255, 464, 18, 13, dark ? '#B7C2C9' : C.muted);
}

const presentation = Presentation.create({ slideSize: { width: 1280, height: 720 } });

// 01 / Noche
{
  const slide = presentation.slides.add();
  addSlideHeader(slide, 'Noche', 'Contraste sobrio con una cara negra y un reverso claro.', '01');
  const y = 238;
  addRect(slide, 'front-card-night', 70, y, 520, 292, C.ink, { radius: 13, shadow: 'shadow-md' });
  addCurve(slide, 'night-orbit-upper', 70, y, 520, 292, [
    { moveTo: { x: 0, y: 28 } },
    { cubicBezTo: { x1: 92, y1: 14, x2: 196, y2: 19, x: 282, y: 52 } },
    { cubicBezTo: { x1: 372, y1: 86, x2: 448, y2: 139, x: 520, y: 174 } },
  ], '#496578', 1.6);
  addCurve(slide, 'night-orbit-lower', 70, y, 520, 292, [
    { moveTo: { x: 12, y: 264 } },
    { cubicBezTo: { x1: 126, y1: 231, x2: 205, y2: 223, x: 310, y: 237 } },
    { cubicBezTo: { x1: 390, y1: 248, x2: 448, y2: 273, x: 520, y: 283 } },
  ], '#496578', 1.2);
  addRect(slide, 'night-orbit-node', 513, y + 167, 8, 8, C.steel, { radius: 4 });
  addLogo(slide, 'narez-symbol-front-night', C.paper, 118, y + 105, 98, 58);
  addText(slide, 'narez-wordmark-front-night', 'NAREZ', 236, y + 111, 250, 40, 28, C.paper, { bold: true });
  addText(slide, 'tagline-front-night', 'Soluciones digitales con IA', 119, y + 181, 360, 26, 16, '#C9D0D4');

  addRect(slide, 'back-card-night', 690, y, 520, 292, C.paper, { radius: 13, shadow: 'shadow-md' });
  addContactBack(slide, { x: 690, y, dark: false, markColor: C.ink, textColor: C.ink, labelColor: C.steel });
}

// 02 / Papel
{
  const slide = presentation.slides.add();
  addSlideHeader(slide, 'Papel', 'Una cara clara y limpia, con el reverso oscuro para ordenar los datos.', '02');
  const y = 238;
  addRect(slide, 'front-card-paper', 70, y, 520, 292, C.paper, { radius: 13, shadow: 'shadow-md' });
  addCurve(slide, 'paper-orbit-edge', 70, y, 520, 292, [
    { moveTo: { x: 464, y: 0 } },
    { cubicBezTo: { x1: 454, y1: 74, x2: 469, y2: 192, x: 520, y: 260 } },
  ], C.steel, 2);
  addRect(slide, 'paper-orbit-node', 527, y + 112, 8, 8, C.steel, { radius: 4 });
  addLogo(slide, 'narez-symbol-front-paper', C.ink, 276, y + 46, 108, 63);
  addText(slide, 'narez-wordmark-front-paper', 'NAREZ', 160, y + 130, 340, 42, 34, C.ink, { bold: true, align: 'center' });
  addText(slide, 'tagline-front-paper', 'Soluciones digitales con IA', 130, y + 187, 400, 26, 16, C.steel, { align: 'center' });

  addRect(slide, 'back-card-paper', 690, y, 520, 292, C.ink, { radius: 13, shadow: 'shadow-md' });
  addContactBack(slide, { x: 690, y, dark: true, markColor: C.paper, textColor: C.paper, labelColor: '#AFC0CA' });
}

// 03 / Órbita
{
  const slide = presentation.slides.add();
  addSlideHeader(slide, 'Órbita', 'Una curva azul grisácea recorre ambas caras y conecta con el lenguaje del sitio.', '03');
  const y = 238;
  addRect(slide, 'front-card-orbita', 70, y, 520, 292, C.paper, { radius: 13, shadow: 'shadow-md' });
  addFilledCurve(slide, 'orbita-front-dark-field', 70, y, 520, 292, [
    { moveTo: { x: 386, y: 12 } },
    { lineTo: { x: 508, y: 12 } },
    { lineTo: { x: 508, y: 280 } },
    { lineTo: { x: 292, y: 280 } },
    { cubicBezTo: { x1: 350, y1: 236, x2: 394, y2: 128, x: 386, y: 12 } },
    { close: {} },
  ], C.ink);
  addCurve(slide, 'orbita-front-line', 70, y, 520, 292, [
    { moveTo: { x: 316, y: 281 } },
    { cubicBezTo: { x1: 390, y1: 230, x2: 455, y2: 155, x: 515, y: 34 } },
  ], C.steel, 2.1);
  addRect(slide, 'orbita-front-node', 424, y + 186, 9, 9, C.steel, { radius: 4.5 });
  addLogo(slide, 'narez-symbol-front-orbita', C.ink, 110, y + 70, 93, 55);
  addText(slide, 'narez-wordmark-front-orbita', 'NAREZ', 110, y + 139, 255, 36, 27, C.ink, { bold: true });
  addText(slide, 'tagline-front-orbita', 'Soluciones digitales con IA', 110, y + 189, 255, 42, 15, C.steel);

  addRect(slide, 'back-card-orbita', 690, y, 520, 292, C.paper, { radius: 13, shadow: 'shadow-md' });
  addFilledCurve(slide, 'orbita-back-dark-field', 690, y, 520, 292, [
    { moveTo: { x: 430, y: 12 } },
    { lineTo: { x: 508, y: 12 } },
    { lineTo: { x: 508, y: 280 } },
    { lineTo: { x: 393, y: 280 } },
    { cubicBezTo: { x1: 455, y1: 231, x2: 466, y2: 116, x: 430, y: 12 } },
    { close: {} },
  ], C.ink);
  addCurve(slide, 'orbita-back-line', 690, y, 520, 292, [
    { moveTo: { x: 385, y: 286 } },
    { cubicBezTo: { x1: 437, y1: 238, x2: 482, y2: 162, x: 517, y: 32 } },
  ], C.steel, 2.1);
  addLogo(slide, 'narez-symbol-back-orbita', C.ink, 718, y + 21, 50, 30);
  addText(slide, 'narez-wordmark-back-orbita', 'NAREZ', 784, y + 22, 250, 30, 20, C.ink, { bold: true });
  addRect(slide, 'orbita-back-divider', 718, y + 62, 325, 2, C.rule);
  addText(slide, 'orbita-label-web', 'WEB', 718, y + 82, 110, 18, 12, C.steel, { bold: true });
  addText(slide, 'orbita-value-web', 'narez.pe', 718, y + 102, 290, 24, 18, C.ink);
  addText(slide, 'orbita-label-phone', 'WHATSAPP', 718, y + 139, 150, 18, 12, C.steel, { bold: true });
  addText(slide, 'orbita-value-phone', '+51 907 896 723', 718, y + 159, 300, 24, 18, C.ink, { bold: true });
  addText(slide, 'orbita-label-instagram', 'INSTAGRAM', 718, y + 196, 150, 18, 12, C.steel, { bold: true });
  addText(slide, 'orbita-value-instagram', '@narez.pe', 718, y + 216, 290, 24, 18, C.ink);
}

async function writeBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

for (let i = 0; i < presentation.slides.items.length; i += 1) {
  const preview = await presentation.export({ slide: presentation.slides.items[i], format: 'png', scale: 1 });
  await writeBlob(previewPaths[i], preview);
}
const montage = await presentation.export({ format: 'webp', montage: true, scale: 0.65 });
await writeBlob(path.join(buildDir, 'overview.webp'), montage);
await (await PresentationFile.exportPptx(presentation)).save(draftPath);

process.env.RUNTIME_NODE_MODULES = 'C:/Users/diego/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
const { finalizePresentation } = await import(pathToFileURL(
  path.join(skillDir, 'container_tools', 'artifact_tool_utils.mjs'),
).href);
const result = await finalizePresentation({
  explicitTotalSlideCount: 3,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
  workspaceDir,
  candidatePath: draftPath,
  finalPath,
  pythonExecutable: 'C:/Users/diego/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe',
  integrityValidatorPath: path.join(skillDir, 'container_tools', 'inspect_presentation_package_integrity.py'),
  layoutValidatorPath: path.join(skillDir, 'container_tools', 'inspect_presentation_layout_geometry.py'),
  layoutArgs: ['--expected-slide-size-emu', '12192000,6858000', '--validate-bullet-geometry', '--validate-heading-fit'],
  fontPolicy: { basis: 'design', families: [fontFamily] },
  verifyArtifactToolImport: true,
  receiptPath: path.join(buildDir, 'tarjetas-narez-editable.validation.json'),
});
console.log(JSON.stringify({ finalPath, slideCount: presentation.slides.items.length, result }));
